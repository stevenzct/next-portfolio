import type { Metadata } from "next";
import localFont from "next/font/local";

import { Navbar } from "../../components/Navbar";
import { siteConfig } from "../../constants/site";
import "./globals.css";

const PPNeueMontrealBold = localFont({
  src: "../../public/fonts/PPNeueMontreal-Bold.otf",
  variable: "--font-NeueMontreal-bold",
});

const PPNeueMontrealBook = localFont({
  src: "../../public/fonts/PPNeueMontreal-Book.otf",
  variable: "--font-NeueMontreal-book",
});

const PPNeueMontrealMedium = localFont({
  src: "../../public/fonts/PPNeueMontreal-Medium.otf",
  variable: "--font-NeueMontreal-medium",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.socialImage,
        width: 2880,
        height: 1096,
        alt: `${siteConfig.name} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="only light" />
      </head>
      <body
        className={`${PPNeueMontrealBold.variable} ${PPNeueMontrealBook.variable} ${PPNeueMontrealMedium.variable}`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
