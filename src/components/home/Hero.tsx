import { HeroVideo } from '@/components/home/HeroVideo'
import { IPhoneMockup } from '@/components/ui/IPhoneMockup'
import { ScreenHome, ScreenSearch, ScreenVendor } from '@/components/home/AppScreens'

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
            <div className="relative">
              <IPhoneMockup screens={[<ScreenHome key="home" />, <ScreenSearch key="search" />, <ScreenVendor key="vendor" />]} />
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-sol rounded-full flex items-center justify-center shadow-md animate-sun-pulse">
                <span className="text-xl" role="img" aria-label="sol">☀️</span>
              </div>
              <div className="absolute -bottom-10 -left-3 bg-white border border-linha rounded-xl p-3 shadow-md text-xs font-mono text-mare">
                📍 você aqui
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
