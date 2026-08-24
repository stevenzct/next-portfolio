import { siteConfig } from "../constants/site";

const websiteId = `${siteConfig.url}/#website`;
const profilePageId = `${siteConfig.url}/#profile-page`;
const personId = `${siteConfig.url}/#person`;

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

const websiteEntity = {
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

const profilePageEntity = {
  "@type": "ProfilePage",
  "@id": profilePageId,
  url: siteConfig.url,
  name: siteConfig.title,
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  isPartOf: {
    "@id": websiteId,
  },
  mainEntity: {
    "@id": personId,
  },
};

export const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    websiteEntity,
    profilePageEntity,
    personEntity,
  ],
};
