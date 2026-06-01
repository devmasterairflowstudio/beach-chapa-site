import type { Metadata } from 'next'
import { FaqJsonLd } from '@/components/seo/FaqJsonLd'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Dúvidas frequentes — CHAPA Delivery',
  description: 'Tire suas dúvidas sobre pedidos na praia, pagamentos, localização, vendedores e cadastro no CHAPA Delivery.',
}

const faqCategories = [
  {
    category: 'Para clientes',
    faqs: [
      { question: 'O que é o CHAPA Delivery?', answer: 'O CHAPA Delivery é uma plataforma que conecta você a vendedores próximos na praia. Você informa onde está, escolhe o que quer, confirma o pedido e acompanha o status pelo celular.' },
      { question: 'Como faço um pedido na praia?', answer: 'Acesse o CHAPA pelo celular, informe seu ponto de referência na praia, escolha um vendedor próximo, selecione os produtos e finalize o pagamento. O vendedor vai até você.' },
      { question: 'Preciso baixar algum aplicativo?', answer: 'Não. O CHAPA funciona direto pelo navegador do celular. É só acessar o site e começar a pedir.' },
      { question: 'Como o vendedor me encontra?', answer: 'Você informa seu ponto de referência — número do posto, nome da barraca, guarda-sol, ou compartilha sua localização. O vendedor recebe essa informação e vai até você.' },
      { question: 'Posso informar um ponto de referência?', answer: 'Sim. Você pode descrever onde está em texto, como "Posto 9, guarda-sol azul, barraca 14". Não é obrigatório ativar o GPS.' },
      { question: 'Quais produtos posso pedir?', answer: 'Depende dos vendedores disponíveis na sua praia. Geralmente: água de coco, açaí, bebidas geladas, petiscos, porções, sorvete, milho, cadeiras e guarda-sóis.' },
      { question: 'O CHAPA já funciona na minha praia?', answer: 'Atualmente disponível em Praia do Engenho e Juquehy (São Sebastião, SP). Mais praias em ativação. Acesse a página de praias para ver o mapa completo.' },
      { question: 'Como acompanho meu pedido?', answer: 'Após confirmar o pedido, você recebe atualizações de status diretamente na plataforma.' },
    ],
  },
  {
    category: 'Pagamentos',
    faqs: [
      { question: 'Posso pagar por Pix?', answer: 'Sim. O Pix é uma das formas de pagamento aceitas. Rápido, sem troco e sem precisar de dinheiro.' },
      { question: 'Posso pagar com cartão?', answer: 'Sim, dependendo da forma de pagamento habilitada pelo vendedor e pela plataforma. Cartão de crédito e débito podem estar disponíveis.' },
      { question: 'Meus dados de pagamento ficam seguros?', answer: 'Sim. Dados de cartão são tratados por processadores de pagamento especializados e não ficam armazenados diretamente pelo CHAPA. Você pode ler mais na nossa Política de Privacidade.' },
      { question: 'Como funciona o reembolso?', answer: 'Em caso de problema com o pedido, entre em contato com o suporte. O reembolso depende da análise do caso e do meio de pagamento utilizado.' },
    ],
  },
  {
    category: 'Para vendedores',
    faqs: [
      { question: 'Quem pode vender pelo CHAPA?', answer: 'Qualquer vendedor que atua na praia: ambulantes, barracas, quiosques, restaurantes da orla, vendedores de bebidas, açaí, aluguéis de equipamentos e mais.' },
      { question: 'Como faço meu cadastro?', answer: `Acesse ${siteConfig.vendorSignupUrl}, preencha seus dados, monte seu cardápio e comece a receber pedidos.` },
      { question: 'Preciso ter CNPJ?', answer: 'Não necessariamente para o cadastro inicial. Verifique as condições na página de cadastro.' },
      { question: 'Como recebo os pedidos?', answer: 'Os pedidos chegam direto no seu celular, com os itens solicitados e a localização do cliente.' },
      { question: 'Posso controlar meu cardápio?', answer: 'Sim. Você pode adicionar, editar e remover produtos pelo painel do vendedor a qualquer momento.' },
      { question: 'Posso ficar online ou offline?', answer: 'Sim. Você controla sua disponibilidade e pode pausar o recebimento de pedidos quando quiser.' },
      { question: 'Como recebo meus pagamentos?', answer: 'Os repasses seguem as regras da plataforma de pagamento integrada. Mais detalhes estão disponíveis no painel do vendedor.' },
    ],
  },
  {
    category: 'Segurança e suporte',
    faqs: [
      { question: 'Os vendedores são verificados?', answer: 'Sim. Os parceiros do CHAPA passam por um processo de cadastro e verificação antes de aparecer na plataforma.' },
      { question: 'O que acontece se meu pedido tiver problema?', answer: 'Entre em contato com o suporte pelo canal disponível na plataforma. Analisamos cada caso individualmente.' },
      { question: 'Como funciona a avaliação?', answer: 'Após receber seu pedido, você pode avaliar o vendedor. Isso ajuda a manter a qualidade da plataforma.' },
      { question: 'Como meus dados são protegidos?', answer: 'Adotamos medidas de segurança técnica e organizacional. Você pode saber mais lendo nossa Política de Privacidade.' },
    ],
  },
]

const allFaqs = faqCategories.flatMap(c => c.faqs)

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-espuma">
      <FaqJsonLd faqs={allFaqs} />
      <section className="bg-mare text-espuma pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-logo text-4xl md:text-5xl font-black mb-4">dúvidas frequentes</h1>
          <p className="text-espuma/80 text-lg">tudo o que você precisa saber sobre o CHAPA.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-10">
          {faqCategories.map(cat => (
            <div key={cat.category}>
              <h2 className="font-logo text-2xl font-bold text-tinta mb-4 pb-2 border-b border-linha">{cat.category}</h2>
              <div className="space-y-3">
                {cat.faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl border border-linha p-5">
                    <h3 className="font-semibold text-tinta mb-2 text-base">{faq.question}</h3>
                    <p className="text-tinta/60 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
