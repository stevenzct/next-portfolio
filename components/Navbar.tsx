"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  DocumentCheckIcon,
  EnvelopeIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Button from "./Button";

// Define the navigation array
const navigation = [
  { name: "Home", href: "/#home", sectionId: "home" },
  { name: "Projects", href: "/#projects", sectionId: "projects" },
  { name: "Work", href: "/#work", sectionId: "work" },
  { name: "About", href: "/#about", sectionId: "about" },
];

const aboutDropdown = [
  {
    name: "About Me",
    href: "/#about",
    sectionId: "about",
    Icon: UserCircleIcon,
  },
  {
    name: "Certifications",
    href: "/#certifications",
    sectionId: "certifications",
    Icon: DocumentCheckIcon,
  },
  {
    name: "Contact",
    href: "/#contact",
    sectionId: "contact",
    Icon: EnvelopeIcon,
  },
];

const mobileAboutDropdown = aboutDropdown.filter(
  (item) => item.sectionId !== "contact"
);

// Custom hook to track active section using IntersectionObserver
const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Determine active section based on pathname
    const getActiveSectionFromPath = (path: string): string => {
      if (path === "/" || path === "") return "home";
      if (path.includes("/projects")) return "projects";
      if (path.includes("/work")) return "work";
      if (path.includes("/about")) return "about";
      if (path.includes("/certifications")) return "certifications";
      if (path.includes("/contact")) return "contact";
      if (path.includes("/resources")) return "home"; // or appropriate section
      return "home";
    };

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sectionIds = [
      "home",
      "projects",
      "work",
      "about",
      "certifications",
      "contact",
    ];
    let observedCount = 0;

    // Observe all sections that exist on the page
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observedCount++;
      }
    });

    // If no sections exist on this page, set active section based on pathname
    if (observedCount === 0) {
      const pathBasedSection = getActiveSectionFromPath(pathname);
      setActiveSection(pathBasedSection);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [pathname]); // Re-run when pathname changes

  return activeSection;
};

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const activeSection = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 py-4 transition-colors duration-300 ${
        scrolled
          ? "bg-[rgba(255,255,255,0.76)] backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-wrapper w-full">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <nav
            aria-label="Global"
            className="flex items-center justify-between"
          >
            <div className="flex lg:flex-1">
              <Link
                href="/#home"
                className="-m-1.5 p-1.5 font-nm-bold font-bold text-black"
              >
                STEVEN
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(true);
                  setMobileAboutOpen(false);
                }}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6 text-black" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-1 bg-white py-[8px] px-[14px] rounded-lg items-center">
              {navigation.map((item) => {
                const isAboutItem = item.sectionId === "about";
                const isAboutGroupActive = aboutDropdown.some(
                  (dropdownItem) => dropdownItem.sectionId === activeSection
                );

                if (isAboutItem) {
                  return (
                    <div key={item.name} className="relative group">
                      <Link
                        href={item.href}
                        className={`inline-flex items-center gap-1.5 text-sm/6 font-nm-medium font-medium transition-colors duration-300 ${
                          isAboutGroupActive
                            ? "text-white bg-black px-[14px] py-1 rounded-lg"
                            : "text-gray-900 hover:bg-[#F8F8F8] px-[14px] py-1 rounded-lg"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:rotate-180" />
                      </Link>
                      <div className="pointer-events-none absolute left-1/2 top-full z-50 w-44 -translate-x-1/2 translate-y-1 scale-[0.98] pt-2 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                        <div className="rounded-lg border border-[#D6D6D6] bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                          {aboutDropdown.map((dropdownItem) => {
                            const DropdownIcon = dropdownItem.Icon;

                            return (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm/6 font-nm-medium font-medium text-gray-900 transition-colors duration-300 hover:bg-[#F8F8F8]"
                              >
                                <DropdownIcon className="h-4 w-4 shrink-0" />
                                {dropdownItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm/6 font-nm-medium font-medium transition-colors duration-300 ${
                      item.sectionId === activeSection
                        ? "text-white bg-black px-[14px] py-1 rounded-lg"
                        : "text-gray-900 hover:bg-[#F8F8F8] px-[14px] py-1 rounded-lg"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 h-[25rem] md:h-full rounded-b-md w-full overflow-y-auto bg-[rgba(255,255,255,0.76)] backdrop-blur-sm px-6 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link
                  href="#"
                  className="-m-1.5 p-1.5 font-nm-bold font-bold text-black"
                >
                  STEVEN
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div>
                  <div className="py-2">
                    <h3 className="font-nm-book text-base md:text-2xl mb-2">
                      Navigate around
                    </h3>
                    {navigation.map((item) => {
                      const isAboutItem = item.sectionId === "about";
                      const isAboutGroupActive = aboutDropdown.some(
                        (dropdownItem) =>
                          dropdownItem.sectionId === activeSection
                      );

                      if (isAboutItem) {
                        return (
                          <div key={item.name}>
                            <div className="flex items-center justify-between gap-3">
                              <Link
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block text-[32px] font-nm-medium font-medium ${
                                  isAboutGroupActive
                                    ? "text-black"
                                    : "text-gray-600"
                                }`}
                              >
                                {item.name}
                              </Link>
                              <button
                                type="button"
                                aria-label="Toggle about navigation"
                                aria-expanded={mobileAboutOpen}
                                onClick={() =>
                                  setMobileAboutOpen((isOpen) => !isOpen)
                                }
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-black transition-colors duration-300 hover:bg-[#F8F8F8]"
                              >
                                <ChevronDownIcon
                                  className={`h-5 w-5 transition-transform duration-300 ease-out ${
                                    mobileAboutOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                            </div>
                            <div
                              className={`grid overflow-hidden pl-4 transition-all duration-300 ease-out ${
                                mobileAboutOpen
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }`}
                            >
                              <div className="min-h-0">
                                {mobileAboutDropdown.map((dropdownItem) => {
                                  const DropdownIcon = dropdownItem.Icon;

                                  return (
                                    <Link
                                      key={dropdownItem.name}
                                      href={dropdownItem.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="flex items-center gap-2 rounded-md px-3 py-1.5 text-[24px] font-nm-medium font-medium text-gray-600 transition-colors duration-300 hover:bg-[#F8F8F8] hover:text-black"
                                    >
                                      <DropdownIcon className="h-5 w-5 shrink-0" />
                                      {dropdownItem.name}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block text-[32px] font-nm-medium font-medium ${
                            item.sectionId === activeSection
                              ? "text-black"
                              : "text-gray-600"
                          }`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                    <div className="cta flex justify-start mt-4">
                      <Button
                        type="button"
                        title="Send a message"
                        onClick={() =>
                          (window.location.href =
                            "mailto:stevencabugos138@gmail.com")
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

