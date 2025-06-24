import Hero from "../../components/hompage/Hero";
import SwiperUi from "../../components/hompage/SwiperUi";
import Works from "../../components/hompage/Works";


export default function Home() {
  return (
    <div className="homepage-wrapper">
        <Hero/>
        <SwiperUi/>
        <Works/>
    </div>
  );
}
