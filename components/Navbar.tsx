"use client";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Button from "./Button";

// Define the navigation array
const navigation = [
  { name: "Home", href: "/#home" },
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/#home"); // Default active path
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
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6 text-black" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-4 bg-white py-[8px] px-[14px] rounded-lg items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setCurrentPath(item.href)} // Update active state on click
                  className={`text-sm/6 font-nm-medium font-medium transition-colors duration-300 ${
                    item.href === currentPath
                      ? "text-white bg-black px-[14px] py-1 rounded-lg"
                      : "text-gray-900 hover:bg-[#F8F8F8] px-[14px] py-1 rounded-lg"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
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
                    {navigation
                      .filter((item) => item.name !== "Contact") // Exclude "Contact" for mobile
                      .map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className=" block text-[32px] font-nm-medium font-medium text-black"
                      >
                        {item.name}
                      </Link>
                    ))}
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
