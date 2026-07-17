export type Experience = { 
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  location: string;
  logoSrc?: string;
  logoAlt?: string;
  imageSrc?: string;
  imageAlt?: string;
  linkedinUrl?: string;
}

export const experiences: Experience[] = [
  {
    role: "UI/UX Designer",
    company: "Payso Inc.",
    startDate: "November 2025",
    endDate: "Present",
    location: "BGC, Taguig, NCR, Philippines",
    logoSrc: "/images/experience/payso-logo.png",
    logoAlt: "Payso Logo",
    imageSrc: "/images/experience/payso-team.png",
    imageAlt: "Payso Project Image",
    linkedinUrl: "https://www.linkedin.com/company/paysophl/posts/?feedView=all",
  },
  {
    role: "Software Engineer II",
    company: "Flexicon Solution Inc.",
    startDate: "July 2024",
    endDate: "July 2025",
    location: "Makati, National Capital Region, Philippines",
    logoSrc: "/images/experience/Flexicon1.jpg",
    logoAlt: "Flexicon Logo",
    imageSrc: "/images/experience/flexicon-team.png",
    imageAlt: "Flexicon Project Image",
    linkedinUrl: "https://www.linkedin.com/company/flexicon-solution-inc/",
  },
  {
    role: "Designer | Developer",
    company: "Freelance/ Self-Employed",
    startDate: "October 2022 ",
    endDate: "Present",
    location: "Teresa Rizal, Philippines",
    logoSrc: "/images/experience/Freelance1.jpg",
    logoAlt: "Freelance Logo",
    imageSrc: "/images/experience/Freelance2.jpg",
    imageAlt: "Freelance Project Image",
  },
  {
    role: "UI/UX Designer Intern",
    company: "Pixel8 Web Solutions and Consultancy",
    startDate: "Jun 2023",
    endDate: "July 2023 · 2 mos",
    location: "Corner Albay 647, Legazpi City, Albay , Philippines",
    logoSrc: "/images/experience/Pixel8-1.jpg",
    logoAlt: "Pixel8 Logo",
    imageSrc: "/images/experience/Pixel8-2.jpg",
    imageAlt: "Pixel8 Project Image",
    linkedinUrl: "https://www.linkedin.com/company/pixel8-websolutions/about/",
  },
];
