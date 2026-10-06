import type { Metadata } from "next";

import { siteConfig } from "../constants/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

export const createPageMetadata = ({
  title,
  description,
  path,
  image = siteConfig.socialImage,
  imageAlt = siteConfig.socialImageAlt,
  noIndex = false,
}: PageMetadataOptions): Metadata => {
  const socialTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      images: [
        {
          url: image,
          alt: imageAlt,
          ...(image === siteConfig.socialImage
            ? {
                width: siteConfig.socialImageWidth,
                height: siteConfig.socialImageHeight,
                type: siteConfig.socialImageType,
              }
            : {}),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {}),
  };
};
