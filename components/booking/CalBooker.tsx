"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CAL_USERNAME = "cabugos-john-steven-rerork";
const EVENT_SLUG = "30min";
const CAL_NAMESPACE = "portfolio-booking";

const CalBooker = () => {
  useEffect(() => {
    const configureEmbed = async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });

      cal("ui", {
        theme: "light",
        layout: "month_view",
        hideEventTypeDetails: false,
        cssVarsPerTheme: {
          light: { "cal-brand": "#000000" },
          dark: { "cal-brand": "#ffffff" },
        },
      });
    };

    void configureEmbed();
  }, []);

  return (
    <div className="min-h-[720px] overflow-hidden rounded-[13px] border border-[#E4E4E4] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
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
