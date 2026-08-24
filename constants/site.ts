export const SITE_URL = "https://stevencabugos.me";

export const socialProfiles = {
  linkedin: "https://ph.linkedin.com/in/cabugos-steven",
  github: "https://github.com/stevenzct",
  facebook: "https://www.facebook.com/stevenzct/",
} as const;

export const siteConfig = {
  name: "Steven Cabugos",
  title: "Steven Cabugos — Full-Stack Software Engineer & UI/UX Designer",
  description:
    "Steven Cabugos is a Philippines-based full-stack software engineer and UI/UX designer specializing in fintech, payments, and digital products.",
  url: SITE_URL,
  locale: "en_US",
  language: "en-US",
  email: "stevencabugos138@gmail.com",
  alternateNames: ["John Steven A. Cabugos", "stevenzct"],
  jobTitles: ["Full-Stack Software Engineer", "UI/UX Designer"],
  specialties: [
    "fintech",
    "payments",
    "UI/UX design",
    "software development",
  ],
  profileImage: "/images/about/steve-profile.png",
  profileImageAlt:
    "Portrait of Steven Cabugos, full-stack software engineer and UI/UX designer",
  socialImage: "/images/hero.jpg",
  socialImageAlt:
    "Abstract white folded forms on a light gray background",
  socialLinks: Object.values(socialProfiles),
} as const;
