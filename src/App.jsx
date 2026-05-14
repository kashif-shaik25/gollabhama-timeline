import { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import TimelineManager from './components/TimelineManager'
import AboutUs from './components/AboutUs'

const App = () => {
  const [view, setView] = useState('home')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [view])

  return (
    <div className="relative">
      {/* Fixed Navigation Toggle */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end p-8 pointer-events-none">
        <button 
          onClick={() => setView(view === 'home' ? 'about' : 'home')}
          className="pointer-events-auto font-body font-medium text-xs uppercase tracking-[0.2em] text-[#FAFAF8] bg-[#0A0A0A] border border-[#FAFAF8]/20 px-6 py-3 hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 shadow-xl"
        >
          {view === 'home' ? 'About Us' : 'Back to Journey'}
        </button>
      </nav>

      {view === 'home' ? (
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
        </>
      ) : (
        <AboutUs />
      )}

      {/* Footer */}
      <footer className="border-t border-[#0A0A0A]/10 py-12 mt-8">
        <div className="max-w-5xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="font-display font-black text-lg text-[#0A0A0A]">Gollabhama</p>
            <p className="font-body font-light text-xs text-[#0A0A0A]/40 tracking-wide mt-0.5">
              A Design Thinking Journey
            </p>
          </div>
          <div className="md:text-right flex flex-col items-start md:items-end">
            <button 
              onClick={() => setView(view === 'home' ? 'about' : 'home')}
              className="font-body font-medium text-xs text-[#0A0A0A]/50 tracking-wider hover:text-brand-primary transition-colors block mb-1 uppercase"
            >
              {view === 'home' ? 'Team / About Us' : 'Return to Journey'}
            </button>
            <p className="font-body font-light text-xs text-[#0A0A0A]/30 tracking-wide">
              Misfits - 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
