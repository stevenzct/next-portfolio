"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  ArrowPathRoundedSquareIcon,
  CalendarDaysIcon,
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
      className="relative overflow-hidden border-y border-black/[0.06] bg-white py-[80px] md:py-24 lg:py-[120px]"
    >
      <div
        aria-hidden="true"
        className="pricing-atmosphere pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(0,0,0,0.045),transparent_30%),radial-gradient(circle_at_88%_76%,rgba(0,0,0,0.035),transparent_32%)]"
      />
      <div
        aria-hidden="true"
        className="pricing-atmosphere pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.035))]"
      />

      <div className="container-wrapper relative z-10 w-full">
        <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <div className="mb-7 md:mb-12 lg:mb-16">
            <p className="mb-1 font-nm-book text-base leading-5 md:mb-2 md:text-xl md:leading-normal lg:text-2xl">
              Flexible Partnership
            </p>
            <h2
              id="pricing-heading"
              className="font-nm-medium text-[clamp(2rem,6vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.035em] text-black"
            >
              Pricing
            </h2>
          </div>

          <div className="grid items-stretch gap-7 md:gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:gap-10">
            <div className="pricing-summary-card relative flex h-full flex-col overflow-hidden rounded-[20px] border border-black/[0.06] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.065)] sm:p-8 md:p-10">
              <div
                aria-hidden="true"
                className="pricing-summary-glow absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F0F0ED] blur-3xl"
              />

              <div className="relative flex h-full flex-col">
                <span className="pricing-kicker inline-flex w-fit items-center gap-2 rounded-full border border-[#DEDEDA] bg-[#F7F7F5] px-3 py-1.5 font-nm-medium text-[10px] font-medium uppercase tracking-[0.14em] text-[#242424] sm:text-xs">
                  <span className="pricing-kicker-dot h-2 w-2 rounded-full bg-black" />
                  Monthly creative partner
                </span>

                <h3 className="pricing-summary-heading mt-6 max-w-xl font-nm-medium text-[30px] font-medium leading-[1.05] tracking-[-0.025em] text-black sm:text-[38px] md:text-[46px]">
                  One plan for design, product, and development.
                </h3>
                <p className="pricing-summary-copy mt-5 max-w-xl font-nm-book text-base leading-6 text-[#555555] md:text-lg md:leading-7">
                  Move from idea to launch with one focused partner across your
                  product experience&mdash;without juggling separate design and
                  development retainers.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 xl:mt-auto xl:grid-cols-1 xl:pt-10">
                  {["One monthly rate", "Design + code", "Direct collaboration"].map(
                    (benefit) => (
                      <div
                        key={benefit}
                        className="pricing-benefit flex min-h-14 items-center gap-3 rounded-[10px] border border-[#E5E5E1] bg-[#F7F7F5] px-3.5 py-3 font-nm-book text-sm text-[#242424] transition-colors duration-300 hover:border-[#CFCFCA] hover:bg-white"
                      >
                        <span className="pricing-benefit-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white">
                          <CheckIcon
                            className="h-3.5 w-3.5"
                            strokeWidth={2.2}
                            aria-hidden="true"
                          />
                        </span>
                        <span className="leading-5">{benefit}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="pricing-offer-card relative flex h-full flex-col overflow-hidden rounded-[20px] bg-black p-6 text-white shadow-[0_12px_38px_rgba(0,0,0,0.15)] sm:p-8 md:p-10">
              <div
                aria-hidden="true"
                className="pricing-offer-glow absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/[0.12] blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pricing-offer-atmosphere absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_38%)]"
              />

              <div className="relative flex h-full flex-col">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="pricing-offer-eyebrow font-nm-book text-xs uppercase tracking-[0.14em] text-white/50">
                      Main offer
                    </p>
                    <p className="pricing-offer-name mt-2 font-nm-medium text-xl font-medium">
                      Full-service monthly plan
                    </p>
                  </div>

                  <div className="pricing-location-pill inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-2 font-nm-book text-xs text-white/75 backdrop-blur-sm sm:text-sm">
                    <span className="pricing-status-dot h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.12)]" />
                    Location-based &middot; {currency}
                  </div>
                </div>

                <div className="pricing-investment-card mt-8 rounded-[16px] border border-white/10 bg-white/[0.06] p-4 sm:p-5 md:mt-10 md:p-6">
                  <p className="pricing-offer-eyebrow mb-3 font-nm-book text-xs uppercase tracking-[0.14em] text-white/50">
                    Monthly investment
                  </p>
                  <div
                    aria-live="polite"
                    className="flex min-w-0 flex-wrap items-end gap-x-3 gap-y-1"
                  >
                    <span className="pricing-price min-w-0 break-words font-nm-medium text-[clamp(2.25rem,7vw,4.5rem)] font-medium leading-none tracking-[-0.045em] tabular-nums">
                      {formattedPrice}
                    </span>
                    <span className="pricing-price-suffix pb-1 font-nm-book text-sm text-white/55 md:pb-2 md:text-lg">
                      / month
                    </span>
                  </div>
                  <p className="pricing-rate-copy mt-3 min-h-5 font-nm-book text-xs leading-5 text-white/50 sm:text-sm">
                    {currency === "PHP"
                      ? "Base monthly price in Philippine pesos"
                      : `Converted from ${basePrice}/month. Exchange rates are indicative.`}
                  </p>
                </div>

                <div className="py-8 md:py-10">
                  <div className="flex items-center justify-between gap-4">
                    <p className="pricing-included-heading font-nm-medium text-lg font-medium">
                      Everything included
                    </p>
                    <span className="pricing-service-count shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 font-nm-book text-xs text-white/55">
                      {PRICING_SERVICES.length} services
                    </span>
                  </div>

                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {PRICING_SERVICES.map(({ title, icon }) => {
                      const ServiceIcon = serviceIcons[icon];

                      return (
                        <li
                          key={title}
                          className="pricing-service-item group/service flex min-h-16 items-center gap-3 rounded-[10px] border border-white/10 bg-white/[0.055] px-3.5 py-3 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.09]"
                        >
                          <span className="pricing-service-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-black transition-transform duration-300 motion-safe:group-hover/service:scale-105">
                            <ServiceIcon
                              aria-hidden="true"
                              className="h-[18px] w-[18px]"
                            />
                          </span>
                          <span className="pricing-service-label font-nm-book text-sm leading-5 text-white/80">
                            {title}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-auto grid gap-3 sm:grid-cols-2">
                  <Link
                    href="https://tally.so/r/Y5gQDz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pricing-primary-cta group/primary inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-white px-5 font-nm-medium font-medium text-black transition-all duration-300 hover:bg-[#E8E8E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:hover:-translate-y-0.5"
                  >
                    Start a Project
                    <ArrowUpRightIcon
                      className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover/primary:translate-x-0.5 motion-safe:group-hover/primary:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="/book-a-meeting"
                    className="pricing-secondary-cta inline-flex h-12 items-center justify-center gap-2 rounded-[10px] border border-white/20 px-5 font-nm-medium font-medium text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <CalendarDaysIcon className="h-4 w-4" aria-hidden="true" />
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
