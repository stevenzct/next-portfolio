"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CAL_USERNAME = "cabugos-john-steven-rerork";
const EVENT_SLUG = "30min";
const CAL_NAMESPACE = "portfolio-booking";

const CalBooker = () => {
  useEffect(() => {
    let themeObserver: MutationObserver | null = null;
    let cancelled = false;

    const configureEmbed = async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });

      if (cancelled) return;

      const applyColorTheme = () => {
        const colorThemeEnabled =
          document.documentElement.dataset.colorTheme === "color";

        cal("ui", {
          theme: "light",
          layout: "month_view",
          hideEventTypeDetails: false,
          cssVarsPerTheme: {
            light: { "cal-brand": colorThemeEnabled ? "#0a6f91" : "#000000" },
            dark: { "cal-brand": "#ffffff" },
          },
        });
      };

      applyColorTheme();
      themeObserver = new MutationObserver(applyColorTheme);
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-color-theme"],
      });
    };

    void configureEmbed();

    return () => {
      cancelled = true;
      themeObserver?.disconnect();
    };
  }, []);

  return (
    <div className="booking-embed min-h-[720px] overflow-hidden rounded-[13px] border border-[#E4E4E4] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
      <Cal
        namespace={CAL_NAMESPACE}
        calLink={`${CAL_USERNAME}/${EVENT_SLUG}`}
        config={{ layout: "month_view" }}
        className="min-h-[720px] w-full"
        style={{ width: "100%", height: "100%", overflow: "auto" }}
      />
    </div>
  );
};

export default CalBooker;
