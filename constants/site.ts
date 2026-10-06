export const SITE_URL = "https://stevencabugos.me";

export const socialProfiles = {
  linkedin: "https://ph.linkedin.com/in/cabugos-steven",
  github: "https://github.com/stevenzct",
  facebook: "https://www.facebook.com/stevenzct/",
} as const;

export const siteConfig = {
  name: "Steven Cabugos",
  title: "Steven Cabugos — AI Engineer, Full-Stack Engineer & UI/UX Designer",
  description:
    "Steven Cabugos is a Philippines-based AI engineer, full-stack engineer, and UI/UX designer building web and mobile products for fintech, payments, and businesses.",
  url: SITE_URL,
  locale: "en_US",
  language: "en-US",
  email: "stevencabugos138@gmail.com",
  alternateNames: ["John Steven A. Cabugos", "stevenzct"],
  jobTitles: ["AI Engineer", "Full-Stack Engineer", "UI/UX Designer"],
  specialties: [
    "fintech",
    "payments",
    "UI/UX design",
    "software development",
  ],
  profileImage: "/images/about/steve-profile.png",
  profileImageAlt:
    "Portrait of Steven Cabugos, AI engineer, full-stack engineer, and UI/UX designer",
  socialImage: "/images/social/hero-preview-v1.png",
  socialImageWidth: 1200,
  socialImageHeight: 630,
  socialImageType: "image/png",
  socialImageAlt:
    "Steven Cabugos portfolio hero: Designed to impress. Built to convert. Selected website designs on a black background.",
  socialLinks: Object.values(socialProfiles),
} as const;
