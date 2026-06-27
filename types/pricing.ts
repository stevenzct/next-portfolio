export type CurrencyCode =
  | "PHP"
  | "USD"
  | "EUR"
  | "GBP"
  | "JPY"
  | "AUD"
  | "CAD"
  | "SGD"
  | "KRW"
  | "CNY"
  | "INR"
  | "NZD"
  | "CHF"
  | "HKD"
  | "THB"
  | "MYR"
  | "IDR"
  | "AED"
  | "SAR"
  | "BRL"
  | "MXN"
  | "ZAR";

export type CountryCode = string;

export type ExchangeRates = Record<CurrencyCode, number>;

export type PricingServiceIcon =
  | "revisions"
  | "mobile"
  | "development"
  | "web"
  | "product"
  | "uiux";

export interface PricingService {
  title: string;
  icon: PricingServiceIcon;
}

export interface CurrencyOption {
  code: CurrencyCode;
  label: string;
  locale: string;
}

