export type SocialButtonType = {
  buttonName: string;
  href: string;
  icon: string;
  iconAlt: string;
};

export const socialButtons: SocialButtonType[] = [
  {
    buttonName: "LinkedIn",
    href: "https://www.linkedin.com/in/cabugos-steven/",
    icon: "/images/icons/linkedin.png",
    iconAlt: "LinkedIn",
  },
  {
    buttonName: "GitHub",
    href: "https://github.com/stevenzct",
    icon: "/images/icons/github.png",
    iconAlt: "GitHub",
  },
  {
    buttonName: "Bento.me",
    href: "https://bento.me/steven-cabugos",
    icon: "/images/icons/bento.png",
    iconAlt: "Bento.me",
  },
  {
    buttonName: "Email",
    href: "mailto:stevencabugos138@gmail.com",
    icon: "/images/icons/email.png",
    iconAlt: "Email",
  },
];
