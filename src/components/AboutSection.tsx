import React, { useState } from 'react'
import {
  Award,
  ShieldCheck,
  Cpu,
  Clock,
  Truck,
  ChevronRight,
  Sparkles,
  Layers,
  Feather,
  CheckCircle2,
  Compass,
  ArrowRight,
} from 'lucide-react'

export const AboutSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0)

  const pillars = [
    {
      num: '01',
      title: 'The Masterpiece Accompaniment',
      subtitle: 'For Visionary Leaders',
      desc: 'This masterpiece of a diary is the perfect accompaniment to those who seek to master the world itself. Engineered with crisp Japanese fountain-pen friendly pages and heirloom Italian leatherette covers.',
      highlight: 'Precision Craftsmanship',
      accentColor: 'from-amber-500 to-orange-500',
      pillBg: 'bg-amber-50 text-amber-900 border-amber-200/80',
      spec: '80-100 GSM Acid-Free Paper • Hand-Sewn Sections • Silk Ribbon Marker',
      quote: 'A companion that transforms fleeting daydreams into enduring empires.',
    },
    {
      num: '02',
      title: 'A Person of Influence',
      subtitle: 'Executive Boardroom Poise',
      desc: 'These special diaries give off a firm impression that you are a person of influence to make your mark. Rich tactile grains, subtle micro-embossed metallic foil, and gilded page edges that command attention.',
      highlight: 'Executive Presence',
      accentColor: 'from-rose-500 to-pink-500',
      pillBg: 'bg-rose-50 text-rose-900 border-rose-200/80',
      spec: 'Micro-Blind Debossing • 24k Gold Gilded Edges • Magnetic Metal Clasp',
      quote: 'Quiet luxury that speaks volumes before you even write a single word.',
    },
    {
      num: '03',
      title: 'Organize Thoughts & Clarity',
      subtitle: 'Strategic Mental Architecture',
      desc: 'Keep your thoughts organized. Diaries help us to organize our thoughts and make them apprehensible, turning chaotic ideas into structured roadmap milestones and actionable daily triumphs.',
      highlight: 'Mental Clarity',
      accentColor: 'from-emerald-500 to-teal-500',
      pillBg: 'bg-emerald-50 text-emerald-900 border-emerald-200/80',
      spec: 'Dot Grid & Ruled Hybrid • Monthly Strategy Planners • Goal Trackers',
      quote: 'Paper creates an unplugged sanctuary where original thoughts flourish.',
    },
    {
      num: '04',
      title: 'Bespoke Customization',
      subtitle: 'Tailored for Corporations',
      desc: 'We offer this range in different sizes and designs that can be modified as per the requirements of clients. Tailored foil stamping, personalized page layouts, custom insert pages, and corporate branding.',
      highlight: 'Custom Engineering',
      accentColor: 'from-purple-500 to-indigo-500',
      pillBg: 'bg-purple-50 text-purple-900 border-purple-200/80',
      spec: 'Pantone Color Matching • Custom Watermarks • Branded Presentation Boxes',
      quote: 'Your corporate identity rendered in the timeless language of fine print.',
    },
  ]

  const pressHighlights = [
    {
      icon: Cpu,
      title: 'Imported Heidelberg Machinery',
      subtitle: 'High-Speed Multi-Colour Offset',
      desc: 'Advanced commercial offset machines imported to provide razor-sharp color calibration, crisp CMYK registration, and rich tactile print finishes on every page.',
      tag: 'German Tech',
      color: 'text-amber-700 bg-amber-100/80 border-amber-200',
    },
    {
      icon: ShieldCheck,
      title: 'Rigorous Quality Precision',
      subtitle: 'Zero-Defect Inspection',
      desc: 'Stringent multi-tier checks at binding, thread-stitching, spine folding, and foil-embossing stages, ensuring flawless heirloom-grade production runs.',
      tag: 'ISO Calibrated',
      color: 'text-emerald-700 bg-emerald-100/80 border-emerald-200',
    },
    {
      icon: Clock,
      title: 'Strict Punctual Delivery',
      subtitle: 'Reliable Corporate Turnaround',
      desc: 'Proven track record in meeting tight festival and corporate new year delivery schedules time and again, maintaining multi-decade client partnerships.',
      tag: '30-Year Trust',
      color: 'text-sky-700 bg-sky-100/80 border-sky-200',
    },
    {
      icon: Truck,
      title: 'Zero-Damage Export Transit',
      subtitle: 'Reinforced Protective Packaging',
      desc: 'Individual moisture-proof shrink wrapping and reinforced 5-ply export corrugated shipping cartons ensuring pristine unboxing at your doorstep.',
      tag: '100% Safe',
      color: 'text-indigo-700 bg-indigo-100/80 border-indigo-200',
    },
  ]

  return (
    <section id="about" className="relative isolate overflow-hidden py-24 md:py-32 bg-[#fdf6ec]">
      {/* Ambient Dreamy Background Integration matching Hero section */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Real Panoramic Pastel Watercolor & Stationery Artwork */}
        <img
          src="/images/about_bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-multiply"
        />

        {/* Soft Cream Gradients to seamlessly merge with Hero above and Collections below */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdf6ec] via-[#fdf6ec]/80 to-[#fdf6ec]" />

        {/* Ambient Floating Pastel Orbs */}
        <div className="hero-blob absolute -top-20 left-10 h-96 w-96 rounded-full bg-rose-200/35 blur-3xl" />
        <div className="hero-blob absolute top-1/3 -right-20 h-[30rem] w-[30rem] rounded-full bg-amber-200/40 blur-3xl" style={{ animationDelay: '-6s' }} />
        <div className="hero-blob absolute -bottom-16 left-1/3 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" style={{ animationDelay: '-12s' }} />
      </div>

      {/* Main Container */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-amber-200/90 text-amber-950 text-xs font-semibold tracking-wide backdrop-blur-md shadow-xs transition-transform duration-300 hover:scale-[1.02]">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            <span>Welcome To Sutharsan Offset Printers</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="font-mono text-[11px] font-bold text-amber-800">Est. 1995 • Sivakasi</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-display tracking-tight leading-[1.15]">
            Printing Capital Heritage,{' '}
            <span className="relative inline-block mt-1 sm:mt-0">
              <span className="hero-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal not-italic block sm:inline">
                Modern Precision
              </span>
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

          <p className="mt-6 text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Proudly recognized among the{' '}
            <strong className="text-slate-950 font-bold underline decoration-amber-400 decoration-2 underline-offset-4">
              Top 10 Printing Press in Sivakasi
            </strong>
            . Over three decades of evolution from humble beginnings into one of South India&apos;s foremost multi-colour commercial diary manufacturing facilities.
          </p>
        </div>

        {/* Sivakasi Heidelberg Factory Spotlight Card */}
        <div className="relative rounded-3xl bg-white/85 backdrop-blur-xl border border-amber-200/70 p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(245,158,11,0.06)] mb-20 overflow-hidden group">
          {/* Subtle decorative background gradient patch */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-100/50 via-rose-100/30 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left: Photorealistic Heidelberg Offset Machine Showcase */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-sm bg-slate-100 group/img">
              <img
                src="/images/printing_press.jpg"
                alt="State-of-the-art multi-colour Heidelberg commercial offset printing press machine at Sutharsan Offset Printers in Sivakasi"
                className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
              />

              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

              {/* Status Badge Over Image */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white border border-white/20 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>SIVAKASI WORKS • LIVE PRESS FLOOR</span>
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-amber-200/80 p-4 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-amber-800 tracking-wider">
                    IMPORTED MULTI-COLOUR OFFSET PRESS
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Active Production
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  German-engineered high-speed offset press delivering micro-accurate CMYK registration, crisp foil embossing, and deep archival ink binding.
                </p>
              </div>
            </div>

            {/* Right: Heritage & Statistics Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/90 text-amber-900 text-xs font-mono font-bold mb-4 border border-amber-300">
                  <Award className="w-3.5 h-3.5 text-amber-700" />
                  <span>30 Years of Unbroken Trust</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display tracking-tight leading-snug">
                  Modest Beginnings to Commercial Giants
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Our firm had a modest start with minimal equipment in the bustling printing capital of Sivakasi. Over three decades of relentless dedication, that modest start has blossomed into a trusted benchmark for premium corporate stationery across India.
                </p>

                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  We invest continuously in imported high-speed presses, skilled bookbinders, and eco-friendly paper sourcing to ensure each diary delivers an unforgettable executive tactile experience.
                </p>
              </div>

              {/* 4 Sivakasi Milestone Stats */}
              <div className="grid grid-cols-2 gap-3.5 pt-4 border-t border-amber-100">
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-amber-400 shadow-xs">
                  <p className="text-3xl font-black text-amber-600 font-display">30+</p>
                  <p className="text-xs text-slate-700 mt-1 font-semibold">Years Active in Sivakasi</p>
                  <p className="text-[11px] text-slate-500">Established 1995</p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-rose-400 shadow-xs">
                  <p className="text-3xl font-black text-rose-600 font-display">100+</p>
                  <p className="text-xs text-slate-700 mt-1 font-semibold">Diary Formats & Styles</p>
                  <p className="text-[11px] text-slate-500">Bespoke layouts</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-emerald-400 shadow-xs">
                  <p className="text-3xl font-black text-emerald-600 font-display">Top 10</p>
                  <p className="text-xs text-slate-700 mt-1 font-semibold">Sivakasi Printing Press</p>
                  <p className="text-[11px] text-slate-500">Industry recognized</p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-purple-400 shadow-xs">
                  <p className="text-3xl font-black text-purple-600 font-display">5M+</p>
                  <p className="text-xs text-slate-700 mt-1 font-semibold">Sheets Pressed Yearly</p>
                  <p className="text-[11px] text-slate-500">Zero-defect rate</p>
                </div>
              </div>

              {/* Quotation Ribbon */}
              <div className="p-4 rounded-2xl bg-white/90 border border-amber-200/80 flex items-start gap-3 shadow-xs">
                <Feather className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="hero-script text-lg text-slate-800 leading-snug">
                  &ldquo;Every diary pressed in our factory carries thirty years of ink, devotion, and Sivakasi printing soul.&rdquo;
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* 4 Core Philosophy Pillars - Interactive Notebook Experience */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-800 uppercase tracking-widest mb-1.5">
                <Compass className="w-3.5 h-3.5 text-amber-600" />
                <span>Our Core Philosophy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 font-display tracking-tight">
                Explore Us: The 4 Pillars of Sorsons Diaries
              </h3>
            </div>
            <p className="text-xs font-mono text-slate-500 bg-white/80 px-3 py-1.5 rounded-full border border-amber-200/80 w-fit">
              Click any pillar to explore craftsmanship details
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {pillars.map((pillar, idx) => {
              const isActive = activePillar === idx
              return (
                <div
                  key={pillar.num}
                  onClick={() => setActivePillar(idx)}
                  className={`relative p-6 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between group backdrop-blur-xl ${isActive
                    ? 'bg-white border-2 border-amber-500 ring-4 ring-amber-400/20 shadow-xl -translate-y-1.5'
                    : 'bg-white/80 border border-amber-200/70 hover:bg-white hover:border-amber-400 hover:-translate-y-1 shadow-sm'
                    }`}
                >
                  {/* Top Color Accent Line */}
                  <div
                    className={`absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r ${pillar.accentColor} transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display font-black text-3xl bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                        {pillar.num}
                      </span>
                      <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border ${pillar.pillBg}`}>
                        {pillar.highlight}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-amber-700 tracking-wide uppercase mb-1">
                      {pillar.subtitle}
                    </p>

                    <h4 className="font-black text-lg text-slate-950 font-display mb-2.5 group-hover:text-amber-800 transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-amber-100/80 flex items-center justify-between text-xs font-bold text-amber-800">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isActive ? 'text-amber-600' : 'text-slate-400'}`} />
                      {isActive ? 'Active Selection' : 'View Details'}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'translate-x-1 text-amber-600' : 'group-hover:translate-x-1.5'}`} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Active Pillar Detailed Spotlight Banner */}
          <div className="mt-6 p-5 sm:p-7 rounded-3xl bg-white/90 backdrop-blur-xl border border-amber-200/80 shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100/90 text-amber-800 flex items-center justify-center shrink-0 font-display font-black text-xl border border-amber-300 shadow-xs">
                {pillars[activePillar].num}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-display font-black text-lg sm:text-xl text-slate-900">
                    {pillars[activePillar].title}
                  </h4>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                    {pillars[activePillar].highlight}
                  </span>
                </div>
                <p className="hero-script text-lg sm:text-xl text-amber-800 mt-1">
                  &ldquo;{pillars[activePillar].quote}&rdquo;
                </p>
                <p className="text-xs text-slate-600 font-mono mt-1 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-600" />
                  <span>Standard Specifications: {pillars[activePillar].spec}</span>
                </p>
              </div>
            </div>

            <a
              href="#products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 text-white hover:bg-amber-600 font-semibold text-xs tracking-wide transition-colors duration-200 shrink-0 shadow-sm"
            >
              <span>Explore Matching Diaries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Printing Precision Pillars: interactive cards with icon rotation */}
        {/* <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-display tracking-tight">
              Crafted With Sivakasi Precision Engineering
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every stage from paper pulp inspection to final export wrapping follows ISO-calibrated quality tolerances.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {pressHighlights.map((feat) => {
              const Icon = feat.icon
              return (
                <div
                  key={feat.title}
                  className="p-6 rounded-3xl bg-white/80 border border-amber-200/70 hover:bg-white hover:border-amber-400 hover:-translate-y-1.5 transition-all duration-300 group backdrop-blur-xl shadow-xs"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100/80 text-amber-800 flex items-center justify-center border border-amber-200/80 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${feat.color}`}>
                      {feat.tag}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-950 text-base mb-1 font-display group-hover:text-amber-800 transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-xs font-semibold text-amber-700/90 mb-2 font-mono">
                    {feat.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div> */}

      </div>
    </section>
  )
}

