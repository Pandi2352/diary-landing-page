import React, { useState } from 'react'
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Palette,
  ShieldCheck,
  Layers,
} from 'lucide-react'

interface CustomizeSectionProps {
  onOpenInquiry?: (productDetails?: string) => void
}

interface Callout {
  id: string
  label: string
  side: 'left' | 'right'
  title: string
  desc: string
  pinPos: { top: string; left: string } // position on diary preview
}

export const CustomizeSection: React.FC<CustomizeSectionProps> = ({
  onOpenInquiry,
}) => {
  const callouts: Callout[] = [
    {
      id: 'custom-covers',
      label: 'Custom Covers',
      side: 'left',
      title: 'CUSTOM COVERS',
      desc: 'Full custom printed, foil stamped, or laser-engraved hardbound and flexible heirloom covers with reinforced spine wrapping.',
      pinPos: { top: '22%', left: '44%' },
    },
    {
      id: 'premium-materials',
      label: 'Premium Materials',
      side: 'left',
      title: 'PREMIUM MATERIALS',
      desc: 'Imported thermo-PU leather, vegan leatherette, textured linen, and archival European book board designed to age gracefully.',
      pinPos: { top: '48%', left: '32%' },
    },
    {
      id: 'colour-options',
      label: 'Colour Options',
      side: 'left',
      title: 'COLOUR OPTIONS',
      desc: 'Over 40+ curated Pantone leather tones and dual-tone colour-changing thermo covers that darken elegantly when debossed.',
      pinPos: { top: '70%', left: '22%' },
    },
    {
      id: 'logo-embossing',
      label: 'Logo Embossing',
      side: 'right',
      title: 'LOGO EMBOSSING',
      desc: 'Precision hydraulic blind debossing and multi-level hot-foil stamping in 24K mirror gold, silver chrome, or rose gold.',
      pinPos: { top: '44%', left: '56%' },
    },
    {
      id: 'tipping-inserts',
      label: 'Tipping / Inserts',
      side: 'right',
      title: 'TIPPING / INSERTS',
      desc: 'Full-colour corporate profile pages, executive message inserts, satin bookmark ribbons, and product catalog tip-ins.',
      pinPos: { top: '78%', left: '16%' },
    },
    {
      id: 'inner-page-design',
      label: 'Inner-Page Design',
      side: 'right',
      title: 'INNER-PAGE DESIGN',
      desc: 'Bespoke page layouts with company watermark, custom grid rulings, monthly planners, and 80–100 GSM fountain-pen friendly parchment.',
      pinPos: { top: '68%', left: '74%' },
    },
  ]

  const [activeCallout, setActiveCallout] = useState<Callout>(callouts[3]) // Default Logo Embossing
  const [diaryColor, setDiaryColor] = useState<'brown' | 'royal-blue'>('brown')

  const checklistCol1 = [
    'Customized Covers',
    'Leather & Premium Materials',
    'Multiple Colour Options',
    'Colour-Changing Materials',
    'Tipping / Colour Inserts',
  ]

  const checklistCol2 = [
    'Inner-Page Photos',
    'Watermarking',
    'Logo / Brand Customization',
    'Custom Page Layouts',
    'Custom Sizes & Page Counts',
  ]

  const handleCalloutClick = (callout: Callout) => {
    setActiveCallout(callout)
    if (callout.id === 'colour-options') {
      // Toggle between Executive Brown and Royal Blue on clicking Colour Options
      setDiaryColor((prev) => (prev === 'brown' ? 'royal-blue' : 'brown'))
    }
  }

  const handleCtaClick = () => {
    if (onOpenInquiry) {
      onOpenInquiry(
        `Custom Bespoke Diary [Cover Tone: ${
          diaryColor === 'royal-blue' ? 'Royal Blue' : 'Executive Brown'
        }]`
      )
    }
  }

  const leftCallouts = callouts.filter((c) => c.side === 'left')
  const rightCallouts = callouts.filter((c) => c.side === 'right')

  return (
    <section id="customize" className="relative isolate overflow-hidden py-24 md:py-32 bg-[#faf9f5]">
      {/* Ambient Dreamy Background Integration matching Hero & About sections */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft background gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f5] via-[#fdf6ec]/90 to-[#faf9f5]" />

        {/* Ambient floating pastel glow orbs that gently react to selected swatch */}
        <div
          className="hero-blob absolute top-1/4 right-12 h-[32rem] w-[32rem] rounded-full blur-3xl transition-colors duration-700 pointer-events-none"
          style={{
            backgroundColor:
              diaryColor === 'royal-blue'
                ? 'rgba(30, 58, 138, 0.28)'
                : 'rgba(88, 24, 37, 0.28)',
          }}
        />
        <div className="hero-blob absolute bottom-12 left-12 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" style={{ animationDelay: '-7s' }} />
        <div className="hero-blob absolute -top-10 left-1/3 h-72 w-72 rounded-full bg-rose-200/25 blur-3xl pointer-events-none" style={{ animationDelay: '-14s' }} />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 max-w-[1580px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Checklist, Swatches, CTA */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-amber-200/90 text-amber-950 text-xs font-semibold tracking-wide backdrop-blur-md shadow-xs mb-4">
                <Palette className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: '12s' }} />
                <span>CUSTOMIZATION STUDIO</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="font-mono text-[11px] font-bold text-amber-800">Sivakasi Press Direct</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-display tracking-tight leading-[1.14]">
                Made to Your <br />
                <span className="relative inline-block">
                  Exact Requirements.
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-rose-400/80 pointer-events-none"
                    viewBox="0 0 280 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 9C65 3 190 2 277 8"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="mt-4 hero-script text-2xl sm:text-3xl text-rose-600/90 leading-tight">
                Countless options. One perfect diary — yours.
              </p>
            </div>

            {/* Glassmorphic Checklist Container */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/85 backdrop-blur-xl border border-amber-200/70 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-900 uppercase tracking-wider mb-4 pb-2 border-b border-amber-100">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Bespoke Manufacturing Capabilities</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {/* Column 1 */}
                <div className="space-y-2.5">
                  {checklistCol1.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 p-1.5 rounded-xl transition-colors hover:bg-amber-50/70 group cursor-default"
                    >
                      <div className="w-5 h-5 rounded-full bg-amber-100/90 text-amber-700 flex items-center justify-center shrink-0 border border-amber-300 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-800 font-medium group-hover:text-slate-950 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-2.5">
                  {checklistCol2.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 p-1.5 rounded-xl transition-colors hover:bg-amber-50/70 group cursor-default"
                    >
                      <div className="w-5 h-5 rounded-full bg-amber-100/90 text-amber-700 flex items-center justify-center shrink-0 border border-amber-300 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-800 font-medium group-hover:text-slate-950 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCtaClick}
                className="px-8 py-4 rounded-2xl bg-slate-950 hover:bg-amber-600 text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-3 group"
              >
                <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
                <span>CUSTOMIZE YOUR DIARY</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Annotated Diary Showcase */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* The Visual Stage with Interactive Connecting Callouts */}
            <div className="relative w-full max-w-[640px] py-6 flex items-center justify-center">
              
              {/* Left Side Callout Badges (Desktop) */}
              <div className="hidden sm:flex flex-col justify-between h-[340px] z-20 shrink-0 w-36 sm:w-44 text-right pr-2">
                {leftCallouts.map((callout) => {
                  const isActive = activeCallout.id === callout.id
                  return (
                    <div
                      key={callout.id}
                      className="flex items-center justify-end gap-2 group cursor-pointer"
                      onClick={() => handleCalloutClick(callout)}
                    >
                      <button
                        type="button"
                        className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold transition-all duration-300 cursor-pointer shadow-xs ${
                          isActive
                            ? 'bg-slate-950 text-white border border-amber-400 ring-2 ring-amber-400/25 shadow-md -translate-x-1'
                            : 'bg-white/95 text-slate-800 border border-amber-200/80 hover:bg-white hover:border-amber-400 hover:text-amber-800'
                        }`}
                      >
                        {callout.label}
                      </button>
                      <div
                        className={`w-8 sm:w-10 border-t-2 border-dashed transition-colors ${
                          isActive ? 'border-amber-500' : 'border-amber-300/80 group-hover:border-amber-500'
                        }`}
                      />
                    </div>
                  )
                })}
              </div>

              {/* Center Diary Image Card with Glass Podium */}
              <div className="relative w-[280px] sm:w-[320px] md:w-[350px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white border-2 border-amber-200/90 z-10 shrink-0 group/img transition-all duration-300">
                <img
                  src="/images/burgundy_diary.jpg"
                  alt="Custom Sorsons Bespoke Diary"
                  style={{
                    filter:
                      diaryColor === 'royal-blue'
                        ? 'hue-rotate(205deg) saturate(1.35) brightness(0.92) contrast(1.08)'
                        : 'none',
                    transition: 'filter 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                />

                {/* Subtle soft sheen highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />

                {/* All 6 Interactive Inspect Pin Markers on the Diary */}
                {callouts.map((callout, index) => {
                  const isActive = activeCallout.id === callout.id
                  return (
                    <button
                      key={callout.id}
                      type="button"
                      onClick={() => handleCalloutClick(callout)}
                      aria-label={`Inspect ${callout.label}`}
                      title={callout.label}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group/pin p-1"
                      style={{
                        top: callout.pinPos.top,
                        left: callout.pinPos.left,
                      }}
                    >
                      {isActive ? (
                        <span className="relative flex h-6 w-6">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80" />
                          <span className="relative inline-flex rounded-full h-6 w-6 bg-slate-950 border-2 border-amber-400 shadow-lg items-center justify-center text-[10px] font-mono font-bold text-amber-300">
                            {index + 1}
                          </span>
                        </span>
                      ) : (
                        <span className="relative flex h-5 w-5 rounded-full bg-white/95 border-2 border-amber-500 shadow-sm items-center justify-center text-[9px] font-mono font-bold text-slate-800 transition-transform group-hover/pin:scale-125 group-hover/pin:border-amber-600">
                          {index + 1}
                        </span>
                      )}
                    </button>
                  )
                })}

                {/* Subtle bottom gradient vignette */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                <div className="absolute bottom-2 inset-x-0 text-center pointer-events-none">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono tracking-wider">
                    <Layers className="w-3 h-3 text-amber-300" />
                    <span>6 INSPECT POINTS • CLICK PINS</span>
                  </span>
                </div>
              </div>

              {/* Right Side Callout Badges (Desktop) */}
              <div className="hidden sm:flex flex-col justify-between h-[340px] z-20 shrink-0 w-36 sm:w-44 text-left pl-2">
                {rightCallouts.map((callout) => {
                  const isActive = activeCallout.id === callout.id
                  return (
                    <div
                      key={callout.id}
                      className="flex items-center justify-start gap-2 group cursor-pointer"
                      onClick={() => handleCalloutClick(callout)}
                    >
                      <div
                        className={`w-8 sm:w-10 border-t-2 border-dashed transition-colors ${
                          isActive ? 'border-amber-500' : 'border-amber-300/80 group-hover:border-amber-500'
                        }`}
                      />
                      <button
                        type="button"
                        className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold transition-all duration-300 cursor-pointer shadow-xs ${
                          isActive
                            ? 'bg-slate-950 text-white border border-amber-400 ring-2 ring-amber-400/25 shadow-md translate-x-1'
                            : 'bg-white/95 text-slate-800 border border-amber-200/80 hover:bg-white hover:border-amber-400 hover:text-amber-800'
                        }`}
                      >
                        {callout.label}
                      </button>
                    </div>
                  )
                })}
              </div>

            </div>

            {/* Mobile Callout Pills Horizontal Scrollbar (Visible on small screens) */}
            <div className="flex sm:hidden flex-wrap items-center justify-center gap-2 mt-4 px-2">
              {callouts.map((callout) => {
                const isActive = activeCallout.id === callout.id
                return (
                  <button
                    key={callout.id}
                    type="button"
                    onClick={() => handleCalloutClick(callout)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-display font-bold transition-all ${
                      isActive
                        ? 'bg-slate-950 text-white border border-amber-400 ring-2 ring-amber-400/20'
                        : 'bg-white text-slate-800 border border-amber-200/80'
                    }`}
                  >
                    {callout.label}
                  </button>
                )
              })}
            </div>

            {/* Feature Explanation Spotlight Box matching bottom of reference image */}
            <div className="w-full max-w-[500px] mt-6 p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-amber-200/90 shadow-sm text-center transition-all duration-300 group">
              <div className="inline-flex items-center gap-1.5 text-amber-800 font-mono text-[11px] font-bold tracking-wider uppercase mb-1.5 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>{activeCallout.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-md mx-auto">
                {activeCallout.id === 'colour-options'
                  ? `Over 40+ curated Pantone leather tones. Live preview: ${
                      diaryColor === 'royal-blue' ? 'Royal Blue' : 'Executive Brown'
                    } finish.`
                  : activeCallout.desc}
              </p>

              {activeCallout.id === 'colour-options' && (
                <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-mono text-slate-500">Live Tone:</span>
                  <button
                    type="button"
                    onClick={() => setDiaryColor('brown')}
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                      diaryColor === 'brown'
                        ? 'bg-[#581825] text-white ring-2 ring-amber-400/40 shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Executive Brown
                  </button>
                  <button
                    type="button"
                    onClick={() => setDiaryColor('royal-blue')}
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                      diaryColor === 'royal-blue'
                        ? 'bg-[#1e3a8a] text-white ring-2 ring-blue-400/40 shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Royal Blue
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
