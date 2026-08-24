import { siteConfig } from "../constants/site";

const websiteId = `${siteConfig.url}/#website`;
const profilePageId = `${siteConfig.url}/about#profile-page`;
const personId = `${siteConfig.url}/about#person`;

const personEntity = {
  "@type": "Person",
  "@id": personId,
  name: siteConfig.name,
  alternateName: [...siteConfig.alternateNames],
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.profileImage}`,
  description: siteConfig.description,
  jobTitle: [...siteConfig.jobTitles],
  knowsAbout: [...siteConfig.specialties],
  homeLocation: {
    "@type": "Country",
    name: "Philippines",
  },
  sameAs: [...siteConfig.socialLinks],
  mainEntityOfPage: {
    "@id": profilePageId,
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  author: {
    "@id": personId,
  },
  publisher: {
    "@id": personId,
  },
  about: {
    "@id": personId,
  },
};

export const aboutProfileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": profilePageId,
      url: `${siteConfig.url}/about`,
      name: `About ${siteConfig.name}`,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      isPartOf: {
        "@id": websiteId,
      },
      mainEntity: {
        "@id": personId,
      },
    },
    personEntity,
  ],
};
