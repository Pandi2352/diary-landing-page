import React from 'react'
import {
  BookOpen,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from 'lucide-react'

interface FooterProps {
  onSelectProductCategory: (category: string) => void
}

export const Footer: React.FC<FooterProps> = ({ onSelectProductCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    'Executive Diary',
    'Bound Diary',
    'Academic Diary',
    'Personal Diary',
    'Business Diary',
    'Corporate Diary',
    'Spiral Diary',
  ]

  return (
    <footer id="contact" className="bg-[#f8fafc] border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
                <BookOpen className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl tracking-tight text-slate-950 font-display">
                  SORSONS DIARIES
                </h3>
                <p className="text-xs text-amber-800 font-semibold font-mono">Sutharsan Offset Printers</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              We are one of India&apos;s leading state-of-the-art commercial colour printing firms, located in Sivakasi — the Printing Capital of India. Ranked among the Top 10 Printing Press in Sivakasi.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-700">
                ⭐ 30 Years of Excellence
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-emerald-700 font-semibold">
                ✓ Sivakasi Certified
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-display">
              Quick Links
            </h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      onSelectProductCategory(link)
                      const el = document.getElementById('products')
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-xs text-slate-600 hover:text-amber-700 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="text-amber-500">•</span>
                    <span>{link}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-display">
              Sivakasi Works & Office Address
            </h4>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  2/1/661-C,D,E, Vilampatti Road, Munies Nagar,<br />
                  Sivakasi (West) - 626 124, Tamil Nadu, India.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <div className="flex flex-wrap items-center gap-2 font-mono font-medium">
                  <a href="tel:+919952424780" className="hover:text-amber-700 transition-colors">
                    +91 99524 24780
                  </a>
                  <span>/</span>
                  <a href="tel:+919952423780" className="hover:text-amber-700 transition-colors">
                    +91 99524 23780
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <a
                  href="mailto:sm2020.svks@gmail.com"
                  className="font-mono hover:text-amber-700 transition-colors"
                >
                  sm2020.svks@gmail.com
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Callout: rounded-md, no shadows */}
            <div className="pt-2">
              <a
                href="https://wa.me/919952424780"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-semibold hover:bg-emerald-200 transition-colors"
              >
                <span>Chat Directly with Sivakasi Factory Desk</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: rounded-md, no shadows */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Copyright © 2025, <strong className="text-slate-800">Sutharsan Offset Printers</strong>. All rights reserved. Developed by <span className="text-amber-700 font-semibold">Sri Softwarez</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-slate-950 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
