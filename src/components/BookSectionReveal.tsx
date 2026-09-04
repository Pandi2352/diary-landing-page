import React, { useEffect, useRef, useState } from 'react'

interface BookSectionRevealProps {
  children: React.ReactNode
  className?: string
  delayMs?: number
}

export const BookSectionReveal: React.FC<BookSectionRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
}) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={elementRef}
      className={`perspective-container ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div
        className={`book-page-leaf ${
          isVisible
            ? 'opacity-100 transform-none'
            : 'opacity-0 -translate-y-4 -rotate-y-12'
        }`}
        style={{
          transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: `${delayMs}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
