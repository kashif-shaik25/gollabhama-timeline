import ScrollReveal from './ScrollReveal'
import SectionLabel from './SectionLabel'

const dotColors = {
  topic:    'bg-brand-primary',
  issues:   'bg-brand-primary',
  solution: 'bg-brand-success',
}

const ringColors = {
  topic:    'ring-brand-primary',
  issues:   'ring-brand-interaction',
  solution: 'ring-brand-success',
}

const pingColors = {
  topic:    'bg-brand-primary',
  issues:   'bg-brand-interaction',
  solution: 'bg-brand-success',
}

const accentColors = {
  topic:    'text-brand-primary',
  issues:   'text-brand-interaction',
  solution: 'text-brand-success',
}

const borderAccents = {
  topic:    'border-brand-primary',
  issues:   'border-brand-interaction',
  solution: 'border-brand-success',
}

// Alternate layout: even nodes → text left / image right; odd → image left / text right
const TimelineNode = ({ node, isActive, onNodeClick, index }) => {
  const isRight = index % 2 !== 0   // text on right side on desktop
  const dotBg      = dotColors[node.phase]
  const ringColor  = ringColors[node.phase]
  const pingBg     = pingColors[node.phase]
  const accentText = accentColors[node.phase]
  const borderAccent = borderAccents[node.phase]

  return (
    <ScrollReveal threshold={0.08} delay={index * 80}>
      <article className="relative py-10 md:py-14">

        {/* ── Mobile: left-aligned dot ── */}
        <div
          className="md:hidden absolute left-8 top-12 -translate-x-1/2 z-10"
          aria-hidden="true"
        >
          <div className={`relative w-4 h-4 ${dotBg} rounded-full`}>
            {isActive && (
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pingBg} opacity-75`} />
            )}
          </div>
        </div>

        {/* ── Desktop: centered dot on spine ── */}
        <div
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          aria-hidden="true"
        >
          <div className={`relative w-5 h-5 ${dotBg} rounded-full`}>
            {isActive && (
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pingBg} opacity-75`} />
            )}
          </div>
        </div>

        {/* ── Card: editorial split layout ── */}
        <button
          id={`node-btn-${node.id}`}
          onClick={() => onNodeClick(node)}
          className={`
            w-full text-left cursor-pointer group
            ml-14 md:ml-0
            focus-visible:outline-none focus-visible:ring-2 ${ringColor} focus-visible:ring-offset-4
          `}
          aria-label={`Open details for ${node.title}`}
        >
          {/*
            Desktop two-column grid.
            isRight = text on right  → [image | gap | text]
            !isRight = text on left  → [text | gap | image]
          */}
          <div className={`
            md:grid md:grid-cols-[1fr_80px_1fr] md:items-center
            border border-[#0A0A0A]/8
            hover:border-[#0A0A0A]/20
            hover:shadow-lg
            transition-all duration-400
            overflow-hidden
            bg-[#FAFAF8]
            group-hover:bg-white
          `}>

            {/* Image panel — order swaps via CSS order */}
            <figure
              className={`
                relative overflow-hidden
                h-52 md:h-80
                ${isRight ? 'md:order-1' : 'md:order-3'}
                order-1
              `}
            >
              {node.imageSrc && (
                <img
                  src={node.imageSrc}
                  alt={node.mediaCaption || node.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              {/* Phase color overlay strip at bottom of image */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${dotBg}`} aria-hidden="true" />
            </figure>

            {/* Center gap column — desktop only, holds the dot spacing */}
            <div className="hidden md:block md:order-2" aria-hidden="true" />

            {/* Text panel */}
            <div className={`
              p-6 md:p-8
              ${isRight ? 'md:order-3 md:text-left' : 'md:order-1 md:text-right'}
              order-2
              flex flex-col justify-center
            `}>
              {/* Year */}
              <span className={`block font-body font-medium text-xs uppercase tracking-[0.22em] mb-3 ${accentText}`}>
                — {node.year} —
              </span>

              {/* Phase label */}
              <div className={`mb-4 ${!isRight ? 'md:flex md:justify-end' : ''}`}>
                <SectionLabel phase={node.phase} />
              </div>

              {/* Title */}
              <h3 className={`
                font-display font-black text-xl md:text-2xl lg:text-3xl text-[#0A0A0A] leading-tight mb-2
                group-hover:${accentText} transition-colors duration-300
              `}>
                {node.title}
              </h3>

              {/* Subtitle */}
              <p className="font-body font-light text-sm text-[#0A0A0A]/55 italic mb-5">
                {node.subtitle}
              </p>

              {/* Tags */}
              <div className={`flex flex-wrap gap-2 mb-5 ${!isRight ? 'md:justify-end' : ''}`}>
                {node.tags?.map((tag) => (
                  <span
                    key={tag}
                    className={`font-body font-medium text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 border ${borderAccent} ${accentText} opacity-70`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read more */}
              <span className={`
                inline-flex items-center gap-2 font-body font-medium text-xs uppercase tracking-[0.15em]
                ${accentText} opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ${!isRight ? 'md:self-end' : ''}
              `}>
                Read More
                <span aria-hidden="true">→</span>
              </span>
            </div>

          </div>
        </button>
      </article>
    </ScrollReveal>
  )
}

export default TimelineNode
