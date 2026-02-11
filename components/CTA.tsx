export default function CTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-t from-purple-900/20 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Start Building Your Second Brain</h2>
        <p className="text-xl text-gray-300 mb-8">Free. Open source. Privacy-first.</p>
        <a 
          href="https://github.com/remember-md/remember"
          className="inline-block px-12 py-5 bg-purple-600 hover:bg-purple-700 rounded-lg text-xl font-semibold transition"
        >
          Get Started →
        </a>
      </div>
      <footer className="mt-24 text-center text-gray-500 text-sm">
        <p>MIT License • <a href="https://github.com/remember-md" className="hover:text-purple-400">GitHub</a></p>
      </footer>
    </section>
  )
}
