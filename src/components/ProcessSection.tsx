import React, { useState } from 'react'
import {
  FileText,
  Layers,
  PenTool,
  Printer,
  CheckCircle,
  PackageCheck,
} from 'lucide-react'

interface ProcessSectionProps {
  onStartRequirement?: () => void
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const steps = [
    {
      num: '01',
      title: 'Share Your Requirement',
      desc: 'Send us your estimated quantity, preferred dimensions, target delivery date, and corporate branding guidelines.',
      icon: FileText,
      detail: 'Online inquiry or WhatsApp consultation with our Sivakasi team',
    },
    {
      num: '02',
      title: 'Choose Size & Materials',
      desc: 'Select from Italian vegan leather, textured linen, or hardbound covers with 80–100 GSM acid-free parchment.',
      icon: Layers,
      detail: 'Swatches & paper dummy proofing available on request',
    },
    {
      num: '03',
      title: 'Customize Design',
      desc: 'Our pre-press artisans generate digital mockups with your logo in 24K gold foil, blind deboss, or silk screen.',
      icon: PenTool,
      detail: 'Free 3D digital visualization & PDF approval proofing',
    },
    {
      num: '04',
      title: 'Printing & Binding',
      desc: 'High-speed multi-colour Heidelberg offset printing with precision section sewing and spine edge reinforcement.',
      icon: Printer,
      detail: 'Crafted at our state-of-the-art Sivakasi press works',
    },
    {
      num: '05',
      title: 'Quality Check',
      desc: 'Rigorous inspection of foil registration, page alignment, thread tension, and gold gilded page edges.',
      icon: CheckCircle,
      detail: 'Zero-defect tolerance policy before packaging',
    },
    {
      num: '06',
      title: 'Finished Diary',
      desc: 'Individual shrink-wrapping and reinforced 5-ply export corrugated shipping for 100% pristine doorstep arrival.',
      icon: PackageCheck,
      detail: 'Dispatched securely across India and overseas',
    },
  ]

  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28 bg-[#faf8f4] border-y border-amber-100/70">
      {/* Subtle ambient background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f5] via-[#faf8f4] to-[#faf9f5]" />
        <div className="hero-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-[48rem] rounded-full bg-amber-200/20 blur-3xl" />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">

        {/* Section Header matching reference image */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-amber-800 uppercase tracking-[0.22em] mb-2.5">
            <span>FROM IDEA TO DIARY</span>
          </div>

          {/* Centered gold accent bar like reference image */}
          <div className="w-12 h-0.5 bg-amber-600/80 mx-auto mb-4 rounded-full" />

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
            How Your Bespoke Diary Comes to Life
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            A seamless six-stage craftsmanship journey from initial concept to your boardroom desk.
          </p>
        </div>

        {/* 6-Step Horizontal Process Line (Desktop / Tablet) */}
        <div className="relative">

          {/* Connecting Dashed Line between circles (visible on md+) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-7 left-[8%] right-[8%] h-[1.5px] border-t-2 border-dashed border-amber-300/80 -z-0 pointer-events-none"
          />

          {/* Grid of 6 Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-4 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isHovered = activeStep === idx

              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Circular Icon Node matching reference */}
                  <div className="relative mb-4">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-300 shadow-xs ${isHovered
                        ? 'border-amber-500 ring-4 ring-amber-400/20 -translate-y-1 shadow-md bg-amber-50/50'
                        : 'border-amber-200/90 group-hover:border-amber-400 group-hover:-translate-y-0.5'
                        }`}
                    >
                      <Icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 stroke-[1.75] ${isHovered
                          ? 'text-amber-700 scale-110'
                          : 'text-slate-800 group-hover:text-amber-700'
                          }`}
                      />
                    </div>

                    {/* Step indicator pulse dot on hover */}
                    {isHovered && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                      </span>
                    )}
                  </div>

                  {/* Step Number (01, 02, etc.) */}
                  <span className="text-xs font-mono font-bold text-amber-700/90 tracking-widest mb-1.5 transition-colors group-hover:text-amber-900">
                    {step.num}
                  </span>

                  {/* Step Title matching reference typography */}
                  <h4 className="text-sm font-bold text-slate-900 font-display leading-snug px-1 transition-colors group-hover:text-amber-800">
                    {step.title}
                  </h4>

                  {/* Detail description (visible with subtle fade) */}
                  <p className="mt-2 text-[11px] text-slate-500 leading-relaxed max-w-[170px] hidden sm:block">
                    {step.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
