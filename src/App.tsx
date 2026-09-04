import { useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ProcessSection } from './components/ProcessSection'
import { ExploreSection } from './components/ExploreSection'
import { CustomizeSection } from './components/CustomizeSection'
import { CollectionsShowcase } from './components/CollectionsShowcase'
import { PrintingSolutions } from './components/PrintingSolutions'
import { ProductsPage } from './components/ProductsPage'
import { Footer } from './components/Footer'
import { QuickInquiryModal } from './components/QuickInquiryModal'
import { BookSectionReveal } from './components/BookSectionReveal'
import { MessageSquare, Phone } from 'lucide-react'

function HomePage({
  onOpenInquiry,
}: {
  onOpenInquiry: (name?: string) => void
}) {
  const navigate = useNavigate()

  return (
    <>
      <HeroSection
        onExploreProducts={() => {
          navigate('/products')
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        onOpenInquiry={() => onOpenInquiry('Executive Diary')}
      />

      <BookSectionReveal>
        <AboutSection />
      </BookSectionReveal>

      {/* 1. "FROM IDEA TO DIARY" Process Section */}
      <BookSectionReveal>
        <ProcessSection
          onStartRequirement={() => {
            const el = document.getElementById('customize')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </BookSectionReveal>

      {/* 2. "Explore Us: The 4 Pillars of Sorsons Diaries" */}
      <BookSectionReveal>
        <ExploreSection />
      </BookSectionReveal>

      {/* 3. "CUSTOMIZATION STUDIO" */}
      <BookSectionReveal>
        <CustomizeSection
          onOpenInquiry={(details?: string) => onOpenInquiry(details || 'Customized Diary')}
        />
      </BookSectionReveal>

      {/* 4. Products Collections Showcase */}
      <BookSectionReveal>
        <CollectionsShowcase
          onSelectProduct={(name) => onOpenInquiry(name)}
          onInspect3D={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
      </BookSectionReveal>

      {/* 5. Printing Solutions */}
      <BookSectionReveal>
        <PrintingSolutions />
      </BookSectionReveal>
    </>
  )
}

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false)
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState('Executive Diary')
  const navigate = useNavigate()
  const location = useLocation()
  const isProducts = location.pathname === '/products'

  const handleOpenInquiry = (productName?: string) => {
    if (productName) {
      setSelectedProductForInquiry(productName)
    }
    setInquiryModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#faf9f5] text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950 relative">
      {/* Global Background Image (Stationery line art across Home page) */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 pointer-events-none -z-10 bg-[url('/images/diary_outline_bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed transition-opacity duration-500 ${isProducts ? 'opacity-0' : 'opacity-45'
          }`}
      />

      {/* Top Navigation Bar with Direct React Router DOM Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Router */}
      <main className="flex-1 relative z-10">
        <Routes>
          <Route path="/" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/products" element={<ProductsPage onOpenInquiry={handleOpenInquiry} />} />
          <Route path="*" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer
        onSelectProductCategory={() => {
          navigate('/products')
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      />

      {/* Quick Order Quotation Modal (Only shown on explicit quote click) */}
      <QuickInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialProduct={selectedProductForInquiry}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <a
          href="https://wa.me/919952424780?text=Hello%20Sutharsan%20Offset%20Printers%2C%20I%20would%20like%20to%20inquire%20about%20Sorsons%20Diaries%202025%20collection."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-11 h-11 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center border border-emerald-700 shadow-md transition-all cursor-pointer"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
        </a>

        <a
          href="tel:+919952424780"
          aria-label="Call Sivakasi Press"
          className="w-11 h-11 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 flex items-center justify-center border border-amber-600 shadow-md transition-all cursor-pointer"
        >
          <Phone className="w-5 h-5 fill-slate-950" />
        </a>
      </div>
    </div>
  )
}
