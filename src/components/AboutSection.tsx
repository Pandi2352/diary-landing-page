import React, { useState } from 'react'
import {
  Award,
  Printer,
  ShieldCheck,
  Cpu,
  Clock,
  Truck,
  ChevronRight,
  Sparkles,
} from 'lucide-react'

export const AboutSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0)

  const pillars = [
    {
      num: '01',
      title: 'The Masterpiece Accompaniment',
      desc: 'This masterpiece of a diary is the perfect accompaniment to those who seek to master the world itself. Designed with uncompromising precision for visionary leaders.',
      highlight: 'Precision Craftsmanship',
    },
    {
      num: '02',
      title: 'A Person of Influence',
      desc: 'These special diaries give off a firm impression that you are a person of influence to make your mark. Subtle luxury that commands respect in every boardroom.',
      highlight: 'Executive Presence',
    },
    {
      num: '03',
      title: 'Organize Thoughts & Clarity',
      desc: 'Keep your thoughts organized. Diaries help us to organize our thoughts and make them apprehensible, turning chaotic ideas into structured strategy.',
      highlight: 'Mental Clarity',
    },
    {
      num: '04',
      title: 'Bespoke Customization',
      desc: 'We offer this range in different sizes and designs that can be modified as per the requirements of the clients. Tailored foil stamping, page layouts, and corporate branding.',
      highlight: 'Custom Engineering',
    },
  ]

  const pressHighlights = [
    {
      icon: Cpu,
      title: 'Imported Modern Machinery',
      desc: 'High-speed multi-colour commercial offset machines imported to provide razor-sharp color calibration, crisp CMYK registration, and rich finish.',
    },
    {
      icon: ShieldCheck,
      title: 'Rigorous Quality Precision',
      desc: 'Stringent quality checks at every binding, folding, and foil-embossing phase, ensuring zero-defect production runs.',
    },
    {
      icon: Clock,
      title: 'On-Time Schedule Delivery',
      desc: 'Capability in meeting strict time schedules time and again, maintaining long-term partnerships across India.',
    },
    {
      icon: Truck,
      title: 'Zero-Damage Packing & Transit',
      desc: 'Multi-layer shrink wrapping and reinforced export-grade corrugated packaging for 100% damage-free delivery.',
    },
  ]

  return (
    <section id="about" className="relative isolate overflow-hidden py-20 md:py-28 bg-[#faf7f2] border-b border-amber-100/60">
      {/* Ambient Dreamy Pastel Watercolor & Stationery Artwork */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Background artwork */}
        <div className="absolute inset-0 bg-[url('/images/about_bg.jpg')] bg-cover bg-center bg-no-repeat opacity-55" />
        
        {/* Cream wash so text and content remain perfectly legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdf6ec]/85 via-[#faf7f2]/75 to-[#faf7f2]/90" />
        
        {/* Floating subtle ambient pastel glow orbs */}
        <div className="hero-blob absolute -top-16 left-1/4 h-80 w-80 rounded-full bg-fuchsia-200/25 blur-3xl" />
        <div className="hero-blob absolute top-1/2 right-12 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" style={{ animationDelay: '-5s' }} />
        <div className="hero-blob absolute bottom-10 left-10 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl" style={{ animationDelay: '-10s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-amber-200/80 text-amber-900 text-xs font-semibold tracking-wide backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            <span>Welcome To Sutharsan Offset Printers</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="font-mono text-[11px] font-bold text-amber-800">Est. 1995</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 font-display tracking-tight">
            Printing Capital Heritage, <br />
            <span className="bg-gradient-to-r from-amber-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
              Built With German & Modern Precision
            </span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Being a reputed name in the industry, we are proudly recognized among the{' '}
            <strong className="text-slate-900 font-bold">Top 10 Printing Press in Sivakasi</strong>. Over 30 years of transformation from a modest start to India&apos;s leading state-of-the-art commercial colour printing house.
          </p>
        </div>

        {/* Factory Spotlight: modern card with subtle hover transitions */}
        <div className="rounded-2xl bg-white/80 border border-slate-200/80 overflow-hidden mb-16 backdrop-blur-md transition-colors hover:border-amber-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Photorealistic Heidelberg Offset Machine */}
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[440px] overflow-hidden bg-slate-100 group">
              <img
                src="/images/printing_press.jpg"
                alt="State-of-the-art multi-colour Heidelberg commercial offset printing press machine in Sivakasi factory"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-slate-200/80 p-3.5 rounded-xl max-w-md backdrop-blur-md">
                <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold font-mono mb-1">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span>SIVAKASI WORKS • IMPORTED MULTI-COLOUR OFFSET PRESS</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-speed multi-colour press delivering micro-accurate registration, gold-foil embossing, and rich CMYK gamut on luxury diary sheets.
                </p>
              </div>
            </div>

            {/* Right: Heritage & Capability Content */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-mono font-bold mb-3 border border-amber-300">
                  <Award className="w-3.5 h-3.5 text-amber-700" />
                  <span>30 Years of Excellence</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-950 font-display mb-3">
                  Modest Beginnings to Commercial Giants
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Our firm had a modest starting with few facilities; over three decades, that small beginning has transformed into a well-reckoned powerhouse within the market.
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  We use imported modern machines in our printing press for giving our customers the best results in printing. Our professionals make use of inventive designs and excellent printing material to maintain precision quality and meet tight schedules time and again.
                </p>
              </div>

              {/* Stats Box: rounded cards with hover elevation */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200/70">
                <div className="p-3.5 rounded-xl bg-white/90 border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300">
                  <p className="text-3xl font-black text-amber-600 font-display">100+</p>
                  <p className="text-xs text-slate-600 mt-1 font-medium">Completed Products & Formats</p>
                </div>
                <div className="p-4 rounded-xl bg-white/90 border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400">
                  <p className="text-3xl font-black text-emerald-700 font-display">30+</p>
                  <p className="text-xs text-slate-600 mt-1 font-medium">Years Active in Sivakasi</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Explore Us: 4 Core Philosophy Pillars */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
            <div>
              <div className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest mb-1">
                Our Core Philosophy
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
                Explore Us: The 4 Pillars of Sorsons Diaries
              </h3>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-2 sm:mt-0">
              Interactive Design Blueprint
            </p>
          </div>

          {/* Pillars Grid: interactive cards with smooth hover & active effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, idx) => {
              const isActive = activePillar === idx
              return (
                <div
                  key={pillar.num}
                  onClick={() => setActivePillar(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group backdrop-blur-md ${
                    isActive
                      ? 'bg-white border-amber-500 ring-2 ring-amber-400/20 -translate-y-1'
                      : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-amber-300 hover:-translate-y-1'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display font-black text-2xl text-amber-600 transition-transform duration-300 group-hover:scale-110">
                        {pillar.num}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {pillar.highlight}
                      </span>
                    </div>

                    <h4 className="font-bold text-base text-slate-900 font-display mb-2 group-hover:text-amber-700 transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-amber-700">
                    <span>Explore Pillar</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 4 Printing Precision Pillars: interactive cards with icon rotation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pressHighlights.map((feat) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.title}
                className="p-5 rounded-2xl bg-white/80 border border-slate-200/80 hover:bg-white hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 group backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5 font-display group-hover:text-amber-700 transition-colors">{feat.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
