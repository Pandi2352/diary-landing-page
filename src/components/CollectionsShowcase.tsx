import React, { useState } from 'react'
import {
  Sparkles,
  ArrowUpRight,
  Layers,
} from 'lucide-react'

interface ProductItem {
  id: string
  name: string
  subtitle: string
  category: string
  binding: string
  cover: string
  spine: string
  isPopular?: boolean
  image: string
  tag: string
}

interface CollectionsShowcaseProps {
  onSelectProduct: (productName: string) => void
  onInspect3D: () => void
}

export const CollectionsShowcase: React.FC<CollectionsShowcaseProps> = ({
  onSelectProduct,
  onInspect3D,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const products: ProductItem[] = [
    {
      id: 'sorsons-pastel-marble',
      name: 'Better Days Ahead Pastel Diary',
      subtitle: 'Liquid-Marble Pastel Gradient with Gold Foil Embossing & Pink Elastic Band',
      category: 'Popular',
      binding: 'Hard Bound with 180° Lay-Flat Machine Binding',
      cover: 'Swirling Liquid-Marble Soft-Touch PU',
      spine: 'Square Spine with Gilded Gold Foil Page Edges',
      isPopular: true,
      image: '/images/pastel_marble_diary.jpg',
      tag: '✨ 2025 Dreamer Edition',
    },
    {
      id: 'sorsons-emerald-botanical',
      name: 'Botanical Emerald Floral Journal',
      subtitle: 'Rich Emerald Vegan Leather with Gold Foil Floral Line Art & Elastic Band',
      category: 'Corporate',
      binding: 'Section Sewn Hard Bound',
      cover: 'Forest Emerald Vegan Leather with Floral Line Art',
      spine: 'Curved Spine with Silk Bookmark Ribbon & Medallion',
      isPopular: true,
      image: '/images/emerald_botanical_diary.jpg',
      tag: 'Botanical Gold Foil',
    },
    {
      id: 'sorsons-dreamy-trio',
      name: 'Dreamy Trio Collector Edition',
      subtitle: 'Three Iconic Formats: Swirling Pastel Marble, Matte Black & Emerald Floral',
      category: 'Popular',
      binding: 'Multi-Format Collector Boxed Set',
      cover: 'Assorted Premium Vegan Leather & Soft-Touch PU',
      spine: 'Curved and Square Spines with Elastic Closures',
      isPopular: true,
      image: '/images/dreamy_hero_diaries.jpg',
      tag: 'Collector Set',
    },
    {
      id: 'sorsons-outline-celestial',
      name: 'Celestial Colorful Outline Diary',
      subtitle: 'Vibrant Sunset Gradient with Gold Wireframe Mandala & Multi-Ribbons',
      category: 'Popular',
      binding: 'Section Sewn Deluxe Hard Bound',
      cover: 'Vibrant Multi-Hue Foil Stamped Soft-Touch PU',
      spine: 'Curved Spine with 4-Color Silk Bookmark Ribbons',
      isPopular: true,
      image: '/images/outline_diary.jpg',
      tag: 'Colorful Outline Ed.',
    },

    {
      id: 'sorsons-creative-canvas',
      name: 'Creative Canvas Open Diary',
      subtitle: 'Lay-Flat Layout with Colorful Calligraphy & 6-Color Ribbons',
      category: 'Hard Bound',
      binding: 'Lay-Flat 180° Machine Binding',
      cover: 'Pearl White Texture with Multi-Color Ribbon Set',
      spine: 'Flexible Lay-Flat Spine with Gold Edges',
      isPopular: true,
      image: '/images/open_outline_diary.jpg',
      tag: 'Artistic Open Book',
    },
    {
      id: 'sorsons-executive',
      name: 'Executive Diary',
      subtitle: 'Luxury Italian Leatherette with Gold Foil Stamping',
      category: 'Popular',
      binding: 'Section Sewn Hard Bound',
      cover: 'Imported Premium Leatherette',
      spine: 'Curved Spine with Ribbon Bookmark',
      isPopular: true,
      image: '/images/executive_diary.jpg',
      tag: 'Flagship 2025',
    },

    {
      id: 'sorsons-majestic',
      name: 'Majestic Diary',
      subtitle: 'Quality PVC Foam Hard Bound Binding',
      category: 'Hard Bound',
      binding: 'Heavy Duty Hard Bound Binding',
      cover: 'Quality PVC Foam with Geometric Gold Foil',
      spine: 'Square Spine with Edge Gilding',
      isPopular: true,
      image: '/images/majestic_diary.jpg',
      tag: 'Gen-Z Aesthetic',
    },
    {
      id: 'sorsons-spiral',
      name: 'Spiral Pro Corporate Diary',
      subtitle: 'Metallic Double Wiro Spine with Frosted Finish',
      category: 'Spiral',
      binding: 'Twin Wire-O Spiral Binding',
      cover: 'Frosted Polypropylene & Hard Board',
      spine: 'Metallic Spiral Rose Gold & Silver',
      isPopular: true,
      image: '/images/spiral_diary.jpg',
      tag: 'Bestseller',
    },
    {
      id: 'sorsons-corporate',
      name: 'Corporate Diary',
      subtitle: 'Imported PCP Cover and Curved Spine',
      category: 'Corporate',
      binding: 'Deluxe Hard Bound Binding',
      cover: 'Imported PCP Textured Cover',
      spine: 'Curved Ergonomic Spine',
      isPopular: true,
      image: '/images/executive_diary.jpg',
      tag: 'Corporate Essential',
    },
    {
      id: 'sorsons-mega',
      name: 'Mega Diary',
      subtitle: 'Expanded Page Count for In-Depth Annual Logs',
      category: 'Popular',
      binding: 'Reinforced Thread Bound',
      cover: 'Dual-Tone Thermal PU Leather',
      spine: 'Flexible Rounded Spine',
      isPopular: true,
      image: '/images/majestic_diary.jpg',
      tag: 'Comprehensive',
    },
    {
      id: 'sorsons-angel',
      name: 'Angel Diary',
      subtitle: 'Colour Design Laminated Cover & Hard Bound Binding',
      category: 'Laminated',
      binding: 'Hard Bound Machine Binding',
      cover: 'Vibrant Multi-Colour Laminated Art Cover',
      spine: 'Standard Square Spine',
      image: '/images/majestic_diary.jpg',
      tag: 'Artistic Finish',
    },
    {
      id: 'sorsons-telephone-index',
      name: 'Telephone Index Diary',
      subtitle: 'Thumb-Cut Indexed Layout for Contacts & Records',
      category: 'Laminated',
      binding: 'Hard Bound with A-Z Mylar Tabs',
      cover: 'Colour Design Laminated High Gloss',
      spine: 'Durable Book Spine',
      image: '/images/spiral_diary.jpg',
      tag: 'Indexed System',
    },
    {
      id: 'sorsons-ojas',
      name: 'Ojas Diary',
      subtitle: 'Colour Design Laminated Cover & Hard Bound Binding',
      category: 'Laminated',
      binding: 'Precision Hard Bound Binding',
      cover: 'High Gloss Thermal Lamination',
      spine: 'Curved Spine with Golden Silk Ribbon',
      image: '/images/executive_diary.jpg',
      tag: 'Premium Series',
    },
    {
      id: 'sorsons-embassy',
      name: 'Embassy Diary',
      subtitle: 'Diplomatic Elegance with Subtle Texture & Gilded Foil',
      category: 'Corporate',
      binding: 'Section Sewn Hard Bound',
      cover: 'Rich Textured Linen/Leatherette',
      spine: 'Embossed Curved Spine',
      image: '/images/majestic_diary.jpg',
      tag: 'Executive Choice',
    },
    {
      id: 'sorsons-premium',
      name: 'Premium Diary',
      subtitle: 'Sensational New Range with Custom Client Embellishments',
      category: 'Hard Bound',
      binding: 'Deluxe Hard Bound Binding',
      cover: 'Embossed Metallic Multi-Colour Finish',
      spine: 'Smooth Rounded Spine with Headband',
      image: '/images/spiral_diary.jpg',
      tag: 'Customizable',
    },
  ]

  const categories = ['All', 'Popular', 'Corporate', 'Hard Bound', 'Spiral', 'Laminated']

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <section id="products" className="py-16 md:py-24 bg-[#faf9f5]/75 backdrop-blur-[2px] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Sorsons 2025 Edition Collection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 font-display tracking-tight">
              Sensational New Range <br />
              <span className="text-amber-600">Of Premium Diaries</span>
            </h2>
          </div>

          {/* Category Filter Pills: rounded-md, no shadows */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded-md border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid: rounded-md, no shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-200 hover:border-amber-400 rounded-md transition-colors overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Product Image */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Top Badges: rounded-md, no shadows */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                    <span className="px-2 py-0.5 rounded-md bg-white/95 text-amber-800 border border-slate-200 text-[11px] font-mono font-bold">
                      {product.tag}
                    </span>
                    {product.isPopular && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wide">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Featured Showcase Button */}
                  <button
                    onClick={onInspect3D}
                    className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-white/95 border border-slate-200 text-slate-800 text-xs font-mono flex items-center gap-1.5 hover:text-amber-700 cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5 text-amber-600" />
                    <span>Featured</span>
                  </button>

                </div>

                {/* Specs */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 font-display">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                    <div className="flex items-center justify-between text-slate-500">
                      <span>Cover Material:</span>
                      <span className="text-slate-800 font-medium text-right">{product.cover}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500">
                      <span>Binding Style:</span>
                      <span className="text-slate-800 font-medium text-right">{product.binding}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500">
                      <span>Spine Detail:</span>
                      <span className="text-slate-800 font-medium text-right">{product.spine}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button: rounded-md, no shadows */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectProduct(product.name)}
                  className="w-full py-2.5 rounded-md bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-800 text-xs font-bold transition-colors border border-slate-200 hover:border-amber-500 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Custom Printing Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
