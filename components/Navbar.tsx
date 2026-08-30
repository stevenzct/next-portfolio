"use client";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  DocumentCheckIcon,
  EnvelopeIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { siteConfig } from "../constants/site";
import { useMobileMenuAnimation } from "../hooks/useMobileMenuAnimation";

// Define the navigation array
const navigation = [
  { name: "Home", href: "/#home", sectionId: "home" },
  { name: "Projects", href: "/#projects", sectionId: "projects" },
  { name: "Reviews", href: "/#reviews", sectionId: "reviews" },
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

const mobileAboutDropdown = aboutDropdown;

type NavTheme = "dark" | "light";

const DEFAULT_HEADER_HEIGHT = 80;

const getRouteTheme = (path: string): NavTheme =>
  path === "/" || path.startsWith("/resources") ? "dark" : "light";

const getActiveSectionFromPath = (path: string): string => {
  if (path === "/" || path === "") return "home";
  if (path.includes("/projects")) return "projects";
  if (path.includes("/reviews")) return "reviews";
  if (path.includes("/work")) return "work";
  if (path.includes("/certifications")) return "certifications";
  if (path.includes("/contact")) return "contact";
  return "";
};

// Custom hook to track active section using IntersectionObserver
const useActiveSection = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(() =>
    getActiveSectionFromPath(pathname)
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    // Standalone routes use pathname state so shared page sections, such as
    // the footer contact section, cannot override the active navigation item.
    if (pathname !== "/" && pathname !== "") {
      setActiveSection(getActiveSectionFromPath(pathname));
      return;
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
      "reviews",
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

const useNavTheme = () => {
  const pathname = usePathname();
  const fallbackTheme = getRouteTheme(pathname);
  const [theme, setTheme] = useState<NavTheme>(fallbackTheme);

  useLayoutEffect(() => {
    let frameId: number | null = null;
    const header = document.querySelector<HTMLElement>("[data-site-header]");

    const syncTheme = () => {
      frameId = null;

      const headerBottom =
        header?.getBoundingClientRect().bottom ?? DEFAULT_HEADER_HEIGHT;
      const probeY = Math.max(
        0,
        Math.min(headerBottom + 0.5, window.innerHeight - 0.5)
      );
      const themedSurfaces = Array.from(
        document.querySelectorAll<HTMLElement>("[data-nav-theme]")
      );
      const surface = themedSurfaces.reverse().find((element) => {
        const bounds = element.getBoundingClientRect();
        return bounds.top <= probeY && bounds.bottom > probeY;
      });
      const nextTheme = surface?.dataset.navTheme;

      setTheme(
        nextTheme === "dark" || nextTheme === "light"
          ? nextTheme
          : fallbackTheme
      );
    };

    const scheduleSync = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(syncTheme);
      }
    };

    syncTheme();
    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", scheduleSync);
    window.addEventListener("hashchange", scheduleSync);

    const resizeObserver = new ResizeObserver(scheduleSync);
    resizeObserver.observe(document.body);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", scheduleSync);
      window.removeEventListener("hashchange", scheduleSync);
    };
  }, [fallbackTheme]);

  return theme;
};

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const activeSection = useActiveSection();
  const navTheme = useNavTheme();
  const isDarkSurface = navTheme === "dark";
  const [scrolled, setScrolled] = useState(false);
  const {
    backdropRef: mobileMenuBackdropRef,
    closeMenu: closeMobileMenu,
    setPanelRef: setMobileMenuPanelRef,
  } = useMobileMenuAnimation(setMobileMenuOpen);

  useLayoutEffect(() => {
    const syncHeaderSurface = () => {
      setScrolled(window.scrollY > 0);
    };

    syncHeaderSurface();
    window.addEventListener("scroll", syncHeaderSurface, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncHeaderSurface);
    };
  }, []);

  useLayoutEffect(() => {
    const desktopNavigation = window.matchMedia(
      "(min-width: 1280px) and (hover: hover) and (pointer: fine)"
    );
    const closeDrawerAtDesktop = () => {
      if (!desktopNavigation.matches) return;

      setMobileMenuOpen(false);
      setMobileAboutOpen(false);
    };

    closeDrawerAtDesktop();
    desktopNavigation.addEventListener("change", closeDrawerAtDesktop);
    return () => {
      desktopNavigation.removeEventListener("change", closeDrawerAtDesktop);
    };
  }, []);

  const headerSurfaceClasses = isDarkSurface
    ? scrolled
      ? "bg-black/76 backdrop-blur-sm"
      : "bg-transparent"
    : scrolled
      ? "bg-white/76 backdrop-blur-sm"
      : "bg-transparent";
  const themeFocusClasses = isDarkSurface
    ? "focus-visible:ring-white focus-visible:ring-offset-black"
    : "focus-visible:ring-black focus-visible:ring-offset-white";
  const navSurfaceClasses = isDarkSurface
    ? "divide-white/[0.10] bg-[#121212]/92"
    : "divide-[#E5E7EB] bg-white";
  const activeNavItemClasses = isDarkSurface
    ? "bg-[#323234] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]"
    : "bg-black text-white shadow-[0_4px_12px_rgba(0,0,0,0.12)]";
  const inactiveNavItemClasses = isDarkSurface
    ? "text-white/68 hover:bg-white/[0.08] hover:text-white"
    : "text-[#34343A] hover:bg-[#F2F2F7] hover:text-black";
  const dropdownSurfaceClasses = isDarkSurface
    ? "border-white/10 bg-[#121212] shadow-[0_18px_48px_rgba(0,0,0,0.42)]"
    : "border-black/10 bg-white shadow-[0_18px_48px_rgba(0,0,0,0.12)]";
  const dropdownItemClasses = isDarkSurface
    ? "text-white/72 hover:bg-white/10 hover:text-white"
    : "text-black/68 hover:bg-black/[0.05] hover:text-black";
  const mobileDrawerSurfaceClasses = isDarkSurface
    ? "bg-black text-white"
    : "bg-white text-black";
  const mobileDrawerTextClasses = isDarkSurface ? "text-white" : "text-black";
  const mobileDrawerMutedClasses = isDarkSurface
    ? "text-white/60"
    : "text-black/60";
  const mobileDrawerBorderClasses = isDarkSurface
    ? "border-white/20"
    : "border-black/15";
  const mobileDrawerFocusClasses = isDarkSurface
    ? "focus-visible:ring-white"
    : "focus-visible:ring-black";
  const mobileDrawerHoverClasses = isDarkSurface
    ? "hover:bg-white/10"
    : "hover:bg-black/[0.05]";
  const isAboutSectionActive = aboutDropdown.some(
    (item) => item.sectionId === activeSection
  );

  return (
    <header
      data-site-header
      data-nav-surface={navTheme}
      data-scrolled={scrolled ? "true" : "false"}
      className={`fixed inset-x-0 top-0 z-50 py-4 transition-colors duration-300 motion-reduce:transition-none ${
        isDarkSurface ? "text-white" : "text-black"
      } ${headerSurfaceClasses}`}
    >
      <div className="container-wrapper w-full">
        <div
          data-ultrawide-container
          className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]"
        >
          <nav
            aria-label="Global"
            className="relative flex items-center justify-between"
          >
            <div className="nav-brand-shell">
              <Link
                href="/#home"
                aria-label="Steven — home"
                className={`portfolio-nav-brand -m-1.5 rounded-md p-1.5 font-nm-bold font-bold text-current transition-opacity duration-200 hover:opacity-[0.72] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 motion-reduce:transition-none ${themeFocusClasses}`}
              >
                STEVEN
              </Link>
            </div>
            <div className="tablet-nav-toggle ml-auto items-center gap-1">
              <button
                type="button"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-panel"
                onClick={() => {
                  setMobileMenuOpen(true);
                  setMobileAboutOpen(isAboutSectionActive);
                }}
                className={`inline-flex size-11 items-center justify-center rounded-md text-current transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 motion-reduce:transition-none ${
                  isDarkSurface ? "hover:bg-white/10" : "hover:bg-black/[0.05]"
                } ${themeFocusClasses}`}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="portfolio-nav-menu-icon size-6 text-current"
                />
              </button>
            </div>
            <div
              className={`desktop-navigation ml-auto h-12 items-center divide-x rounded-lg px-[14px] ${navSurfaceClasses}`}
            >
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
                        data-desktop-nav-item
                        aria-current={
                          item.sectionId === activeSection
                            ? "location"
                            : undefined
                        }
                        data-active={isAboutGroupActive ? "true" : "false"}
                        className={`inline-flex items-center gap-1.5 rounded-lg px-[14px] py-1 font-nm-medium text-sm/6 font-medium transition-[background-color,color,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.97] motion-reduce:transition-none ${themeFocusClasses} ${
                          isAboutGroupActive
                            ? activeNavItemClasses
                            : inactiveNavItemClasses
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:rotate-180 group-focus-within:rotate-180 motion-reduce:transition-none" />
                      </Link>
                      <div
                        data-desktop-nav-dropdown
                        className="pointer-events-none absolute left-1/2 top-full z-50 w-44 -translate-x-1/2 translate-y-1 scale-[0.98] pt-2 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100 motion-reduce:transition-none"
                      >
                        <div
                          data-desktop-nav-dropdown-panel
                          className={`portfolio-about-menu rounded-lg border p-2 ${dropdownSurfaceClasses}`}
                        >
                          {aboutDropdown.map((dropdownItem) => {
                            const DropdownIcon = dropdownItem.Icon;

                            return (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                data-desktop-nav-dropdown-item
                                aria-current={
                                  dropdownItem.sectionId === activeSection
                                    ? "location"
                                    : undefined
                                }
                                className={`portfolio-about-menu-item flex items-center gap-2 rounded-md px-3 py-2 text-sm/6 font-nm-medium font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 motion-reduce:transition-none ${dropdownItemClasses} ${themeFocusClasses}`}
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
                    data-desktop-nav-item
                    aria-current={
                      item.sectionId === activeSection ? "location" : undefined
                    }
                    data-active={
                      item.sectionId === activeSection ? "true" : "false"
                    }
                    className={`rounded-lg px-[14px] py-1 font-nm-medium text-sm/6 font-medium transition-[background-color,color,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.97] motion-reduce:transition-none ${themeFocusClasses} ${
                      item.sectionId === activeSection
                        ? activeNavItemClasses
                        : inactiveNavItemClasses
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
            onClose={closeMobileMenu}
            className="mobile-navigation-dialog"
          >
            <div
              ref={mobileMenuBackdropRef}
              className="fixed inset-0 z-40 bg-transparent"
            />
            <DialogPanel
              id="mobile-navigation-panel"
              ref={setMobileMenuPanelRef}
              className={`portfolio-mobile-menu fixed inset-0 z-50 flex h-[100dvh] w-full flex-col overflow-y-auto px-6 py-7 transition-colors duration-300 motion-reduce:transition-none sm:px-10 sm:py-8 ${mobileDrawerSurfaceClasses}`}
            >
              <DialogTitle className="sr-only">Main navigation</DialogTitle>
              <div
                data-mobile-nav-item
                className="flex items-center justify-between"
              >
                <Link
                  href="/#home"
                  onClick={closeMobileMenu}
                  aria-label="Steven — home"
                  className={`-m-1.5 rounded-md p-1.5 font-nm-bold font-bold focus-visible:outline-none focus-visible:ring-2 ${mobileDrawerTextClasses} ${mobileDrawerFocusClasses}`}
                >
                  STEVEN
                </Link>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    autoFocus
                    onClick={closeMobileMenu}
                    className={`inline-flex size-11 items-center justify-center rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 motion-reduce:transition-none ${mobileDrawerTextClasses} ${mobileDrawerHoverClasses} ${mobileDrawerFocusClasses}`}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className={`size-6 ${mobileDrawerTextClasses}`}
                    />
                  </button>
                </div>
              </div>
              <div className="mt-24 flex flex-1 flex-col sm:mt-28">
                <div className="flex-1">
                  <div>
                    <h3
                      data-mobile-nav-item
                      className={`portfolio-mobile-menu-label mb-5 font-nm-book text-lg leading-none tracking-normal ${mobileDrawerMutedClasses}`}
                    >
                      Menu
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {navigation.map((item) => {
                        const isAboutItem = item.sectionId === "about";

                        if (isAboutItem) {
                          return (
                            <div key={item.name}>
                              <button
                                type="button"
                                aria-label="Toggle about navigation"
                                aria-expanded={mobileAboutOpen}
                                aria-controls="mobile-about-navigation"
                                data-mobile-nav-item
                                onClick={() =>
                                  setMobileAboutOpen((isOpen) => !isOpen)
                                }
                                className={`inline-flex min-h-11 items-center gap-3 font-nm-book text-[36px] font-normal leading-[0.95] tracking-normal transition-opacity duration-300 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 motion-reduce:transition-none ${mobileDrawerTextClasses} ${mobileDrawerFocusClasses}`}
                              >
                                <span>{item.name}</span>
                                <ChevronDownIcon
                                  className={`mt-2 h-7 w-7 shrink-0 stroke-[1.5] transition-transform duration-300 ease-out motion-reduce:transition-none sm:h-9 sm:w-9 ${
                                    mobileAboutOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                              <div
                                id="mobile-about-navigation"
                                aria-hidden={!mobileAboutOpen}
                                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                                  mobileAboutOpen
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                } motion-reduce:transition-none`}
                              >
                                <div className="min-h-0 pt-4">
                                  {mobileAboutDropdown.map((dropdownItem) => {
                                    const DropdownIcon = dropdownItem.Icon;

                                    return (
                                      <Link
                                        key={dropdownItem.name}
                                        href={dropdownItem.href}
                                        onClick={closeMobileMenu}
                                        aria-current={
                                          dropdownItem.sectionId ===
                                          activeSection
                                            ? "location"
                                            : undefined
                                        }
                                        tabIndex={mobileAboutOpen ? 0 : -1}
                                        className={`flex w-fit items-center gap-2 border-b py-2 font-nm-book text-[28px] leading-tight tracking-normal transition-opacity duration-300 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 motion-reduce:transition-none sm:text-[34px] ${mobileDrawerTextClasses} ${mobileDrawerBorderClasses} ${mobileDrawerFocusClasses}`}
                                      >
                                        <DropdownIcon className="h-5 w-5 shrink-0 stroke-[1.6]" />
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
                            aria-current={
                              item.sectionId === activeSection
                                ? "location"
                                : undefined
                            }
                            data-mobile-nav-item
                            onClick={closeMobileMenu}
                            className={`block w-fit font-nm-book text-[36px] font-normal leading-[0.95] tracking-normal transition-opacity duration-300 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 motion-reduce:transition-none ${mobileDrawerTextClasses} ${mobileDrawerFocusClasses}`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div
                  data-mobile-nav-item
                  className="grid gap-7 pb-6 pt-12 sm:grid-cols-2 sm:gap-12 sm:pb-8"
                >
                  <div>
                    <p className={`mb-4 font-nm-book text-lg leading-none tracking-normal ${mobileDrawerMutedClasses}`}>
                      Get in touch
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className={`inline-flex border-b pb-2 font-nm-book text-xl leading-none tracking-normal transition-opacity duration-300 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 motion-reduce:transition-none ${mobileDrawerTextClasses} ${mobileDrawerBorderClasses} ${mobileDrawerFocusClasses}`}
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <div>
                    <p className={`mb-4 font-nm-book text-lg leading-none tracking-normal ${mobileDrawerMutedClasses}`}>
                      Start a project
                    </p>
                    <Link
                      href="/book-a-meeting"
                      onClick={closeMobileMenu}
                      className={`inline-flex border-b pb-2 font-nm-book text-xl leading-none tracking-normal transition-opacity duration-300 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 motion-reduce:transition-none ${mobileDrawerTextClasses} ${mobileDrawerBorderClasses} ${mobileDrawerFocusClasses}`}
                    >
                      Book a meeting
                    </Link>
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
