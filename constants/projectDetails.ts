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
      "/images/projectDetails/Laprasca/7.jpg",
      "/images/projectDetails/Laprasca/8.jpg",
      "/images/projectDetails/Laprasca/9.jpg"
    ],
    nextImage: "/images/projectDetails/Laprasca/nextImage.jpg",
    nextTitle: "Planco",
    nextDescription: "Outdoor travel planning agency",
  },
  {
    title: "Planco",
    description:
      "PlanCo is an outdoor travel planning agency based in San Francisco. Its mission is to help people get in touch with nature and explore new places off of the beaten path.",
    role: "Designer",
    tech: "Figma",
    link: "bit.ly/448Dzho",
    year: 2023,
    imageSrcMockup: "/images/projectDetails/Planco/1.jpg",
    assignment:
      "Create a visually captivating User Interface for PlanCo as part of a design competition, inspiring users to discover unique, off-the-beaten-path travel experiences.",
    objectives:
      "Elevate PlanCo’s brand as an upscale outdoor travel agency by using immersive visuals, modern layouts, and a refined user experience that sparks curiosity and exploration.",
    projectIncludes: [
      "Design Ideation",
      "Design Direction",
      "Final Design",
    ],
    imageSrcUi: [
      "/images/projectDetails/Planco/2.jpg",
      "/images/projectDetails/Planco/3.jpg",
      "/images/projectDetails/Planco/4.jpg",
      "/images/projectDetails/Planco/5.jpg",
      "/images/projectDetails/Planco/6.jpg",
      "/images/projectDetails/Planco/7.jpg",
    ],
    nextImage: "/images/projectDetails/Planco/8.jpg",
    nextTitle: "Chatgpt",
    nextDescription: "Chatgpt AI conversational language",
  },
  {
    title: "Chatgpt",
    description:
      "ChatGPT is an AI conversational model developed by OpenAI, designed to understand and generate human-like text based on the input it receives.",
    role: "Designer",
    tech: "Figma",
    link: "bit.ly/4lis1zl",
    year: 2023,
    imageSrcMockup: "/images/projectDetails/Chatgpt/1.jpg",
    assignment:
      "Redesign the 2023 ChatGPT landing page to improve clarity, visual hierarchy, and conversion. Focus on clear value messaging, scannable features, persuasive CTAs and accessibility, while keeping brand consistency.",
    objectives:
      "Demonstrate how a research-driven redesign can enhance usability, guide users to primary actions, and create a modern, engaging experience that boosts user comprehension and engagement.",
    projectIncludes: [
      "Design Ideation",
      "Design Direction",
      "Final Design",
    ],
    imageSrcUi: [
      "/images/projectDetails/Chatgpt/2.jpg",
      "/images/projectDetails/Chatgpt/3.jpg",
      "/images/projectDetails/Chatgpt/4.jpg",
    ],
    nextImage: "/images/projectDetails/Chatgpt/5.jpg",
    nextTitle: "Cryptomillions",
    nextDescription: "Decentralized crypto-based lottery platform",
  },
];
