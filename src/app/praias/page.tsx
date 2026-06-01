import type { Metadata } from 'next'
import { beaches } from '@/data/beaches'

export const metadata: Metadata = {
  title: 'Praias atendidas pelo CHAPA Delivery',
  description: 'Confira as cidades e praias onde o CHAPA Delivery está disponível ou em fase de ativação.',
}

const statusLabel: Record<string, { label: string; cls: string }> = {
  active: { label: 'disponível', cls: 'bg-mata/10 text-mata border border-mata/20' },
  activation: { label: 'ativando', cls: 'bg-sol/20 text-tinta border border-sol/30' },
  coming: { label: 'em breve', cls: 'bg-areia text-tinta/60 border border-linha' },
}

export default function PraiasPage() {
  return (
    <div className="min-h-screen bg-espuma">
      <section className="bg-gradient-to-br from-mare to-mare-deep text-espuma pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-logo text-4xl md:text-6xl font-black mb-4">praias atendidas</h1>
          <p className="text-espuma/80 text-xl">onde o chapa já está, ou em breve vai estar.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {beaches.map((beach) => {
              const status = statusLabel[beach.status]
              return (
                <div key={`${beach.name}-${beach.city}`} className="bg-white rounded-2xl border border-linha p-5 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h2 className="font-semibold text-tinta">{beach.name}</h2>
                      <p className="text-xs text-tinta/50">{beach.city} — {beach.state}</p>
                    </div>
                    <span className={`text-xs font-mono px-2 py-1 rounded-pill ${status.cls}`}>{status.label}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 bg-areia/40 rounded-2xl p-8 border border-linha text-center">
            <h2 className="font-logo text-2xl font-bold text-tinta mb-3">sua praia não está aqui?</h2>
            <p className="text-tinta/60 mb-6">Estamos expandindo. Fale com a gente e leve o CHAPA para a sua praia.</p>
            <a href="/contato" className="bg-mare text-espuma font-semibold px-8 py-3 rounded-pill inline-block hover:bg-mare-deep transition-colors">
              quero o CHAPA na minha praia
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
