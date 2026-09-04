import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  BookOpen,
  Phone,
  Menu,
  X,
  Sparkles,
  Printer,
  ArrowRight,
} from 'lucide-react'

interface NavbarProps {
  onOpenInquiry: (productName?: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const isProductsPage = location.pathname === '/products'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us & Press', path: '/#about' },
    { id: 'products', label: 'Products', path: '/products' },
    { id: 'customize', label: 'Custom Ordering', path: '/#customize' },
    { id: 'services', label: 'Printing Solutions', path: '/#services' },
  ]

  const handleNavClick = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false)

    if (link.id === 'products') {
      // Direct client route navigation - NO popup modal!
      navigate('/products')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (isProductsPage) {
      navigate('/')
      setTimeout(() => {
        if (link.id === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          const element = document.getElementById(link.id)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }
      }, 100)
    } else {
      if (link.id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const element = document.getElementById(link.id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#faf9f5]/95 backdrop-blur-md border-b border-[#e6ddd0] py-2.5 shadow-xs'
          : 'bg-[#faf9f5]/90 backdrop-blur-sm border-b border-[#eee7dc] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity / Logo - Navigates to Home */}
        <button
          onClick={() => {
            if (isProductsPage) {
              navigate('/')
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 shadow-xs border border-amber-300">
            <BookOpen className="w-5 h-5 text-slate-950" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-md bg-slate-900 flex items-center justify-center text-white border border-amber-200">
              <Printer className="w-2.5 h-2.5" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 font-display">
                SORSONS
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                2025 Ed.
              </span>
            </div>
            <p className="text-[11px] text-slate-500 tracking-wide font-medium flex items-center gap-1.5">
              <span>Sutharsan Offset Printers</span>
              <span className="w-1 h-1 rounded-full bg-slate-400" />
              <span className="text-amber-800 font-semibold font-serif italic">Sivakasi</span>
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/85 border border-[#e8dfd1] rounded-xl p-1 shadow-xs">
          {navLinks.map((link) => {
            const isActive = link.id === 'products' ? isProductsPage : !isProductsPage && link.id === 'home'

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'text-amber-950 bg-amber-400 font-bold shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                }`}
              >
                <span>{link.label}</span>
                {link.id === 'products' && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-amber-950 text-amber-100 font-bold' : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    22 Series
                  </span>
                )}
              </button>
            )
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+919952424780"
            className="flex items-center gap-2 text-xs font-medium text-slate-700 hover:text-amber-800 transition-colors px-3 py-2 rounded-lg hover:bg-amber-50/60"
          >
            <Phone className="w-3.5 h-3.5 text-amber-700" />
            <span className="font-mono font-semibold">+91 99524 24780</span>
          </a>

          <button
            onClick={() => onOpenInquiry('Custom Corporate Diary')}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enquire Quote</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden w-10 h-10 rounded-xl bg-white border border-[#e5ded1] flex items-center justify-center text-slate-700 hover:text-slate-900 cursor-pointer shadow-xs"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE DRAWER MENU - Direct Route Links, NO Popup Modal */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#faf9f5] border-b border-[#e6ddd0] animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = link.id === 'products' ? isProductsPage : !isProductsPage && link.id === 'home'

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all text-left ${
                    isActive
                      ? 'bg-amber-100 text-amber-950 font-bold border border-amber-300'
                      : 'text-slate-700 hover:bg-white/90 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{link.label}</span>
                    {link.id === 'products' && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-200 text-amber-900 font-bold font-mono">
                        22 Series
                      </span>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              )
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-[#e4dcd0] flex flex-col gap-2">
            <a
              href="tel:+919952424780"
              className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white border border-[#e2d8c9] text-xs font-semibold text-slate-800"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>Call Sivakasi Press: +91 99524 24780</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenInquiry('Custom Sivakasi Order')
              }}
              className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs tracking-wide shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enquire Custom Bulk Order</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
