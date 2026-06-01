const steps = [
  { num: '01', title: 'Informe onde você está', desc: 'Diga seu ponto de referência na praia ou compartilhe sua localização.', icon: '📍' },
  { num: '02', title: 'Escolha um Chapa perto', desc: 'Veja vendedores próximos com produtos, preços e distância em tempo real.', icon: '👀' },
  { num: '03', title: 'Peça e pague pelo celular', desc: 'Faça seu pedido e pague com Pix ou cartão sem precisar de dinheiro.', icon: '📱' },
  { num: '04', title: 'Receba na areia', desc: 'O vendedor vai até você. Sem fila, sem grito, sem sair da canga.', icon: '🏖️' },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-areia/30" aria-labelledby="how-heading">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 id="how-heading" className="font-logo text-3xl md:text-4xl font-bold text-tinta mb-3">
            pediu. pagou. chegou.
          </h2>
          <p className="text-tinta/60 text-lg">quatro passos e você está servido.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-linha to-transparent z-0" aria-hidden="true" />
              )}
              <div className="bg-white rounded-2xl p-6 border border-linha shadow-sm relative z-10 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl" role="img" aria-hidden="true">{step.icon}</span>
                  <span className="font-mono text-xs text-tinta/30 font-medium">{step.num}</span>
                </div>
                <h3 className="font-semibold text-tinta text-base mb-2">{step.title}</h3>
                <p className="text-sm text-tinta/60 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
