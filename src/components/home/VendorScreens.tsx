// Telas do painel do vendedor CHAPA — visão vendor

function VendorNav({ active }: { active: 'home' | 'orders' | 'catalog' | 'stats' }) {
  return (
    <div className="flex items-center justify-around py-2 border-t border-gray-100 bg-white px-2">
      {[
        { id: 'home', label: 'Painel', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill={active === 'home' ? '#0E5E78' : 'none'} stroke={active === 'home' ? '#0E5E78' : '#9CA3AF'} strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
        { id: 'orders', label: 'Pedidos', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active === 'orders' ? '#0E5E78' : '#9CA3AF'} strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg> },
        { id: 'catalog', label: 'Cardápio', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active === 'catalog' ? '#0E5E78' : '#9CA3AF'} strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg> },
        { id: 'stats', label: 'Ganhos', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active === 'stats' ? '#0E5E78' : '#9CA3AF'} strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
      ].map((item) => (
        <button key={item.id} className={`flex flex-col items-center gap-0.5 ${active === item.id ? 'text-[#0E5E78]' : 'text-gray-400'}`}>
          {item.icon}
          <span className="text-[8px] font-medium">{item.label}</span>
        </button>
      ))}
    </div>
  )
}

export function VendorScreenDashboard() {
  return (
    <div className="w-full h-full flex flex-col bg-[#F4EDE0] overflow-hidden text-[#161620]">
      {/* Header */}
      <div className="bg-[#0E5E78] px-4 pt-3 pb-4">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-[#FBF8F2]/70 text-[9px]">Bar do Romário</p>
            <p className="text-[#FBF8F2] font-bold text-sm font-logo">chapa vendedor</p>
          </div>
          <div className="flex items-center gap-1.5 bg-[#22C55E]/20 border border-[#22C55E]/40 rounded-full px-2.5 py-1">
            <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-pulse" />
            <span className="text-[9px] text-[#22C55E] font-bold">Online</span>
          </div>
        </div>
        <p className="text-[#FBF8F2]/50 text-[9px]">📍 Praia de Juquehy · Posto 4</p>
      </div>

      {/* Stats */}
      <div className="px-3 pt-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Pedidos hoje', value: '12', color: 'text-[#0E5E78]' },
            { label: 'Faturamento', value: 'R$284', color: 'text-[#22C55E]' },
            { label: 'Avaliação', value: '4.9 ⭐', color: 'text-[#F2B23C]' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-2.5 border border-gray-100 text-center">
              <p className={`font-mono text-sm font-bold ${s.color}`}>{s.value}</p>
              <p className="text-[8px] text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Novo pedido — alerta */}
      <div className="px-3 pt-3">
        <div className="bg-white border-l-4 border-[#E15A35] rounded-xl p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] font-bold text-[#E15A35] uppercase tracking-wide">🔔 Novo pedido</span>
            <span className="text-[8px] text-gray-400 font-mono">#4821</span>
          </div>
          <p className="text-[11px] font-bold text-[#161620]">2× Cerveja Artesanal IPA</p>
          <p className="text-[9px] text-gray-400">📍 Guarda-sol 14 · Barraca próx. ao quiosque</p>
          <p className="text-[10px] font-mono font-bold text-[#0E5E78] mt-1">R$ 24,00</p>
          <div className="flex gap-2 mt-2">
            <button className="flex-1 bg-[#22C55E] text-white text-[9px] font-bold py-1.5 rounded-lg">Aceitar</button>
            <button className="flex-1 bg-gray-100 text-gray-600 text-[9px] font-bold py-1.5 rounded-lg">Recusar</button>
          </div>
        </div>
      </div>

      {/* Pedidos em andamento */}
      <div className="px-3 pt-3 flex-1 overflow-hidden">
        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">Em andamento</p>
        {[
          { id: '#4819', item: 'Skol Pilsen × 3', loc: 'Guarda-sol 7', status: 'A caminho', color: 'text-[#F2B23C]' },
          { id: '#4817', item: 'Água de Coco × 2', loc: 'Barraca 3', status: 'Entregue', color: 'text-[#22C55E]' },
        ].map((p) => (
          <div key={p.id} className="bg-white rounded-xl p-2.5 border border-gray-100 mb-1.5 flex items-center gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-[8px] font-mono text-gray-400">{p.id}</span>
                <span className={`text-[8px] font-bold ${p.color}`}>{p.status}</span>
              </div>
              <p className="text-[10px] font-semibold truncate">{p.item}</p>
              <p className="text-[8px] text-gray-400">📍 {p.loc}</p>
            </div>
          </div>
        ))}
      </div>

      <VendorNav active="home" />
    </div>
  )
}

export function VendorScreenOrder() {
  return (
    <div className="w-full h-full flex flex-col bg-[#F4EDE0] overflow-hidden text-[#161620]">
      {/* Header */}
      <div className="bg-white px-3 pt-3 pb-2 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <p className="font-bold text-sm text-[#161620]">Pedidos</p>
          <div className="flex gap-1.5">
            {['Novos', 'Em andamento', 'Concluídos'].map((t, i) => (
              <span key={t} className={`text-[8px] px-2 py-0.5 rounded-full font-medium ${i === 0 ? 'bg-[#E15A35] text-white' : 'bg-gray-100 text-gray-500'}`}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-3 pt-2 space-y-2">
        {/* Pedido urgente */}
        <div className="bg-white rounded-xl border-2 border-[#E15A35] p-3">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 bg-[#E15A35] rounded-full flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">N</span>
              </span>
              <span className="text-[9px] font-bold text-[#E15A35]">Novo pedido</span>
            </div>
            <span className="text-[8px] font-mono text-gray-400">#4821 · agora</span>
          </div>
          <div className="space-y-0.5 mb-2">
            <p className="text-[10px] font-semibold">2× Cerveja Artesanal IPA</p>
            <p className="text-[10px] font-semibold">1× Caipirinha de Limão</p>
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[9px] text-gray-400">📍 Guarda-sol 14, próx. ao quiosque</p>
            <p className="text-[10px] font-mono font-bold text-[#0E5E78]">R$ 42,00</p>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-[#22C55E] text-white text-[9px] font-bold py-2 rounded-xl">✓ Aceitar pedido</button>
            <button className="px-3 bg-gray-100 text-gray-500 text-[9px] font-bold py-2 rounded-xl">Ver</button>
          </div>
        </div>

        {/* Pedido em andamento */}
        <div className="bg-white rounded-xl border border-gray-100 p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] font-bold text-[#F2B23C]">🏃 A caminho</span>
            <span className="text-[8px] font-mono text-gray-400">#4819</span>
          </div>
          <p className="text-[10px] font-semibold">3× Skol Pilsen</p>
          <div className="flex items-center justify-between mt-1">
            <p className="text-[8px] text-gray-400">📍 Guarda-sol 7</p>
            <p className="text-[10px] font-mono text-[#0E5E78]">R$ 19,50</p>
          </div>
        </div>

        {/* Pedido concluído */}
        <div className="bg-white rounded-xl border border-gray-100 p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] font-bold text-[#22C55E]">✓ Entregue</span>
            <span className="text-[8px] font-mono text-gray-400">#4817 · 14h22</span>
          </div>
          <p className="text-[10px] font-semibold text-gray-500">2× Água de Coco</p>
          <div className="flex items-center justify-between mt-1">
            <p className="text-[8px] text-gray-400">📍 Barraca 3</p>
            <p className="text-[10px] font-mono text-gray-400">R$ 16,00</p>
          </div>
        </div>
      </div>

      <VendorNav active="orders" />
    </div>
  )
}

export function VendorScreenCatalog() {
  return (
    <div className="w-full h-full flex flex-col bg-[#F4EDE0] overflow-hidden text-[#161620]">
      {/* Header */}
      <div className="bg-white px-3 pt-3 pb-2 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <p className="font-bold text-sm text-[#161620]">Meu Cardápio</p>
          <button className="text-[9px] text-[#0E5E78] font-bold flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
            Adicionar
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-3 pt-2 space-y-1.5">
        <p className="text-[9px] font-bold text-[#0E5E78] uppercase tracking-widest flex items-center gap-1 py-0.5">🍺 Cervejas</p>
        {[
          { name: 'Cerveja Artesanal IPA', price: 'R$ 12,00', active: true },
          { name: 'Skol Pilsen', price: 'R$ 6,50', active: true, oferta: true },
          { name: 'Brahma Duplo Malte', price: 'R$ 7,00', active: false },
        ].map((item) => (
          <div key={item.name} className={`flex items-center gap-2 rounded-xl p-2.5 border ${item.active ? 'bg-white border-gray-100' : 'bg-gray-50 border-gray-100 opacity-60'}`}>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <p className="text-[10px] font-semibold truncate">{item.name}</p>
                {item.oferta && <span className="text-[7px] bg-[#F2B23C] text-white px-1 py-0.5 rounded font-bold">OFERTA</span>}
              </div>
              <p className="text-[10px] font-mono text-[#0E5E78]">{item.price}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <div className={`w-8 h-4 rounded-full relative transition-colors ${item.active ? 'bg-[#22C55E]' : 'bg-gray-300'}`}>
                <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow transition-all ${item.active ? 'right-0.5' : 'left-0.5'}`} />
              </div>
            </div>
          </div>
        ))}
        <p className="text-[9px] font-bold text-[#0E5E78] uppercase tracking-widest flex items-center gap-1 pt-1 pb-0.5">🍹 Drinks</p>
        {[
          { name: 'Caipirinha de Limão', price: 'R$ 18,00', active: true },
          { name: 'Frozen Morango', price: 'R$ 20,00', active: true },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-2 bg-white rounded-xl p-2.5 border border-gray-100">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold truncate">{item.name}</p>
              <p className="text-[10px] font-mono text-[#0E5E78]">{item.price}</p>
            </div>
            <div className="w-8 h-4 rounded-full relative bg-[#22C55E]">
              <div className="absolute top-0.5 right-0.5 w-3 h-3 bg-white rounded-full shadow" />
            </div>
          </div>
        ))}
      </div>

      <VendorNav active="catalog" />
    </div>
  )
}
