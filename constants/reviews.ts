export type Review = {
  quote: string;
  attribution: string;
  context: string;
  imageSrc: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  profileUrl: string;
  platform: "facebook" | "linkedin";
  featured?: boolean;
};

// Keep testimonial wording aligned with each reviewer-approved quote before publishing.
export const reviews: Review[] = [
  {
    quote:
      "Steven designed and developed a professional website that showcases our construction projects clearly and strengthens our company’s credibility. The site is responsive, easy to manage, and simple for our team to update.",
    attribution: "RV Rioflorido",
    context: "Construction Company",
    imageSrc: "/images/reviews/rv-rioflorido-construction-profile.png",
    imageAlt: "RV Rioflorido Construction logo",
    imageFit: "contain",
    profileUrl: "https://web.facebook.com/profile.php?id=100083308930581",
    platform: "facebook",
    featured: true,
  },
  {
    quote:
      "I’ve worked with Steven and seen how quickly he adapts to new technologies. He has a strong eye for design, coding, learns fast, and is genuinely great to work with.",
    attribution: "Kludy Ramirez",
    context: "AI Ops Engineer",
    imageSrc: "/images/reviews/kludy-ramirez.jpg",
    imageAlt: "Kludy Ramirez",
    profileUrl: "https://www.linkedin.com/in/kludyramirez/?skipRedirect=true",
    platform: "linkedin",
  },
  {
    quote:
      "Steven is a skilled developer and designer who creates clean, user-friendly products and consistently delivers quality work.",
    attribution: "Martin Ditalo",
    context: "Full-Stack Software Engineer",
    imageSrc: "/images/reviews/martin-ditalo.jpg",
    imageAlt: "Martin Ditalo profile",
    profileUrl: "https://www.linkedin.com/in/martinditalo/",
    platform: "linkedin",
  },
  {
    quote:
      "If you need someone who can handle both website design and development, Steven is a reliable person to work with.",
    attribution: "Gerald Pagsuyoin",
    context: "Social Media & Full-Stack Developer",
    imageSrc: "/images/reviews/gerald-pagsuyoin.jpg",
    imageAlt: "Gerald Pagsuyoin profile",
    profileUrl: "https://www.linkedin.com/in/gerald-pagsuyoin-89964739b/",
    platform: "linkedin",
  },
];
