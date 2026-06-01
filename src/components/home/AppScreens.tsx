// App screen mockups based on official CHAPA Delivery screenshots

export function ScreenHome() {
  return (
    <div className="w-full h-full bg-espuma flex flex-col text-tinta overflow-hidden">
      {/* Status bar */}
      <div className="bg-mare px-4 pt-2 pb-3">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-espuma/70 text-[10px]">Boa tarde, Ana 🌤️</p>
            <p className="text-espuma font-bold text-sm font-logo">chapa.</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-espuma/20 flex items-center justify-center">
            <span className="text-espuma text-sm">A</span>
          </div>
        </div>
        <div className="bg-white/10 rounded-xl px-3 py-2 flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.7">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <span className="text-espuma/60 text-xs">buscar produto ou vendedor</span>
        </div>
      </div>

      {/* Oferta do dia */}
      <div className="mx-3 mt-3 bg-brasa rounded-xl p-3 flex items-center justify-between">
        <div>
          <p className="text-espuma/80 text-[9px] uppercase tracking-wider font-semibold">oferta do dia</p>
          <p className="text-espuma font-bold text-sm">Cerveja gelada</p>
          <p className="text-espuma font-mono text-xs">R$ 6,50</p>
        </div>
        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
          <span className="text-2xl">🍺</span>
        </div>
      </div>

      {/* Categories */}
      <div className="px-3 mt-3">
        <p className="text-[10px] font-semibold text-tinta/50 uppercase tracking-wider mb-2">categorias</p>
        <div className="flex gap-2">
          {[['🍹', 'Bebidas'], ['🦐', 'Frutos do mar'], ['🍦', 'Sorvetes']].map(([emoji, label]) => (
            <div key={label} className="flex-1 bg-white border border-linha rounded-xl p-2 flex flex-col items-center gap-1">
              <span className="text-lg">{emoji}</span>
              <span className="text-[9px] text-tinta/70 font-medium text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby vendors */}
      <div className="px-3 mt-3 flex-1 overflow-hidden">
        <p className="text-[10px] font-semibold text-tinta/50 uppercase tracking-wider mb-2">perto de você</p>
        <div className="space-y-2">
          {[
            { name: 'Bar do Romário', dist: '84m', tag: 'Bebidas', rating: '4.8' },
            { name: 'Barraca da Adriana', dist: '210m', tag: 'Petiscos', rating: '4.6' },
          ].map((v) => (
            <div key={v.name} className="bg-white border border-linha rounded-xl p-2.5 flex items-center gap-2.5">
              <div className="w-10 h-10 bg-mare/10 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-lg">🏪</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold truncate">{v.name}</p>
                <p className="text-[10px] text-tinta/50">{v.tag} · {v.dist}</p>
              </div>
              <div className="flex items-center gap-0.5 shrink-0">
                <span className="text-[9px] text-sol">★</span>
                <span className="text-[9px] font-mono text-tinta/70">{v.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ScreenSearch() {
  return (
    <div className="w-full h-full bg-espuma flex flex-col text-tinta overflow-hidden">
      {/* Header */}
      <div className="bg-white px-4 pt-2 pb-3 border-b border-linha">
        <p className="font-logo font-bold text-mare text-base mb-2">chapa.</p>
        <div className="bg-espuma border border-linha rounded-xl px-3 py-2 flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-tinta/40">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <span className="text-tinta/40 text-xs">buscar produto ou vendedor</span>
        </div>
      </div>

      {/* Popular chips */}
      <div className="px-3 pt-3">
        <p className="text-[10px] font-semibold text-tinta/50 uppercase tracking-wider mb-2">populares agora</p>
        <div className="flex flex-wrap gap-1.5">
          {['água de coco', 'açaí', 'cerveja', 'pastel', 'camarão', 'sorvete'].map((chip) => (
            <span key={chip} className="bg-white border border-linha text-tinta/70 text-[10px] px-2.5 py-1 rounded-full font-medium">
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Nearby vendors */}
      <div className="px-3 mt-3 flex-1 overflow-hidden">
        <p className="text-[10px] font-semibold text-tinta/50 uppercase tracking-wider mb-2">ambulantes próximos</p>
        <div className="space-y-2">
          {[
            { name: 'Bar do Romário', dist: '84m', desc: 'Bebidas e petiscos gelados' },
            { name: 'Barraca da Adriana', dist: '210m', desc: 'Açaí, frutas e lanches' },
            { name: 'Frut Verão by Edivan', dist: '340m', desc: 'Frutas frescas e vitaminas' },
          ].map((v) => (
            <div key={v.name} className="bg-white border border-linha rounded-xl p-2.5 flex items-center gap-2.5">
              <div className="w-9 h-9 bg-mare/10 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-base">🏪</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold truncate">{v.name}</p>
                <p className="text-[10px] text-tinta/50 truncate">{v.desc}</p>
              </div>
              <span className="text-[10px] font-mono text-mare shrink-0">{v.dist}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ScreenVendor() {
  return (
    <div className="w-full h-full bg-espuma flex flex-col text-tinta overflow-hidden">
      {/* Vendor header */}
      <div className="bg-mare px-4 pt-2 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <button className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
          </button>
          <span className="text-espuma/70 text-xs">vendedor</span>
        </div>
        <p className="text-espuma font-bold text-base leading-tight">Bar do Romário</p>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-espuma/70 text-[10px]">📍 84m de distância</span>
          <span className="text-sol text-[10px]">★ 4.8</span>
        </div>
      </div>

      {/* Menu */}
      <div className="px-3 pt-3 flex-1 overflow-hidden">
        <p className="text-[10px] font-semibold text-tinta/50 uppercase tracking-wider mb-2">cardápio</p>
        <div className="space-y-2">
          {[
            { name: 'Cerveja Artesanal IPA', price: 'R$ 12', tag: null },
            { name: 'Skol Pilsen', price: 'R$ 6,50', tag: 'OFERTA' },
            { name: 'Caipirinha de Limão', price: 'R$ 18', tag: null },
            { name: 'Frozen Morango', price: 'R$ 20', tag: null },
            { name: 'Água de Coco', price: 'R$ 8', tag: null },
          ].map((item) => (
            <div key={item.name} className="bg-white border border-linha rounded-xl p-2.5 flex items-center justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <p className="text-xs font-semibold">{item.name}</p>
                  {item.tag && (
                    <span className="bg-brasa text-espuma text-[8px] font-bold px-1.5 py-0.5 rounded-full">{item.tag}</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono text-xs font-semibold text-mare">{item.price}</span>
                <button className="w-6 h-6 bg-brasa rounded-full flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
