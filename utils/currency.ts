import {
  BASE_PRICE_PHP,
  COUNTRY_TO_CURRENCY,
  EU_COUNTRY_CODES,
  STATIC_EXCHANGE_RATES,
  SUPPORTED_CURRENCIES,
} from "../constants/pricing";
import type {
  CountryCode,
  CurrencyCode,
  ExchangeRates,
} from "../types/pricing";

interface HeaderReader {
  get(name: string): string | null;
}

const CURRENCY_CODES = new Set<CurrencyCode>(
  SUPPORTED_CURRENCIES.map(({ code }) => code)
);

const normalizeCountryCode = (value?: string | null): CountryCode | null => {
  const countryCode = value?.trim().toUpperCase();

  if (!countryCode || !/^[A-Z]{2}$/.test(countryCode)) {
    return null;
  }

  return countryCode;
};

export const detectCountryFromHeaders = (
  requestHeaders: HeaderReader
): CountryCode | null => {
  const headerNames = [
    "x-vercel-ip-country",
    "cf-ipcountry",
    "x-country-code",
  ];

  for (const headerName of headerNames) {
    const countryCode = normalizeCountryCode(requestHeaders.get(headerName));

    if (countryCode) {
      return countryCode;
    }
  }

  return null;
};

export const detectCountryFromLocale = (
  locales: readonly string[]
): CountryCode | null => {
  for (const locale of locales) {
    const regionMatch = locale.replace("_", "-").match(/-([A-Za-z]{2})(?:-|$)/);
    const countryCode = normalizeCountryCode(regionMatch?.[1]);

    if (countryCode) {
      return countryCode;
    }
  }

  return null;
};

export const getCurrencyForCountry = (
  countryCode?: CountryCode | null
): CurrencyCode => {
  const normalizedCountry = normalizeCountryCode(countryCode);

  if (!normalizedCountry) {
    return "PHP";
  }

  if (EU_COUNTRY_CODES.has(normalizedCountry)) {
    return "EUR";
  }

  return COUNTRY_TO_CURRENCY[normalizedCountry] ?? "PHP";
};

export const isCurrencyCode = (value: string): value is CurrencyCode =>
  CURRENCY_CODES.has(value as CurrencyCode);

export const convertPriceFromPhp = (
  currency: CurrencyCode,
  rates: ExchangeRates = STATIC_EXCHANGE_RATES,
  amountPhp = BASE_PRICE_PHP
): number => {
  const rate = Number.isFinite(rates[currency]) ? rates[currency] : 1;
  const convertedPrice = amountPhp * rate;

  return Number.isFinite(convertedPrice) ? convertedPrice : amountPhp;
};

export const formatCurrency = (
  amount: number,
  currency: CurrencyCode
): string => {
  const locale =
    SUPPORTED_CURRENCIES.find(({ code }) => code === currency)?.locale ??
    "en-PH";

  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      currencyDisplay: "narrowSymbol",
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      currencyDisplay: "narrowSymbol",
      maximumFractionDigits: 0,
    }).format(BASE_PRICE_PHP);
  }
};

