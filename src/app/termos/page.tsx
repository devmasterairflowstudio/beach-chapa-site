import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Termos de Uso — CHAPA Delivery',
  description: 'Termos de uso do CHAPA Delivery, solução da HERA TECHNOLOGY.',
}

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-espuma">
      <section className="bg-tinta text-espuma pt-16 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-logo text-3xl md:text-4xl font-black mb-2">termos de uso</h1>
          <p className="text-espuma/60 text-sm">versão preliminar — sujeito a revisão jurídica antes da publicação oficial</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <div className="bg-sol/10 border border-sol/30 rounded-xl p-4 text-sm text-tinta/70">
            <strong>Aviso:</strong> Este documento é um modelo inicial e provisório. Deve ser revisado por assessoria jurídica antes da publicação oficial.
          </div>

          {[
            { title: '1. aceitação', body: 'Ao usar o CHAPA DELIVERY, você concorda com estes termos. Se não concordar, não utilize a plataforma.' },
            { title: '2. serviço', body: `O CHAPA DELIVERY é uma plataforma de conexão entre clientes e vendedores locais na praia, operada pela ${siteConfig.companyName}.` },
            { title: '3. cadastro', body: 'Para realizar pedidos ou se cadastrar como vendedor, é necessário criar uma conta com informações verdadeiras.' },
            { title: '4. pedidos e pagamentos', body: 'Os pedidos são realizados entre clientes e vendedores. O CHAPA atua como intermediador tecnológico. Pagamentos são processados por plataformas autorizadas.' },
            { title: '5. responsabilidades', body: 'O CHAPA não se responsabiliza pela qualidade dos produtos vendidos por terceiros. Cada vendedor é responsável pelos itens que oferece.' },
            { title: '6. conduta', body: 'É proibido usar a plataforma para fins ilegais, fraudulentos ou que prejudiquem outros usuários ou vendedores.' },
            { title: '7. cancelamentos', body: 'A política de cancelamento varia por pedido e vendedor. Consulte as condições no momento do pedido.' },
            { title: '8. alterações', body: 'Podemos atualizar estes termos a qualquer momento. Você será notificado de mudanças significativas.' },
            { title: '9. contato', body: `Dúvidas: ${siteConfig.placeholders.emailSuporte}` },
          ].map((section) => (
            <div key={section.title} className="bg-white rounded-2xl border border-linha p-6">
              <h2 className="font-semibold text-tinta text-lg mb-3">{section.title}</h2>
              <p className="text-tinta/70 text-sm leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
