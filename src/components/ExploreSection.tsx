import React, { useState } from 'react'
import {
  Compass,
  CheckCircle2,
  ChevronRight,
  Layers,
  ArrowRight,
} from 'lucide-react'

export const ExploreSection: React.FC = () => {
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

  return (
    <section id="explore-pillars" className="relative isolate overflow-hidden py-16 md:py-24 bg-[#faf9f5] border-b border-amber-200/60">
      {/* Background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-[45rem] rounded-full bg-amber-100/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
          <p className="text-xs font-mono text-slate-500 bg-white px-3 py-1.5 rounded-md border border-amber-200/80 w-fit">
            Click any pillar to explore craftsmanship details
          </p>
        </div>

        {/* Pillars Grid: rounded-md, no shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {pillars.map((pillar, idx) => {
            const isActive = activePillar === idx
            return (
              <div
                key={pillar.num}
                onClick={() => setActivePillar(idx)}
                className={`relative p-5 sm:p-6 rounded-md transition-all duration-200 cursor-pointer flex flex-col justify-between group backdrop-blur-md border-t-2 ${
                  isActive
                    ? 'bg-white border-2 border-amber-500 ring-2 ring-amber-400/20'
                    : 'bg-white/90 border border-amber-200/70 hover:bg-white hover:border-amber-400'
                }`}
              >
                {/* Top Color Accent Line */}
                <div
                  className={`absolute top-0 left-4 right-4 h-0.5 rounded-b-md bg-gradient-to-r ${pillar.accentColor} transition-opacity duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-3xl text-slate-900 group-hover:scale-105 transition-transform duration-200">
                      {pillar.num}
                    </span>
                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border ${pillar.pillBg}`}>
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
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'translate-x-1 text-amber-600' : 'group-hover:translate-x-1'}`} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Active Pillar Detailed Spotlight Banner: rounded-md, no shadow */}
        <div className="mt-6 p-5 sm:p-7 rounded-md bg-white border border-amber-200/80 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 transition-all duration-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-display font-black text-xl border border-amber-300">
              {pillars[activePillar].num}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-display font-black text-lg sm:text-xl text-slate-900">
                  {pillars[activePillar].title}
                </h4>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                  {pillars[activePillar].highlight}
                </span>
              </div>
              <p className="hero-script text-lg sm:text-xl text-amber-800 mt-1">
                &ldquo;{pillars[activePillar].quote}&rdquo;
              </p>
              <p className="text-xs text-slate-600 font-mono mt-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="leading-snug">Standard Specifications: {pillars[activePillar].spec}</span>
              </p>
            </div>
          </div>

          <a
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-slate-950 text-white hover:bg-amber-600 font-semibold text-xs tracking-wide transition-colors duration-200 shrink-0"
          >
            <span>Explore Matching Diaries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
