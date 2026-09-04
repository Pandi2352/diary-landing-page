import React from 'react'
import {
  Sparkles,
  Feather,
  Award,
} from 'lucide-react'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative isolate overflow-hidden pt-16 md:pt-24 pb-6 md:pb-8 bg-[#fdf6ec]">
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
        <div className="relative rounded-3xl bg-white/85 backdrop-blur-xl border border-amber-200/70 p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(245,158,11,0.06)] mb-8 sm:mb-12 lg:mb-16 overflow-hidden group">
          {/* Subtle decorative background gradient patch */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-100/50 via-rose-100/30 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* Left: Photorealistic Heidelberg Offset Machine Showcase */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-sm bg-slate-100 group/img">
              <img
                src="/images/printing_press.jpg"
                alt="State-of-the-art multi-colour Heidelberg commercial offset printing press machine at Sutharsan Offset Printers in Sivakasi"
                className="w-full h-[260px] sm:h-[380px] lg:h-[460px] object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
              />

              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-black/20 to-black/20 pointer-events-none" />

              {/* Status Badge Over Image */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white border border-white/20 text-[10px] sm:text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>SIVAKASI WORKS • LIVE PRESS FLOOR</span>
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md border border-amber-200/80 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-amber-800 tracking-wider truncate">
                    IMPORTED MULTI-COLOUR OFFSET PRESS
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                    Active Production
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                  German-engineered high-speed offset press delivering micro-accurate CMYK registration, crisp foil embossing, and deep archival ink binding.
                </p>
              </div>
            </div>

            {/* Right: Heritage & Statistics Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5 sm:space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/90 text-amber-900 text-xs font-mono font-bold mb-3 sm:mb-4 border border-amber-300">
                  <Award className="w-3.5 h-3.5 text-amber-700" />
                  <span>30 Years of Unbroken Trust</span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-950 font-display tracking-tight leading-snug">
                  Modest Beginnings to Commercial Giants
                </h3>

                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our firm had a modest start with minimal equipment in the bustling printing capital of Sivakasi. Over three decades of relentless dedication, that modest start has blossomed into a trusted benchmark for premium corporate stationery across India.
                </p>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We invest continuously in imported high-speed presses, skilled bookbinders, and eco-friendly paper sourcing to ensure each diary delivers an unforgettable executive tactile experience.
                </p>
              </div>

              {/* 4 Sivakasi Milestone Stats */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-3 sm:pt-4 border-t border-amber-100">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/70 border border-amber-200/80 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-amber-400 shadow-xs">
                  <p className="text-2xl sm:text-3xl font-black text-amber-600 font-display">30+</p>
                  <p className="text-[11px] sm:text-xs text-slate-700 mt-1 font-semibold">Years in Sivakasi</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500">Established 1995</p>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-rose-50/70 border border-rose-200/80 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-rose-400 shadow-xs">
                  <p className="text-2xl sm:text-3xl font-black text-rose-600 font-display">100+</p>
                  <p className="text-[11px] sm:text-xs text-slate-700 mt-1 font-semibold">Formats & Styles</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500">Bespoke layouts</p>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50/70 border border-emerald-200/80 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-emerald-400 shadow-xs">
                  <p className="text-2xl sm:text-3xl font-black text-emerald-600 font-display">Top 10</p>
                  <p className="text-[11px] sm:text-xs text-slate-700 mt-1 font-semibold">Press in Sivakasi</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500">Industry recognized</p>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-purple-50/70 border border-purple-200/80 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-purple-400 shadow-xs">
                  <p className="text-2xl sm:text-3xl font-black text-purple-600 font-display">5M+</p>
                  <p className="text-[11px] sm:text-xs text-slate-700 mt-1 font-semibold">Sheets Pressed</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500">Zero-defect rate</p>
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

      </div>
    </section>
  )
}

