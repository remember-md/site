import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import WhoIsThisFor from "../components/WhoIsThisFor";
import Comparison from "../components/Comparison";
import SocialProof from "../components/SocialProof";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <WhoIsThisFor />
      <Comparison />
      <SocialProof />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
