import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Política de Privacidade — CHAPA Delivery',
  description: 'Política de privacidade do CHAPA Delivery, solução da HERA TECHNOLOGY. Saiba como tratamos seus dados.',
}

// Conteúdo jurídico inicial. Revisar com advogado antes da publicação oficial.
export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-espuma">
      <section className="bg-tinta text-espuma pt-16 pb-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-logo text-3xl md:text-4xl font-black mb-2">política de privacidade</h1>
          <p className="text-espuma/50 text-sm">{'Última atualização: {{DATA_ATUALIZACAO}} — versão inicial, sujeita a revisão jurídica'}</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <div className="bg-sol/10 border border-sol/30 rounded-xl p-4 text-sm text-tinta/70">
            <strong>Aviso:</strong> Este documento é uma versão inicial. Deve ser revisado por assessoria jurídica antes da publicação oficial.
          </div>

          <Block title="1. Quem somos">
            O CHAPA Delivery é uma plataforma digital desenvolvida e operada pela <strong>{siteConfig.companyName}</strong>. Nosso objetivo é conectar clientes, vendedores, ambulantes, barracas, quiosques e parceiros da economia da praia em uma experiência simples e segura.
          </Block>

          <Block title="2. A quem esta política se aplica">
            Esta política se aplica a todas as pessoas que interagem com o CHAPA Delivery, incluindo clientes finais, vendedores e parceiros cadastrados, ambulantes, barraqueiros e quiosques, visitantes do site e usuários da plataforma.
          </Block>

          <Block title="3. Dados que podemos coletar">
            <h3 className="font-semibold text-tinta mb-2">Dados de cadastro</h3>
            <p className="mb-3">Nome, e-mail, telefone, CPF quando necessário, e dados de acesso à conta.</p>
            <h3 className="font-semibold text-tinta mb-2">Dados de vendedores e parceiros</h3>
            <p className="mb-3">Nome do responsável, dados do negócio, cardápio, localização de atendimento e, quando aplicável, dados bancários ou chave Pix para repasse de pagamentos.</p>
            <h3 className="font-semibold text-tinta mb-2">Dados de pedidos</h3>
            <p className="mb-3">Itens solicitados, valores, status, horário, vendedor responsável e ponto de entrega.</p>
            <h3 className="font-semibold text-tinta mb-2">Dados de localização</h3>
            <p className="mb-3">Localização aproximada, ponto de referência na praia, número do posto, barraca ou coordenadas GPS quando você autoriza.</p>
            <h3 className="font-semibold text-tinta mb-2">Dados de pagamento</h3>
            <p className="mb-3">Forma de pagamento, status da transação e identificadores da operação. Dados completos de cartão são tratados por processadores especializados e não ficam armazenados diretamente pelo CHAPA.</p>
            <h3 className="font-semibold text-tinta mb-2">Dados de navegação</h3>
            <p className="mb-3">Endereço IP, tipo de navegador, sistema operacional, cookies, páginas visitadas e eventos de uso.</p>
            <h3 className="font-semibold text-tinta mb-2">Dados de suporte</h3>
            <p>Mensagens, chamados, avaliações e feedbacks enviados ao nosso suporte.</p>
          </Block>

          <Block title="4. Para que usamos seus dados">
            Usamos seus dados para criar e manter contas na plataforma; conectar clientes a vendedores próximos; processar e acompanhar pedidos; permitir pagamentos digitais; melhorar a experiência do serviço; prevenir fraudes e uso indevido; cumprir obrigações legais; prestar suporte; enviar comunicações sobre pedidos; e enviar comunicações promocionais quando você autorizar.
          </Block>

          <Block title="5. Uso de localização">
            Usamos sua localização para encontrar vendedores próximos e orientar a entrega na praia. Você pode informar manualmente um ponto de referência ou autorizar o uso do GPS. Não monitoramos sua localização de forma contínua fora do contexto de um pedido ativo.
          </Block>

          <Block title="6. Pagamentos">
            Os pagamentos podem ser processados por parceiros financeiros autorizados. O CHAPA recebe informações sobre o status e identificadores da transação. Dados completos de cartão de crédito são tratados pelos provedores de pagamento, não pelo CHAPA diretamente. Pix, cartão e outros meios podem estar disponíveis conforme a operação.
          </Block>

          <Block title="7. Compartilhamento de dados">
            Seus dados podem ser compartilhados apenas quando necessário com: o vendedor responsável pelo seu pedido; processadores de pagamento; provedores de tecnologia e infraestrutura de nuvem; ferramentas de analytics e monitoramento; e autoridades públicas, quando exigido por lei ou ordem judicial.
            <br /><br />Não vendemos seus dados a terceiros.
          </Block>

          <Block title="8. Cookies e tecnologias similares">
            Utilizamos cookies essenciais para o funcionamento da plataforma, cookies de analytics para entender como o site é usado, e cookies de marketing quando aplicável. Você poderá gerenciar suas preferências por meio de um painel de consentimento que será disponibilizado futuramente.
          </Block>

          <Block title="9. Segurança">
            Adotamos medidas técnicas e administrativas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Não garantimos segurança absoluta, pois nenhum sistema é completamente infalível, mas nos comprometemos a agir com diligência.
          </Block>

          <Block title="10. Retenção de dados">
            Mantemos seus dados pelo tempo necessário para a prestação do serviço, cumprimento de obrigações legais, segurança, prevenção a fraudes e exercício de direitos. Após esse período, os dados são eliminados ou anonimizados.
          </Block>

          <Block title="11. Seus direitos (LGPD)">
            Você tem direito a: confirmar se tratamos seus dados; acessar seus dados; corrigir dados incompletos ou desatualizados; solicitar a eliminação de dados desnecessários; solicitar anonimização ou portabilidade; saber com quem compartilhamos seus dados; revogar consentimento; e se opor ao tratamento em determinadas situações. Para exercer seus direitos, entre em contato pelo e-mail: <strong>{'{{EMAIL_PRIVACIDADE}}'}</strong>.
          </Block>

          <Block title="12. Menores de idade">
            O CHAPA Delivery não é direcionado a menores desacompanhados. Pedidos e cadastros devem ser realizados por pessoas maiores de 18 anos ou por responsáveis legais.
          </Block>

          <Block title="13. Alterações nesta política">
            Esta política pode ser atualizada periodicamente. A versão vigente estará sempre disponível neste endereço. Mudanças relevantes serão comunicadas na plataforma.
          </Block>

          <Block title="14. Fale conosco sobre privacidade">
            Para dúvidas, solicitações ou exercício de direitos relacionados a esta política, entre em contato: <strong>{'{{EMAIL_PRIVACIDADE}}'}</strong>
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
