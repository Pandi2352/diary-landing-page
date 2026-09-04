import React, { useEffect, useRef, useState } from 'react'

interface BookSectionRevealProps {
  children: React.ReactNode
  className?: string
  /**
   * Optional stagger in ms. Keep it small — sections reveal one at a time as
   * they are scrolled to, so a delay here is latency the reader actually waits
   * through rather than a visible stagger between siblings.
   */
  delayMs?: number
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Reveals a section with a short fade and rise the first time it scrolls into
 * view. Deliberately plain: an earlier version rotated each section in 3D,
 * which skewed and blurred the headings for the length of the transition.
 */
export const BookSectionReveal: React.FC<BookSectionRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
}) => {
  const elementRef = useRef<HTMLDivElement>(null)
  // Reduced-motion readers get the finished state with no transition at all.
  const [isVisible, setIsVisible] = useState<boolean>(prefersReducedMotion)

  useEffect(() => {
    const element = elementRef.current
    if (!element || prefersReducedMotion()) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      // Fire as soon as the top edge clears the fold, so the reveal has already
      // finished by the time the reader reaches the content.
      { threshold: 0, rootMargin: '0px 0px -80px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={elementRef} className={className}>
      <div
        className={isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}
        style={{
          transition:
            'opacity 320ms ease-out, transform 320ms cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: `${delayMs}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
