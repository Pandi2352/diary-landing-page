import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Sparkles,
  ArrowRight,
  Search,
  BookOpen,
  Calendar,
  CheckCircle2,
  X,
  FileText,
} from 'lucide-react'
import {
  SORSONS_PRODUCTS,
  PRODUCT_CATEGORIES,
} from '../data/sorsonsProducts'

interface CollectionsShowcaseProps {
  onSelectProduct?: (productName: string) => void
  onInspect3D?: () => void
}

export const CollectionsShowcase: React.FC<CollectionsShowcaseProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const navigate = useNavigate()

  // Filter products based on active category & search query
  const filteredProducts = useMemo(() => {
    return SORSONS_PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.sizeImperial.toLowerCase().includes(query) ||
        product.layout.toLowerCase().includes(query) ||
        product.coverMaterial.toLowerCase().includes(query) ||
        product.tag.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const handleNavigateToProducts = (seriesId?: string) => {
    if (seriesId) {
      navigate(`/products#series-${seriesId}`)
    } else {
      navigate('/products')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section
      id="products"
      className="py-16 md:py-24 bg-[#faf9f5]/85 backdrop-blur-sm border-b border-[#e8e1d5] relative"
    >
      {/* Decorative Warm Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100/90 border border-amber-300/80 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Official 2025 Sorsons Catalog</span>
              <span className="w-1 h-1 rounded-md bg-amber-500" />
              <span className="font-mono text-[11px] text-amber-800">22 Authentic Series</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Sivakasi Masterpiece Diaries <br />
              <span className="text-amber-700 font-serif italic font-normal">
                Crafted for Discerning Corporate Desks
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl font-sans">
              Manufactured in Sivakasi — every layout, metric size, and imported thermal leatherette binding option for 2025.
            </p>
          </div>

          {/* Search & Direct Link to Full Products Page */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search series or sizes (e.g. 8 ¼)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-8 py-2 text-xs rounded-md bg-white border border-[#e2d8c9] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear Search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={() => handleNavigateToProducts()}
              className="px-4 py-2 rounded-md bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>View Full Products Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {PRODUCT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold border border-amber-600'
                    : 'bg-white/90 text-slate-700 hover:text-slate-950 hover:bg-white border border-[#e5ded1]'
                }`}
              >
                <span>{cat.shortLabel}</span>
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

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white/60 rounded-md border border-dashed border-[#d9cebe]">
            <BookOpen className="w-10 h-10 text-amber-700/50 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No matching series found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn't find any diary series matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('all')
              }}
              className="mt-4 px-4 py-1.5 rounded-md bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-600 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={`series-${product.id}`}
                onClick={() => handleNavigateToProducts(product.id)}
                className="bg-white/95 rounded-md border border-[#e4dcd0] hover:border-amber-400 transition-all duration-200 overflow-hidden flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-50 border-b border-[#eee7dc]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Status Tags */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-amber-900 border border-amber-200/80 text-[11px] font-mono font-bold">
                        {product.sizeImperial}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {product.dieCutTabs && (
                          <span className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider">
                            Die-Cut Tabs
                          </span>
                        )}
                        {product.isPopular && (
                          <span className="px-2 py-0.5 rounded-md bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                          {product.categoryLabel}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {product.sizeMetric}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-950 font-display mt-0.5 group-hover:text-amber-900 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        {product.authenticDescription}
                      </p>
                    </div>

                    {/* Specifications List Table */}
                    <div className="space-y-1.5 pt-3 border-t border-[#f0eae0] text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-amber-600" />
                          <span>Page Layout:</span>
                        </span>
                        <span className="text-slate-800 font-medium text-right font-mono text-[11px]">
                          {product.pageFrequency} • {product.weekendStyle}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 flex items-center gap-1">
                          <BookOpen className="w-3 h-3 text-amber-600" />
                          <span>Cover Material:</span>
                        </span>
                        <span className="text-slate-800 font-medium text-right max-w-[55%] truncate">
                          {product.coverMaterial}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 flex items-center gap-1">
                          <FileText className="w-3 h-3 text-amber-600" />
                          <span>Binding Type:</span>
                        </span>
                        <span className="text-slate-800 font-medium text-right max-w-[55%] truncate">
                          {product.binding}
                        </span>
                      </div>
                    </div>

                    {/* Key Feature Highlight Pill */}
                    <div className="pt-2">
                      <div className="text-[11px] text-slate-600 bg-amber-50/80 rounded-md p-2 border border-amber-200/60 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{product.features[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Products Page CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-md bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-handwriting text-xl text-amber-700">
              Dedicated 2025 Sorsons Catalog Page
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
              Inspect Authentic Inner Page Formats & Full Cover Collections
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Visit the dedicated products route to view all 22 series with their real inner page layouts,
              Sunday separate formats, and complete cover design finishes scraped from the Sivakasi mill.
            </p>
          </div>

          <button
            onClick={() => handleNavigateToProducts()}
            className="shrink-0 px-6 py-3 rounded-md bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Open Dedicated Products Route</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  )
}
