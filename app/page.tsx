import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Problem from "@/components/Problem";
import Insight from "@/components/Insight";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Trust />
      <Problem />
      <HowItWorks />
      <Testimonials />
      <Services />
      <FinalCTA />
      <Insight />
      <Footer />
    </main>
  );
}
