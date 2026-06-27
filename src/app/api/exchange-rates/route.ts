import { NextResponse } from "next/server";
import {
  STATIC_EXCHANGE_RATES,
  SUPPORTED_CURRENCIES,
} from "../../../../constants/pricing";
import { isCurrencyCode } from "../../../../utils/currency";
import type { ExchangeRates } from "../../../../types/pricing";

interface FrankfurterResponse {
  date?: string;
  rates?: Record<string, number>;
}

export const revalidate = 21_600;

export async function GET() {
  const symbols = SUPPORTED_CURRENCIES.map(({ code }) => code)
    .filter((code) => code !== "PHP")
    .join(",");

  try {
    const response = await fetch(
      `https://api.frankfurter.dev/v1/latest?base=PHP&symbols=${symbols}`,
      { next: { revalidate } }
    );

    if (!response.ok) {
      throw new Error("Exchange rate request failed");
    }

    const data = (await response.json()) as FrankfurterResponse;
    const rates: ExchangeRates = { ...STATIC_EXCHANGE_RATES, PHP: 1 };

    Object.entries(data.rates ?? {}).forEach(([currency, rate]) => {
      if (isCurrencyCode(currency) && Number.isFinite(rate) && rate > 0) {
        rates[currency] = rate;
      }
    });

    return NextResponse.json({ rates, date: data.date, source: "live" });
  } catch {
    return NextResponse.json({
      rates: STATIC_EXCHANGE_RATES,
      source: "fallback",
    });
  }
}

