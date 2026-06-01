import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Termos de Uso — CHAPA Delivery',
  description: 'Termos de uso do CHAPA Delivery, solução da HERA TECHNOLOGY. Leia as condições de uso da plataforma.',
}

// Conteúdo jurídico inicial. Revisar com advogado antes da publicação oficial.
export default function TermosPage() {
  return (
    <div className="min-h-screen bg-espuma">
      <section className="bg-tinta text-espuma pt-16 pb-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-logo text-3xl md:text-4xl font-black mb-2">termos de uso</h1>
          <p className="text-espuma/50 text-sm">Última atualização: 01/06/2026 — versão inicial, sujeita a revisão jurídica</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <Block title="1. Quem somos">
            O CHAPA Delivery é uma plataforma digital desenvolvida e operada pela <strong>{siteConfig.companyName}</strong>. Ao usar nossa plataforma, você concorda com estes termos. Se não concordar, não utilize o serviço.
          </Block>

          <Block title="2. O que é o CHAPA Delivery">
            O CHAPA é uma plataforma de intermediação digital que conecta clientes a vendedores que operam na praia. Não somos responsáveis diretamente pela fabricação, preparo ou entrega dos produtos — essa responsabilidade é do vendedor parceiro. Atuamos como facilitador tecnológico da transação.
          </Block>

          <Block title="3. Cadastro e responsabilidades">
            Para usar o CHAPA, você pode precisar criar uma conta. Você é responsável por manter suas credenciais em segurança e por todas as ações realizadas com sua conta. Informações falsas ou incorretas podem resultar no cancelamento do acesso. O cadastro é restrito a maiores de 18 anos.
          </Block>

          <Block title="4. Uso pelo cliente">
            Como cliente, você pode usar a plataforma para encontrar vendedores próximos, visualizar produtos e cardápios, realizar pedidos e efetuar pagamentos. Você se compromete a fornecer informações corretas de localização, não realizar pedidos de má-fé e respeitar os vendedores parceiros.
          </Block>

          <Block title="5. Uso pelo vendedor">
            Como vendedor parceiro, você pode cadastrar seu perfil, montar seu cardápio, receber e gerenciar pedidos. Você se compromete a manter seu cardápio atualizado, aceitar apenas pedidos que possa cumprir, entregar os produtos conforme descrito, tratar os clientes com respeito e cumprir as obrigações legais aplicáveis à sua atividade.
          </Block>

          <Block title="6. Pedidos e disponibilidade">
            Os pedidos dependem da disponibilidade dos vendedores em sua área. O CHAPA não garante que haverá vendedores disponíveis em toda praia ou horário. Um pedido é confirmado somente após aceite do vendedor. A disponibilidade de produtos pode variar conforme o cardápio de cada vendedor.
          </Block>

          <Block title="7. Pagamentos">
            Os pagamentos são processados por meio de parceiros financeiros integrados à plataforma. Pix, cartão de crédito e débito podem estar disponíveis conforme a operação. O CHAPA repassa os valores aos vendedores conforme as condições acordadas no cadastro. Dados completos de cartão são tratados por processadores especializados.
          </Block>

          <Block title="8. Cancelamentos e reembolsos">
            Cancelamentos podem ser solicitados pelo cliente antes do vendedor aceitar o pedido. Após o aceite, o cancelamento depende da análise do caso. Reembolsos são processados conforme o meio de pagamento utilizado e a análise da situação. Entre em contato com o suporte em caso de problemas: <strong>fale@chapa.delivery</strong>.
          </Block>

          <Block title="9. Responsabilidades da plataforma">
            O CHAPA se responsabiliza por manter a plataforma funcionando, processar as transações com segurança e garantir a experiência de intermediação. Não nos responsabilizamos pela qualidade dos produtos dos vendedores, atrasos causados por fatores externos ou danos indiretos resultantes do uso da plataforma.
          </Block>

          <Block title="10. Condutas proibidas">
            São proibidos: uso fraudulento da plataforma; pedidos de má-fé ou sem intenção de pagamento; manipulação de avaliações; qualquer tentativa de burlar o sistema de pagamento; assédio ou comportamento inadequado com vendedores ou outros usuários; uso da plataforma para fins ilegais.
          </Block>

          <Block title="11. Propriedade intelectual">
            Todo o conteúdo da plataforma CHAPA Delivery — incluindo marca, logotipo, textos, design e código — é propriedade da {siteConfig.companyName}. Não é permitido reproduzir, copiar ou usar esses elementos sem autorização prévia por escrito.
          </Block>

          <Block title="12. Privacidade">
            O tratamento dos seus dados pessoais é regido pela nossa{' '}
            <Link href="/privacidade" className="text-mare underline hover:text-mare-deep">Política de Privacidade</Link>.
            Ao usar a plataforma, você concorda com os termos descritos nela.
          </Block>

          <Block title="13. Disponibilidade do serviço">
            O CHAPA se empenha em manter a plataforma disponível, mas não garante operação ininterrupta. Manutenções, atualizações ou problemas técnicos podem afetar temporariamente o serviço. Notificaremos os usuários sobre interrupções programadas quando possível.
          </Block>

          <Block title="14. Alterações nos termos">
            Estes termos podem ser atualizados periodicamente. A versão vigente estará sempre disponível neste endereço. O uso continuado da plataforma após alterações implica na aceitação dos novos termos.
          </Block>

          <Block title="15. Contato">
            Para dúvidas ou solicitações relacionadas a estes termos, entre em contato: <strong>fale@chapa.delivery</strong>
          </Block>
        </div>
      </section>
    </div>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-linha p-6">
      <h2 className="font-semibold text-tinta text-lg mb-3">{title}</h2>
      <div className="text-tinta/70 text-sm leading-relaxed">{children}</div>
    </div>
  )
}
