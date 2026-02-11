export default function Comparison() {
  return (
    <section className="py-24 px-4">
      <h2 className="text-5xl font-bold text-center mb-16">Choose What Fits</h2>
      <div className="max-w-5xl mx-auto overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-purple-900/50">
              <th className="text-left p-4">Feature</th>
              <th className="text-center p-4">Remember</th>
              <th className="text-center p-4">Mem.ai</th>
              <th className="text-center p-4">Reflect</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-purple-900/30">
              <td className="p-4">Price</td>
              <td className="text-center p-4 text-green-400">Free & Open Source</td>
              <td className="text-center p-4">Subscription</td>
              <td className="text-center p-4">Subscription</td>
            </tr>
            <tr className="border-b border-purple-900/30">
              <td className="p-4">Capture Rate</td>
              <td className="text-center p-4 text-green-400">100% (deterministic)</td>
              <td className="text-center p-4">~60% (AI inference)</td>
              <td className="text-center p-4">~60% (AI inference)</td>
            </tr>
            <tr className="border-b border-purple-900/30">
              <td className="p-4">Privacy</td>
              <td className="text-center p-4 text-green-400">Local-first</td>
              <td className="text-center p-4">Cloud</td>
              <td className="text-center p-4">Cloud</td>
            </tr>
            <tr>
              <td className="p-4">Offline</td>
              <td className="text-center p-4 text-green-400">✅</td>
              <td className="text-center p-4">❌</td>
              <td className="text-center p-4">❌</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
