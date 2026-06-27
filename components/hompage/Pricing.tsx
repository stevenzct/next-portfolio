"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowPathRoundedSquareIcon,
  CheckIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  CubeTransparentIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import {
  BASE_PRICE_PHP,
  PRICING_SERVICES,
  STATIC_EXCHANGE_RATES,
} from "../../constants/pricing";
import type {
  CurrencyCode,
  ExchangeRates,
  PricingServiceIcon,
} from "../../types/pricing";
import {
  convertPriceFromPhp,
  detectCountryFromLocale,
  formatCurrency,
  getCurrencyForCountry,
} from "../../utils/currency";

interface PricingProps {
  initialCountry: string | null;
  initialCurrency: CurrencyCode;
}

interface RatesResponse {
  rates?: Partial<ExchangeRates>;
}

const serviceIcons: Record<
  PricingServiceIcon,
  typeof ArrowPathRoundedSquareIcon
> = {
  revisions: ArrowPathRoundedSquareIcon,
  mobile: DevicePhoneMobileIcon,
  development: CodeBracketIcon,
  web: ComputerDesktopIcon,
  product: CubeTransparentIcon,
  uiux: CursorArrowRaysIcon,
};

const Pricing = ({ initialCountry, initialCurrency }: PricingProps) => {
  const [currency, setCurrency] = useState<CurrencyCode>(initialCurrency);
  const [rates, setRates] = useState<ExchangeRates>(STATIC_EXCHANGE_RATES);

  useEffect(() => {
    if (initialCountry) {
      return;
    }

    const localeCountry = detectCountryFromLocale(
      navigator.languages.length ? navigator.languages : [navigator.language]
    );

    if (localeCountry) {
      setCurrency(getCurrencyForCountry(localeCountry));
    }
  }, [initialCountry]);

  useEffect(() => {
    const controller = new AbortController();

    const refreshRates = async () => {
      try {
        const response = await fetch("/api/exchange-rates", {
          signal: controller.signal,
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as RatesResponse;

        if (data.rates) {
          setRates((currentRates) => ({ ...currentRates, ...data.rates }));
        }
      } catch {
        // The centralized static rates remain the safe display fallback.
      }
    };

    void refreshRates();

    return () => controller.abort();
  }, []);

  const formattedPrice = useMemo(() => {
    const convertedPrice = convertPriceFromPhp(currency, rates);
    return formatCurrency(convertedPrice, currency);
  }, [currency, rates]);

  const basePrice = formatCurrency(BASE_PRICE_PHP, "PHP");

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative overflow-hidden bg-white py-[80px] md:py-[120px]"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#F3F3F3] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-[#ECECEC] blur-3xl"
      />

      <div className="container-wrapper relative w-full">
        <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[75%]">
          <p className="mb-2 font-nm-book text-base md:text-2xl">
            Flexible Partnership
          </p>
          <h2
            id="pricing-heading"
            className="mb-8 text-[32px] font-nm-medium font-medium leading-[30px] text-black md:mb-16 md:text-7xl md:leading-20 lg:text-8xl lg:leading-[77px]"
          >
            Pricing
          </h2>

          <div className="grid items-stretch gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
            <div className="flex flex-col justify-between rounded-[13px] border border-[#E6E6E6] bg-[#F8F8F8] p-6 md:p-10">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D6D6D6] bg-white px-3 py-1.5 font-nm-medium text-xs font-medium uppercase tracking-[0.14em] text-[#242424]">
                  <span className="h-2 w-2 rounded-full bg-black" />
                  Monthly creative partner
                </span>
                <h3 className="mt-6 max-w-lg font-nm-medium text-[30px] font-medium leading-[1.05] text-black md:text-[46px]">
                  One plan for design, product, and development.
                </h3>
                <p className="mt-5 max-w-xl font-nm-book text-base leading-6 text-[#4A4A4A] md:text-lg md:leading-7">
                  Move from idea to launch with one focused partner across your
                  product experience—without juggling separate design and
                  development retainers.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {["One monthly rate", "Design + code", "Direct collaboration"].map(
                  (benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2 rounded-lg bg-white px-3 py-3 font-nm-book text-sm text-[#242424]"
                    >
                      <CheckIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {benefit}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[13px] bg-black p-6 text-white md:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              />
              <div className="relative">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-nm-book text-sm text-white/60">
                      Main offer
                    </p>
                    <p className="mt-1 font-nm-medium text-lg font-medium">
                      Full-service monthly plan
                    </p>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 font-nm-book text-sm text-white/80">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    Location-based · {currency}
                  </div>
                </div>

                <div className="mt-8 border-b border-white/15 pb-8 md:mt-10 md:pb-10">
                  <div
                    aria-live="polite"
                    className="flex flex-wrap items-end gap-x-3 gap-y-1"
                  >
                    <span className="font-nm-medium text-[48px] font-medium leading-none tracking-[-0.04em] sm:text-[64px] md:text-[72px]">
                      {formattedPrice}
                    </span>
                    <span className="pb-1 font-nm-book text-base text-white/60 md:pb-2 md:text-lg">
                      / month
                    </span>
                  </div>
                  <p className="mt-3 min-h-5 font-nm-book text-sm text-white/55">
                    {currency === "PHP"
                      ? "Base monthly price in Philippine pesos"
                      : `Converted from ${basePrice}/month. Exchange rates are indicative.`}
                  </p>
                </div>

                <div className="py-8 md:py-10">
                  <p className="font-nm-medium text-lg font-medium">
                    Everything included
                  </p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {PRICING_SERVICES.map(({ title, icon }) => {
                      const ServiceIcon = serviceIcons[icon];

                      return (
                        <li
                          key={title}
                          className="flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] px-3.5 py-3"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-black">
                            <ServiceIcon
                              aria-hidden="true"
                              className="h-[18px] w-[18px]"
                            />
                          </span>
                          <span className="font-nm-book text-sm leading-5 text-white/85">
                            {title}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    className="inline-flex h-12 cursor-pointer items-center justify-center rounded-lg bg-white px-5 font-nm-medium font-medium text-black transition-colors duration-300 hover:bg-[#E8E8E8]"
                  >
                    Start a Project
                  </button>
                  <Link
                    href="/book-a-meeting"
                    className="inline-flex h-12 items-center justify-center rounded-lg border border-white/25 px-5 font-nm-medium font-medium text-white transition-colors duration-300 hover:bg-white/10"
                  >
                    Book a Meeting
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
