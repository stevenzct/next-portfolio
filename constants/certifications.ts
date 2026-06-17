export type Certification = {
  certificateName: string;
  Company: string;
  Issued: string;
  credentialType: "badge" | "certificate";
  logoSrc?: string;
  logoAlt?: string;
  imageSrc: string;
  imageAlt: string;
  certificateUrl?: string;
};

export const certifications: Certification[] = [
  {
    certificateName: "Postman API Fundamentals",
    Company: "Canvas Credentials (Badgr)",
    Issued: "Issued Jun 2025",
    credentialType: "badge",
    logoSrc: "/images/certifications/postman.png",
    logoAlt: "Postman Logo",
    imageSrc: "/images/certifications/postmanBadge.png",
    imageAlt: "Postman API Fundamentals Badge",
    certificateUrl: "https://badges.parchment.com/public/assertions/e81OqkRzQkqDXezmtvLnkQ?identity__email=stevencabugos138@gmail.com",
  },
  {
    certificateName: "Generative AI Fundamentals",
    Company: "Databricks",
    credentialType: "certificate",
    Issued: "Issued Jun 2025 · Expires Jun 2027",
    logoSrc: "/images/certifications/databricks.png",
    logoAlt: "Databricks Logo",
    imageSrc: "/images/certifications/genAi.png",
    imageAlt: "Generative AI Fundamentals Certificate",
    certificateUrl: "https://credentials.databricks.com/4116ce29-fd94-4cbe-b5e1-9fc8589f74d5#acc.yUac6Cr0",
  },
  {
    certificateName: "UI and UX Design Course",
    Company: "Codecademy",
    Issued: "Issued Jul 2024",
    credentialType: "certificate",
    logoSrc: "/images/certifications/codecademy.png",
    logoAlt: "Codecademy Logo",
    imageSrc: "/images/certifications/figma.png",
    imageAlt: "Figma Certificate",
    certificateUrl: "https://www.codecademy.com/profiles/Steven232/certificates/4ccef8d532484ea2aeec3b3b3dbb4f9c",
  },
  {
    certificateName: "Vue.js Course",
    Company: "Codecademy",
    Issued: "Issued Jul 2024",
    credentialType: "certificate",
    logoSrc: "/images/certifications/codecademy.png",
    logoAlt: "Codecademy Logo",
    imageSrc: "/images/certifications/vuejs.png",
    imageAlt: "Vue.js Certificate",
    certificateUrl: "https://www.codecademy.com/profiles/Steven232/certificates/db927a84bf4bba96bb285ee6a85466fc",
  },
];
