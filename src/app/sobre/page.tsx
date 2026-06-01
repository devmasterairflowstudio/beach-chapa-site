import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Sobre o CHAPA Delivery e a HERA TECHNOLOGY',
  description: 'Conheça o CHAPA Delivery, solução da HERA TECHNOLOGY criada para digitalizar a economia da praia brasileira.',
}

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-espuma">
      {/* Hero */}
      <section className="bg-gradient-to-br from-tinta via-mare-deep to-mare text-espuma pt-20 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-espuma/50 text-sm font-mono mb-4 uppercase tracking-widest">sobre o chapa</p>
          <h1 className="font-logo text-4xl md:text-6xl font-black mb-6 leading-tight">
            o sistema operacional<br />da praia brasileira.
          </h1>
          <p className="text-espuma/80 text-xl md:text-2xl leading-relaxed max-w-2xl">
            O CHAPA Delivery é uma solução da HERA TECHNOLOGY criada para conectar clientes, vendedores locais, ambulantes, barracas, quiosques e parceiros em uma experiência simples, digital e feita para a areia.
          </p>
        </div>
      </section>

      {/* Por que existe */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-logo text-3xl md:text-4xl font-bold text-tinta mb-8">por que o CHAPA existe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '🏖️', title: 'a praia já tem uma economia viva', body: 'Vendedores ambulantes, barracas, quiosques e parceiros locais movimentam bilhões por ano nas praias brasileiras. É uma economia real, mas ainda muito informal.' },
              { icon: '👀', title: 'os clientes já querem comprar', body: 'Quem está na areia quer coco, açaí, bebida, pastel e petisco. A demanda existe. O problema é a fricção: procurar, gritar, não ter troco, perder o pedido.' },
              { icon: '📱', title: 'faltava a camada digital', body: 'Entre quem quer comprar e quem quer vender, faltava uma solução simples, brasileira e feita para o ambiente da praia. Essa é a proposta do CHAPA.' },
              { icon: '🤝', title: 'dois lados. uma solução.', body: 'O CHAPA resolve ao mesmo tempo para o cliente que quer conforto e para o vendedor que quer mais pedidos. Sem excluir nenhum dos dois.' },
            ].map(item => (
              <div key={item.title} className="bg-espuma rounded-2xl border border-linha p-6">
                <span className="text-3xl mb-4 block" role="img" aria-hidden="true">{item.icon}</span>
                <h3 className="font-semibold text-tinta mb-2">{item.title}</h3>
                <p className="text-tinta/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que resolvemos */}
      <section className="py-20 bg-areia/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-logo text-3xl font-bold text-tinta mb-10">o que resolvemos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'encontrar vendedores próximos',
              'pedir sem sair da canga',
              'pagar digitalmente com Pix ou cartão',
              'organizar pedidos para vendedores',
              'ampliar a visibilidade dos parceiros',
              'fortalecer a economia local da praia',
            ].map(item => (
              <div key={item} className="bg-white rounded-xl border border-linha p-4 flex items-center gap-3">
                <div className="w-2 h-2 bg-brasa rounded-full shrink-0" aria-hidden="true"></div>
                <span className="text-sm text-tinta/80 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-logo text-3xl font-bold text-tinta mb-10">para quem criamos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { title: 'clientes finais', desc: 'Quem está na praia e quer pedir sem levantar da canga.', icon: '🛍️' },
              { title: 'vendedores ambulantes', desc: 'Quem vende na praia e quer mais pedidos organizados.', icon: '🧃' },
              { title: 'barracas e quiosques', desc: 'Quem tem ponto fixo e quer aparecer para clientes próximos.', icon: '⛱️' },
              { title: 'parceiros locais', desc: 'Negócios da orla que querem digitalizar o atendimento.', icon: '🤝' },
              { title: 'operadores da economia da praia', desc: 'Quem organiza, representa ou dá suporte a vendedores locais.', icon: '📋' },
            ].map(item => (
              <div key={item.title} className="bg-espuma rounded-2xl border border-linha p-6">
                <span className="text-3xl mb-3 block" role="img" aria-hidden="true">{item.icon}</span>
                <h3 className="font-semibold text-tinta mb-2">{item.title}</h3>
                <p className="text-sm text-tinta/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERA TECHNOLOGY */}
      <section className="py-20 bg-tinta text-espuma">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-logo text-3xl font-bold text-espuma mb-6">HERA TECHNOLOGY</h2>
          <p className="text-espuma/80 text-lg leading-relaxed max-w-2xl mb-6">
            A HERA TECHNOLOGY é a empresa responsável pelo desenvolvimento e operação do CHAPA Delivery. A empresa nasce com foco em produtos digitais aplicados à vida real, criando soluções simples, escaláveis e úteis para mercados com alto potencial de digitalização.
          </p>
          <div className="bg-espuma/5 border border-espuma/10 rounded-2xl p-6 max-w-2xl">
            <h3 className="font-logo text-xl font-bold text-espuma mb-3">nossa visão</h3>
            <p className="text-espuma/70 leading-relaxed">
              Digitalizar a economia da praia brasileira sem tirar dela sua identidade local, humana e popular.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brasa">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-logo text-3xl font-bold text-espuma mb-8">faça parte do chapa</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.chapa.delivery/" target="_blank" rel="noopener noreferrer" className="bg-espuma text-brasa font-bold px-8 py-4 rounded-pill inline-block hover:bg-areia transition-colors">Pedir agora</a>
            <a href={siteConfig.vendorSignupUrl} target="_blank" rel="noopener noreferrer" className="bg-espuma/10 border border-espuma/30 text-espuma font-semibold px-8 py-4 rounded-pill inline-block hover:bg-espuma/20 transition-colors">sou vendedor</a>
          </div>
        </div>
      </section>
    </div>
  )
}
