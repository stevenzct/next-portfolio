import Experience from "../../components/hompage/Experience";
import Hero from "../../components/hompage/Hero";
import Projects from "../../components/hompage/Projects";
import SwiperUi from "../../components/hompage/SwiperUi";



export default function Home() {
  return (
    <div className="homepage-wrapper">
        <Hero/>
        <SwiperUi/>
        <Projects/>
        <Experience/>
    </div>
  );
}
