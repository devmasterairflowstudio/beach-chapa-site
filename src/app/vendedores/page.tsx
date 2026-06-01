import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Venda na praia pelo CHAPA Delivery',
  description: 'Cadastre sua barraca, quiosque ou venda ambulante no CHAPA Delivery e receba pedidos de clientes próximos na praia.',
}

const partnerTypes = [
  'ambulantes', 'barraqueiros', 'quiosques',
  'restaurantes da orla', 'vendedores de bebidas',
  'vendedores de açaí', 'aluguel de cadeira e guarda-sol', 'operadores locais',
]

const benefits = [
  { icon: '👁️', title: 'mais visibilidade', desc: 'Apareça para clientes que já estão na praia perto de você.' },
  { icon: '📋', title: 'pedido organizado', desc: 'Receba pedidos no celular sem depender de grito ou aceno.' },
  { icon: '💸', title: 'pagamento digital', desc: 'Pix e cartão integrados. Menos troco, mais agilidade.' },
  { icon: '📍', title: 'cliente perto', desc: 'Conectado com quem está na sua área de atendimento.' },
  { icon: '🍽️', title: 'cardápio simples', desc: 'Monte e atualize seus produtos na hora, pelo celular.' },
  { icon: '📱', title: 'operação no celular', desc: 'Tudo em um app simples, sem precisar de equipamento extra.' },
]

export default function VendedoresPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-mare to-mare-deep text-espuma pt-16 pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-logo text-4xl md:text-6xl font-black mb-6 leading-tight">
            sua barraca no bolso<br />de quem está na areia.
          </h1>
          <p className="text-espuma/80 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Receba pedidos pelo celular, organize sua venda e apareça para clientes próximos na praia.
          </p>
          <a
            href={siteConfig.vendorSignupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brasa hover:bg-brasa-deep text-espuma font-bold px-10 py-4 rounded-pill text-lg transition-colors inline-block"
          >
            fazer cadastro agora
          </a>
        </div>
      </section>

      {/* Dores */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-logo text-3xl md:text-4xl font-bold text-tinta text-center mb-4">
            vender na praia é movimento.<br />o CHAPA ajuda no fluxo.
          </h2>
          <p className="text-center text-tinta/60 mb-10">a gente sabe que não é fácil:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              'difícil ser encontrado por novos clientes',
              'cliente não sabe quem está perto',
              'pagamento em dinheiro atrasa o atendimento',
              'pedido verbal se perde no movimento',
              'fila nos horários de pico',
              'pouca previsibilidade de demanda',
            ].map((pain) => (
              <li key={pain} className="flex items-start gap-3 bg-areia/40 rounded-xl p-4 border border-linha">
                <span className="text-brasa text-lg shrink-0" aria-hidden="true">→</span>
                <span className="text-sm text-tinta/80">{pain}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 bg-areia/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-logo text-3xl font-bold text-tinta text-center mb-12">como funciona para vendedores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
            {[
              { step: '1', label: 'cadastre seu perfil' },
              { step: '2', label: 'monte seu cardápio' },
              { step: '3', label: 'fique online na praia' },
              { step: '4', label: 'receba pedidos' },
              { step: '5', label: 'entregue e venda mais' },
            ].map((s, i, arr) => (
              <div key={s.step} className="contents">
                <div className="bg-white rounded-2xl p-5 border border-linha text-center shadow-sm">
                  <div className="w-10 h-10 bg-mare rounded-full flex items-center justify-center text-espuma font-mono font-bold text-sm mx-auto mb-3">
                    {s.step}
                  </div>
                  <p className="text-sm font-medium text-tinta">{s.label}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden sm:flex justify-center text-tinta/20 text-2xl" aria-hidden="true">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-logo text-3xl font-bold text-tinta text-center mb-12">por que ser chapa?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-espuma rounded-2xl p-6 border border-linha">
                <span className="text-3xl mb-3 block" role="img" aria-hidden="true">{b.icon}</span>
                <h3 className="font-semibold text-tinta mb-2">{b.title}</h3>
                <p className="text-sm text-tinta/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de parceiros */}
      <section className="py-16 bg-areia/20 border-y border-linha">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-logo text-2xl font-bold text-tinta mb-8">quem pode ser chapa</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {partnerTypes.map((type) => (
              <span key={type} className="bg-white border border-linha text-tinta/70 text-sm px-4 py-2 rounded-pill">
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mockup do painel */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-logo text-3xl font-bold text-tinta text-center mb-12">seu painel na praia</h2>
          <div className="max-w-sm mx-auto bg-tinta rounded-3xl p-3 shadow-lg">
            <div className="bg-espuma rounded-2xl overflow-hidden">
              <div className="bg-mare px-4 py-3 flex items-center justify-between">
                <span className="font-logo font-bold text-espuma">chapa vendedor</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-mata rounded-full animate-pulse" aria-hidden="true"></div>
                  <span className="text-xs text-espuma font-mono">online</span>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-areia rounded-xl p-3">
                    <span className="font-mono text-lg font-bold text-mare block">12</span>
                    <span className="text-xs text-tinta/50">pedidos</span>
                  </div>
                  <div className="bg-areia rounded-xl p-3">
                    <span className="font-mono text-lg font-bold text-mata block">R$284</span>
                    <span className="text-xs text-tinta/50">hoje</span>
                  </div>
                  <div className="bg-areia rounded-xl p-3">
                    <span className="font-mono text-lg font-bold text-sol block">4.9</span>
                    <span className="text-xs text-tinta/50">nota</span>
                  </div>
                </div>
                <div className="bg-brasa/10 border border-brasa/20 rounded-xl p-4">
                  <p className="text-xs text-tinta/50 mb-1">novo pedido</p>
                  <p className="font-semibold text-tinta text-sm">2x Açaí 300ml — R$ 36</p>
                  <p className="text-xs text-tinta/50">📍 Posto 9 · Barraca 14</p>
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 bg-mata text-espuma text-xs font-semibold py-2 rounded-xl">aceitar pedido</button>
                    <button className="flex-1 bg-tinta/10 text-tinta text-xs font-semibold py-2 rounded-xl">ver mais</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-brasa">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-logo text-3xl md:text-5xl font-bold text-espuma mb-6">
            pronto para virar chapa?
          </h2>
          <p className="text-espuma/80 text-lg mb-8">
            Cadastre-se agora e comece a receber pedidos de clientes que já estão na areia.
          </p>
          <a
            href={siteConfig.vendorSignupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-espuma text-brasa hover:bg-areia font-bold px-10 py-4 rounded-pill text-lg transition-colors inline-block"
          >
            fazer cadastro agora
          </a>
        </div>
      </section>
    </>
  )
}
