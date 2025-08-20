export type ProjectDetails = {
  title: string;
  description: string;
  role: string;
  tech: string;
  link?: string;
  year: number;
  imageSrcMockup: string;
  assignment: string;
  objectives: string;
  projectIncludes: string[];
  imageSrcUi: string[];
  nextImage?: string;
  nextTitle?: string;
  nextDescription?: string;
  linkItems?: LinkItem[];
};

export type LinkItem = {
  label: string;
  href: string;
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
      "Full-stack Development",
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
    link: "",
    linkItems: [
      { label: "Desktop Design", href: "https://www.figma.com/proto/q9Kcb1KaBnfG6qbYS4ihhD/works?type=design&node-id=12-253&scaling=min-zoom&page-id=0%3A1" },
      { label: "Mobile Design", href: "https://www.figma.com/proto/q9Kcb1KaBnfG6qbYS4ihhD/works?type=design&node-id=12-409&scaling=min-zoom&page-id=0%3A1" },
    ],
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
  {
    title: "CryptoMillions",
    description:
      "An industry-first crypto lottery platform using Crypto Millions for secure, blockchain-verified draws. Users can win prizes like ETH, luxury holidays, and high-end tech through a seamless crypto-to-ticket experience.",
    role: "Designer",
    tech: "Figma",
    link: "bit.ly/3DLL5mu",
    year: 2023,
    imageSrcMockup: "/images/projectDetails/CryptoMillions/1.jpg",
    assignment:
      "Design a three-page platform that showcases the crypto lottery, enables seamless conversion of Crypto Millions Coin into tickets, and offers users a choice of exciting prize draws.",
    objectives:
      "Create an engaging UI, promote mega prizes, ensure blockchain transparency, and encourage repeat participation.",
    projectIncludes: [
      "Design Ideation",
      "Prototyping",
      "Design Direction",
      "Final Design",
    ],
    imageSrcUi: [
      "/images/projectDetails/CryptoMillions/2.jpg",
      "/images/projectDetails/CryptoMillions/3.jpg",
      "/images/projectDetails/CryptoMillions/4.jpg",
      "/images/projectDetails/CryptoMillions/5.jpg",
    ],
    nextImage: "/images/projectDetails/CryptoMillions/6.jpg",
    nextTitle: "ViewMinder",
    nextDescription: "Enhances dark, low-quality videos for clearer insights",
  },
  {
    title: "ViewMinder",
    description:
      "ViewMinder is a Python-based video enhancement desktop application that improves visibility and detail in low-light or poor-quality footage. By enhancing videos for clearer identification of people, objects, and events, it eliminates a common bottleneck in surveillance and data analysis.",
    role: "Designer and Developer",
    tech: "Figma, Python, C#,  MySQL, Guna UI",
    link: "",
    linkItems: [
      { label: "Desktop App Design", href: "https://www.figma.com/proto/Oq8wgtyHTeHXpurXA4GItR/viewminder?type=design&node-id=479-1149&t=r0UFpZjKL9L7WrE8-0&scaling=min-zoom&page-id=476%3A1109&starting-point-node-id=479%3A1114" },
      { label: "System Flow", href: "https://www.figma.com/design/Oq8wgtyHTeHXpurXA4GItR/viewminder?node-id=476-1109&t=rSs3fie0GjN20E6Y-0" },
      { label: "Github Link", href: "https://github.com/stevenzct/viewminder1.5.0/tree/main" },
    ],
    year: 2023,
    imageSrcMockup: "/images/projectDetails/ViewMinder/1.jpg",
    assignment:
      "Design and develop the frontend of ViewMinder, contribute to backend implementation, and create the project’s wireframes and interactive prototypes.",
    objectives:
      "Deliver a functional  video enhancement application that improves low-quality footage while providing a clean and user-friendly interface for seamless use across surveillance and content-analysis scenarios",
    projectIncludes: [
      "Design Ideation",
      "Design Direction",
      "Final Design",
      "Full-stack Development",
    ],
    imageSrcUi: [
      "/images/projectDetails/ViewMinder/2.jpg",
      "/images/projectDetails/ViewMinder/3.jpg",
      "/images/projectDetails/ViewMinder/4.jpg",
      "/images/projectDetails/ViewMinder/5.jpg",
      "/images/projectDetails/ViewMinder/6.jpg",
      "/images/projectDetails/ViewMinder/7.jpg",
      "/images/projectDetails/ViewMinder/8.jpg",
      "/images/projectDetails/ViewMinder/9.jpg",
      "/images/projectDetails/ViewMinder/10.jpg",
      "/images/projectDetails/ViewMinder/11.jpg",
      "/images/projectDetails/ViewMinder/12.jpg",
    ],
    nextImage: "/images/projectDetails/ViewMinder/13.jpg",
    nextTitle: "Website Performance",
    nextDescription: "Monitors request latency and server issues, showing real-time errors",
  },
  {
    title: "Website Performance",
    description: "Website Performance monitors request latency, detects delays or non-responsive behaviour, and displays any encountered errors.",
    role: "Designer and Developer",
    tech: "Vue.js, SCSS",
    link: "",
    linkItems: [
      { label: "Sitemaps and Wireframes", href: "https://www.figma.com/design/FqPLS9Qzb4sT60yzJM4i4j/website-performance?node-id=0-1&p=f&t=NuchjoEY8NNPJAq3-0" },
      { label: "Deskstop and Mobile Design", href: "https://www.figma.com/design/FqPLS9Qzb4sT60yzJM4i4j/website-performance?node-id=4-2&p=f&t=7vH1xUWwS9KUEWds-0" },
    ],
    year: 2025,
    imageSrcMockup: "/images/projectDetails/WebsitePerformance/1.jpg",
    assignment:
      "Design and build the Website Performance system from the ground up, including the creation of sitemaps, wireframes, and responsive UI designs for both desktop and mobile, while also contributing to the frontend development.",
    objectives:
      "Deliver a functional and user-friendly web application that accurately measures website request latency, detects delays or non-responsive behaviour, and clearly displays any encountered errors to help users identify and troubleshoot performance issues.",
    projectIncludes: [
      "Design Ideation",
      "Design Direction",
      "Prototyping",
      "Final Design",
    ],
    imageSrcUi: [
      "/images/projectDetails/WebsitePerformance/2.jpg",
      "/images/projectDetails/WebsitePerformance/3.jpg",
      "/images/projectDetails/WebsitePerformance/4.jpg",
      "/images/projectDetails/WebsitePerformance/5.jpg",
      "/images/projectDetails/WebsitePerformance/6.jpg",
      "/images/projectDetails/WebsitePerformance/7.jpg",
    ],
    nextImage: "",
    nextTitle: "",
    nextDescription: "",
  },
];
