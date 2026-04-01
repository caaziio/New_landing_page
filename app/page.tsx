import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Problem from "@/components/Problem";
import Insight from "@/components/Insight";
import HowItWorks from "@/components/HowItWorks";
import ProductPreview from "@/components/ProductPreview";
import Services from "@/components/Services";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Trust />
      <Problem />
      <Insight />
      <HowItWorks />
      <ProductPreview />
      <Services />
      <FinalCTA />
      <Footer />
    </main>
  );
}
