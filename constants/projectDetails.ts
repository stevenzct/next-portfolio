export type ProjectDetails = {
  title: string;
  description: string;
  role: string;
  tech: string;
  linkItem?: LinkItem;
  year: number;
  imageSrcMockup: string;
  assignment: string;
  objectives: string;
  projectIncludes: string[];
  imageSrcUi: Array<string | ProjectGalleryImage>;
  nextImage?: string;
  nextTitle?: string;
  nextDescription?: string;
  linkItems?: LinkItem[];
};

export type ProjectGalleryImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  label?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  points?: Array<{
    title: string;
    description: string;
  }>;
};

export type LinkItem = {
  label: string;
  href: string;
};

export const projectDetails: ProjectDetails[] = [
  {
    title: "Payso Cashier",
    description: "H5-based cashier product designed to facilitate digital payment processing, merchant transactions, and streamlined cashier operations for businesses.",
    role: "UI/UX Designer and QA",  
    tech: "Figma", 
    year: 2025,
    imageSrcMockup: "/images/projectDetails/PaysoCashier/PaysoCashierMockup.png",
    assignment:
      "Responsible for designing and validating the UI/UX of the Payso Cashier H5 product, focusing on merchant payment flows, responsive interfaces, and design-to-development quality assurance.",
    objectives:
      "To design and validate a seamless, reliable, and user-friendly H5 cashier system that enables merchants to efficiently process digital payments with minimal friction, ensuring a smooth end-to-end transaction experience across mobile devices.",
    projectIncludes: [
      "UI/UX Design",
      "Quality Assurance",
      "Interaction & Usability",
      "Collaboration Work",
    ],
    imageSrcUi: [
      {
        src: "/images/projectDetails/PaysoCashier/1.png",
        width: 2400,
        height: 4588,
        alt: "Bilingual Payso Cashier product process and workflow diagrams",
        label: "Product strategy",
        title: "Product Process",
        subtitle: "Planning before pixels.",
        description:
          "Product Manager Ms. Fayalina Chen created and led planning, system flow, page flow diagram and wireframing, shaping the shared product direction. English and Chinese source notes supported collaboration and handoff.",
      },
      {
        src: "/images/projectDetails/PaysoCashier/pageflow-diagram.png",
        width: 2400,
        height: 1958,
        alt: "Payso Cashier page flow across payment methods and merchant callbacks",
        label: "Experience architecture",
        title: "Page Flow Diagram",
        subtitle: "One map for every payment route.",
        description:
          "Mapped payment methods, confirmations, redirects, and merchant callbacks for product and engineering.",
      },
      {
        src: "/images/projectDetails/PaysoCashier/2.png",
        width: 2400,
        height: 3702,
        alt: "Bilingual low-fidelity Payso Cashier wireframes and transaction states",
        label: "Interaction structure",
        title: "Wireframes",
        subtitle: "Testing structure before styling.",
        description:
          "Ms. Fayalina Chen created and validated the hierarchy, payment flows, and transaction states through low-fidelity wireframes, allowing me to focus on the UI’s visual direction.",
      },
      {
        src: "/images/projectDetails/PaysoCashier/3.png",
        width: 2400,
        height: 2536,
        alt: "Payso brand colors and five cashier interface style explorations",
        label: "Visual direction",
        title: "UI Exploration",
        subtitle: "Comparing brand-led directions.",
        description:
          "Compared Payso brand colors and layouts with the product team to select the best user experience.",
      },
      {
        src: "/images/projectDetails/PaysoCashier/4.png",
        width: 2400,
        height: 5772,
        alt: "Final Payso Cashier Style 5 screens and payment states",
        label: "Final experience",
        title: "Final Design",
        subtitle: "Why Style 5 won.",
        description: "Selected for three practical reasons.",
        points: [
          {
            title: "Color adaptability",
            description:
              "Soft pink better matched the preferences of the Philippine target market.",
          },
          {
            title: "Visual comfort",
            description:
              "Balanced contrast kept screens soft while emphasizing amounts and payment options.",
          },
          {
            title: "Brand perception",
            description:
              "The warmer palette felt safer and more approachable than cool purple during payment.",
          },
        ],
      },
      {
        src: "/images/projectDetails/PaysoCashier/5.png",
        width: 2398,
        height: 2362,
        alt: "Figma Dev Mode annotations for the Payso Cashier interface",
        label: "Developer handoff",
        title: "Figma Dev Mode Annotation",
        subtitle: "Clear specifications for handoff.",
        description:
          "Documented spacing, color, typography, sizing, weight, and styles for accurate implementation.",
      },
      {
        src: "/images/projectDetails/PaysoCashier/6.png",
        width: 1672,
        height: 941,
        alt: "Payso Cashier Phase 2 notice for upcoming payment methods",
      },
    ],
    nextImage: "/images/projectDetails/PaysoCashier/nextImage.png",
    nextTitle: "Payso Merchant",
    nextDescription: "Payso Merchant h5 mobile product",
     linkItem: {
      label: "",
      href: ""
    },
    linkItems: [
      { label: "Payso Cashier UI", href: "https://www.figma.com/design/DTECkf9eQwa5P9mpfENox4/Payso-Cashier--Copy-?node-id=0-1&p=f&t=TusKU9HojoZdGuXk-0" },
      { label: "User Flow", href: "https://www.figma.com/design/DTECkf9eQwa5P9mpfENox4/Payso-Cashier--Copy-?node-id=2662-667&p=f&t=TusKU9HojoZdGuXk-0" },
      { label: "Design System", href: "https://www.figma.com/design/DTECkf9eQwa5P9mpfENox4/Payso-Cashier--Copy-?node-id=41-241&p=f" },
    ],
  },
    {
    title: "Payso Merchant",
    description: "H5 mobile product focused on merchant payment workflows, responsive mobile experiences, and seamless transaction interfaces.",
    role: "UI/UX Designer and QA",  
    tech: "Figma", 
    year: 2026,
    imageSrcMockup: "/images/projectDetails/PaysoMerchant/PaysoMerchantMockup.png",
    assignment:
      "Responsible for designing the UI/UX of Payso Merchant, an H5 mobile payment product. Created responsive mobile layouts, improved payment flows, and supported QA testing to ensure usability, functionality, and visual consistency across devices.",
    objectives:
      "To design a clear, responsive, and user-friendly H5 mobile payment experience that helps merchants manage payment workflows smoothly while maintaining strong visual consistency with the Payso brand.",
    projectIncludes: [
      "UI/UX Design",
      "Quality Assurance",
      "Interaction & Usability",
      "Collaboration Work",
    ],
    imageSrcUi: [
      {
        src: "/images/projectDetails/PaysoMerchant/1.png",
        width: 2400,
        height: 3222,
        alt: "Bilingual Payso Merchant product and page flow diagrams",
        label: "Experience architecture",
        title: "Page Flow Diagram",
        subtitle: "One map for the merchant journey.",
        description:
          "Product Manager Ms. Fayalina Chen created and shaped the product flow, page diagrams, and wireframes. English and Chinese notes supported collaboration.",
      },
      {
        src: "/images/projectDetails/PaysoMerchant/22.png",
        width: 2400,
        height: 4942,
        alt: "Payso Merchant low-fidelity wireframes and transaction states",
        label: "Interaction structure",
        title: "Wireframes",
        subtitle: "Testing structure before styling.",
        description:
          "Ms. Fayalina Chen created and validated hierarchy, payment flows, and transaction states, allowing me to focus on visual direction.",
      },
      {
        src: "/images/projectDetails/PaysoMerchant/3.png",
        width: 2400,
        height: 8584,
        alt: "Final Payso Merchant screens using the shared Payso color palette",
        label: "Final experience",
        title: "Final Design",
        subtitle: "One visual system across Payso.",
        description:
          "Since Payso Merchant and Payso Cashier are connected products, the Product Department chose the same colour palette to create a consistent, comfortable, and easy-to-navigate experience.",
      },
    ],
    nextImage: "/images/projectDetails/PaysoGraphics/image1.png",
    nextTitle: "Payso Graphics",
    nextDescription: "Sales materials, trifolds, and banners",
     linkItem: {
      label: "",
      href: ""
    },
    linkItems: [
      { label: "Payso Merchant UI", href: "https://www.figma.com/design/hBdm1zdfThaZss1TAjgvbw/Payso-Merchant?node-id=0-1&t=l1Z5j1vJDdYchP1F-1" },
      { label: "User Flow", href: "https://www.figma.com/design/hBdm1zdfThaZss1TAjgvbw/Payso-Merchant?node-id=919-1154&t=9kXUgcwNXIqDy88D-1" },
      { label: "Design System", href: "https://www.figma.com/design/hBdm1zdfThaZss1TAjgvbw/Payso-Merchant?node-id=298-702&p=f&t=s9BW3z4ZJJJLEVqS-0" },
    ],
  },
   {
    title: "Payso Graphics",
    description: "Sales materials, trifolds, and banners.",
    role: "Graphics Designer",  
    tech: "Figma, Adobe XD, Photoshop, AI Tools", 
    year: 2026,
    imageSrcMockup: "/images/projectDetails/PaysoGraphics/image1.png",
    assignment:
      "Responsible for creating Payso graphic design assets such as banners, trifolds, and sales materials to support product promotions and sales activities.",
    objectives:
      "To create clear and visually appealing graphic design assets for Payso that support product promotions, sales activities, and product launch initiatives.",
    projectIncludes: [
      "Graphic Design",
      "Product Promotional Assets",
      "Collaboration Work",
      "Sales Materials",
    ],
    imageSrcUi: [
      "/images/projectDetails/PaysoGraphics/image2.png",
      "/images/projectDetails/PaysoGraphics/image3.png",
      "/images/projectDetails/PaysoGraphics/image4.png",
      "/images/projectDetails/PaysoGraphics/image5.png",
      "/images/projectDetails/PaysoGraphics/image6.png",
      "/images/projectDetails/PaysoGraphics/image7.png",
      "/images/projectDetails/PaysoGraphics/image8.png",
      "/images/projectDetails/PaysoGraphics/image9.png",
    ],
    nextImage: "/images/projectDetails/PaysoMerchant/nextImage.webp",
    nextTitle: "RV Rioflorido",
    nextDescription: "Quality-driven construction company",
     linkItem: {
      label: "Payso Graphics Figma",
      href: "https://www.figma.com/design/mGdxx2x94Z1Hk0zpmin2FC/Payso-freestyle2?node-id=187-100&t=YzuuqRtduYtIaR8D-0"
    },
  },
  {
    title: "RV Rioflorido",
    description:
      "RV Rioflorido is a civil engineer-led construction company in the Philippines, specializing in residential and commercial projects with modern finishes and comprehensive services.",
    role: "Designer, Developer",
    tech: "Figma, Vue.js, Nuxt.js, Tailwind, Supabase",
    linkItem: {
      label: "rvriofloridocon.com",
      href: "https://rvriofloridocon.com"
    },
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
      "Full-stack Development",
    ],
    imageSrcUi: [
      "/images/projectDetails/Rioflorido/projectBrief.jpg",
      "/images/projectDetails/Rioflorido/sitemaps.jpg",
      "/images/projectDetails/Rioflorido/wireframe.jpg",
      "/images/projectDetails/Rioflorido/Typography.jpg",
      "/images/projectDetails/Rioflorido/ColorSystem.jpg",
      "/images/projectDetails/Rioflorido/1.jpg",
      "/images/projectDetails/Rioflorido/2.jpg",
      "/images/projectDetails/Rioflorido/3.jpg",
      "/images/projectDetails/Rioflorido/4.jpg",
      "/images/projectDetails/Rioflorido/5.jpg",
      "/images/projectDetails/Rioflorido/6.jpg",
      "/images/projectDetails/Rioflorido/7.png",
      "/images/projectDetails/Rioflorido/8.png",
      "/images/projectDetails/Rioflorido/9.png",
      "/images/projectDetails/Rioflorido/10.png",
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
    linkItem: {
      label: "laprasca.pages.dev",
      href: "https://laprasca.pages.dev"
    },

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
      "/images/projectDetails/Laprasca/projectBrief.jpg",
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
    linkItem: {
      label: "",
      href: ""
    },
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
    linkItem: {
      label: "Desktop Design",
      href: "https://www.figma.com/proto/q9Kcb1KaBnfG6qbYS4ihhD/works?node-id=2-6&t=CgIw7yQPRNAeYcV5-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
    },
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
    linkItem: {
      label: "Desktop Design",
      href: "https://www.figma.com/proto/Nqvz88k6subNUiaC1wPHbQ/Untitled?type=design&node-id=56-2&t=KBUQR8Q15RPXmMIW-0&scaling=scale-down-width&page-id=0:1&starting-point-node-id=56:2"
    },
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
      "ViewMinder is a Python-based video enhancement desktop application thesis project that improves visibility and detail in low-light or poor-quality footage. By enhancing videos for clearer identification of people, objects, and events, it eliminates a common bottleneck in surveillance and data analysis.",
    role: "Designer and Developer",
    tech: "Figma, Python, C#,  MySQL, Guna UI",
    linkItem: {
      label: "",
      href: ""
    },
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
    linkItem: {
      label: "",
      href: ""
    },
    linkItems: [
      { label: "Sitemaps and Wireframes", href: "https://www.figma.com/design/FqPLS9Qzb4sT60yzJM4i4j/website-performance?node-id=0-1&p=f&t=NuchjoEY8NNPJAq3-0" },
      { label: "Desktop and Mobile Design", href: "https://www.figma.com/design/FqPLS9Qzb4sT60yzJM4i4j/website-performance?node-id=4-2&p=f&t=7vH1xUWwS9KUEWds-0" },
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
      "Frontend Development"
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
