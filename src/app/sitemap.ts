import type { MetadataRoute } from "next";

import { projectDetails } from "../../constants/projectDetails";
import { SITE_URL } from "../../constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/projects`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/book-a-meeting`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projectDetails.map(
    ({ title }) => ({
      url: `${SITE_URL}/projects/${encodeURIComponent(title)}`,
      changeFrequency: "yearly",
      priority: 0.8,
    })
  );

  return [...staticRoutes, ...projectRoutes];
}
