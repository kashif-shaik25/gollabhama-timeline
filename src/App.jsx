import HeroSection from './components/HeroSection'
import TimelineManager from './components/TimelineManager'

const App = () => {
  return (
    <>
      <HeroSection />

      <main id="timeline">
        {/* Section intro */}
        <div className="max-w-5xl mx-auto px-8 md:px-16 pt-24 pb-4">
          <div className="border-l-2 border-brand-primary pl-6">
            <span className="font-body font-medium text-xs uppercase tracking-[0.2em] text-brand-primary block mb-2">
              The Process
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-[#0A0A0A] leading-tight mb-4">
              Topic · Issues · Solution
            </h2>
            <p className="font-body font-light text-base text-[#0A0A0A]/60 max-w-xl leading-loose">
              Click any node to explore the research, insights, and design decisions behind each phase of the thinking process.
            </p>
          </div>
        </div>

        <TimelineManager />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#0A0A0A]/10 py-12 mt-8">
        <div className="max-w-5xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="font-display font-black text-lg text-[#0A0A0A]">Gollabhama</p>
            <p className="font-body font-light text-xs text-[#0A0A0A]/40 tracking-wide mt-0.5">
              A Design Thinking Journey
            </p>
          </div>
          <p className="font-body font-light text-xs text-[#0A0A0A]/30 tracking-wide">
            © 2025 — Gollabhama Weaver Research
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
