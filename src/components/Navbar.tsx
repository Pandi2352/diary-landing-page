import React, { useState, useEffect } from 'react'
import {
  BookOpen,
  Phone,
  Menu,
  X,
  Sparkles,
  Printer,
  ChevronRight,
} from 'lucide-react'

interface NavbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  onOpenInquiry: () => void
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenInquiry,
}) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us & Press' },
    { id: 'products', label: '2025 Diaries' },
    { id: 'services', label: 'Printing Solutions' },
    { id: 'contact', label: 'Contact Us' },
  ]

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Identity */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-md bg-amber-500 flex items-center justify-center text-slate-950">
            <BookOpen className="w-5 h-5 text-slate-950" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-md bg-slate-900 flex items-center justify-center text-white">
              <Printer className="w-2.5 h-2.5" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 font-display">
                SORSONS
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                2025 Ed.
              </span>
            </div>
            <p className="text-[11px] text-slate-500 tracking-wide font-medium flex items-center gap-1.5">
              <span>Sutharsan Offset Printers</span>
              <span className="w-1 h-1 rounded-md bg-slate-400" />
              <span className="text-amber-700 font-semibold">Sivakasi</span>
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links: rounded-md, no shadows */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 border border-slate-200 rounded-md p-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  isActive
                    ? 'text-amber-950 bg-amber-400 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </nav>

        {/* Action CTAs: rounded-md, no shadows */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+919952424780"
            className="flex items-center gap-2 text-xs font-medium text-slate-700 hover:text-amber-700 transition-colors px-3 py-2 rounded-md hover:bg-slate-100"
          >
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span className="font-mono font-semibold">+91 99524 24780</span>
          </a>

          <button
            onClick={onOpenInquiry}
            className="px-4 py-2 rounded-md bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs tracking-wide transition-colors cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enquire Custom Order</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden w-10 h-10 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-slate-900 cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-white border-b border-slate-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-between p-3 rounded-md text-sm font-medium transition-all text-left ${
                  activeSection === link.id
                    ? 'bg-amber-100 text-amber-900 font-bold border border-amber-300'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </button>
            ))}

            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2">
              <a
                href="tel:+919952424780"
                className="flex items-center justify-center gap-2 p-3 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>+91 99524 24780 (Sivakasi Desk)</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenInquiry()
                }}
                className="w-full py-3 rounded-md bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Instant Order Enquiry</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
