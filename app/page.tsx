import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Ecosystem from "../components/Ecosystem";
import Spec from "../components/Spec";
import HowItWorks from "../components/HowItWorks";
import ReferenceImplementation from "../components/ReferenceImplementation";
import ForToolMakers from "../components/ForToolMakers";
import Comparison from "../components/Comparison";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Ecosystem />
      <Spec />
      <HowItWorks />
      <ReferenceImplementation />
      <ForToolMakers />
      <Comparison />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
