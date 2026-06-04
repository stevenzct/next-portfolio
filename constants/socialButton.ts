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
    buttonName: "Facebook",
    href: "https://www.facebook.com/stevenzct/",
    icon: "/images/icons/facebook.png",
    iconAlt: "Facebook",
  },
];