import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Sobre o CHAPA Delivery e a HERA TECHNOLOGY',
  description: 'Conheça o CHAPA Delivery, solução da HERA TECHNOLOGY criada para digitalizar a economia da praia brasileira.',
}

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-espuma">
      <section className="bg-gradient-to-br from-tinta to-mare-deep text-espuma pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-logo text-4xl md:text-6xl font-black mb-6">sobre o chapa</h1>
          <p className="text-espuma/80 text-xl leading-relaxed max-w-2xl mx-auto">
            O CHAPA DELIVERY é uma solução da HERA TECHNOLOGY criada para digitalizar a economia da praia brasileira.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-10">
          {[
            {
              title: 'nossa missão',
              body: 'Conectar pessoas que estão na praia com vendedores, ambulantes, quiosques, barracas e parceiros locais em uma experiência simples, segura e mobile-first.',
            },
            {
              title: 'o problema que resolvemos',
              body: 'Quem vai à praia quer conforto. Levantar da canga para procurar um vendedor, não ter troco, perder o pedido no grito — tudo isso atrapalha. O CHAPA elimina essa fricção.',
            },
            {
              title: 'para quem criamos',
              body: 'Para o banhista que quer coco gelado sem sair do lugar. Para o vendedor que quer mais pedidos organizados, sem depender de sorte. Para os dois ao mesmo tempo.',
            },
            {
              title: 'economia local',
              body: 'O CHAPA não é delivery de restaurante urbano. É uma ferramenta para a economia da praia — ambulantes, barracas, quiosques, vendedores independentes. Queremos fortalecer o comércio local.',
            },
            {
              title: 'tecnologia simples',
              body: 'A tecnologia do CHAPA existe para desaparecer. Você não precisa saber como ela funciona. Só precisa pedir — e receber.',
            },
            {
              title: 'hera technology',
              body: `O CHAPA DELIVERY é uma solução desenvolvida e operada pela ${siteConfig.companyName}. Nossa missão é construir tecnologia para a vida real do brasileiro.`,
            },
          ].map((block) => (
            <div key={block.title} className="bg-white rounded-2xl border border-linha p-8">
              <h2 className="font-logo text-2xl font-bold text-tinta mb-4">{block.title}</h2>
              <p className="text-tinta/70 leading-relaxed">{block.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
