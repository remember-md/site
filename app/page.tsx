import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import BeforeAfter from "../components/BeforeAfter";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Generator from "../components/Generator";
import Platforms from "../components/Platforms";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <BeforeAfter />
      <HowItWorks />
      <Features />
      <Generator />
      <Platforms />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
