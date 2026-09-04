import React from 'react'
import { Sparkles, ArrowRight, Star, Heart, Feather, Award } from 'lucide-react'

interface HeroSectionProps {
  onExploreProducts: () => void
  onOpenInquiry: (productName?: string) => void
}

/* --------------------------------------------------------------------------
   Static config — declared outside the component so it never re-allocates.
   -------------------------------------------------------------------------- */

const TRUST_BADGES = [
  { id: 'quality', icon: Star, chip: 'bg-amber-100 text-amber-600', line1: 'Premium', line2: 'Quality' },
  { id: 'designs', icon: Heart, chip: 'bg-purple-100 text-purple-600', line1: 'Unique', line2: 'Designs' },
  { id: 'dreamers', icon: Feather, chip: 'bg-orange-100 text-orange-600', line1: 'Made for', line2: 'Dreamers' },
  { id: 'sivakasi', icon: Award, chip: 'bg-emerald-100 text-emerald-700', line1: 'Top 10 Press', line2: 'in Sivakasi' },
]

const MARQUEE_ITEMS = [
  'Better Days Ahead Pastel Diary',
  'Botanical Emerald Journal',
  'Dreamy Trio Collector Edition',
  'Celestial Colorful Outline Diary',
  'Creative Canvas Open Diary',
  'Executive Navy Edition',
  'Majestic Presentation Diary',
  'Corporate Curved Spine Diary',
  'Sivakasi Offset Print Works',
]

/* -------------------------------------------------------------------------- */

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProducts,
  onOpenInquiry,
}) => {

  return (
    <section
      id="home"
      className="relative isolate flex items-center overflow-hidden bg-[#fdf6ec] pt-24 pb-14 md:pt-28 md:pb-16 lg:min-h-[84vh]"
    >
      {/* ===================== Background artwork (starts below navbar) ===================== */}
      <div aria-hidden="true" className="pointer-events-none absolute top-16 sm:top-20 inset-x-0 bottom-0 -z-10 overflow-hidden">
        {/* Full-bleed unified hero artwork: starts below navbar, zero clipping */}
        <img
          src="/images/unified_hero_banner.jpg?v=final7"
          alt=""
          className="w-full h-full object-cover object-right select-none"
        />

        {/* Soft bottom blend to transition smoothly into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#fdf6ec] to-transparent" />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* ===================== Left: typography & CTAs ===================== */}
          <div className="text-center lg:col-span-6 lg:text-left max-w-xl xl:max-w-2xl">
            {/* Headline */}
            <h1 className="hero-rise font-display text-3xl font-black leading-[1.1] tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[3.2rem] xl:text-[3.65rem]">
              <div className="flex items-baseline justify-center gap-3 lg:justify-start">
                <span>Your</span>
                <span className="relative inline-block">
                  <span className="hero-script text-[1.28em] font-bold tracking-normal bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent pr-1">
                    Ideas
                  </span>

                  {/* Sunray ticks above the script word */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 50 25"
                    className="absolute -top-3.5 right-0 h-4 w-8 text-amber-500 sm:-top-5"
                  >
                    <path d="M5 20 2 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M22 18 24 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M40 22 48 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>

                  {/* Brushstroke underline */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 240 26"
                    className="absolute -bottom-1 left-0 h-4 w-full text-purple-500 sm:h-5"
                    fill="none"
                  >
                    <path
                      className="hero-draw"
                      d="M4 17c48-11 128-16 214-9-30 4-58 6-84 6"
                      stroke="currentColor"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>

              <div className="mt-1 sm:mt-2">
                Deserve a
              </div>

              <div className="mt-1 sm:mt-2 flex items-baseline justify-center gap-3 lg:justify-start">
                <span className="hero-gradient-text inline-block">
                  Beautiful
                </span>
                <span>Home.</span>
              </div>
            </h1>

            <p
              className="hero-rise mx-auto mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
              style={{ animationDelay: '0.68s' }}
            >
              Capture your thoughts, plan your dreams, and make every day more meaningful with our
              premium diaries. Crafted with imported modern offset technology by{' '}
              <strong className="font-bold text-slate-900">Sutharsan Offset Printers</strong> in
              Sivakasi.
            </p>

            {/* CTAs */}
            <div
              className="hero-rise mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
              style={{ animationDelay: '0.78s' }}
            >
              <button
                type="button"
                onClick={onExploreProducts}
                className="hero-sheen group relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                <span className="relative z-10">Explore Collection</span>
                <span className="relative z-10 grid h-6 w-6 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => onOpenInquiry('Better Days Ahead Pastel Diary')}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-slate-300 bg-white/90 px-6 py-3.5 text-sm font-bold text-slate-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-fuchsia-300 hover:text-fuchsia-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-500"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-fuchsia-100 text-fuchsia-600 transition-transform duration-300 group-hover:rotate-12">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                </span>
                <span>Get a Quote</span>
              </button>
            </div>

            {/* Trust badges */}
            <ul
              className="hero-rise mt-9 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 rounded-2xl border border-white/80 bg-white/70 px-4 py-2.5 backdrop-blur-md text-xs font-semibold text-slate-700 lg:justify-start"
              style={{ animationDelay: '0.88s' }}
            >
              {TRUST_BADGES.map(({ id, icon: Icon, chip, line1, line2 }) => (
                <li key={id} className="flex items-center gap-2.5 text-left">
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${chip}`}>
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="leading-tight">
                    <span className="block font-bold text-slate-900">{line1}</span>
                    <span className="text-[11px] font-medium text-slate-600">{line2}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ===================== Right: Artwork canvas spacer ===================== */}
          <div className="lg:col-span-6 min-h-[280px] sm:min-h-[380px] lg:min-h-[540px] pointer-events-none" />
        </div>

        {/* ===================== Series marquee ===================== */}
        <div
          className="hero-rise mt-14 overflow-hidden rounded-full border border-white/70 bg-white/55 py-3 backdrop-blur-sm md:mt-16"
          style={{ animationDelay: '1.1s' }}
        >
          <div className="hero-marquee whitespace-nowrap font-display text-xs font-semibold uppercase tracking-widest text-slate-600">
            {['original', 'duplicate'].map((copy) => (
              <span
                key={copy}
                className="flex items-center gap-8 pr-8"
                aria-hidden={copy === 'duplicate' ? 'true' : undefined}
              >
                {MARQUEE_ITEMS.map((item) => (
                  <span key={item} className="flex items-center gap-8">
                    <span>✨ {item}</span>
                    <span className="text-fuchsia-400">•</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
