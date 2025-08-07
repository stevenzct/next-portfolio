export type ProjectDetails = {
  title: string;
  description: string;
  role: string;
  tech: string;
  link: string;
  year: number;
  imageSrcMockup: string;
  assignment: string;
  objectives: string;
  projectIncludes: string[];
  imageSrcUi: string[];
  nextImage: string;
  nextTitle: string;
  nextDescription: string;
};

export const projectDetails: ProjectDetails[] = [
  {
    title: "RV Rioflorido",
    description:
      "RV Rioflorido is a civil engineer-led construction company in the Philippines, specializing in residential and commercial projects with modern finishes and comprehensive services.",
    role: "Designer, Developer",
    tech: "Figma, Vue.js, Nuxt.js, Tailwind",
    link: "rvriofloridocon.com",
    year: 2025,
    imageSrcMockup: "/images/projectDetails/Rioflorido/RiofloridoMockup.jpg",
    assignment:
      "Designed and developed a clean, modern website for RVRioFlorido Construction to showcase their projects and services. The site delivers a professional, minimalist experience that reflects the company’s credibility and expertise in residential and commercial construction.",
    objectives:
      "To build a digital presence that reflects RVRioFlorido Construction’s professionalism combining clean design with solid frontend architecture for a seamless, trustworthy user experience across all devices.",
    projectIncludes: [
      "Design Ideation",
      "Design Direction",
      "Final Design",
      "Frontend Development",
    ],
    imageSrcUi: [
      "/images/projectDetails/Rioflorido/Typography.jpg",
      "/images/projectDetails/Rioflorido/ColorSystem.jpg",
      "/images/projectDetails/Rioflorido/1.jpg",
      "/images/projectDetails/Rioflorido/2.jpg",
      "/images/projectDetails/Rioflorido/3.jpg",
      "/images/projectDetails/Rioflorido/4.jpg",
      "/images/projectDetails/Rioflorido/5.jpg",
      "/images/projectDetails/Rioflorido/6.jpg",
    ],
    nextImage: "/images/projectDetails/Rioflorido/nextImage.jpg",
    nextTitle: "Laprasca Restaurant",
    nextDescription: "Fine dining table reservation restaurant",
  },
  {
    title: "Laprasca Restaurant",
    description:
      "Laprasca is a fine dining table reservation restaurant in the Philippines, specializing in Italian cuisine with a modern twist.",
    role: "Designer, Developer",
    tech: "Figma, Bootstrap, Javascript, PHP, MySQL",
    link: "laprasca.pages.dev",
    year: 2022,
    imageSrcMockup: "/images/projectDetails/Laprasca/LaprascaMockup.jpg",
    assignment:
      "Design and develop a refined website for Laprasca, a table reservation fine dining restaurant known for its expressive French-Mediterranean cuisine. The site must reflect its upscale, secluded atmosphere and enable seamless online reservations.",
    objectives:
      "To Create a luxurious, story-driven website that highlights Laprasca’s culinary excellence, promotes table reservations, and delivers a seamless experience across all devices.",
    projectIncludes: [
      "Design Ideation",
      "Design Direction",
      "Final Design",
      "Frontend Development",
    ],
    imageSrcUi: [
      "/images/projectDetails/Laprasca/Typography.jpg",
      "/images/projectDetails/Laprasca/ColorSystem.jpg",
      "/images/projectDetails/Laprasca/3.jpg",
      "/images/projectDetails/Laprasca/4.jpg",
      "/images/projectDetails/Laprasca/5.jpg",
      "/images/projectDetails/Laprasca/6.jpg",

    ],
    nextImage: "/images/projectDetails/Rioflorido/nextImage.jpg",
    nextTitle: "Laprasca Restaurant",
    nextDescription: "Fine dining table reservation restaurant",
  },
];
