import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import CalBooker from "../../../components/booking/CalBooker";
import { createPageMetadata } from "../../../utils/metadata";

export const metadata = createPageMetadata({
  title: "Book a Meeting",
  description:
    "Schedule a 30-minute meeting with Steven Cabugos to discuss UI/UX design, software development, or a digital product project.",
  path: "/book-a-meeting",
});

export default function BookMeetingPage() {
  return (
    <div className="booking-page min-h-screen bg-[#F8F8F8] pb-20 pt-28 md:pb-24 md:pt-36 lg:pb-28">
      <div className="mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
        <Link
          href="/#pricing"
          className="booking-back-link inline-flex items-center gap-2 rounded-lg border border-[#D6D6D6] bg-white px-4 py-2 font-nm-book text-sm text-[#242424] transition-colors duration-300 hover:bg-black hover:text-white"
        >
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          Back to pricing
        </Link>

        <div className="mb-8 mt-10 md:mb-12">
          <p className="booking-kicker mb-2 font-nm-book text-base md:text-xl lg:text-2xl">
            Let&apos;s connect
          </p>
          <h1 className="booking-title font-nm-medium text-[42px] font-medium leading-[0.95] text-black md:text-6xl lg:text-7xl xl:text-8xl">
            Book a Meeting
          </h1>
          <p className="booking-copy mt-5 max-w-2xl font-nm-book text-base leading-6 text-[#4A4A4A] md:text-lg md:leading-7">
            Choose a date and time that works for you. Your timezone is handled
            automatically by Cal.com.
          </p>
        </div>

        <CalBooker />
      </div>
    </div>
  );
}
