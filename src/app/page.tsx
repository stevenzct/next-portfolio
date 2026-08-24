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
import { websiteJsonLd } from "../../utils/structuredData";

export default function Home() {
  return (
    <div className="homepage-wrapper">
      <JsonLd data={websiteJsonLd} />
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
