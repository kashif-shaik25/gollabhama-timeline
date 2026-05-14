import { useEffect, useRef } from 'react'
import SectionLabel from './SectionLabel'

const headerColors = {
  topic:    'bg-brand-primary',
  issues:   'bg-brand-interaction',
  solution: 'bg-brand-success',
}

const DetailModal = ({ node, onClose }) => {
  const closeBtnRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    // Store previously focused element
    previousFocusRef.current = document.activeElement

    // Focus close button on open
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus()
    }, 50)

    // Escape key listener
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)

    // Lock body scroll
    document.body.style.overflow = 'hidden'

    return () => {
      clearTimeout(timer)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      // Return focus to originating element
      previousFocusRef.current?.focus()
    }
  }, [onClose])

  const headerBg = headerColors[node.phase] || headerColors.topic

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0A0A0A]/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <article className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FAFAF8] animate-scale-in shadow-2xl">
        {/* Header bar */}
        <div className={`${headerBg} h-1.5 w-full`} aria-hidden="true" />

        {/* Close button */}
        <div className="flex justify-end px-6 pt-4">
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="font-body font-medium text-xs uppercase tracking-[0.18em] text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors duration-200 flex items-center gap-2 group"
            aria-label="Close modal"
          >
            <span>Close</span>
            <span
              className="inline-block w-5 h-5 border border-current flex items-center justify-center text-base leading-none group-hover:bg-[#0A0A0A] group-hover:text-[#FAFAF8] transition-all duration-200"
              aria-hidden="true"
            >
              ×
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-10 pt-4">
          {/* Phase label */}
          <div className="mb-4">
            <SectionLabel phase={node.phase} />
          </div>

          {/* Title */}
          <h2
            id="modal-title"
            className="font-display font-black text-3xl md:text-4xl text-[#0A0A0A] leading-tight mb-2"
          >
            {node.title}
          </h2>

          {/* Subtitle */}
          <p className="font-body font-light text-base text-[#0A0A0A]/60 mb-6 italic">
            {node.subtitle}
          </p>

          {/* Divider */}
          <div className={`${headerBg} h-px w-16 mb-6`} aria-hidden="true" />

          {/* Image */}
          {node.imageSrc && (
            <figure className="mb-6 -mx-8">
              <img
                src={node.imageSrc}
                alt={node.mediaCaption || node.title}
                className="w-full object-cover max-h-72"
              />
              {node.mediaCaption && (
                <figcaption className="font-body font-light text-xs text-[#0A0A0A]/50 px-8 pt-2 italic">
                  {node.mediaCaption}
                </figcaption>
              )}
            </figure>
          )}

          {/* Description */}
          <p className="font-body font-light text-base leading-[1.85] text-[#0A0A0A]/80 mb-8">
            {node.description}
          </p>

          {/* Tags */}
          {node.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2" aria-label="Tags">
              {node.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body font-medium text-xs uppercase tracking-[0.12em] px-3 py-1 border border-[#0A0A0A]/20 text-[#0A0A0A]/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  )
}

export default DetailModal
