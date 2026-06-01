// Telas oficiais do app CHAPA Delivery — fiéis às screenshots fornecidas

function BottomNav({ active }: { active: 'home' | 'search' | 'favorites' | 'profile' }) {
  return (
    <div className="flex items-center justify-around py-2 border-t border-gray-100 bg-white px-2">
      <button className={`flex flex-col items-center gap-0.5 ${active === 'home' ? 'text-[#0E5E78]' : 'text-gray-400'}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill={active === 'home' ? '#0E5E78' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
        <span className="text-[8px] font-medium">Início</span>
      </button>
      <button className={`flex flex-col items-center gap-0.5 relative ${active === 'search' ? 'text-[#0E5E78]' : 'text-gray-400'}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <span className="text-[8px] font-medium">Buscar</span>
        {active === 'search' && <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#E15A35] rounded-full" />}
      </button>
      <button className="w-11 h-11 bg-[#E15A35] rounded-full flex items-center justify-center shadow-md -mt-3 relative">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F2B23C] rounded-full text-[8px] font-bold text-white flex items-center justify-center">0</span>
      </button>
      <button className="flex flex-col items-center gap-0.5 text-gray-400">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <span className="text-[8px] font-medium">Favoritos</span>
      </button>
      <button className="flex flex-col items-center gap-0.5 text-gray-400">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
        <span className="text-[8px] font-medium">Perfil</span>
      </button>
    </div>
  )
}

export function ScreenHome() {
  return (
    <div className="w-full h-full flex flex-col bg-[#F4EDE0] overflow-hidden text-[#161620]">
      {/* Hero header */}
      <div className="bg-[#0E5E78] px-4 pt-3 pb-5">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(251,248,242,0.7)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="text-[9px] text-[#FBF8F2]/60 uppercase tracking-widest font-semibold">Praia de Juquehy</span>
            </div>
            <p className="text-[#FBF8F2] font-bold text-lg leading-tight">Boa tarde, Ana ☀️</p>
            <p className="text-[#FBF8F2]/70 text-[10px]">O que vai querer hoje?</p>
          </div>
          <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <span className="absolute w-1.5 h-1.5 bg-[#E15A35] rounded-full -top-0.5 -right-0.5" />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="px-3 -mt-3">
        <div className="bg-white rounded-xl px-3 py-2.5 flex items-center gap-2 shadow-sm border border-gray-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span className="text-[11px] text-gray-400">Buscar ambulantes ou produtos…</span>
        </div>
      </div>

      {/* Scroll body */}
      <div className="flex-1 overflow-hidden px-3 pt-3 space-y-3">
        {/* Promo banner */}
        <div className="bg-[#E15A35] rounded-2xl p-3 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 w-24 h-24 rounded-full bg-white -translate-y-4 translate-x-4" />
            <div className="absolute right-8 top-8 w-16 h-16 rounded-full bg-white" />
          </div>
          <div className="relative">
            <span className="text-[9px] font-bold text-white/80 uppercase tracking-widest">🔥 Oferta do dia</span>
            <p className="text-white font-bold text-sm italic leading-tight mt-0.5">Cerveja gelada<br/>a R$ 6,50</p>
            <p className="text-white/70 text-[9px] mt-1">Bar do Romário · só hoje</p>
            <p className="text-white text-[10px] font-semibold mt-1.5">Ver oferta →</p>
          </div>
        </div>

        {/* Categories */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold text-[#161620]">Categorias</span>
            <span className="text-[9px] text-[#0E5E78] font-semibold">Ver todas</span>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-0.5">
            {[['🍹', 'Bebidas', true], ['🦐', 'Frutos do mar', false], ['🍦', 'Sorvetes', false], ['🥤', 'Açaí', false]].map(([e, l, a]) => (
              <div key={l as string} className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[9px] font-semibold shrink-0 ${a ? 'bg-[#0E5E78] text-white' : 'bg-white text-[#161620]/70 border border-gray-100'}`}>
                <span>{e as string}</span><span>{l as string}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold text-[#161620]">Perto de você</span>
            <span className="text-[9px] text-[#0E5E78] font-semibold">Ver todos</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-0.5">
            {[
              { name: 'Bar do Romário', dist: '84m', rating: '4.8', tags: ['Bebidas', 'Petiscos'], bg: 'linear-gradient(135deg,#0E5E78,#08475C)' },
              { name: 'Barraca da Adriana', dist: '210m', rating: '4.9', tags: ['Frutos do mar', 'Refeições'], bg: 'linear-gradient(135deg,#1F7A4F,#08475C)' },
            ].map((v) => (
              <div key={v.name} className="shrink-0 w-32 bg-white rounded-xl overflow-hidden border border-gray-100">
                <div className="h-16 flex items-center justify-center relative" style={{ background: v.bg }}>
                  <span className="text-[9px] text-white/60 font-bold absolute top-1.5 left-2 bg-[#22C55E]/90 text-white px-1.5 py-0.5 rounded-full">ABERTO</span>
                  <svg viewBox="0 0 200 200" style={{ width: '40px', opacity: 0.25, color: '#fff' }}>
                    <path d="M 158 60 A 60 60 0 1 0 158 140" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round"/>
                    <circle cx="128" cy="100" r="13" fill="#E15A35"/>
                  </svg>
                </div>
                <div className="p-2">
                  <p className="text-[10px] font-bold truncate">{v.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-[9px] text-gray-400">🏖 {v.dist}</span>
                    <span className="text-[9px] text-gray-400">⭐ {v.rating}</span>
                  </div>
                  <div className="flex gap-1 mt-1 flex-wrap">
                    {v.tags.map((t) => <span key={t} className="text-[8px] bg-gray-100 text-gray-500 px-1 py-0.5 rounded">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  )
}

export function ScreenSearch() {
  return (
    <div className="w-full h-full flex flex-col bg-[#F4EDE0] overflow-hidden text-[#161620]">
      {/* Search bar */}
      <div className="bg-white px-3 pt-3 pb-2">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-[#F4EDE0] rounded-xl px-3 py-2 flex items-center gap-2">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <span className="text-[11px] text-gray-400">Cerveja, camarão, açaí…</span>
          </div>
          <span className="text-[11px] text-[#0E5E78] font-semibold">Cancelar</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-hidden px-3 pt-3 space-y-4">
        {/* Populares agora */}
        <div>
          <p className="text-[11px] font-bold text-[#161620] mb-2">Populares agora</p>
          <div className="flex flex-wrap gap-1.5">
            {[['🍺','Cerveja gelada'], ['🦐','Camarão'], ['🥤','Açaí'], ['🍦','Sorvete'], ['🥥','Água de coco'], ['🍢','Espetinho']].map(([e, l]) => (
              <span key={l} className="flex items-center gap-1 bg-white border border-gray-200 text-[#161620]/70 text-[10px] px-2.5 py-1.5 rounded-full font-medium">
                <span>{e}</span><span>{l}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Ambulantes próximos */}
        <div>
          <p className="text-[11px] font-bold text-[#161620] mb-2">Ambulantes próximos</p>
          <div className="space-y-2">
            {[
              { name: 'Bar do Romário', desc: 'Bebidas · Petiscos', dist: '84m', bg: 'linear-gradient(135deg,#0E5E78,#08475C)', aberto: true },
              { name: 'Barraca da Adriana', desc: 'Frutos do mar · Refeições', dist: '210m', bg: 'linear-gradient(135deg,#1F7A4F,#08475C)', aberto: true },
              { name: 'Frut Verão by Edivan', desc: 'Sorvetes · Açaí', dist: '340m', bg: 'linear-gradient(135deg,#E15A35,#B73E1F)', aberto: true },
            ].map((v) => (
              <div key={v.name} className="bg-white rounded-xl flex items-center gap-2.5 p-2.5 border border-gray-100">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: v.bg }}>
                  <svg viewBox="0 0 200 200" style={{ width: '24px', opacity: 0.5, color: '#fff' }}>
                    <path d="M 158 60 A 60 60 0 1 0 158 140" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round"/>
                    <circle cx="128" cy="100" r="13" fill="#E15A35"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold truncate">{v.name}</p>
                  <p className="text-[9px] text-gray-400">
                    {v.desc} · <span className="text-[#22C55E] font-semibold">Aberto</span>
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#0E5E78] font-semibold shrink-0">{v.dist}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="search" />
    </div>
  )
}

export function ScreenVendor() {
  return (
    <div className="w-full h-full flex flex-col bg-[#F4EDE0] overflow-hidden text-[#161620]">
      {/* Header */}
      <div className="relative pb-4" style={{ background: 'linear-gradient(160deg,#0E5E78,#08475C)' }}>
        {/* Chapa logo watermark */}
        <svg viewBox="0 0 200 200" className="absolute right-4 top-2 opacity-10" style={{ width: '70px', color: '#fff' }}>
          <path d="M 158 60 A 60 60 0 1 0 158 140" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round"/>
          <circle cx="128" cy="100" r="13" fill="#E15A35"/>
        </svg>
        <div className="flex items-center justify-between px-3 pt-2 mb-2">
          <button className="w-7 h-7 bg-white/15 rounded-full flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          </button>
          <button className="w-7 h-7 bg-white/15 rounded-full flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
        <div className="px-3">
          <p className="text-white font-bold text-lg leading-tight">Bar do Romário</p>
          <p className="text-white/60 text-[10px] mt-0.5">A melhor cerveja gelada da praia</p>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-[10px] text-[#F2B23C]">⭐ 4.8</span>
            <span className="text-white/40 text-[9px]">·</span>
            <span className="text-[10px] text-white/70">📍 84m</span>
            <span className="text-white/40 text-[9px]">·</span>
            <span className="text-[10px] text-white/70">⏱ ~5 min</span>
            <span className="text-white/40 text-[9px]">·</span>
            <span className="text-[9px] bg-[#22C55E] text-white px-2 py-0.5 rounded-full font-bold">Aberto</span>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-hidden px-3 pt-2">
        <div className="space-y-0.5">
          {/* Section label */}
          <p className="text-[9px] font-bold text-[#0E5E78] uppercase tracking-widest pt-1 pb-1.5 flex items-center gap-1">
            <span>🍺</span> Cervejas
          </p>
          {[
            { name: 'Cerveja Artesanal IPA', desc: 'Long neck · 355ml · bem gelada', price: 'R$ 12,00', oferta: false, emoji: '🍺', bg: '#EFF6FF' },
            { name: 'Skol Pilsen', desc: 'Long neck · 355ml', price: 'R$ 6,50', oferta: true, emoji: '🍺', bg: '#FEFCE8' },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-2 bg-white rounded-xl p-2 border border-gray-100">
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold">{item.name}</p>
                <p className="text-[8px] text-gray-400">{item.desc}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[10px] font-bold text-[#0E5E78]">{item.price}</span>
                  {item.oferta && <span className="text-[7px] bg-[#F2B23C] text-white px-1 py-0.5 rounded font-bold">OFERTA</span>}
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-1">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl" style={{ background: item.bg }}>{item.emoji}</div>
                <button className="w-6 h-6 bg-[#E15A35] rounded-full flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M12 5v14M5 12h14"/></svg>
                </button>
              </div>
            </div>
          ))}
          <p className="text-[9px] font-bold text-[#0E5E78] uppercase tracking-widest pt-2 pb-1.5 flex items-center gap-1">
            <span>🍹</span> Drinks
          </p>
          {[
            { name: 'Caipirinha de Limão', desc: 'Cachaça artesanal · limão taiti', price: 'R$ 18,00', emoji: '🍋', bg: '#F0FDF4' },
            { name: 'Frozen Morango', desc: 'Drink gelado · morango e vodka', price: 'R$ 20,00', emoji: '🍓', bg: '#FFF1F2' },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-2 bg-white rounded-xl p-2 border border-gray-100">
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold">{item.name}</p>
                <p className="text-[8px] text-gray-400">{item.desc}</p>
                <span className="text-[10px] font-bold text-[#0E5E78]">{item.price}</span>
              </div>
              <div className="shrink-0 flex items-center gap-1">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl" style={{ background: item.bg }}>{item.emoji}</div>
                <button className="w-6 h-6 bg-[#E15A35] rounded-full flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M12 5v14M5 12h14"/></svg>
                </button>
              </div>
            </div>
          ))}
          <p className="text-[9px] font-bold text-[#0E5E78] uppercase tracking-widest pt-2 pb-1 flex items-center gap-1">
            <span>🥥</span> Sem álcool
          </p>
          <div className="flex items-center gap-2 bg-white rounded-xl p-2 border border-gray-100">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold">Água de Coco</p>
              <p className="text-[8px] text-gray-400">Fresca · 500ml</p>
              <span className="text-[10px] font-bold text-[#0E5E78]">R$ 8,00</span>
            </div>
            <div className="shrink-0 flex items-center gap-1">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl bg-[#ECFDF5]">🥥</div>
              <button className="w-6 h-6 bg-[#E15A35] rounded-full flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M12 5v14M5 12h14"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  )
}
