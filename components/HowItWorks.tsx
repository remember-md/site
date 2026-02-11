export default function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-purple-900/10">
      <h2 className="text-5xl font-bold text-center mb-16">How It Works</h2>
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex items-start gap-6">
          <div className="text-4xl font-bold text-purple-400">1</div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Install the plugin</h3>
            <p className="text-gray-400">One command in Claude Code</p>
            <code className="block mt-2 p-3 bg-black/50 rounded">
              /plugin install remember@remember-md
            </code>
          </div>
        </div>
        
        <div className="flex items-start gap-6">
          <div className="text-4xl font-bold text-purple-400">2</div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Work normally</h3>
            <p className="text-gray-400">Claude Code sessions run as usual</p>
          </div>
        </div>
        
        <div className="flex items-start gap-6">
          <div className="text-4xl font-bold text-purple-400">3</div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Your brain builds itself</h3>
            <p className="text-gray-400">People, projects, notes, tasks — all auto-organized</p>
          </div>
        </div>
      </div>
    </section>
  )
}
