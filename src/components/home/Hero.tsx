import { Badge } from '@/components/ui/Badge'
import { HeroVideo } from '@/components/home/HeroVideo'

const quickChips = ['água de coco', 'açaí', 'bebidas', 'petiscos', 'almoço', 'cadeiras', 'guarda-sol', 'gelo']

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-espuma via-areia/30 to-areia/60 pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-logo text-5xl md:text-6xl lg:text-7xl font-black text-tinta leading-[0.95] tracking-tight mb-6">
              pede na praia.
              <br />
              <span className="text-brasa">recebe na areia.</span>
            </h1>
            <p className="text-tinta/70 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Encontre vendedores perto do seu guarda-sol, peça pelo celular e receba onde você está.
            </p>

            <div className="bg-white rounded-xl border border-linha shadow-md p-1 flex gap-1 mb-6 max-w-lg">
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-mare/60 shrink-0" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <input
                  type="text"
                  placeholder="onde você está na praia?"
                  className="flex-1 bg-transparent text-tinta placeholder-tinta/40 text-sm outline-none font-sans"
                  aria-label="Informe sua localização na praia"
                />
              </div>
              <button className="bg-brasa hover:bg-brasa-deep text-espuma text-sm font-semibold px-5 py-3 rounded-lg transition-colors whitespace-nowrap">
                ver vendedores
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {quickChips.map((chip) => (
                <button
                  key={chip}
                  className="bg-white border border-linha text-tinta/70 text-xs font-medium px-3 py-1.5 rounded-pill hover:border-mare hover:text-mare transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 items-center lg:items-end">
            {/* Vídeo de praia — visível em mobile abaixo da headline, em desktop ao lado */}
            <div className="w-full max-w-sm lg:max-w-none lg:w-80">
              <HeroVideo />
            </div>
            <div className="relative w-72 md:w-80">
              <div className="bg-tinta rounded-3xl p-3 shadow-lg relative">
                <div className="bg-espuma rounded-2xl overflow-hidden">
                  <div className="bg-mare px-4 py-3 flex items-center justify-between">
                    <span className="font-logo font-bold text-espuma text-base">chapa</span>
                    <span className="font-mono text-xs text-espuma/70">📍 Ipanema · Posto 9</span>
                  </div>

                  <div className="px-4 py-4 space-y-3">
                    <p className="text-xs font-semibold text-tinta/50 uppercase tracking-widest">vendedores perto de você</p>

                    {[
                      { name: 'Coco gelado', vendor: 'Dona Gal', dist: '110m', price: 'R$ 8', pix: true },
                      { name: 'Açaí 300ml', vendor: 'Marcão', dist: '40m', price: 'R$ 18', pix: true },
                      { name: 'Pastel de camarão', vendor: 'Quiosque 12', dist: '180m', price: 'R$ 14', pix: false },
                    ].map((item) => (
                      <div key={item.name} className="bg-white rounded-xl p-3 border border-linha flex items-center justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-tinta truncate">{item.name}</p>
                          <p className="text-xs text-tinta/50">{item.vendor} · {item.dist}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="font-mono text-sm font-semibold text-mare">{item.price}</span>
                          {item.pix && <Badge label="aceita Pix" />}
                        </div>
                      </div>
                    ))}

                    <button className="w-full bg-brasa text-espuma text-sm font-semibold py-3 rounded-xl mt-2">
                      ver todos os vendedores
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-12 h-12 bg-sol rounded-full flex items-center justify-center shadow-md animate-sun-pulse">
                <span className="text-xl" role="img" aria-label="sol">☀️</span>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white border border-linha rounded-xl p-3 shadow-md text-xs font-mono text-mare">
                📍 você aqui
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
