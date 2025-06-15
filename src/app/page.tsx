import Hero from "../../components/hompage/Hero";

export default function Home() {
  return (
    <div className="container-wrapper w-full">
      <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
        <Hero/>
      </div>
    </div>
  );
}
