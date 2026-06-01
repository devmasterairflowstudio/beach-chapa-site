'use client'
import { useState } from 'react'
import { faqs } from '@/data/faqs'
import Link from 'next/link'

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4">
        <h2 id="faq-heading" className="font-logo text-3xl md:text-4xl font-bold text-tinta text-center mb-12">
          dúvidas?
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-linha rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-espuma hover:bg-areia/50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium text-tinta text-sm md:text-base pr-4">{faq.question}</span>
                <svg
                  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className={`shrink-0 text-mare transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              {open === i && (
                <div className="px-5 py-4 bg-white border-t border-linha">
                  <p className="text-tinta/70 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/faq" className="text-mare hover:text-mare-deep font-medium text-sm transition-colors">
            ver todas as dúvidas →
          </Link>
        </div>
      </div>
    </section>
  )
}
