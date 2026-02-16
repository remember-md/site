import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import BeforeAfter from "../components/BeforeAfter";
import WhatYouGet from "../components/WhatYouGet";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Install from "../components/Install";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <BeforeAfter />
      <WhatYouGet />
      <HowItWorks />
      <Features />
      <Install />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
