import React, { useState, useEffect } from 'react'
import { BookOpen, ChevronUp, ChevronDown } from 'lucide-react'

export const ScrollBookCompanion: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0)
  const [currentChapter, setCurrentChapter] = useState({
    title: 'Chapter 01: Sorsons Executive 2025',
    sectionId: 'home',
    pageNum: '01',
  })
  const [isExpanded, setIsExpanded] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const pct = Math.min(100, Math.max(0, Math.round((scrollY / maxScroll) * 100)))
      setScrollPercent(pct)

      if (pct < 22) {
        setCurrentChapter({ title: 'Ch. 01: Sorsons Executive 2025', sectionId: 'home', pageNum: '01' })
      } else if (pct < 52) {
        setCurrentChapter({ title: 'Ch. 02: Sivakasi Heritage Press', sectionId: 'about', pageNum: '02' })
      } else if (pct < 76) {
        setCurrentChapter({ title: 'Ch. 03: 2025 Diaries Collection', sectionId: 'products', pageNum: '03' })
      } else if (pct < 92) {
        setCurrentChapter({ title: 'Ch. 04: Commercial Solutions', sectionId: 'services', pageNum: '04' })
      } else {
        setCurrentChapter({ title: 'Ch. 05: Sivakasi Works & Office', sectionId: 'contact', pageNum: '05' })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside
      aria-label="Scroll Reading Companion"
      className="fixed bottom-5 left-5 z-40 hidden md:block"
    >
      <div className="bg-white/95 border border-slate-300 rounded-md p-3 backdrop-blur-md max-w-xs transition-all">
        
        {/* Header with toggle */}
        <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            {/* Animated Book Hinge Icon that turns with scroll */}
            <div className="relative w-6 h-6 flex items-center justify-center text-amber-600">
              <BookOpen
                className="w-5 h-5 transition-transform duration-300"
                style={{
                  transform: `rotateY(${Math.sin((scrollPercent / 100) * Math.PI * 4) * 30}deg)`,
                }}
              />
            </div>
            <span className="text-[11px] font-mono font-bold text-slate-800 uppercase tracking-wider">
              Diary Journal Reader
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md border border-amber-200">
              Pg {currentChapter.pageNum}
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={isExpanded ? 'Collapse reader details' : 'Expand reader details'}
              className="text-slate-400 hover:text-slate-700 cursor-pointer p-0.5"
            >
              {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Content details when expanded */}
        {isExpanded && (
          <div className="pt-2.5 space-y-2">
            <button
              onClick={() => scrollToChapter(currentChapter.sectionId)}
              className="text-left w-full hover:text-amber-700 transition-colors cursor-pointer"
            >
              <p className="text-xs font-bold text-slate-900 line-clamp-1">
                {currentChapter.title}
              </p>
              <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                Click to jump to this page
              </p>
            </button>

            {/* Live Progress Bar with leaf animation */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Page Scroll Progress</span>
                <span className="font-bold text-slate-800">{scrollPercent}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-md overflow-hidden border border-slate-200">
                <div
                  className="h-full bg-amber-500 transition-all duration-150 rounded-md"
                  style={{ width: `${scrollPercent}%` }}
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </aside>
  )
}
