import React, { useState, useEffect, useRef } from 'react'
import { BookOpen, Award } from 'lucide-react'


interface PageLeaf {
  id: string
  pageNum: number
  startPct: number
  endPct: number
  frontTitle: string
  frontSubtitle: string
  frontSnippet: string
  backTitle: string
  backSubtitle: string
  backSnippet: string
  watermark: string
  chapter: string
}

export const BackgroundScrollDiary: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [ribbonSway, setRibbonSway] = useState(0)
  const lastScrollY = useRef(0)
  const velocityTimer = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll))
      setScrollProgress(progress)

      // Calculate scroll velocity for ribbon inertia
      const delta = scrollY - lastScrollY.current
      const sway = Math.min(15, Math.max(-15, delta * 0.4))
      setRibbonSway(sway)

      if (velocityTimer.current) clearTimeout(velocityTimer.current)
      velocityTimer.current = window.setTimeout(() => {
        setRibbonSway(0)
      }, 180)

      lastScrollY.current = scrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (velocityTimer.current) clearTimeout(velocityTimer.current)
    }
  }, [])

  // 4 sequential flipping paper leaves that turn one by one during scroll
  const leaves: PageLeaf[] = [
    {
      id: 'leaf-1',
      pageNum: 1,
      startPct: 0.04,
      endPct: 0.28,
      chapter: 'CHAPTER I',
      frontTitle: 'SORSONS DIARIES 2025',
      frontSubtitle: 'MASTERPIECE EXECUTIVE COLLECTION',
      frontSnippet: 'Crafted as a masterpiece accompaniment to master the world itself. Featuring section sewn binding, thermal PU covers, and gold gilded page edges.',
      backTitle: 'SIVAKASI HERITAGE (EST. 1995)',
      backSubtitle: '30 YEARS OF PRINTING EXCELLENCE',
      backSnippet: 'Top 10 Printing Press in Sivakasi — The Printing Capital of India. Serving leading corporate clients nationwide with world-class craftsmanship.',
      watermark: '★ SORSONS ★',
    },
    {
      id: 'leaf-2',
      pageNum: 2,
      startPct: 0.28,
      endPct: 0.52,
      chapter: 'CHAPTER II',
      frontTitle: 'GERMAN OFFSET PRECISION',
      frontSubtitle: 'HEIDELBERG SPEEDMASTER MULTI-COLOUR',
      frontSnippet: 'Equipped with imported multi-colour offset printing machinery for razor-sharp micro-registration and rich, vibrant CMYK color consistency.',
      backTitle: 'HIGH-END FINISHING LAB',
      backSubtitle: 'THERMAL FOIL & CURVED SPINE',
      backSnippet: 'Specialized hardbound spine curving, metallic edge gilding, debossed monogramming, and 180° lay-flat bookbinding.',
      watermark: '★ SUTHARSAN ★',
    },
    {
      id: 'leaf-3',
      pageNum: 3,
      startPct: 0.52,
      endPct: 0.76,
      chapter: 'CHAPTER III',
      frontTitle: '2025 FLAGSHIP DIARY CATALOG',
      frontSubtitle: 'CELESTIAL • MAJESTIC • SPIRAL PRO • ANGEL',
      frontSnippet: 'Over 10 specialized diary models engineered with 90 GSM ivory paper, multi-ribbon bookmarks, and durable scratch-resistant coatings.',
      backTitle: 'INSTITUTIONAL SOLUTIONS',
      backSubtitle: 'OFFICE CALENDARS & NOTEBOOKS',
      backSnippet: 'Daily date calendars in 3, 4, 6, and 12-sheet variants, customized school and college notebooks manufactured for domestic and export delivery.',
      watermark: '★ SIVAKASI ★',
    },
    {
      id: 'leaf-4',
      pageNum: 4,
      startPct: 0.76,
      endPct: 0.95,
      chapter: 'CHAPTER IV',
      frontTitle: 'REINFORCED PACKAGING & LOGISTICS',
      frontSubtitle: '100% DAMAGE-FREE TRANSIT GUARANTEE',
      frontSnippet: 'Heavy-duty corrugated box packaging with moisture barrier wrap ensures safe transit across India and overseas port destinations.',
      backTitle: 'FACTORY HEADQUARTERS',
      backSubtitle: 'SUTHARSAN OFFSET PRINTERS, SIVAKASI',
      backSnippet: 'Vilampatti Road, Munies Nagar, Sivakasi (West) - 626 124, Tamil Nadu. Direct Factory Line: +91 99524 24780 / 23780 • sm2020.svks@gmail.com',
      watermark: '★ REGISTRY ★',
    },
  ]

  // Active page tracker
  const activePageNum = leaves.reduce((acc, leaf) => {
    return scrollProgress >= leaf.startPct ? leaf.pageNum + 1 : acc
  }, 1)

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center select-none"
    >
      {/* Ambient background wash */}
      <div className="absolute inset-0 bg-[#fdfcfa]/75" />

      {/* LUXURY BACKGROUND OPEN DIARY SPREAD */}
      <div
        className="relative transition-opacity duration-500 opacity-30 hover:opacity-60 md:opacity-35"
        style={{
          width: 'min(94vw, 1140px)',
          height: 'min(82vh, 660px)',
          perspective: '2400px',
        }}
      >
        {/* Leather Binding Casing: rounded-md, no shadows */}
        <div className="absolute inset-0 bg-[#1e293b] rounded-md border border-slate-700 p-1.5 flex">
          
          {/* LEFT FIXED SPREAD (Base Left Page) */}
          <div className="w-1/2 h-full bg-[#faf7ed] border-r border-slate-300 rounded-l-md p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Watermark in left page */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <span className="text-8xl font-black text-amber-900 font-display -rotate-12">
                SORSONS
              </span>
            </div>

            {/* Left Header */}
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-amber-300/60">
                <span className="text-[10px] font-mono font-bold text-amber-800 tracking-widest uppercase">
                  MASTER PRODUCTION LEDGER
                </span>
                <span className="text-[10px] font-mono text-slate-400">SIVAKASI PRESS</span>
              </div>

              <div className="mt-6 space-y-3">
                <span className="text-[10px] font-mono font-bold text-amber-700 uppercase">
                  PREMIER DIARY MANUFACTURERS
                </span>
                <h4 className="text-xl font-extrabold text-slate-900 font-display">
                  Sutharsan Offset Printers
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Being a reputed name in the industry, we are one of the Top 10 Printing Press in Sivakasi. Equipped with modern imported printing and binding machinery.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-amber-900 font-semibold">
                  <Award className="w-4 h-4 text-amber-700" />
                  <span>30+ Years of Manufacturing Heritage</span>
                </div>
              </div>

              {/* Ruled decorative guidelines */}
              <div className="mt-6 space-y-2.5 opacity-30">
                <div className="h-px bg-slate-300 w-full" />
                <div className="h-px bg-slate-300 w-full" />
                <div className="h-px bg-slate-300 w-4/5" />
              </div>
            </div>

            {/* Left Footer */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Munies Nagar, Sivakasi (West)</span>
              <span>INDEX SPREAD</span>
            </div>
          </div>

          {/* CENTRAL SPINE & SATIN BOOKMARK RIBBON */}
          <div className="relative w-3.5 h-full bg-[#0f172a] flex items-center justify-center">
            {/* Satin Silk Bookmark Ribbon with Inertia Sway */}
            <div
              className="absolute top-0 w-3 h-[115%] bg-gradient-to-b from-red-600 via-rose-500 to-amber-500 rounded-b-md border border-red-700 pointer-events-none transition-transform duration-200 ease-out"
              style={{
                transform: `rotate(${ribbonSway}deg) skewX(${ribbonSway * 0.5}deg)`,
                transformOrigin: 'top center',
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 h-2.5 bg-amber-300 rounded-b-md" />
            </div>
          </div>

          {/* RIGHT FIXED SPREAD (Base Right Page - Final Chapter) */}
          <div className="w-1/2 h-full bg-[#faf7ed] rounded-r-md p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-l border-slate-300">
            {/* Right Header */}
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-amber-300/60">
                <span className="text-[10px] font-mono font-bold text-amber-800 tracking-widest uppercase">
                  CHAPTER V • CONTACT & DISPATCH
                </span>
                <span className="text-[10px] font-mono text-slate-400">PAGE 05</span>
              </div>

              <div className="mt-6 space-y-3">
                <span className="text-[10px] font-mono font-bold text-amber-700 uppercase">
                  DIRECT FACTORY SERVICE
                </span>
                <h4 className="text-xl font-extrabold text-slate-900 font-display">
                  Corporate Order Fulfillment
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our precision in maintaining high end quality as well as capability in meeting time schedules, time and again, has helped us win good clientele across India.
                </p>
                <div className="pt-2 space-y-1.5 text-xs text-slate-700 font-mono">
                  <p>📍 2/1/661-C,D,E Vilampatti Rd, Sivakasi</p>
                  <p>📞 +91 99524 24780 / 23780</p>
                  <p>✉️ sm2020.svks@gmail.com</p>
                </div>
              </div>

              {/* Ruled decorative guidelines */}
              <div className="mt-6 space-y-2.5 opacity-30">
                <div className="h-px bg-slate-300 w-full" />
                <div className="h-px bg-slate-300 w-full" />
                <div className="h-px bg-slate-300 w-3/4" />
              </div>
            </div>

            {/* Right Footer */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>© 2025 SUTHARSAN OFFSET</span>
              <span>FINAL SPREAD</span>
            </div>
          </div>

          {/* SEQUENTIAL FLIPPING LEAVES (STACKED RIGHT TO LEFT) */}
          {leaves.map((leaf, index) => {
            const rawProgress = (scrollProgress - leaf.startPct) / (leaf.endPct - leaf.startPct)
            const turnProgress = Math.min(1, Math.max(0, rawProgress))
            const angle = -180 * turnProgress
            const zIndex = 20 - index

            return (
              <div
                key={leaf.id}
                className="absolute top-1.5 bottom-1.5 left-1/2 w-[calc(50%-6px)] rounded-r-md transition-transform will-change-transform"
                style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'left center',
                  transform: `rotateY(${angle}deg)`,
                  zIndex: angle < -90 ? index + 5 : zIndex,
                  borderRight: angle > -90 ? '4px solid #eab308' : 'none', // Gilded Gold Edges
                  borderLeft: angle < -90 ? '4px solid #eab308' : 'none',
                }}
              >
                {/* 1. FRONT FACE (Facing right when closed/unturned) */}
                <div
                  className="absolute inset-0 bg-[#faf7ed] border border-slate-300 rounded-r-md p-6 sm:p-8 flex flex-col justify-between backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs font-mono text-slate-500">
                      <span className="text-amber-800 font-bold">{leaf.chapter}</span>
                      <span className="font-semibold text-slate-700">PAGE 0{leaf.pageNum}</span>
                    </div>

                    <div className="mt-6 space-y-2">
                      <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider block">
                        {leaf.frontSubtitle}
                      </span>
                      <h5 className="text-lg font-bold text-slate-900 font-display">
                        {leaf.frontTitle}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {leaf.frontSnippet}
                      </p>
                    </div>

                    {/* Ruled lines pattern */}
                    <div className="mt-6 space-y-2 opacity-35">
                      <div className="h-px bg-slate-300 w-full" />
                      <div className="h-px bg-slate-300 w-full" />
                      <div className="h-px bg-slate-300 w-4/5" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>{leaf.watermark}</span>
                    <span>SCROLL TO TURN ↷</span>
                  </div>
                </div>

                {/* 2. BACK FACE (Facing left when turned over) */}
                <div
                  className="absolute inset-0 bg-[#faf7ed] border border-slate-300 rounded-l-md p-6 sm:p-8 flex flex-col justify-between"
                  style={{
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs font-mono text-slate-500">
                      <span className="text-amber-800 font-bold">{leaf.chapter} (REV)</span>
                      <span className="font-semibold text-slate-700">PAGE 0{leaf.pageNum}</span>
                    </div>

                    <div className="mt-6 space-y-2">
                      <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider block">
                        {leaf.backSubtitle}
                      </span>
                      <h5 className="text-lg font-bold text-slate-900 font-display">
                        {leaf.backTitle}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {leaf.backSnippet}
                      </p>
                    </div>

                    {/* Ruled lines pattern */}
                    <div className="mt-6 space-y-2 opacity-35">
                      <div className="h-px bg-slate-300 w-full" />
                      <div className="h-px bg-slate-300 w-full" />
                      <div className="h-px bg-slate-300 w-4/5" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>↶ TURNED PAGE</span>
                    <span>{leaf.watermark}</span>
                  </div>
                </div>

              </div>
            )
          })}

        </div>
      </div>

      {/* Floating Bottom Left Page Indicator: rounded-md, no shadows */}
      <div className="absolute bottom-5 left-6 bg-white/95 border border-slate-200 px-3 py-1.5 rounded-md text-xs font-mono text-slate-700 flex items-center gap-2">
        <BookOpen className="w-3.5 h-3.5 text-amber-600" />
        <span>Background Diary: <strong>Page {activePageNum} of 5</strong></span>
        <span className="text-slate-400">•</span>
        <span className="text-amber-700 font-bold">{Math.round(scrollProgress * 100)}%</span>
      </div>

    </div>
  )
}
