import type { Metadata } from 'next'
import { faqs } from '@/data/faqs'
import { FaqJsonLd } from '@/components/seo/FaqJsonLd'

export const metadata: Metadata = {
  title: 'Dúvidas frequentes — CHAPA Delivery',
  description: 'Tire suas dúvidas sobre pedidos na praia, pagamentos, localização, vendedores e cadastro no CHAPA Delivery.',
}

const extraFaqs = [
  ...faqs,
  { question: 'Como cancelo um pedido?', answer: 'Você pode cancelar um pedido nos primeiros minutos após fazer, antes do vendedor aceitar. Acesse seus pedidos e toque em cancelar.' },
  { question: 'O CHAPA funciona à noite?', answer: 'Depende da disponibilidade dos vendedores na sua praia. Alguns quiosques e barracas operam até mais tarde.' },
  { question: 'Posso avaliar o vendedor?', answer: 'Sim! Após receber seu pedido, você pode deixar uma avaliação para ajudar outros clientes.' },
  { question: 'Como me cadastro como vendedor?', answer: 'Acesse app.chapa.delivery/vendors-login e siga o processo de cadastro. É rápido e gratuito.' },
]

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-espuma">
      <FaqJsonLd faqs={extraFaqs} />
      <section className="bg-mare text-espuma pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-logo text-4xl md:text-5xl font-black mb-4">dúvidas frequentes</h1>
          <p className="text-espuma/80 text-lg">tem dúvida? a gente responde.</p>
        </div>
      </section>
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          {extraFaqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-linha p-5">
              <h2 className="font-semibold text-tinta mb-2">{faq.question}</h2>
              <p className="text-tinta/60 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
