import { useRef, useEffect } from 'react'

const ScrollReveal = ({ children, threshold = 0.15, delay = 0 }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.classList.remove('opacity-0')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('animate-fade-up')
            el.classList.remove('opacity-0')
          }, delay)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, delay])

  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  )
}

export default ScrollReveal
