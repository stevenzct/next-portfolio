import Footer from "../../components/Footer";
import About from "../../components/hompage/About";
import Certifications from "../../components/hompage/Certifications";
import Experience from "../../components/hompage/Experience";
import Hero from "../../components/hompage/Hero";
import Pricing from "../../components/hompage/Pricing";
import Projects from "../../components/hompage/Projects";
import SwiperUi from "../../components/hompage/SwiperUi";
import TechSwiper from "../../components/hompage/TechSwiper";
import { headers } from "next/headers";
import {
  detectCountryFromHeaders,
  getCurrencyForCountry,
} from "../../utils/currency";

export default async function Home() {
  const requestHeaders = await headers();
  const initialCountry = detectCountryFromHeaders(requestHeaders);
  const initialCurrency = getCurrencyForCountry(initialCountry);

  return (
    <div className="homepage-wrapper">
        <Hero/>
        <SwiperUi/>
        <Projects/>
        <Experience/>
        <About/>
        <TechSwiper/>
        <Certifications/>
        <Pricing
          initialCountry={initialCountry}
          initialCurrency={initialCurrency}
        />
        <Footer/>
    </div>
  );
}
