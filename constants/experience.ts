export type Experience = { 
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  location: string;
  logoSrc: string;
  logoAlt: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Flexicon Solution Inc.",
    startDate: "July 2024",
    endDate: "July 2025",
    location: "Makati, National Capital Region, Philippines · On-Site",
    logoSrc: "/images/experience/Flexicon1.jpg",
    logoAlt: "Flexicon Logo",
    imageSrc: "/images/experience/Flexicon2.jpg",
    imageAlt: "Flexicon Project Image",
  },
  {
    role: "UI/UX Designer Intern",
    company: "Pixel8 Web Solutions and Consultancy",
    startDate: "Jun 2023",
    endDate: "July 2023 · 2 mos",
    location: "Corner Albay 647, Legazpi City, Albay · Remote ",
    logoSrc: "/images/experience/Pixel8-1.jpg",
    logoAlt: "Pixel8 Logo",
    imageSrc: "/images/experience/Pixel8-2.jpg",
    imageAlt: "Pixel8 Project Image",
  },
  {
    role: "Designer | Developer",
    company: "Quezon City Remote",
    startDate: "October 2022 ",
    endDate: "Present",
    location: "Freelance UI/UX Designer and Developer",
    logoSrc: "/images/experience/Freelance1.jpg",
    logoAlt: "Freelance Logo",
    imageSrc: "/images/experience/Freelance2.jpg",
    imageAlt: "Freelance Project Image",
  },
];