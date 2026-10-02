import { useId } from "react";
import styles from "./Industries.module.css";

export type IndustryIconKind =
  | "payments"
  | "construction"
  | "gaming"
  | "booking"
  | "cms";

const IndustryIcon = ({ kind }: { kind: IndustryIconKind }) => {
  const id = useId();
  const face = `url(#${id}-face)`;
  const edge = `url(#${id}-edge)`;

  return (
    <svg
      viewBox="0 0 128 128"
      width={128}
      height={128}
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={styles.icon}
    >
      <defs>
        <linearGradient id={`${id}-face`} x1="24" y1="16" x2="105" y2="111" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--industry-icon-highlight)" />
          <stop offset="0.48" stopColor="var(--industry-icon-mid)" />
          <stop offset="1" stopColor="var(--industry-icon-low)" />
        </linearGradient>
        <linearGradient id={`${id}-edge`} x1="20" y1="24" x2="112" y2="116" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--industry-icon-rim)" />
          <stop offset="1" stopColor="var(--industry-icon-low)" />
        </linearGradient>
      </defs>

      {kind === "payments" && (
        <>
          <rect x="16" y="34" width="82" height="58" rx="12" transform="rotate(-15 57 63)" fill={edge} />
          <rect x="17" y="29" width="82" height="58" rx="12" transform="rotate(-15 58 58)" fill={face} stroke="var(--industry-icon-rim)" strokeWidth="0.8" />
          <g>
            <rect x="32" y="49" width="82" height="58" rx="12" transform="rotate(10 73 78)" fill={edge} />
            <rect x="32" y="44" width="82" height="58" rx="12" transform="rotate(10 73 73)" fill={face} stroke="var(--industry-icon-rim)" strokeWidth="0.8" />
            <path d="m39 62 73 13" stroke="var(--industry-icon-detail)" strokeWidth="7" />
            <rect x="42" y="77" width="14" height="11" rx="3" transform="rotate(10 42 77)" fill="var(--industry-icon-detail)" />
            <path d="m85 87 12 2" stroke="var(--industry-icon-detail)" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </>
      )}

      {kind === "construction" && (
        <>
          <path d="m14 74 29-17 29 17v31l-29 17-29-17Z" fill={edge} />
          <path d="m14 74 29 17 29-17-29-17Z" fill={face} stroke="var(--industry-icon-rim)" strokeWidth="0.8" />
          <path d="M43 91v31" stroke="var(--industry-icon-rim)" strokeOpacity="0.5" />
          <path d="m67 54 29-17 23 14v43l-29 17-23-14Z" fill={edge} />
          <path d="m67 54 23 14 29-17-23-14Z" fill={face} stroke="var(--industry-icon-rim)" strokeWidth="0.8" />
          <path d="M90 68v43" stroke="var(--industry-icon-rim)" strokeOpacity="0.5" />
          <g>
            <path d="m35 25 29-17 29 17v44L64 86 35 69Z" fill={edge} />
            <path d="m35 25 29 17 29-17L64 8Z" fill={face} stroke="var(--industry-icon-rim)" strokeWidth="0.8" />
            <path d="M64 42v44M35 25l29 17 29-17" stroke="var(--industry-icon-rim)" strokeOpacity="0.65" />
            <path d="m43 44 13 7m-13 5 13 7" stroke="var(--industry-icon-detail)" strokeWidth="2" />
          </g>
        </>
      )}

      {kind === "gaming" && (
        <>
          <path d="M40 35h48c11 0 18 8 21 19l10 39c3 14-10 23-20 14L82 92H46l-17 15C19 116 6 107 9 93l10-39c3-11 10-19 21-19Z" fill={edge} />
          <path d="M40 29h48c11 0 18 8 21 19l10 39c3 14-10 23-20 14L82 86H46l-17 15C19 110 6 101 9 87l10-39c3-11 10-19 21-19Z" fill={face} stroke="var(--industry-icon-rim)" strokeWidth="0.8" />
          <path d="M22 51c3-9 8-14 17-14h49" stroke="var(--industry-icon-rim)" strokeOpacity="0.65" strokeLinecap="round" />
          <g fill="var(--industry-icon-detail)">
            <path d="M35 47h10v10h10v10H45v10H35V67H25V57h10Z" />
            <circle cx="91" cy="51" r="5" />
            <circle cx="102" cy="63" r="5" />
            <circle cx="80" cy="63" r="5" />
            <circle cx="91" cy="75" r="5" />
          </g>
          <path d="M59 76h10" stroke="var(--industry-icon-detail)" strokeWidth="3" strokeLinecap="round" />
        </>
      )}

      {kind === "booking" && (
        <>
          <rect x="24" y="29" width="82" height="85" rx="13" transform="rotate(-8 65 71)" fill={edge} />
          <rect x="20" y="23" width="82" height="85" rx="13" transform="rotate(-8 61 65)" fill={face} stroke="var(--industry-icon-rim)" strokeWidth="0.8" />
          <path d="m18 49 81-11" stroke="var(--industry-icon-detail)" strokeOpacity="0.45" />
          <path d="m37 20 2 15m38-21 2 15" stroke="var(--industry-icon-rim)" strokeWidth="7" strokeLinecap="round" />
          <g fill="var(--industry-icon-detail)" opacity="0.55">
            <rect x="32" y="59" width="9" height="9" rx="2" transform="rotate(-8 32 59)" />
            <rect x="50" y="56" width="9" height="9" rx="2" transform="rotate(-8 50 56)" />
            <rect x="30" y="77" width="9" height="9" rx="2" transform="rotate(-8 30 77)" />
          </g>
          <g>
            <circle cx="91" cy="89" r="25" fill={edge} />
            <circle cx="91" cy="85" r="25" fill={face} stroke="var(--industry-icon-rim)" strokeWidth="0.8" />
            <path d="m80 85 7 7 15-16" stroke="var(--industry-icon-detail)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </>
      )}

      {kind === "cms" && (
        <>
          <rect x="21" y="21" width="91" height="88" rx="12" transform="rotate(8 66 65)" fill={edge} />
          <rect x="15" y="15" width="91" height="88" rx="12" transform="rotate(-6 60 59)" fill={face} stroke="var(--industry-icon-rim)" strokeWidth="0.8" />
          <path d="m14 36 90-9" stroke="var(--industry-icon-rim)" strokeOpacity="0.65" />
          <g fill="var(--industry-icon-detail)">
            <circle cx="27" cy="26" r="2" />
            <circle cx="35" cy="25" r="2" />
            <circle cx="43" cy="24" r="2" />
            <rect x="26" y="47" width="17" height="42" rx="3" transform="rotate(-6 26 47)" opacity="0.45" />
            <path d="m52 76 35-4m-34 12 24-3" stroke="var(--industry-icon-detail)" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
          </g>
          <g>
            <rect x="51" y="43" width="47" height="29" rx="5" transform="rotate(-6 51 43)" fill={edge} stroke="var(--industry-icon-rim)" strokeWidth="0.8" />
            <path d="m58 64 9-11 8 6 7-11 11 13Z" fill="var(--industry-icon-detail)" opacity="0.8" />
            <circle cx="61" cy="50" r="3" fill="var(--industry-icon-detail)" />
          </g>
        </>
      )}
    </svg>
  );
};

export default IndustryIcon;
