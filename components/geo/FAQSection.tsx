'use client'

import { Card } from "@/components/ui/Card"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
}

export function FAQSection({ faqs }: FAQSectionProps) {
  if (!faqs || faqs.length === 0) return null

  return (
    <div id="faq" className="py-16 bg-white rounded-3xl mt-12 border border-slate-200 shadow-sm">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
          <div className="p-3 bg-blue-50 rounded-xl text-sbm-blue">
            <HelpCircle className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Pertanyaan Umum (FAQ)</h2>
            <p className="text-slate-500 text-sm mt-1">Jawaban cepat untuk kebutuhan Anda</p>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItemComponent key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  )
}

function FAQItemComponent({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`cursor-pointer bg-slate-50 border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-l-4 border-l-sbm-blue shadow-lg ring-1 ring-blue-100' : 'border-l-4 border-l-transparent hover:border-l-sbm-blue/50 hover:shadow-sm border-slate-200'}`}
    >
      <div className="flex justify-between items-center w-full p-6">
        <h3 className={`font-bold text-lg pr-8 text-left transition-colors ${isOpen ? 'text-sbm-blue' : 'text-slate-800'}`}>
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={isOpen ? 'text-sbm-blue' : 'text-slate-400'}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0">
              <div className="h-px w-full bg-slate-200 mb-4" />
              <p className="text-slate-600 leading-relaxed text-base">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
