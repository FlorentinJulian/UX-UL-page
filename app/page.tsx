import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Faq from "./Components/Faq";
import Pricing from "./Components/Pricing";
import Cta from "./Components/Cta";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
        <Faq />
        <Pricing />
        <Cta />
        <Footer />
      </div>
    </>
  );
}
