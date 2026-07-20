"use client";
import {
  useCallback,
  useState,
  useEffect,
  useRef,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";
import gsap from "gsap";
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
import { prefersReducedMotion } from "../utils/motion";

type ColorTheme = "classic" | "color";

const COLOR_THEME_STORAGE_KEY = "portfolio-color-theme";

type ColorThemeSwitchElements = {
  track: HTMLElement;
  fill: HTMLElement;
  thumb: HTMLElement;
  halo: HTMLElement;
};

const clearColorThemeSwitchElements = ({
  track,
  fill,
  thumb,
  halo,
}: ColorThemeSwitchElements) => {
  gsap.set(track, { clearProps: "filter,transform,willChange" });
  gsap.set(fill, { clearProps: "opacity" });
  gsap.set(thumb, { clearProps: "backgroundColor,transform" });
  gsap.set(halo, { clearProps: "opacity,transform,visibility" });
};

const normalizeColorTheme = (value: string | null): ColorTheme =>
  value === "color" ? "color" : "classic";

type ColorThemeToggleProps = {
  theme: ColorTheme;
  onToggle: (event: ReactMouseEvent<HTMLButtonElement>) => void;
  compact?: boolean;
};

const ColorThemeToggle = ({
  theme,
  onToggle,
  compact = false,
}: ColorThemeToggleProps) => {
  const colorThemeEnabled = theme === "color";
  const label = colorThemeEnabled
    ? "Switch to classic theme"
    : "Switch to color theme";

  return (
    <button
      type="button"
      role="switch"
      aria-label={label}
      aria-checked={colorThemeEnabled}
      data-color-theme-control={theme}
      onClick={onToggle}
      className={`portfolio-color-theme-toggle portfolio-color-theme-toggle--${theme} group relative inline-flex h-11 shrink-0 items-center justify-center rounded-full outline-none transition-opacity duration-300 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ${
        compact ? "w-14" : "w-16"
      }`}
    >
      <span
        aria-hidden="true"
        className="portfolio-color-theme-toggle__track relative isolate h-7 w-12 overflow-hidden rounded-full border"
      >
        <span className="portfolio-color-theme-toggle__fill pointer-events-none absolute inset-0 rounded-[inherit]" />
        <span
          className="portfolio-color-theme-toggle__thumb absolute left-[3px] top-[3px] z-10 size-5 rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.28)]"
        >
          <span className="portfolio-color-theme-toggle__halo pointer-events-none absolute -inset-1 rounded-full" />
        </span>
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-full z-[80] mt-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg border border-white/15 bg-[#052F40] px-3 py-2 font-nm-medium text-xs font-medium leading-[1.25] tracking-[0.01em] text-white opacity-0 shadow-[0_10px_28px_rgba(3,32,43,0.28)] transition-[opacity,transform] duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
      >
        <span className="absolute left-1/2 top-[-4px] size-2 -translate-x-1/2 rotate-45 border-l border-t border-white/15 bg-[#052F40]" />
        {label}
      </span>
    </button>
  );
};

// Define the navigation array
const navigation = [
  { name: "Home", href: "/#home", sectionId: "home" },
  { name: "Projects", href: "/projects", sectionId: "projects" },
  { name: "Work", href: "/#work", sectionId: "work" },
  { name: "Pricing", href: "/#pricing", sectionId: "pricing" },
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

const getActiveSectionFromPath = (path: string): string => {
  if (path === "/" || path === "") return "home";
  if (path.includes("/book-a-meeting")) return "pricing";
  if (path.includes("/projects")) return "projects";
  if (path.includes("/work")) return "work";
  if (path.includes("/about")) return "about";
  if (path.includes("/certifications")) return "certifications";
  if (path.includes("/pricing")) return "pricing";
  if (path.includes("/contact")) return "contact";
  return "home";
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
      "work",
      "about",
      "certifications",
      "pricing",
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
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [colorTheme, setColorTheme] = useState<ColorTheme>("classic");
  const colorThemeSwitchTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const colorThemeSwitchElementsRef = useRef<ColorThemeSwitchElements | null>(
    null
  );
  const activeSection = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const {
    backdropRef: mobileMenuBackdropRef,
    closeMenu: closeMobileMenu,
    setPanelRef: setMobileMenuPanelRef,
  } = useMobileMenuAnimation(setMobileMenuOpen);

  const clearColorThemeSwitchAnimation = useCallback(() => {
    colorThemeSwitchTimelineRef.current?.kill();
    colorThemeSwitchTimelineRef.current = null;

    if (colorThemeSwitchElementsRef.current) {
      clearColorThemeSwitchElements(colorThemeSwitchElementsRef.current);
      colorThemeSwitchElementsRef.current = null;
    }
  }, []);

  useEffect(() => {
    const initialTheme = normalizeColorTheme(
      document.documentElement.dataset.colorTheme ?? null
    );
    setColorTheme(initialTheme);

    const syncColorTheme = (event: StorageEvent) => {
      if (event.key !== COLOR_THEME_STORAGE_KEY && event.key !== null) return;

      clearColorThemeSwitchAnimation();
      const nextTheme = normalizeColorTheme(event.newValue);
      document.documentElement.dataset.colorTheme = nextTheme;
      setColorTheme(nextTheme);
    };

    window.addEventListener("storage", syncColorTheme);
    return () => {
      window.removeEventListener("storage", syncColorTheme);
      clearColorThemeSwitchAnimation();
    };
  }, [clearColorThemeSwitchAnimation]);

  const toggleColorTheme = (event: ReactMouseEvent<HTMLButtonElement>) => {
    const currentTheme = normalizeColorTheme(
      document.documentElement.dataset.colorTheme ?? null
    );
    const nextTheme: ColorTheme =
      currentTheme === "classic" ? "color" : "classic";

    const commitColorTheme = () => {
      setColorTheme(nextTheme);
      document.documentElement.dataset.colorTheme = nextTheme;

      try {
        window.localStorage.setItem(COLOR_THEME_STORAGE_KEY, nextTheme);
      } catch {
        // The in-page theme still changes when storage is unavailable.
      }
    };

    const control = event.currentTarget;
    const track = control.querySelector<HTMLElement>(
      ".portfolio-color-theme-toggle__track"
    );
    const fill = control.querySelector<HTMLElement>(
      ".portfolio-color-theme-toggle__fill"
    );
    const thumb = control.querySelector<HTMLElement>(
      ".portfolio-color-theme-toggle__thumb"
    );
    const halo = control.querySelector<HTMLElement>(
      ".portfolio-color-theme-toggle__halo"
    );

    if (!track || !fill || !thumb || !halo) {
      clearColorThemeSwitchAnimation();
      commitColorTheme();
      return;
    }

    const elements = { track, fill, thumb, halo };
    const currentFillOpacity = Number.parseFloat(
      window.getComputedStyle(fill).opacity
    );
    const thumbStyles = window.getComputedStyle(thumb);
    const thumbTransform = thumbStyles.transform;
    const currentThumbX =
      thumbTransform === "none"
        ? 0
        : new DOMMatrixReadOnly(thumbTransform).m41;
    const currentThumbColor = thumbStyles.backgroundColor;
    const previousElements = colorThemeSwitchElementsRef.current;

    colorThemeSwitchTimelineRef.current?.kill();
    colorThemeSwitchTimelineRef.current = null;

    if (previousElements && previousElements.track !== track) {
      clearColorThemeSwitchElements(previousElements);
    }

    commitColorTheme();

    if (prefersReducedMotion()) {
      clearColorThemeSwitchElements(elements);
      colorThemeSwitchElementsRef.current = null;
      return;
    }

    colorThemeSwitchElementsRef.current = elements;

    gsap.set(fill, { opacity: currentFillOpacity });
    gsap.set(thumb, {
      backgroundColor: currentThumbColor,
      x: currentThumbX,
    });
    gsap.set(track, { willChange: "filter, transform" });

    const timeline = gsap.timeline({
      defaults: { overwrite: "auto" },
      onComplete: () => {
        clearColorThemeSwitchElements(elements);

        if (colorThemeSwitchElementsRef.current === elements) {
          colorThemeSwitchElementsRef.current = null;
          colorThemeSwitchTimelineRef.current = null;
        }
      },
    });

    timeline
      .to(
        fill,
        {
          opacity: nextTheme === "color" ? 1 : 0,
          duration: 0.42,
          ease: "power3.out",
        },
        0
      )
      .to(
        thumb,
        {
          backgroundColor: nextTheme === "color" ? "#d6ff62" : "#111111",
          x: nextTheme === "color" ? 20 : 0,
          duration: 0.5,
          ease: "back.out(1.55)",
        },
        0
      )
      .fromTo(
        track,
        { filter: "saturate(0.9)", scaleX: 0.965, scaleY: 0.94 },
        {
          filter: "saturate(1)",
          scaleX: 1,
          scaleY: 1,
          duration: 0.52,
          ease: "elastic.out(1, 0.65)",
        },
        0
      )
      .fromTo(
        halo,
        { autoAlpha: 0.72, scale: 0.7 },
        {
          autoAlpha: 0,
          scale: 1.55,
          duration: 0.52,
          ease: "power2.out",
        },
        0.08
      );

    colorThemeSwitchTimelineRef.current = timeline;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
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

  return (
    <header
        data-scrolled={scrolled ? "true" : "false"}
        data-home-route={pathname === "/" ? "true" : "false"}
        className={`fixed inset-x-0 top-0 z-50 py-4 transition-colors duration-300 ${
          scrolled
            ? "bg-[rgba(255,255,255,0.76)] backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-wrapper w-full">
          <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <nav
            aria-label="Global"
            className="flex items-center justify-between"
          >
            <div className="nav-brand-shell">
              <Link
                href="/#home"
                className="portfolio-nav-brand -m-1.5 p-1.5 font-nm-bold font-bold text-black"
              >
                STEVEN
              </Link>
            </div>
            <div className="tablet-nav-toggle items-center gap-1">
              <ColorThemeToggle
                theme={colorTheme}
                onToggle={toggleColorTheme}
                compact
              />
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(true);
                  setMobileAboutOpen(false);
                }}
                className="inline-flex size-11 items-center justify-center rounded-md text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="portfolio-nav-menu-icon size-6 text-black"
                />
              </button>
            </div>
            <div className="desktop-navigation h-12 items-center divide-x divide-[#E5E7EB] rounded-lg bg-white px-[14px]">
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
                        data-active={isAboutGroupActive ? "true" : "false"}
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
                        <div className="portfolio-about-menu rounded-lg border border-[#D6D6D6] bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                          {aboutDropdown.map((dropdownItem) => {
                            const DropdownIcon = dropdownItem.Icon;

                            return (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="portfolio-about-menu-item flex items-center gap-2 rounded-md px-3 py-2 text-sm/6 font-nm-medium font-medium text-gray-900 transition-colors duration-300 hover:bg-[#F8F8F8]"
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
                    data-active={
                      item.sectionId === activeSection ? "true" : "false"
                    }
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
              <div className="ml-1 pl-1">
                <ColorThemeToggle
                  theme={colorTheme}
                  onToggle={toggleColorTheme}
                />
              </div>
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
              ref={setMobileMenuPanelRef}
              className="portfolio-mobile-menu fixed inset-0 z-50 flex h-[100dvh] w-full flex-col overflow-y-auto bg-white px-6 py-7 text-black sm:px-10 sm:py-8"
            >
              <div
                data-mobile-nav-item
                className="flex items-center justify-between"
              >
                <Link
                  href="/#home"
                  onClick={closeMobileMenu}
                  className="-m-1.5 p-1.5 font-nm-bold font-bold text-black"
                >
                  STEVEN
                </Link>
                <div className="flex items-center gap-1">
                  <ColorThemeToggle
                    theme={colorTheme}
                    onToggle={toggleColorTheme}
                    compact
                  />
                  <button
                    type="button"
                    onClick={closeMobileMenu}
                    className="inline-flex size-11 items-center justify-center rounded-md text-gray-700 transition-opacity duration-300 hover:opacity-60"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-6 text-black"
                    />
                  </button>
                </div>
              </div>
              <div className="mt-24 flex flex-1 flex-col sm:mt-28">
                <div className="flex-1">
                  <div>
                    <h3
                      data-mobile-nav-item
                      className="portfolio-mobile-menu-label mb-5 font-nm-book text-lg leading-none tracking-normal text-[#B8B8B8]"
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
                                data-mobile-nav-item
                                onClick={() =>
                                  setMobileAboutOpen((isOpen) => !isOpen)
                                }
                                className="inline-flex items-center gap-3 font-nm-book text-[36px] font-normal leading-[0.95] tracking-normal text-black transition-opacity duration-300 hover:opacity-60"
                              >
                                <span>{item.name}</span>
                                <ChevronDownIcon
                                  className={`mt-2 h-7 w-7 shrink-0 stroke-[1.5] transition-transform duration-300 ease-out sm:h-9 sm:w-9 ${
                                    mobileAboutOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                              <div
                                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                                  mobileAboutOpen
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                }`}
                              >
                                <div className="min-h-0 pt-4">
                                  {mobileAboutDropdown.map((dropdownItem) => {
                                    const DropdownIcon = dropdownItem.Icon;

                                    return (
                                      <Link
                                        key={dropdownItem.name}
                                        href={dropdownItem.href}
                                        onClick={closeMobileMenu}
                                        className="flex w-fit items-center gap-2 border-b border-black/20 py-2 font-nm-book text-[28px] leading-tight tracking-normal text-black transition-opacity duration-300 hover:opacity-60 sm:text-[34px]"
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
                            data-mobile-nav-item
                            onClick={closeMobileMenu}
                            className="block w-fit font-nm-book text-[36px] font-normal leading-[0.95] tracking-normal text-black transition-opacity duration-300 hover:opacity-60"
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
                    <p className="mb-4 font-nm-book text-lg leading-none tracking-normal text-[#B8B8B8]">
                      Get in touch
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="inline-flex border-b border-black/20 pb-2 font-nm-book text-xl leading-none tracking-normal text-black transition-opacity duration-300 hover:opacity-60"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <div>
                    <p className="mb-4 font-nm-book text-lg leading-none tracking-normal text-[#B8B8B8]">
                      Start a project
                    </p>
                    <Link
                      href="/book-a-meeting"
                      onClick={closeMobileMenu}
                      className="inline-flex border-b border-black/20 pb-2 font-nm-book text-xl leading-none tracking-normal text-black transition-opacity duration-300 hover:opacity-60"
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
