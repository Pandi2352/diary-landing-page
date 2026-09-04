import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { CollectionsShowcase } from './components/CollectionsShowcase'
import { PrintingSolutions } from './components/PrintingSolutions'
import { Footer } from './components/Footer'
import { QuickInquiryModal } from './components/QuickInquiryModal'
import { BookSectionReveal } from './components/BookSectionReveal'
import { MessageSquare, Phone } from 'lucide-react'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false)
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState('Executive Diary')

  const handleOpenInquiry = (productName?: string) => {
    if (productName) {
      setSelectedProductForInquiry(productName)
    }
    setInquiryModalOpen(true)
  }

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#faf9f5] text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950 relative">
      
      {/* Global Diary Outline Background Image (Stationery line art across all pages) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10 bg-[url('/images/diary_outline_bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed opacity-45"
      />

      {/* Top Navigation */}
      <Navbar






        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenInquiry={() => handleOpenInquiry('Executive Diary')}
      />


      {/* Main Experience Flow (Above background animations) */}
      <main className="flex-1 relative z-10">
        <HeroSection

          onExploreProducts={() => handleScrollToSection('products')}
          onOpenInquiry={() => handleOpenInquiry('Executive Diary')}
        />

        {/* About Us & Sivakasi Printing Heritage with Book-Open Reveal */}
        <BookSectionReveal>
          <AboutSection />
        </BookSectionReveal>

        {/* 2025 Sorsons Diaries Collection Showcase with Book-Open Reveal */}
        <BookSectionReveal delayMs={100}>
          <CollectionsShowcase
            onSelectProduct={(name) => handleOpenInquiry(name)}
            onInspect3D={() => handleScrollToSection('home')}
          />
        </BookSectionReveal>

        {/* Calendars, Stationery & Commercial Solutions with Book-Open Reveal */}
        <BookSectionReveal delayMs={150}>
          <PrintingSolutions />
        </BookSectionReveal>
      </main>

      {/* Footer with Sivakasi Factory Details */}
      <Footer
        onSelectProductCategory={() => handleScrollToSection('products')}
      />

      {/* Quick Order Quotation Modal */}
      <QuickInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialProduct={selectedProductForInquiry}
      />

      {/* Floating Action Buttons: rounded-md, no shadows */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <a
          href="https://wa.me/919952424780?text=Hello%20Sutharsan%20Offset%20Printers%2C%20I%20would%20like%20to%20inquire%20about%20Sorsons%20Diaries%202025%20collection."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-11 h-11 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center border border-emerald-700 transition-colors cursor-pointer"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
        </a>

        <a
          href="tel:+919952424780"
          aria-label="Call Sivakasi Press"
          className="w-11 h-11 rounded-md bg-amber-500 hover:bg-amber-600 text-slate-950 flex items-center justify-center border border-amber-600 transition-colors cursor-pointer"
        >
          <Phone className="w-5 h-5 fill-slate-950" />
        </a>
      </div>

    </div>
  )
}
