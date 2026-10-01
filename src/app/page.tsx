import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import About from "../../components/hompage/About";
import Certifications from "../../components/hompage/Certifications";
import Experience from "../../components/hompage/Experience";
import Hero from "../../components/hompage/Hero";
import HomepageMotion from "../../components/hompage/HomepageMotion";
import LifeBeyondWork from "../../components/hompage/LifeBeyondWork";
import Projects from "../../components/hompage/Projects";
import Reviews from "../../components/hompage/Reviews";
import { homepageJsonLd } from "../../utils/structuredData";
import "./homepage.css";

export default function Home() {
  return (
    <div className="homepage-wrapper">
      <JsonLd data={homepageJsonLd} />
      <HomepageMotion>
        <Hero />
        <Projects />
        <Reviews />
        <Experience />
        <About />
        <LifeBeyondWork />
        <Certifications />
      </HomepageMotion>
      <Footer />
    </div>
  );
}
