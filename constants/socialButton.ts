import { socialProfiles } from "./site";

export type SocialButtonType = {
  buttonName: string;
  href: string;
  icon: string;
  iconAlt: string;
};

export const socialButtons: SocialButtonType[] = [
  {
    buttonName: "LinkedIn",
    href: socialProfiles.linkedin,
    icon: "/images/icons/linkedin.png",
    iconAlt: "LinkedIn",
  },
  {
    buttonName: "GitHub",
    href: socialProfiles.github,
    icon: "/images/icons/github.png",
    iconAlt: "GitHub",
  },
  {
    buttonName: "Facebook",
    href: socialProfiles.facebook,
    icon: "/images/icons/facebook.png",
    iconAlt: "Facebook",
  },
];
