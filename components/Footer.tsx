import {
  ArrowUpRightIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import { siteConfig } from "../constants/site";
import { socialButtons } from "../constants/socialButton";
import AnimatedFooterArt from "./footer/AnimatedFooterArt";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className={`${styles["contact-section"]} contact relative overflow-hidden bg-[#090909] pb-8 pt-[80px] text-white md:pb-10 md:pt-24 lg:pt-[120px]`}
    >
      <div className={styles["contact-grid"]} aria-hidden="true" />
      <div className={styles["contact-glow"]} aria-hidden="true" />

      <div className="container-wrapper relative z-10 w-full">
        <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
          <div className={`${styles["contact-topline"]} flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between`}>
            <div className={`${styles["contact-status-pill"]} inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 font-nm-book text-[11px] uppercase tracking-[0.14em] text-white/75 backdrop-blur-sm sm:text-xs`}>
              <span className="relative flex h-2 w-2">
                <span className={`${styles["contact-status-ring"]} absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-45 motion-reduce:animate-none`} />
                <span className={`${styles["contact-status-dot"]} relative inline-flex h-2 w-2 rounded-full bg-white`} />
              </span>
              Available for freelance projects
            </div>

            <p className={`${styles["contact-location"]} font-nm-book text-xs uppercase tracking-[0.14em] text-white/45 sm:text-right`}>
              Philippines <span className="mx-1.5 text-white/20">/</span>
              Working worldwide
            </p>
          </div>

          <div className={styles["contact-feature"]}>
            <div className={`${styles["contact-copy"]} max-w-[960px]`}>
              <p className={`${styles["contact-kicker"]} mb-5 font-nm-book text-xs uppercase tracking-[0.18em] text-white/45 md:mb-7`}>
                Contact <span className="mx-2 text-white/20">/</span> 06
              </p>

              <h2
                id="contact-heading"
                className="max-w-[820px] font-nm-medium text-[clamp(2.5rem,10.5vw,3.75rem)] font-medium leading-[0.96] tracking-[-0.05em] text-white sm:text-[clamp(3.75rem,7vw,5rem)] lg:text-[clamp(4.5rem,5.5vw,5.5rem)]"
              >
                Let&apos;s build
                <span className={`${styles["contact-heading-accent"]} block text-white/70`}>
                  something remarkable.
                </span>
              </h2>

              <p className={`${styles["contact-intro"]} mt-7 max-w-[560px] font-nm-book text-base leading-7 text-white/60 sm:text-lg sm:leading-8`}>
                Have a product idea, a design challenge, or a team that needs a
                focused creative partner? Tell me where you want to go.
              </p>
              <p className={`${styles["contact-disciplines"]} mt-5 font-nm-book text-xs uppercase tracking-[0.16em] text-white/50`}>
                Design &middot; Engineering &middot; AI
              </p>
            </div>

            <AnimatedFooterArt />
          </div>

          <a
            href={`mailto:${siteConfig.email}`}
            className={`${styles["contact-email-card"]} group/email relative z-10 flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[20px] border border-white/15 bg-white/[0.065] p-5 backdrop-blur-md transition-all duration-500 hover:border-white/30 hover:bg-white/[0.09] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-[190px] sm:p-7 md:min-h-[210px] md:p-9`}
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-white/[0.09] blur-3xl transition-transform duration-700 motion-safe:group-hover/email:scale-125"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 right-5 font-nm-medium text-[150px] font-medium leading-none text-white/[0.035] sm:right-10 sm:text-[210px]"
            >
              @
            </span>

            <div className="relative flex items-center justify-between gap-4">
              <span className={`${styles["contact-card-label"]} inline-flex items-center gap-2 font-nm-book text-xs uppercase tracking-[0.16em] text-white/50`}>
                <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
                Start with an email
              </span>
              <span className={`${styles["contact-card-icon"]} flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 motion-safe:group-hover/email:rotate-45 sm:h-[52px] sm:w-[52px]`}>
                <ArrowUpRightIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>

            <span className="relative mt-10 break-all font-nm-medium text-[clamp(1.3rem,5vw,3.75rem)] font-medium leading-none tracking-[-0.04em] text-white sm:break-normal">
              {siteConfig.email}
            </span>
          </a>

          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1.15fr]">
            <Link
              href="https://tally.so/r/Y5gQDz"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles["contact-brief-card"]} group/card flex min-h-[230px] flex-col justify-between rounded-[20px] bg-white p-5 text-black transition-transform duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-safe:hover:-translate-y-1 sm:p-7`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className={`${styles["contact-brief-label"]} font-nm-book text-xs uppercase tracking-[0.16em] text-black/45`}>
                  01 / Project brief
                </span>
                <ArrowUpRightIcon
                  className="h-5 w-5 transition-transform duration-300 motion-safe:group-hover/card:translate-x-1 motion-safe:group-hover/card:-translate-y-1"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="font-nm-medium text-[28px] font-medium leading-[1.04] tracking-[-0.03em] sm:text-[32px]">
                  Tell me what you&apos;re building.
                </h3>
                <p className={`${styles["contact-brief-copy"]} mt-3 font-nm-book text-sm leading-6 text-black/55`}>
                  Share the goals, scope, and project details in this form.
                </p>
              </div>
            </Link>

            <Link
              href="/book-a-meeting"
              className={`${styles["contact-call-card"]} group/card flex min-h-[230px] flex-col justify-between rounded-[20px] border border-white/15 bg-white/[0.055] p-5 transition-all duration-500 hover:border-white/30 hover:bg-white/[0.085] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-safe:hover:-translate-y-1 sm:p-7`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className={`${styles["contact-card-label"]} font-nm-book text-xs uppercase tracking-[0.16em] text-white/45`}>
                  02 / Conversation
                </span>
                <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-nm-medium text-[28px] font-medium leading-[1.04] tracking-[-0.03em] text-white sm:text-[32px]">
                  Book a focused call.
                </h3>
                <p className={`${styles["contact-card-copy"]} mt-3 font-nm-book text-sm leading-6 text-white/50`}>
                  Choose a time and let&apos;s talk through the opportunity.
                </p>
              </div>
            </Link>

            <div className={`${styles["contact-social-card"]} flex min-h-[230px] flex-col justify-between rounded-[20px] border border-white/15 bg-[#111111] p-5 sm:p-7 md:col-span-2 xl:col-span-1`}>
              <div className="flex items-start justify-between gap-4">
                <span className={`${styles["contact-card-label"]} font-nm-book text-xs uppercase tracking-[0.16em] text-white/45`}>
                  03 / Elsewhere
                </span>
                <span className={`${styles["contact-card-meta"]} font-nm-book text-xs text-white/25`}>SC&copy;</span>
              </div>

              <div>
                <h3 className="font-nm-medium text-[28px] font-medium leading-[1.04] tracking-[-0.03em] text-white sm:text-[32px]">
                  Stay connected.
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {socialButtons.map(({ buttonName, href }) => (
                    <a
                      key={buttonName}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles["contact-social-link"]} group/social inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 font-nm-book text-sm text-white/65 transition-colors duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                    >
                      {buttonName}
                      <ArrowUpRightIcon
                        className="h-3.5 w-3.5 transition-transform duration-300 motion-safe:group-hover/social:translate-x-0.5 motion-safe:group-hover/social:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles["contact-footer-meta"]} mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 font-nm-book text-xs uppercase tracking-[0.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between md:mt-20`}>
            <p>&copy; {new Date().getFullYear()} Steven Cabugos</p>
            <p>Thoughtfully designed and engineered</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
