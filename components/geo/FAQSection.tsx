'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { Card } from "@/components/ui/Card"

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
    <div id="faq" className="py-16 bg-slate-50 dark:bg-slate-900/50 rounded-3xl mt-12 border border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-sbm-blue">
            <HelpCircle className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Pertanyaan Umum (FAQ)</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Jawaban cepat untuk kebutuhan Anda</p>
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
      className={`cursor-pointer bg-white dark:bg-slate-900 border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-l-4 border-l-sbm-blue shadow-lg ring-1 ring-blue-100 dark:ring-blue-900' : 'border-l-4 border-l-transparent hover:border-l-sbm-blue/50 hover:shadow-sm border-slate-200 dark:border-slate-800'}`}
    >
      <div className="flex justify-between items-center w-full p-6">
        <h3 className={`font-bold text-lg pr-8 text-left transition-colors ${isOpen ? 'text-sbm-blue' : 'text-slate-800 dark:text-white'}`}>
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
              <div className="h-px w-full bg-slate-100 dark:bg-slate-800 mb-4" />
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
