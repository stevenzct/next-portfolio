import Footer from "../../components/Footer";
import About from "../../components/hompage/About";
import Certifications from "../../components/hompage/Certifications";
import Experience from "../../components/hompage/Experience";
import Hero from "../../components/hompage/Hero";
import Projects from "../../components/hompage/Projects";
import SwiperUi from "../../components/hompage/SwiperUi";
import TechSwiper from "../../components/hompage/TechSwiper";



export default function Home() {
  return (
    <div className="homepage-wrapper">
        <Hero/>
        <SwiperUi/>
        <Projects/>
        <Experience/>
        <About/>
        <TechSwiper/>
        <Certifications/>
        <Footer/>
    </div>
  );
}
