import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Segurança e pagamentos no CHAPA Delivery',
  description: 'Entenda como funcionam os pedidos, pagamentos digitais, localização e vendedores verificados no CHAPA Delivery.',
}

const securityItems = [
  { icon: '✅', title: 'vendedores verificados', body: 'Todos os parceiros CHAPA passam por um processo de cadastro e validação antes de aparecer na plataforma.' },
  { icon: '💸', title: 'pagamento digital seguro', body: 'Pix e cartão processados com segurança. Você não precisa pagar em dinheiro ou informar dados de cartão para vendedores.' },
  { icon: '📍', title: 'localização usada com cuidado', body: 'Sua localização é usada apenas para encontrar vendedores próximos. Não armazenamos histórico de localização sem consentimento.' },
  { icon: '🔒', title: 'seus dados protegidos', body: 'Utilizamos criptografia e boas práticas de segurança para proteger suas informações.' },
  { icon: '⭐', title: 'avaliações e reputação', body: 'Clientes podem avaliar vendedores após cada pedido, mantendo a qualidade da plataforma.' },
  { icon: '🛡️', title: 'suporte para problemas', body: 'Tem alguma dúvida ou problema? Nossa equipe está disponível para ajudar.' },
]

export default function SegurancaPage() {
  return (
    <div className="min-h-screen bg-espuma">
      <section className="bg-mare pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-logo text-4xl md:text-5xl font-black text-espuma mb-4">segurança e pagamentos</h1>
          <p className="text-espuma/80 text-xl">transparência de ponta a ponta.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {securityItems.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-linha p-6">
                <span className="text-3xl mb-4 block" role="img" aria-hidden="true">{item.icon}</span>
                <h2 className="font-semibold text-tinta text-lg mb-2">{item.title}</h2>
                <p className="text-tinta/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
