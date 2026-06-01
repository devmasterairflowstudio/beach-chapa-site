import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Política de Privacidade — CHAPA Delivery',
  description: 'Política de privacidade do CHAPA Delivery, solução da HERA TECHNOLOGY.',
}

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-espuma">
      <section className="bg-tinta text-espuma pt-16 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-logo text-3xl md:text-4xl font-black mb-2">política de privacidade</h1>
          <p className="text-espuma/60 text-sm">última atualização: 2026 — versão preliminar sujeita a revisão jurídica</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <div className="bg-sol/10 border border-sol/30 rounded-xl p-4 text-sm text-tinta/70">
            <strong>Aviso:</strong> Este documento é um modelo inicial e provisório. Deve ser revisado por assessoria jurídica antes da publicação oficial.
          </div>

          {[
            { title: '1. empresa responsável', body: `O CHAPA DELIVERY é operado pela ${siteConfig.companyName}, CNPJ ${siteConfig.placeholders.cnpj}, com sede em ${siteConfig.placeholders.endereco}.` },
            { title: '2. dados coletados', body: 'Coletamos dados fornecidos pelo usuário no cadastro (nome, e-mail, telefone), dados de localização usados para encontrar vendedores próximos, dados de pagamento processados via intermediários autorizados, e dados de uso e navegação.' },
            { title: '3. uso da localização', body: 'A localização é utilizada exclusivamente para conectar você a vendedores e ambulantes próximos na praia. Não armazenamos histórico contínuo de localização.' },
            { title: '4. meios de pagamento', body: 'Pagamentos são processados por intermediadores financeiros autorizados. Não armazenamos dados de cartão de crédito ou chaves Pix completas em nossos servidores.' },
            { title: '5. cookies e analytics', body: 'Utilizamos cookies essenciais para funcionamento e ferramentas de analytics (como Google Analytics) para entender como o site é usado. Você pode recusar cookies não essenciais.' },
            { title: '6. compartilhamento', body: 'Não vendemos seus dados. Compartilhamos apenas com prestadores de serviço necessários para a operação da plataforma.' },
            { title: '7. seus direitos', body: `Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail ${siteConfig.placeholders.emailSuporte}.` },
            { title: '8. contato', body: `Para questões de privacidade, contate: ${siteConfig.placeholders.emailSuporte}` },
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
