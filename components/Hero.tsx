export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-purple-900/20 to-black">
      <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
        Remember
      </h1>
      <p className="text-2xl md:text-3xl text-gray-300 mb-8 text-center max-w-3xl">
        Your AI agent&apos;s memory. <br />
        A Second Brain that builds itself.
      </p>
      <div className="flex gap-4">
        <a 
          href="https://github.com/remember-md/remember"
          className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
        >
          View on GitHub
        </a>
        <a 
          href="https://github.com/remember-md/remember#install"
          className="px-8 py-4 border border-purple-600 hover:bg-purple-600/10 rounded-lg font-semibold transition"
        >
          Install Plugin
        </a>
      </div>
    </section>
  )
}
