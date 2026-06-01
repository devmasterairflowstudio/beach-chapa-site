import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { IPhoneMockup } from '@/components/ui/IPhoneMockup'
import { VendorScreenDashboard, VendorScreenOrder, VendorScreenCatalog } from '@/components/home/VendorScreens'

export const metadata: Metadata = {
  title: 'Venda na praia pelo CHAPA Delivery',
  description: 'Cadastre sua barraca, quiosque ou venda ambulante no CHAPA Delivery e receba pedidos de clientes próximos na praia.',
}

const partnerTypes = [
  'Ambulantes', 'Barraqueiros', 'Quiosques',
  'Restaurantes da orla', 'Vendedores de bebidas',
  'Vendedores de açaí', 'Aluguel de cadeira e guarda-sol', 'Operadores locais',
]

const benefits = [
  { icon: '👁️', title: 'Mais visibilidade', desc: 'Apareça para clientes que já estão na praia perto de você.' },
  { icon: '📋', title: 'Pedido organizado', desc: 'Receba pedidos no celular sem depender de grito ou aceno.' },
  { icon: '💸', title: 'Pagamento digital', desc: 'Pix e cartão integrados. Menos troco, mais agilidade.' },
  { icon: '📍', title: 'Cliente perto', desc: 'Conectado com quem está na sua área de atendimento.' },
  { icon: '🍽️', title: 'Cardápio simples', desc: 'Monte e atualize seus produtos na hora, pelo celular.' },
  { icon: '📱', title: 'Operação no celular', desc: 'Tudo em um app simples, sem precisar de equipamento extra.' },
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
            Fazer cadastro agora
          </a>
        </div>
      </section>

      {/* Dores */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-logo text-3xl md:text-4xl font-bold text-tinta text-center mb-4">
            Vender na praia é movimento.<br />O CHAPA ajuda no fluxo.
          </h2>
          <p className="text-center text-tinta/60 mb-10">A gente sabe que não é fácil:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              'Difícil ser encontrado por novos clientes',
              'Cliente não sabe quem está perto',
              'Pagamento em dinheiro atrasa o atendimento',
              'Pedido verbal se perde no movimento',
              'Fila nos horários de pico',
              'Pouca previsibilidade de demanda',
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
          <h2 className="font-logo text-3xl font-bold text-tinta text-center mb-12">Como funciona para vendedores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
            {[
              { step: '1', label: 'Cadastre seu perfil' },
              { step: '2', label: 'Monte seu cardápio' },
              { step: '3', label: 'Fique online na praia' },
              { step: '4', label: 'Receba pedidos' },
              { step: '5', label: 'Entregue e venda mais' },
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
          <h2 className="font-logo text-3xl font-bold text-tinta text-center mb-12">Por que ser Chapa?</h2>
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
          <h2 className="font-logo text-2xl font-bold text-tinta mb-8">Quem pode ser Chapa</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {partnerTypes.map((type) => (
              <span key={type} className="bg-white border border-linha text-tinta/70 text-sm px-4 py-2 rounded-pill">
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mockup do painel do vendedor */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-logo text-3xl font-bold text-tinta text-center mb-4">Seu painel na praia</h2>
          <p className="text-center text-tinta/60 mb-12">Gerencie tudo pelo celular — pedidos, cardápio e faturamento em tempo real.</p>
          <div className="flex justify-center">
            <IPhoneMockup screens={[
              <VendorScreenDashboard key="dashboard" />,
              <VendorScreenOrder key="order" />,
              <VendorScreenCatalog key="catalog" />,
            ]} />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-brasa">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-logo text-3xl md:text-5xl font-bold text-espuma mb-6">
            Pronto para virar Chapa?
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
            Fazer cadastro agora
          </a>
        </div>
      </section>
    </>
  )
}
