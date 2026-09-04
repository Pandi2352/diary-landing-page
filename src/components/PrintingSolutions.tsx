import React from 'react'
import {
  Calendar,
  BookMarked,
  Layers,
  GraduationCap,
  ShieldCheck,
  Truck,
  CheckCircle,
  FileSpreadsheet,
} from 'lucide-react'

export const PrintingSolutions: React.FC = () => {
  const capabilities = [
    {
      icon: BookMarked,
      title: 'Premium Diaries Manufacturing',
      desc: 'Sensational new range of executive, hardbound, and corporate diaries for today’s business managers every year with custom branding and foils.',
      specs: 'Hard Bound • Spiral • Laminated • PCP Covers',
    },
    {
      icon: Calendar,
      title: 'Office Date Calendars',
      desc: 'Office date calendars available in 3 / 4 / 6 / 12 sheets with high-gloss tin mounting or wiro hanging.',
      specs: '11"x18" • 15"x20" • 17"x27" • 18"x23"',
    },
    {
      icon: GraduationCap,
      title: 'School & College Stationery',
      desc: 'High quality aesthetic stationery for schools and colleges, designed aesthetically aligning with current youth tastes and academic guidelines.',
      specs: 'Lab Records • Customized Covers • Bulk Export',
    },
    {
      icon: FileSpreadsheet,
      title: 'Notebooks Export & Wholesale',
      desc: 'Leading manufacturer & exporter of notebooks in multiple ruled/unruled varieties, catering to domestic and overseas markets.',
      specs: 'Long Books • Soft Cover • Graph & Drawing Books',
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-white/80 backdrop-blur-[2px] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            <span>Beyond Diaries • Full Sivakasi Print Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 font-display tracking-tight">
            Commercial Offset & Stationery <br />
            <span className="text-amber-600">Printing Solutions</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Sutharsan Offset brings supreme print quality to all your corporate, educational, and wholesale printing requirements.
          </p>
        </div>

        {/* Grid of Capabilities: rounded-md, no shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {capabilities.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="p-5 rounded-md bg-slate-50 border border-slate-200 hover:border-amber-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base font-display mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <span className="text-[11px] font-mono text-amber-800 font-semibold block">
                    {item.specs}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Safe Delivery & Dispatch Banner: rounded-md, no shadows */}
        <div className="rounded-md bg-amber-50/70 border border-amber-300 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-200/80 text-amber-900 text-xs font-mono font-bold">
              <Truck className="w-3.5 h-3.5 text-amber-700" />
              <span>Pan-India & Export Logistics</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
              Reinforced Packaging & Safe Transit Guaranteed
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We ensure our excellent packing helps in safety of products and no damage occurs during transportation. Select online pickup or door delivery across Tamil Nadu and all Indian states.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Damage-Free Transit</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-700">
              <CheckCircle className="w-4 h-4 text-amber-600" />
              <span>Online Order Pickup</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
