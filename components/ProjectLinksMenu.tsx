"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
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
        className="inline-flex items-center gap-2 rounded-[8px] border-1 border-[#D6D6D6] px-4 py-2 text-sm font-nm-book text-[#222222] transition-colors duration-300 hover:bg-[#F8F8F8]"
      >
        Select Links
        <ChevronDownIcon
          aria-hidden="true"
          className={`-mr-1 size-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          id="project-links-menu"
          role="menu"
          aria-label="Project links"
          onKeyDown={handleMenuKeyDown}
          className="absolute right-0 z-50 mt-2 w-auto origin-top-right rounded-md bg-white py-1 shadow-lg outline-1 outline-black/5 md:w-56"
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
              className="block px-4 py-2 text-sm font-nm-book hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectLinksMenu;
