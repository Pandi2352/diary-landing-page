import React, { useState, useEffect } from 'react'
import {
  X,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'

interface QuickInquiryModalProps {
  isOpen: boolean
  onClose: () => void
  initialProduct?: string
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({
  isOpen,
  onClose,
  initialProduct = 'Executive Diary',
}) => {
  const [selectedProduct, setSelectedProduct] = useState(initialProduct)
  const [quantity, setQuantity] = useState('250')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (initialProduct) {
      setSelectedProduct(initialProduct)
    }
  }, [initialProduct])

  if (!isOpen) return null

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hello Sutharsan Offset Printers! I would like a quote for:\n• Product: ${selectedProduct}\n• Quantity: ${quantity} units\n• Client Name: ${name || 'Prospective Client'}\n• Phone: ${phone || 'N/A'}\n• Customization: ${notes || 'Standard gold foil stamping'}`
    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/919952424780?text=${encoded}`, '_blank')
    setIsSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm">
      {/* Modal Container: rounded-md, no shadows */}
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-md bg-white border border-slate-300 p-5 sm:p-7">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-600 hover:text-slate-900 flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-md bg-emerald-100 border border-emerald-300 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display">Inquiry Prepared!</h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Your custom diary request has been formulated for our Sivakasi factory. You can also call us directly at +91 99524 24780.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                onClose()
              }}
              className="px-5 py-2 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Sutharsan Offset Printers • Sivakasi</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-950 font-display">
                Request Custom Diary Quotation
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Direct factory pricing for corporate orders, schools, and distributors.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSend} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Select Sorsons Diary Model
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3 py-2 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="Executive Diary">Executive Diary (Luxury Leatherette & Gold Foil)</option>
                  <option value="Majestic Diary">Majestic Diary (PVC Foam Hard Bound)</option>
                  <option value="Spiral Pro Corporate Diary">Spiral Pro Corporate Diary (Metallic Spine)</option>
                  <option value="Corporate Diary">Corporate Diary (Imported PCP Cover)</option>
                  <option value="Mega Diary">Mega Diary (Deluxe Expanded Pages)</option>
                  <option value="Angel Diary">Angel Diary (Laminated Hard Bound)</option>
                  <option value="Telephone Index Diary">Telephone Index Diary (Mylar Indexed)</option>
                  <option value="Ojas Diary">Ojas Diary (High Gloss Laminated)</option>
                  <option value="Embassy Diary">Embassy Diary (Textured Linen Hardbound)</option>
                  <option value="Premium Diary">Premium Diary (Custom Embellishment)</option>
                  <option value="Custom Stationery / Calendars">Calendars & Other Stationery</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Order Quantity
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="100">100 Pieces</option>
                    <option value="250">250 Pieces</option>
                    <option value="500">500 Pieces</option>
                    <option value="1000">1,000+ Pieces (Wholesale)</option>
                    <option value="5000+">5,000+ (Export Bulk)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Name / Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Corp"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Contact Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Custom Requirements (Foil embossing, Logo stamping, etc.)
                </label>
                <textarea
                  rows={2}
                  placeholder="Need corporate logo foil stamped in gold with satin ribbon..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-400 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-md bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send WhatsApp Inquiry (+91 99524 24780)</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <span>Or direct call:</span>
                <a
                  href="tel:+919952424780"
                  className="text-amber-700 font-mono font-bold hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  +91 99524 24780
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
