import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Como funciona o CHAPA Delivery',
  description: 'Veja como pedir comida, bebida, açaí, coco e itens de praia pelo celular e receber direto na areia.',
}

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen bg-espuma">
      <section className="bg-mare text-espuma pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-logo text-4xl md:text-6xl font-black mb-4">como funciona</h1>
          <p className="text-espuma/80 text-xl">simples como chamar um amigo.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-logo text-3xl font-bold text-tinta text-center mb-14">para quem pede</h2>
          <div className="space-y-8">
            {[
              { n: '1', icon: '📍', title: 'informe onde você está', body: 'Diga seu ponto de referência na praia — número do posto, nome da barraca, ou compartilhe sua localização pelo GPS. Você não precisa baixar nenhum app.' },
              { n: '2', icon: '👀', title: 'escolha um vendedor perto', body: 'Veja os chapas disponíveis com distância, produtos e preços. Filtre por categoria: coco, açaí, bebidas, petiscos, almoço e muito mais.' },
              { n: '3', icon: '📱', title: 'faça seu pedido', body: 'Escolha o que quer, confirme o pedido e pague pelo celular. Pix, cartão de crédito ou débito. Sem precisar de dinheiro na bolsa.' },
              { n: '4', icon: '🏖️', title: 'receba na areia', body: 'O vendedor vai até você com seu pedido. Acompanhe o status em tempo real. Sem fila, sem grito, sem sair da canga.' },
            ].map((step) => (
              <div key={step.n} className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-mare rounded-full flex items-center justify-center shrink-0">
                  <span className="text-2xl" role="img" aria-hidden="true">{step.icon}</span>
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-tinta/30 font-medium">passo {step.n}</span>
                    <h3 className="font-semibold text-tinta text-lg">{step.title}</h3>
                  </div>
                  <p className="text-tinta/70 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/" className="bg-brasa hover:bg-brasa-deep text-espuma font-bold px-10 py-4 rounded-pill text-lg transition-colors inline-block">
              pedir agora
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
