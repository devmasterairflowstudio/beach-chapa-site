const benefits = [
  { icon: '🏖️', title: 'peça sem sair da canga', desc: 'Fique deitado. Seu pedido vem até você.' },
  { icon: '📍', title: 'veja quem está perto', desc: 'Vendedores próximos com distância em tempo real.' },
  { icon: '💸', title: 'pague sem dinheiro', desc: 'Pix, cartão e link de pagamento digital.' },
  { icon: '📦', title: 'acompanhe seu pedido', desc: 'Saiba o status do pedido em tempo real.' },
  { icon: '⭐', title: 'favoritos da sua praia', desc: 'Salve seus vendedores preferidos.' },
  { icon: '✅', title: 'vendedores verificados', desc: 'Parceiros cadastrados e validados pelo CHAPA.' },
]

export function Benefits() {
  return (
    <section className="py-20 bg-espuma" aria-labelledby="benefits-heading">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 id="benefits-heading" className="font-logo text-3xl md:text-4xl font-bold text-tinta mb-3">
            menos fila. menos grito. mais praia.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white rounded-2xl p-6 border border-linha">
              <span className="text-3xl mb-4 block" role="img" aria-hidden="true">{b.icon}</span>
              <h3 className="font-semibold text-tinta mb-2">{b.title}</h3>
              <p className="text-sm text-tinta/60 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
