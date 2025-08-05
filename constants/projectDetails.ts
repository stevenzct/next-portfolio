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
    imageSrcTypography: string;
    imageSrcColorSystem: string;
    imageSrcUi: string[];
};

export const projectDetails: ProjectDetails[] = [
    {
        title: "RV Rioflorido",
        description: "RV Rioflorido is a civil engineer-led construction company in the Philippines, specializing in residential and commercial projects with modern finishes and comprehensive services",
        role: "Designer, Developer",
        tech: "Figma, Vue.js, Nuxt.js, Tailwind",
        link: "rvriofloridocon.com",
        year: 2025,
        imageSrcMockup: "/images/projectDetails/Rioflorido/RiofloridoMockup.jpg",
        assignment: "Designed and developed a clean, modern website for RVRioFlorido Construction to showcase their projects and services. The site delivers a professional, minimalist experience that reflects the company’s credibility and expertise in residential and commercial construction",
        objectives: "To build a digital presence that reflects RVRioFlorido Construction’s professionalism combining clean design with solid frontend architecture for a seamless, trustworthy user experience across all devices.",
        projectIncludes: [
            "Design Ideation",
            "Design Direction",
            "Final Design",
            "Frontend Development",
        ],
        imageSrcTypography: "/images/projectDetails/Rioflorido/Typography.jpg",
        imageSrcColorSystem: "/images/projectDetails/Rioflorido/ColorSystem.jpg",
        imageSrcUi: [
            "/images/projectDetails/Rioflorido/1.jpg",
            "/images/projectDetails/Rioflorido/2.jpg",
            "/images/projectDetails/Rioflorido/3.jpg",
            "/images/projectDetails/Rioflorido/4.jpg",
        ],
    },
];
