import React, { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Sparkles,
  ArrowLeft,
  Search,
  BookOpen,
  Layers,
  CheckCircle2,
  X,
  ArrowUpRight,
  FileText,
  Phone,
  Eye,
} from 'lucide-react'
import scrapedSeriesData from '../data/scrapedSeries.json'

export interface ScrapedSeriesItem {
  id: string
  name: string
  desc: string
  innerImage: string | null
  covers: string[]
}

interface ProductsPageProps {
  onOpenInquiry: (seriesName?: string) => void
  initialTargetSeriesId?: string | null
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onOpenInquiry,
  initialTargetSeriesId,
}) => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [activeCoverPerSeries, setActiveCoverPerSeries] = useState<Record<string, number>>({})

  // Scroll to initial targeted series if supplied
  useEffect(() => {
    if (initialTargetSeriesId) {
      setTimeout(() => {
        const el = document.getElementById(`series-${initialTargetSeriesId}`)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 150)
    } else {
      window.scrollTo(0, 0)
    }
  }, [initialTargetSeriesId])

  // Categorize each series
  const enrichedSeries = useMemo(() => {
    return (scrapedSeriesData as ScrapedSeriesItem[]).map((item, index) => {
      let category = 'standard'
      let categoryLabel = 'Standard Series'
      const lowerName = item.name.toLowerCase()
      const lowerDesc = item.desc.toLowerCase()

      if (lowerName.includes('mega') || lowerName.includes('executive') || lowerName.includes('global')) {
        category = 'executive'
        categoryLabel = 'Executive & Mega'
      } else if (lowerName.includes('ojas') || lowerName.includes('rainbow') || lowerName.includes('planner')) {
        category = 'planners'
        categoryLabel = 'Ojas & Planners'
      } else if (lowerName.includes('angel') || lowerName.includes('achiever') || lowerName.includes('agasthya') || lowerName.includes('prince') || lowerName.includes('noble')) {
        category = 'compact'
        categoryLabel = 'Compact & Desk'
      } else if (lowerName.includes('prestige') || lowerName.includes('companion')) {
        category = 'pocket'
        categoryLabel = 'Pocket & Handy'
      } else if (lowerName.includes('platinum')) {
        category = 'platinum'
        categoryLabel = 'Platinum Leather'
      } else if (lowerName.includes('spiral') || lowerName.includes('journel')) {
        category = 'spiral'
        categoryLabel = 'Spiral & Journals'
      }

      // Extract size if available
      const sizeMatch = item.desc.match(/\d+[\s\d\/]*["']*\s*[Xx]\s*\d+[\s\d\/]*["']*/)
      const extractedSize = sizeMatch ? sizeMatch[0] : ''

      return {
        ...item,
        seriesIndex: index + 1,
        category,
        categoryLabel,
        extractedSize,
        isDieCut: lowerDesc.includes('die cut') || lowerDesc.includes('die-cut'),
      }
    })
  }, [])

  const categories = [
    { id: 'all', label: 'All 22 Series', count: enrichedSeries.length },
    { id: 'executive', label: 'Executive & Mega', count: enrichedSeries.filter(s => s.category === 'executive').length },
    { id: 'planners', label: 'Ojas & Planners', count: enrichedSeries.filter(s => s.category === 'planners').length },
    { id: 'compact', label: 'Compact & Desk', count: enrichedSeries.filter(s => s.category === 'compact').length },
    { id: 'pocket', label: 'Pocket Series', count: enrichedSeries.filter(s => s.category === 'pocket').length },
    { id: 'spiral', label: 'Spiral & Journals', count: enrichedSeries.filter(s => s.category === 'spiral').length },
    { id: 'platinum', label: 'Platinum Leather', count: enrichedSeries.filter(s => s.category === 'platinum').length },
  ]

  const filteredSeries = useMemo(() => {
    return enrichedSeries.filter((series) => {
      const matchesCategory = activeCategory === 'all' || series.category === activeCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !query ||
        series.name.toLowerCase().includes(query) ||
        series.desc.toLowerCase().includes(query) ||
        series.categoryLabel.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [enrichedSeries, activeCategory, searchQuery])

  return (
    <div className="min-h-screen text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 pb-24 relative">
      {/* 
        LIGHT COLORED STATIONERY BACKGROUND IMAGE:
        Subtle ivory parchment texture with delicate golden line art sketches of open diaries, 
        quill, guilloche watermarks, and handcrafted collection seals covering full width.
      */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10 bg-[url('/images/light_series_bg.jpg')] bg-cover bg-center bg-fixed bg-no-repeat opacity-95"
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-b from-[#fdfbf7]/40 via-transparent to-[#fdfbf7]/50"
      />

      {/* Top Hero Banner - Edge-to-Edge Full Width with Dedicated Luxury Stationery Background */}
      <div className="pt-24 sm:pt-28 pb-10 sm:pb-14 border-b border-amber-200/80 relative overflow-hidden bg-[url('/images/products_hero_banner_bg.jpg')] bg-cover bg-center">
        {/* Luminous warm overlay for crystal-clear readability while displaying luxury stationery background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#fdfbf7]/88 via-white/82 to-[#fdfbf7]/88 backdrop-blur-[1px] pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs & Back Button */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <button
              onClick={() => {
                navigate('/')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 text-xs font-semibold transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-amber-700" />
              <span>Back to Home</span>
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="hover:text-slate-900 cursor-pointer" onClick={() => navigate('/')}>Home</span>
              <span>/</span>
              <span className="text-amber-900 font-semibold font-mono">2025 Products Catalog</span>
            </div>
          </div>

          {/* Hero Section Info */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 border border-amber-300 text-amber-950 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Direct Sivakasi Factory Production Catalog</span>
                <span className="w-1 h-1 rounded-md bg-amber-500" />
                <span className="font-mono text-amber-800">22 Series • 66+ Formats</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 font-display tracking-tight leading-tight">
                2025 Sorsons Diaries <br />
                <span className="text-amber-600 font-serif italic font-normal">
                  Authentic Series, Inner Layouts & Finishes
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-700 mt-3 max-w-4xl leading-relaxed font-sans font-medium">
                Explore the complete official catalog manufactured at Sutharsan Offset Printers in Sivakasi.
                Inspect printed inner page formats (Sunday separate, Sat & Sun clubbed,
                color planners) alongside cover collections, imported PU textures, and month die-cut tabs.
              </p>
            </div>

            {/* Quick CTAs: rounded-md, no shadow */}
            <div className="flex sm:flex-row flex-col items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="tel:+919952424780"
                className="px-4 py-2.5 rounded-md bg-white border border-slate-200 text-slate-800 hover:text-amber-900 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>+91 99524 24780</span>
              </a>

              <button
                onClick={() => onOpenInquiry('Complete 2025 Catalog Order')}
                className="px-5 py-2.5 rounded-md bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>Enquire Factory Bulk Pricing</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Filter & Search Toolbar - Centered with balanced side space, rounded-md, no shadow */}
      <div className="sticky top-14 z-30 bg-white/95 backdrop-blur-md border-b border-amber-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Category Filter Pills: rounded-md, no shadow */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-bold border border-amber-600'
                      : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                      isActive ? 'bg-amber-950 text-amber-100' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Search Box: rounded-md */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search series name, size, or layout..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-1.5 text-xs rounded-md bg-white border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Series Showcase List - Centered with balanced side space, rounded-md, no shadow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {filteredSeries.length === 0 ? (
          <div className="text-center py-20 bg-white/95 rounded-md border border-dashed border-slate-300">
            <BookOpen className="w-12 h-12 text-amber-600/40 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-slate-900">No series match your search</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn't find any series matching "{searchQuery}". Clear your search or pick another category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('all')
              }}
              className="mt-4 px-4 py-2 rounded-md bg-amber-500 text-slate-950 text-xs font-bold cursor-pointer hover:bg-amber-600"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="space-y-10 sm:space-y-14">
            {filteredSeries.map((series, idx) => {
              const activeCoverIdx = activeCoverPerSeries[series.id] || 0
              const currentCover = series.covers[activeCoverIdx] || series.covers[0]

              return (
                <section
                  key={series.id}
                  id={`series-${series.id}`}
                  className="bg-white/95 backdrop-blur-md rounded-md border border-amber-200/90 hover:border-amber-500 border-t-4 border-t-amber-500 transition-all duration-200 overflow-hidden scroll-mt-28"
                >
                  {/* Series Header Bar - Warm Tinted Header, rounded-md, no shadow */}
                  <div className="p-5 sm:p-6 bg-gradient-to-r from-amber-50/90 via-white to-amber-50/40 border-b border-amber-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold uppercase tracking-wider font-mono">
                          {series.categoryLabel}
                        </span>
                        {series.extractedSize && (
                          <span className="px-2.5 py-1 rounded-md bg-slate-900 text-amber-300 text-xs font-mono font-bold">
                            {series.extractedSize}
                          </span>
                        )}
                        {series.isDieCut && (
                          <span className="px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider">
                            ⚡ Month-Wise Die Cut
                          </span>
                        )}
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-mono font-medium">
                          Series #{series.seriesIndex || idx + 1}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 font-display tracking-tight flex items-center gap-3">
                        <span>{series.name}</span>
                      </h2>

                      {series.desc && (
                        <p className="text-xs sm:text-sm text-slate-700 mt-1 font-mono font-medium max-w-4xl">
                          {series.desc}
                        </p>
                      )}
                    </div>

                    {/* Action CTA: rounded-md */}
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href="tel:+919952424780"
                        className="px-3.5 py-2.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-amber-900 hover:bg-amber-50 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                        title="Direct Sivakasi Factory Desk"
                      >
                        <Phone className="w-3.5 h-3.5 text-amber-700" />
                        <span className="hidden sm:inline">Call Press Desk</span>
                      </a>

                      <button
                        onClick={() => onOpenInquiry(series.name)}
                        className="px-5 py-2.5 rounded-md bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Enquire Factory Quote</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* 2-Column Full-Width Content Grid: Left Inner Page + Right Cover Variations */}
                  <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* LEFT COLUMN: Inner Page Layout (lg:col-span-5 xl:col-span-4) */}
                    <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between h-full space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-amber-700" />
                            <span>Inner Page Format & Ruling</span>
                          </span>
                          <span className="text-[10px] text-amber-800/80 font-mono font-semibold">
                            Heidelberg 4-Colour Offset
                          </span>
                        </div>

                        {series.innerImage ? (
                          <div className="relative rounded-md overflow-hidden border border-amber-200/80 bg-white flex items-center justify-center min-h-[260px] sm:min-h-[340px] md:min-h-[380px] p-2.5 sm:p-3">
                            <img
                              src={`/${series.innerImage}`}
                              alt={`${series.name} Inner Layout`}
                              className="w-full h-auto object-contain max-h-[320px] sm:max-h-[440px] hover:scale-102 transition-transform duration-200"
                            />
                            <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs px-2.5 py-1.5 rounded-md border border-slate-200 text-[10px] text-slate-700 flex items-center justify-between">
                              <span className="font-semibold">Authentic Inner Specimen</span>
                              <span className="font-mono text-amber-800 font-bold">Direct Mill Sample</span>
                            </div>
                          </div>
                        ) : (
                          <div className="h-64 rounded-md border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-xs">
                            Standard Ruled Executive Layout
                          </div>
                        )}
                      </div>

                      {/* Technical specifications callout: rounded-md */}
                      <div className="p-3.5 rounded-md bg-amber-50/80 border border-amber-200/90 space-y-2 text-xs">
                        <div className="flex items-center justify-between font-semibold text-slate-800">
                          <span className="text-slate-500">Printing Press Quality:</span>
                          <span className="text-amber-950 font-bold">Heidelberg 4-Color Precision</span>
                        </div>
                        <div className="flex items-center justify-between font-semibold text-slate-800">
                          <span className="text-slate-500">Paper Grade:</span>
                          <span>70–80 GSM Natural Ivory Bond</span>
                        </div>
                        <div className="flex items-center justify-between font-semibold text-slate-800">
                          <span className="text-slate-500">Binding Technique:</span>
                          <span>Section Sewn Lay-Flat 180°</span>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Cover Variations & Finishes Grid (lg:col-span-7 xl:col-span-8) */}
                    <div className="lg:col-span-7 xl:col-span-8 space-y-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-amber-700" />
                          <span>Cover Finishes & Available Colorways ({series.covers.length} options)</span>
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          Click any thumbnail to preview
                        </span>
                      </div>

                      {/* Active Large Cover Preview: rounded-md, no shadow */}
                      {currentCover && (
                        <div className="p-4 bg-gradient-to-br from-amber-50/50 via-white to-slate-50 rounded-md border border-amber-200/80 flex flex-col sm:flex-row items-center gap-5 mb-4">
                          <div className="w-36 sm:w-44 aspect-[3/4] rounded-md overflow-hidden border-2 border-amber-300 bg-white shrink-0">
                            <img
                              src={`/${currentCover}`}
                              alt={`${series.name} Selected Finish`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-2 text-xs flex-1">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-bold text-[10px] uppercase font-mono">
                                Selected Finish #{activeCoverIdx + 1}
                              </span>
                              <span className="text-slate-500 text-[10px] font-medium">2025 Edition</span>
                            </div>
                            <h4 className="font-bold text-slate-950 text-base">
                              {series.name} — Cover Specimen #{activeCoverIdx + 1}
                            </h4>
                            <p className="text-slate-600 text-xs leading-relaxed max-w-xl">
                              Featuring durable Sivakasi machine binding, fine hot-foil crest embossing, reinforced spine hinge, and premium corner protection.
                            </p>
                            <button
                              onClick={() => onOpenInquiry(`${series.name} - Cover #${activeCoverIdx + 1}`)}
                              className="inline-flex items-center gap-1 text-amber-800 hover:text-amber-950 font-bold pt-1 cursor-pointer"
                            >
                              <span>Enquire this exact cover design</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Wide Responsive Thumbnails Grid: on full width, utilizes 3 to 8 columns */}
                      {series.covers.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-3">
                          {series.covers.map((coverSrc, coverIdx) => {
                            const isSelected = activeCoverIdx === coverIdx
                            return (
                              <div
                                key={coverIdx}
                                onClick={() =>
                                  setActiveCoverPerSeries((prev) => ({
                                    ...prev,
                                    [series.id]: coverIdx,
                                  }))
                                }
                                className={`group relative rounded-md overflow-hidden border transition-all cursor-pointer flex flex-col ${
                                  isSelected
                                    ? 'border-2 border-amber-500 bg-amber-50/60 ring-2 ring-amber-400/20'
                                    : 'border-slate-200 bg-white hover:border-amber-400 hover:bg-amber-50/20'
                                }`}
                              >
                                <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden">
                                  <img
                                    src={`/${coverSrc}`}
                                    alt={`${series.name} Cover ${coverIdx + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                  />
                                  <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="px-1.5 py-0.5 rounded-md bg-slate-900 text-white text-[9px] flex items-center gap-1">
                                      <Eye className="w-3 h-3" />
                                      <span>Select</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="p-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                                  <span className="font-semibold text-slate-800 truncate">
                                    Finish #{coverIdx + 1}
                                  </span>
                                  <span className="text-amber-700 font-bold font-mono text-[10px]">
                                    {isSelected ? '✓ Active' : 'Select'}
                                  </span>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      ) : (
                        <div className="h-48 rounded-md border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-xs">
                          Custom Cover Options Available Upon Request
                        </div>
                      )}

                      {/* Customization Callout: rounded-md */}
                      <div className="p-3.5 bg-amber-50/60 rounded-md border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                        <span className="text-slate-700 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Custom company logo foil stamping & personalized insert sheets available.</span>
                        </span>
                        <button
                          onClick={() => onOpenInquiry(`${series.name} - Custom Branding`)}
                          className="font-bold text-amber-800 hover:text-amber-950 underline underline-offset-2 shrink-0 cursor-pointer"
                        >
                          Enquire Customization
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              )
            })}
          </div>
        )}

        {/* Sivakasi Factory Direct Wholesale Inquiries Card: Full Width, rounded-md, no shadow */}
        <div className="mt-16 p-8 sm:p-12 rounded-md bg-amber-50 border border-amber-300 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="font-handwriting text-2xl text-amber-800 block">
              Sivakasi Master Printing Tradition Since 1994
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-950 font-display">
              Ready to Order Diaries for Your Organization?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              We provide factory-direct pricing for 50 to 50,000+ units with multi-color corporate profile pages,
              laser debossing, metallic corner protectors, and worldwide dispatch.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenInquiry('Wholesale Bulk Quotation')}
                className="px-6 py-3 rounded-md bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm tracking-wide flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Request Wholesale Quotation</span>
              </button>

              <button
                onClick={() => {
                  navigate('/')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="px-6 py-3 rounded-md bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
