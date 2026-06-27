import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import CalBooker from "../../../components/booking/CalBooker";

export const metadata: Metadata = {
  title: "Book a Meeting | Steven Cabugos",
  description: "Choose a convenient time for a 30-minute meeting with Steven Cabugos.",
};

export default function BookMeetingPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F8] pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[75%]">
        <Link
          href="/#pricing"
          className="inline-flex items-center gap-2 rounded-lg border border-[#D6D6D6] bg-white px-4 py-2 font-nm-book text-sm text-[#242424] transition-colors duration-300 hover:bg-black hover:text-white"
        >
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          Back to pricing
        </Link>

        <div className="mb-8 mt-10 md:mb-12">
          <p className="mb-2 font-nm-book text-base md:text-2xl">
            Let&apos;s connect
          </p>
          <h1 className="font-nm-medium text-[42px] font-medium leading-[0.95] text-black md:text-7xl lg:text-8xl">
            Book a Meeting
          </h1>
          <p className="mt-5 max-w-2xl font-nm-book text-base leading-6 text-[#4A4A4A] md:text-lg md:leading-7">
            Choose a date and time that works for you. Your timezone is handled
            automatically by Cal.com.
          </p>
        </div>

        <CalBooker />
      </div>
    </main>
  );
}

