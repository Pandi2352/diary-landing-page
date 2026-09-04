import React, { useEffect, useState, useRef } from 'react'

interface HandwrittenStamp {
  id: string
  pct: number
  text: string
  author: string
  x: string
  sealText: string
}

export const ScrollWritingEffect: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [penPos, setPenPos] = useState({ x: 120, y: 80, angle: 45 })
  const [isWriting, setIsWriting] = useState(false)
  const [activeStamp, setActiveStamp] = useState<string | null>(null)
  const [inkParticles, setInkParticles] = useState<{ id: number; x: number; y: number; size: number }[]>([])

  const pathRef = useRef<SVGPathElement>(null)
  const animFrameRef = useRef<number | null>(null)
  const velocityTimer = useRef<number | null>(null)
  const particleIdCounter = useRef(0)

  // Floating handwritten margin annotations & hot-foil seals in the background
  const diaryNotes: HandwrittenStamp[] = [
    {
      id: 'note-1',
      pct: 0.12,
      text: '✍️ "Crafted in Sivakasi — The Printing Capital of India"',
      author: 'Sorsons Studio Archive',
      x: '6%',
      sealText: '30 YRS EXCELLENCE',
    },
    {
      id: 'note-2',
      pct: 0.36,
      text: '📜 "Imported Heidelberg Offset • Micro-accurate CMYK registration"',
      author: 'Master Press Engineer',
      x: '84%',
      sealText: 'HEIDELBERG SPEEDMASTER',
    },
    {
      id: 'note-3',
      pct: 0.64,
      text: '✨ "Sensational new range with 180° lay-flat machine binding & gold foil"',
      author: 'Master Bookbinder',
      x: '7%',
      sealText: 'GOLD FOIL STAMPED',
    },
    {
      id: 'note-4',
      pct: 0.88,
      text: '📦 "Multi-layer reinforced packaging for zero-damage transit across India"',
      author: 'Sivakasi Dispatch Desk',
      x: '83%',
      sealText: 'SAFE TRANSIT GUARANTEE',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll))

      setScrollProgress(progress)

      // Active writing detection
      setIsWriting(true)
      if (velocityTimer.current) window.clearTimeout(velocityTimer.current)
      velocityTimer.current = window.setTimeout(() => {
        setIsWriting(false)
      }, 200)

      // Calculate pen position along SVG calligraphy path
      if (pathRef.current) {
        const path = pathRef.current
        const totalLength = path.getTotalLength()
        const currentLength = Math.max(0, Math.min(totalLength, progress * totalLength))

        const pt = path.getPointAtLength(currentLength)
        const nextPt = path.getPointAtLength(Math.min(totalLength, currentLength + 5))

        const dx = nextPt.x - pt.x
        const dy = nextPt.y - pt.y
        const tangentAngle = (Math.atan2(dy, dx) * 180) / Math.PI

        setPenPos({
          x: pt.x,
          y: pt.y,
          angle: tangentAngle + 45,
        })

        // Spawn dynamic golden ink particles when writing
        if (Math.random() > 0.4) {
          particleIdCounter.current += 1
          const newParticle = {
            id: particleIdCounter.current,
            x: pt.x + (Math.random() - 0.5) * 15,
            y: pt.y + (Math.random() - 0.5) * 15,
            size: Math.random() * 3 + 1.5,
          }
          setInkParticles((prev) => [...prev.slice(-18), newParticle])
        }

        // Active note checkpoint detection
        const found = diaryNotes.find((n) => Math.abs(n.pct - progress) < 0.09)
        setActiveStamp(found ? found.id : null)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (velocityTimer.current) window.clearTimeout(velocityTimer.current)
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden select-none"
    >
      {/* FULL PAGE RESPONSIVE SVG: Golden Calligraphy Ink Trails Over Pages */}
      <svg
        className="w-full h-full opacity-80"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >

        <defs>
          {/* Primary Golden Ink Gradient */}
          <linearGradient id="bgGoldenInk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#d97706" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0.8" />
          </linearGradient>

          {/* Secondary Delicate Flourish Gradient */}
          <linearGradient id="bgFlourishInk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.5" />
          </linearGradient>

          {/* Foil Shimmer Filter */}
          <filter id="bgInkGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f59e0b" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Primary Calligraphy Ribbon Path (Weaves across the page margins) */}
        <path
          ref={pathRef}
          d="M 120 40 
             C 380 80, 860 140, 890 260 
             C 920 370, 80 430, 110 560 
             C 140 680, 890 710, 860 840 
             C 830 910, 260 950, 480 990"
          fill="none"
          stroke="url(#bgGoldenInk)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeDasharray="3200"
          strokeDashoffset={3200 * (1 - scrollProgress)}
          filter="url(#bgInkGlow)"
          className="transition-[stroke-dashoffset] duration-75"
        />

        {/* Secondary Decorative Flourish Trail (Echoes with subtle curl loops) */}
        <path
          d="M 135 48 
             C 410 95, 880 155, 875 275 
             C 900 395, 95 445, 125 575 
             C 155 695, 875 725, 845 855 
             C 815 925, 275 965, 495 995"
          fill="none"
          stroke="url(#bgFlourishInk)"
          strokeWidth="1.2"
          strokeDasharray="6 10"
          strokeDashoffset={3200 * (1 - scrollProgress)}
        />

        {/* Floating Calligraphy Flourish Loops at milestones */}
        <circle cx="890" cy="260" r="14" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity={scrollProgress > 0.2 ? 0.7 : 0} />
        <circle cx="110" cy="560" r="14" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity={scrollProgress > 0.5 ? 0.7 : 0} />
        <circle cx="860" cy="840" r="14" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity={scrollProgress > 0.8 ? 0.7 : 0} />

        {/* Dynamic Golden Ink Particles rendered inside SVG */}
        {inkParticles.map((p) => (
          <circle
            key={p.id}
            cx={p.x}
            cy={p.y}
            r={p.size}
            fill="#f59e0b"
            opacity="0.7"
          />
        ))}
      </svg>

      {/* BACKGROUND FLOATING GOLDEN FOUNTAIN PEN NIB */}
      <div
        className="absolute transition-transform duration-75 will-change-transform opacity-75"
        style={{
          left: `${(penPos.x / 1000) * 100}%`,
          top: `${(penPos.y / 1000) * 100}%`,
          transform: `translate(-16px, -42px) rotate(${penPos.angle}deg)`,
        }}
      >
        {/* Luxury Gold Calligraphy Nib */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 100 100"
          className={`filter drop-shadow-sm transition-transform duration-100 ${
            isWriting ? 'scale-110' : 'scale-100'
          }`}
        >
          <defs>
            <linearGradient id="bgNibGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#f59e0b" />
              <stop offset="80%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <linearGradient id="bgNibSteel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
          </defs>

          {/* Pen Barrel Body */}
          <path d="M 38 0 L 62 0 L 58 35 L 42 35 Z" fill="url(#bgNibSteel)" />
          <rect x="40" y="32" width="20" height="5" rx="1" fill="#0f172a" />
          
          {/* Gold Fountain Pen Nib Blade */}
          <path
            d="M 42 37 
               C 42 50, 32 65, 50 96 
               C 68 65, 58 50, 58 37 Z"
            fill="url(#bgNibGold)"
            stroke="#b45309"
            strokeWidth="1.5"
          />
          {/* Slit & Breather Hole */}
          <line x1="50" y1="52" x2="50" y2="95" stroke="#78350f" strokeWidth="1.5" />
          <circle cx="50" cy="52" r="3" fill="#78350f" />
          
          {/* Engraved Flourishes */}
          <path d="M 44 48 Q 50 42 56 48" fill="none" stroke="#fef08a" strokeWidth="1" />
          <path d="M 43 56 Q 50 62 57 56" fill="none" stroke="#fef08a" strokeWidth="1" />

          {/* Active Ink Droplet Pulse */}
          {isWriting && (
            <circle cx="50" cy="97" r="3" fill="#f59e0b" className="animate-ping" />
          )}
        </svg>

        {/* Ink Specks in Background */}
        {isWriting && (
          <div className="absolute -bottom-1 -right-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            <span className="w-1 h-1 rounded-full bg-yellow-300" />
          </div>
        )}
      </div>

      {/* BACKGROUND HOT-FOIL WAX SEALS & HANDWRITTEN MARGIN ANNOTATIONS */}
      {diaryNotes.map((note) => {
        const isPassed = scrollProgress >= note.pct - 0.05
        const isCurrent = activeStamp === note.id

        return (
          <div
            key={note.id}
            className={`absolute transition-all duration-700 max-w-xs ${
              isPassed ? 'opacity-80 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}
            style={{
              top: `${note.pct * 100}%`,
              left: note.x,
              transform: 'translateY(-50%)',
            }}
          >
            {/* Wax Seal Stamp + Annotation in Background */}
            <div className="space-y-1.5">
              {/* Hot Foil Wax Seal Badge: rounded-md, no shadows */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-300 text-amber-900 text-[10px] font-mono font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-md bg-amber-500" />
                <span>{note.sealText}</span>
              </div>

              {/* Note Snippet */}
              <div
                className={`p-2.5 rounded-md border text-xs font-mono transition-colors ${
                  isCurrent
                    ? 'bg-white/95 border-amber-400 text-amber-950 font-bold'
                    : 'bg-white/80 border-slate-200 text-slate-700'
                }`}
              >
                <p className="leading-snug">{note.text}</p>
                <div className="flex items-center justify-between mt-1 text-[10px] text-amber-700 font-semibold border-t border-slate-100 pt-1">
                  <span>{note.author}</span>
                  <span className="text-slate-400">ARCHIVE #{Math.round(note.pct * 100)}</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Floating Inscription Status Indicator at Top-Right */}
      <div className="pointer-events-auto absolute top-20 right-4 sm:right-8 bg-white/95 border border-slate-200 px-3 py-1.5 rounded-md flex items-center gap-2 text-xs text-slate-700 font-mono">
        <span
          className={`w-2 h-2 rounded-full ${
            isWriting ? 'bg-amber-500 animate-ping' : 'bg-emerald-500'
          }`}
        />
        <span>{isWriting ? '🖋️ Inscribing Sorsons Diary...' : '🖋️ Scroll to Inscribe'}</span>
        <span className="text-amber-700 font-bold ml-1">
          {Math.round(scrollProgress * 100)}%
        </span>
      </div>

    </div>
  )
}

