"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

interface ProjectLink {
  href: string;
  label: string;
}

interface ProjectLinksMenuProps {
  links: ProjectLink[];
}

const ProjectLinksMenu = ({ links }: ProjectLinksMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutsideClick = (event: globalThis.PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [isOpen]);

  const focusItem = (index: number) => {
    requestAnimationFrame(() => itemRefs.current[index]?.focus());
  };

  const handleButtonKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setIsOpen(true);
      focusItem(event.key === "ArrowDown" ? 0 : links.length - 1);
    }
  };

  const handleMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = itemRefs.current.indexOf(
      document.activeElement as HTMLAnchorElement
    );

    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      buttonRef.current?.focus();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      focusItem((currentIndex + 1) % links.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      focusItem((currentIndex - 1 + links.length) % links.length);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusItem(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusItem(links.length - 1);
    }
  };

  return (
    <div
      ref={menuRef}
      className="relative z-40 inline-block"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setIsOpen(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setIsOpen(false);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="project-links-menu"
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={handleButtonKeyDown}
        className="portfolio-project-links-trigger inline-flex min-h-11 touch-manipulation items-center gap-2 rounded-[8px] border border-[var(--project-line)] bg-[var(--project-canvas)] px-3.5 py-2 font-nm-book text-sm text-[var(--project-control-ink)] transition-colors duration-300 hover:border-[var(--project-line-strong)] hover:bg-[var(--project-surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--project-focus)]"
      >
        Select Links
        <ChevronDownIcon
          aria-hidden="true"
          className={`-mr-1 size-5 text-[var(--project-chevron)] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 top-full z-50 w-max min-w-[190px] max-w-[calc(100vw-48px)] pt-2 md:left-auto md:right-0 md:min-w-56"
        >
          <div
            id="project-links-menu"
            role="menu"
            aria-label="Project links"
            onKeyDown={handleMenuKeyDown}
            className="portfolio-project-links-panel origin-top-left rounded-[12px] border border-[var(--project-line-soft)] bg-[var(--project-canvas)] p-1.5 shadow-[0_18px_45px_var(--project-menu-shadow)] outline-none md:origin-top-right"
          >
            {links.map((item, index) => (
              <a
                key={item.href}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                role="menuitem"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="portfolio-project-links-item flex min-h-11 touch-manipulation items-center justify-between gap-4 rounded-[8px] px-3 py-2.5 font-nm-book text-sm text-[var(--project-value)] transition-colors hover:bg-[var(--project-surface-hover)] focus:bg-[var(--project-surface-hover)] focus:outline-none"
              >
                <span>{item.label}</span>
                <ArrowUpRightIcon
                  className="h-4 w-4 shrink-0 text-[var(--project-muted)]"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectLinksMenu;
