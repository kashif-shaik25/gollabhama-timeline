import gollabhamaRed from '../assets/images/gollabhama-saree1.png'

const HeroSection = () => {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0A]"
      aria-label="Hero — Gollabhama Design Thinking"
    >
      {/* Background image — editorial offset */}
      <div className="absolute inset-0 z-0">
        <img
          src={gollabhamaRed}
          alt="Traditional Gollabhama saree"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-16 py-32">
        {/* Overline */}
        <div className="animate-fade-up mb-6">
          <span className="font-body font-medium text-xs uppercase tracking-[0.25em] text-brand-primary">
            A Design Thinking Journey
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-black text-6xl md:text-8xl lg:text-[7rem] text-[#FAFAF8] leading-none tracking-tight mb-4 animate-fade-up"
          style={{ animationDelay: '100ms' }}
        >
          Golla
          <span className="text-brand-primary">bhama</span>
        </h1>

        {/* Brand rule */}
        <div
          className="w-24 h-0.5 bg-brand-primary mb-8 animate-fade-up"
          style={{ animationDelay: '200ms' }}
          aria-hidden="true"
        />

        {/* Subheadline */}
        <p
          className="font-body font-light text-lg md:text-xl text-[#FAFAF8]/70 max-w-lg leading-relaxed mb-12 animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          From the looms of Telangana to the global stage — an investigation into a heritage weaving tradition and the systemic forces that threaten its survival.
        </p>

        {/* Meta tags row */}
        <div
          className="flex flex-wrap gap-3 mb-16 animate-fade-up"
          style={{ animationDelay: '400ms' }}
        >
          {['Heritage Craft', 'Empathy Research', 'Systems Thinking', 'Prototyping'].map((tag) => (
            <span
              key={tag}
              className="font-body font-medium text-xs uppercase tracking-[0.12em] px-3 py-1.5 border border-[#FAFAF8]/20 text-[#FAFAF8]/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="animate-fade-up"
          style={{ animationDelay: '500ms' }}
        >
          <button
            onClick={scrollToTimeline}
            id="hero-scroll-cta"
            className="
              font-body font-medium text-xs uppercase tracking-[0.2em]
              text-[#FAFAF8] border border-[#FAFAF8]/30
              px-8 py-4
              hover:bg-brand-primary hover:border-brand-primary
              transition-all duration-300
              flex items-center gap-3
            "
          >
            Begin the Journey
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Animated scroll chevron */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#E42557"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Editorial corner accent */}
      <div
        className="absolute top-8 right-8 font-body font-light text-xs text-[#FAFAF8]/20 tracking-widest rotate-90 origin-right"
        aria-hidden="true"
      >
        Gollabhama Weaver — Design Thinking 2025
      </div>
    </header>
  )
}

export default HeroSection
