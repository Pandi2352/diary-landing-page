import React, { useState, useEffect } from 'react'
import {
  BookOpen,
  BookCheck,
  ChevronRight,
  Sparkles,
  Calendar,
  CheckCircle2,
  Award,
  ArrowRight,
} from 'lucide-react'


interface InteractiveDiaryOpeningProps {
  onOpenInquiry: (productName?: string) => void
}

export const InteractiveDiaryOpening: React.FC<InteractiveDiaryOpeningProps> = ({
  onOpenInquiry,
}) => {
  // Book states: 'closed' | 'open' | 'turned'
  const [bookState, setBookState] = useState<'closed' | 'open' | 'turned'>('open')
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  // Auto-play animation cycle if enabled
  useEffect(() => {
    if (!isAutoPlaying) return

    const timer1 = setTimeout(() => setBookState('open'), 1200)
    const timer2 = setTimeout(() => setBookState('turned'), 3500)
    const timer3 = setTimeout(() => setBookState('closed'), 6000)

    const loop = setInterval(() => {
      setBookState('open')
      setTimeout(() => setBookState('turned'), 2400)
      setTimeout(() => setBookState('closed'), 5000)
    }, 7000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearInterval(loop)
    }
  }, [isAutoPlaying])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16 // Max 8 deg tilt
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16
    setTilt({ x: y, y: x })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div className="w-full py-10">
      
      {/* Top Header & Interactive Controls Bar: rounded-md, no shadows */}
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-md bg-amber-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
            Interactive Diary Opening Experience • Click or Control
          </span>
        </div>

        {/* State Buttons: rounded-md, no shadows */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-md border border-slate-200">
          <button
            onClick={() => {
              setIsAutoPlaying(false)
              setBookState('closed')
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              bookState === 'closed' && !isAutoPlaying
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <BookCheck className="w-3.5 h-3.5" />
            <span>Closed Cover</span>
          </button>

          <button
            onClick={() => {
              setIsAutoPlaying(false)
              setBookState('open')
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              bookState === 'open' && !isAutoPlaying
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Open Diary</span>
          </button>

          <button
            onClick={() => {
              setIsAutoPlaying(false)
              setBookState('turned')
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              bookState === 'turned' && !isAutoPlaying
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Turn Page</span>
          </button>

          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              isAutoPlaying
                ? 'bg-amber-600 text-slate-950 font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAutoPlaying ? 'Auto Playing...' : 'Auto Play'}</span>
          </button>
        </div>
      </div>

      {/* 3D BOOK STAGE CONTAINER */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative mx-auto max-w-4xl h-[460px] sm:h-[520px] flex items-center justify-center select-none"
        style={{ perspective: '2000px' }}
      >
        {/* Animated 3D Book Assembly */}
        <div
          className="relative transition-transform duration-500 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${tilt.x + 8}deg) rotateY(${tilt.y}deg) scale(${
              bookState === 'closed' ? 0.95 : 1
            })`,
            width: '320px',
            height: '440px',
          }}
        >
          {/* A. BASE BACK COVER & THICK PAGE STACK (Right Side) */}
          <div
            className="absolute inset-0 bg-[#fdfaf3] border border-slate-300 rounded-md overflow-hidden"
            style={{
              transform: 'translateZ(-12px)',
              borderRight: '12px solid #eab308', // Gilded gold pages edge
              borderBottom: '6px solid #eab308',
              borderTop: '6px solid #eab308',
            }}
          >
            {/* Right Page Content: Executive 2025 Planner */}
            <div className="w-full h-full p-6 sm:p-7 flex flex-col justify-between bg-[radial-gradient(#f1f5f9_1px,transparent_1px)] [background-size:16px_16px]">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest block">
                      SORSONS 2025 COLLECTION
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950 font-display">
                      Daily Strategy & Planner
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-slate-800">PAGE 01</span>
                    <p className="text-[10px] text-slate-500 font-mono">SIVAKASI PRESS</p>
                  </div>
                </div>

                {/* Ruled lines with printed notes */}
                <div className="space-y-3 mt-4 text-xs font-sans">
                  <div className="pb-1 border-b border-slate-200 flex justify-between">
                    <span className="text-slate-500">Binding Style:</span>
                    <span className="font-semibold text-slate-900">Section Sewn 180° Lay-Flat</span>
                  </div>
                  <div className="pb-1 border-b border-slate-200 flex justify-between">
                    <span className="text-slate-500">Paper Grade:</span>
                    <span className="font-semibold text-slate-900">90 GSM Ivory Parchment</span>
                  </div>
                  <div className="pb-1 border-b border-slate-200 flex justify-between">
                    <span className="text-slate-500">Page Edges:</span>
                    <span className="font-semibold text-amber-700">Gilded Foil Stamped</span>
                  </div>
                  <div className="pb-1 border-b border-slate-200 flex justify-between">
                    <span className="text-slate-500">Manufactured By:</span>
                    <span className="font-semibold text-slate-900">Sutharsan Offset Printers</span>
                  </div>
                </div>

                {/* Sivakasi Seal Stamp */}
                <div className="mt-4 p-2.5 rounded-md bg-amber-50 border border-amber-200 flex items-center gap-2 text-xs">
                  <Award className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="text-amber-900 font-medium">
                    Top 10 Printing Press in Sivakasi — 30 Years Excellence
                  </span>
                </div>
              </div>

              {/* Page Footer Action */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => onOpenInquiry('Executive Diary')}
                  className="px-3.5 py-1.5 rounded-md bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Order Sample</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <span className="text-[11px] font-mono text-slate-400">
                  © 2025 Sutharsan
                </span>
              </div>
            </div>
          </div>

          {/* B. CENTRAL SPINE HINGE */}
          <div
            className="absolute left-0 top-0 bottom-0 w-3 bg-[#1e293b] rounded-l-md border-r border-slate-700"
            style={{ transform: 'translateZ(1px)' }}
          />

          {/* C. TURNING LEAF / PAGE 2 (Middle page that flips) */}
          <div
            className="absolute inset-0 bg-[#faf8f2] border border-slate-300 rounded-md transition-transform duration-700 ease-in-out origin-left overflow-hidden"
            style={{
              transformStyle: 'preserve-3d',
              transform:
                bookState === 'turned'
                  ? 'rotateY(-160deg)'
                  : bookState === 'open'
                  ? 'rotateY(-25deg)'
                  : 'rotateY(0deg)',
              pointerEvents: bookState === 'closed' ? 'none' : 'auto',
            }}
          >
            {/* Front of Turning Leaf: 2025 Year Calendar */}
            <div className="w-full h-full p-6 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-1.5 text-amber-700 font-mono text-xs font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>2025 CALENDAR INDEX</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">PAGE 02</span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] text-center font-mono">
                  {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'].map(
                    (m) => (
                      <div
                        key={m}
                        className="p-1.5 rounded-md bg-slate-50 border border-slate-200 font-bold text-slate-800"
                      >
                        {m}
                      </div>
                    )
                  )}
                </div>

                <div className="mt-4 p-3 rounded-md bg-slate-50 border border-slate-200 space-y-1 text-xs">
                  <p className="font-bold text-slate-900">Custom Corporate Branding</p>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Company logos, foil stamped names, and custom insert sheets available on all bulk orders.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex justify-between text-[11px] font-mono text-slate-500">
                <span>SORSONS EXECUTIVE</span>
                <span>FLIP TO REVEAL</span>
              </div>
            </div>
          </div>

          {/* D. ARTICULATED FRONT COVER HINGE */}
          <div
            className="absolute inset-0 transition-transform duration-700 ease-in-out origin-left rounded-md"
            style={{
              transformStyle: 'preserve-3d',
              transform:
                bookState === 'closed'
                  ? 'rotateY(0deg)'
                  : 'rotateY(-172deg)', // Opens wide to reveal inner left endpaper
            }}
          >
            {/* 1. FRONT COVER FACE (Visible when CLOSED) */}
            <div
              className="absolute inset-0 rounded-md overflow-hidden border border-amber-500/40 backface-hidden"
              style={{
                backfaceVisibility: 'hidden',
                background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              }}
            >
              <div className="w-full h-full p-7 flex flex-col justify-between relative">
                {/* Gold Embossed Frame */}
                <div className="absolute inset-3 border border-amber-400/40 rounded-md pointer-events-none" />

                {/* Top Corner Details */}
                <div className="flex items-center justify-between text-amber-400 font-mono text-xs">
                  <span>EST. 1995</span>
                  <span>SIVAKASI</span>
                </div>

                {/* Center Gold Crest & Typography */}
                <div className="text-center space-y-3 my-auto">
                  <div className="w-16 h-16 rounded-md bg-amber-500/10 border border-amber-400/50 mx-auto flex items-center justify-center text-amber-400">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-wider text-white font-display">
                      SORSONS
                    </h3>
                    <p className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mt-0.5">
                      2025 DIARIES
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-300 font-mono max-w-[200px] mx-auto leading-relaxed">
                    Sutharsan Offset Printers
                  </p>
                </div>

                {/* Bottom Cover Footer */}
                <div className="text-center pt-2 border-t border-amber-500/20">
                  <span className="text-[10px] font-mono text-amber-300/80 uppercase tracking-widest">
                    ★ Top 10 Printing Press ★
                  </span>
                </div>
              </div>
            </div>

            {/* 2. INNER FRONT ENDPAPER (Visible when OPENED - Facing Left) */}
            <div
              className="absolute inset-0 rounded-md overflow-hidden border border-slate-300 bg-[#faf7ed] p-6 flex flex-col justify-between"
              style={{
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
              }}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-amber-300/60">
                  <span className="text-[10px] font-mono font-bold text-amber-800 uppercase tracking-widest">
                    SORSONS HERITAGE
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">SIVAKASI WORKS</span>
                </div>

                <div className="mt-6 space-y-3">
                  <h4 className="text-lg font-bold text-slate-900 font-display">
                    Welcome to Sutharsan Offset Printers
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We use imported modern machinery in our Sivakasi printing press for giving our customers the highest standard in diary craftsmanship.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    This masterpiece of a diary is the perfect accompaniment to those who seek to master the world itself.
                  </p>
                </div>

                {/* 4 Feature Badges */}
                <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-700">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    <span>Hard Bound</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    <span>Custom Foil</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    <span>Imported PCP</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    <span>Safe Delivery</span>
                  </div>
                </div>
              </div>

              {/* Silk Ribbon Bookmark hanging from top spine */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Munies Nagar, Sivakasi</span>
                <span className="text-amber-700 font-bold">+91 99524 24780</span>
              </div>
            </div>
          </div>

          {/* E. SILK RIBBON BOOKMARK DRAPING OUT */}
          <div
            className="absolute left-16 -bottom-10 w-4 h-28 bg-gradient-to-b from-red-600 via-rose-500 to-amber-500 rounded-b-md border border-red-700 transition-transform duration-500 pointer-events-none"
            style={{
              transform: bookState === 'closed' ? 'translateY(15px) rotate(8deg)' : 'translateY(0px) rotate(4deg)',
              transformOrigin: 'top center',
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-amber-300 rounded-b-md" />
          </div>

        </div>
      </div>

      {/* Helper text under book */}
      <p className="text-center text-xs text-slate-500 font-mono mt-4">
        💡 Move your cursor over the diary to tilt the 3D perspective. Click the buttons above to open cover or turn pages.
      </p>

    </div>
  )
}
