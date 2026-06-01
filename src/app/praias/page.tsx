import type { Metadata } from 'next'
import { beaches, type BeachStatus } from '@/data/beaches'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Praias atendidas pelo CHAPA Delivery',
  description: 'Confira as cidades e praias onde o CHAPA Delivery está disponível ou em fase de ativação. Disponível agora em São Sebastião, SP.',
}

const statusConfig: Record<BeachStatus, { label: string; cls: string }> = {
  available:   { label: 'disponível', cls: 'bg-mata/10 text-mata border border-mata/20' },
  activation:  { label: 'em ativação', cls: 'bg-sol/20 text-tinta border border-sol/40' },
  comingSoon:  { label: 'em breve', cls: 'bg-areia text-tinta/50 border border-linha' },
}

const regions = [...new Set(beaches.map(b => b.region))]
const availableBeaches = beaches.filter(b => b.status === 'available')

export default function PraiasPage() {
  const beachesByRegion = regions.map(region => ({
    region,
    items: beaches.filter(b => b.region === region),
  }))

  return (
    <div className="min-h-screen bg-espuma">
      <section className="bg-gradient-to-br from-mare to-mare-deep text-espuma pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-logo text-4xl md:text-6xl font-black mb-4">praias atendidas</h1>
          <p className="text-espuma/80 text-xl mb-6">onde o chapa já está — e onde chegará em breve.</p>
          <div className="inline-flex items-center gap-2 bg-mata/20 border border-mata/30 rounded-pill px-4 py-2">
            <span className="w-2 h-2 bg-mata rounded-full animate-pulse" aria-hidden="true"></span>
            <span className="text-espuma text-sm font-mono">disponível agora em São Sebastião, SP</span>
          </div>
        </div>
      </section>

      {availableBeaches.length > 0 && (
        <section className="py-12 bg-mata/5 border-b border-mata/10">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-logo text-2xl font-bold text-tinta mb-2">disponível agora</h2>
            <p className="text-tinta/60 text-sm mb-6">Praia do Engenho e Juquehy já estão no CHAPA.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableBeaches.map(beach => (
                <div key={`${beach.name}-${beach.city}`} className="bg-white rounded-xl border border-mata/20 p-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-tinta">{beach.name}</p>
                    <p className="text-xs text-tinta/50">{beach.city} — {beach.state}</p>
                  </div>
                  <span className={`text-xs font-mono px-2 py-1 rounded-pill ${statusConfig.available.cls}`}>disponível</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a href={siteConfig.vendorSignupUrl} target="_blank" rel="noopener noreferrer" className="bg-mate inline-block bg-mare text-espuma font-semibold px-6 py-3 rounded-pill text-sm hover:bg-mare-deep transition-colors">
                ver vendedores disponíveis
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-tinta/40 text-xs mb-8 text-center">A disponibilidade pode variar conforme vendedores ativos na região.</p>
          <div className="space-y-10">
            {beachesByRegion.map(({ region, items }) => (
              <div key={region}>
                <h2 className="font-logo text-xl font-bold text-tinta mb-4 pb-2 border-b border-linha">{region}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {items.map(beach => {
                    const s = statusConfig[beach.status]
                    return (
                      <div key={`${beach.name}-${beach.city}`} className="bg-white rounded-xl border border-linha p-4 hover:shadow-sm transition-all">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-tinta text-sm truncate">{beach.name}</p>
                            <p className="text-xs text-tinta/40">{beach.city}</p>
                          </div>
                          <span className={`text-xs font-mono px-2 py-0.5 rounded-pill whitespace-nowrap shrink-0 ${s.cls}`}>{s.label}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-areia/40 border-t border-linha">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-logo text-2xl md:text-3xl font-bold text-tinta mb-3">sua praia não está aqui?</h2>
          <p className="text-tinta/60 mb-6">Estamos expandindo. Fale com a gente e leve o CHAPA para a sua praia.</p>
          <a href={siteConfig.vendorSignupUrl} target="_blank" rel="noopener noreferrer" className="bg-mare text-espuma font-semibold px-8 py-3 rounded-pill inline-block hover:bg-mare-deep transition-colors">
            quero ativar minha praia
          </a>
        </div>
      </section>
    </div>
  )
}
