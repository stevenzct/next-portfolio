import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import About from "../../components/hompage/About";
import Certifications from "../../components/hompage/Certifications";
import Experience from "../../components/hompage/Experience";
import Hero from "../../components/hompage/Hero";
import HomepageMotion from "../../components/hompage/HomepageMotion";
import Projects from "../../components/hompage/Projects";
import Reviews from "../../components/hompage/Reviews";
import TechSwiper from "../../components/hompage/TechSwiper";
import { siteConfig } from "../../constants/site";

export default function Home() {
  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: siteConfig.url,
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.profileImage}`,
      jobTitle: "Software Developer and UI/UX Designer",
      description: siteConfig.description,
      email: `mailto:${siteConfig.email}`,
      sameAs: siteConfig.socialLinks,
    },
  };

  return (
    <div className="homepage-wrapper">
      <JsonLd data={profilePageJsonLd} />
      <HomepageMotion>
        <Hero />
        <Projects />
        <Reviews />
        <Experience />
        <About />
        <TechSwiper />
        <Certifications />
      </HomepageMotion>
      <Footer />
    </div>
  );
}
