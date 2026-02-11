import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Comparison from '@/components/Comparison'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <Comparison />
      <CTA />
    </main>
  )
}
