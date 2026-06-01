// Substituir métricas por dados reais antes da publicação oficial.
const metrics = [
  { value: '300+', label: 'vendedores em ativação', icon: '🧑‍🤝‍🧑' },
  { value: '12', label: 'praias mapeadas', icon: '🗺️' },
  { value: '100%', label: 'pedidos com localização', icon: '📍' },
  { value: 'Pix', label: 'pagamento digital', icon: '💸' },
]

export function SocialProof() {
  return (
    <section className="py-16 bg-areia/40 border-y border-linha" aria-labelledby="proof-heading">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="proof-heading" className="font-logo text-2xl md:text-3xl font-bold text-tinta text-center mb-10">
          a praia já está chamando o chapa.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <span className="text-3xl mb-2 block" role="img" aria-hidden="true">{m.icon}</span>
              <span className="font-mono text-3xl md:text-4xl font-bold text-mare block">{m.value}</span>
              <span className="text-sm text-tinta/60 mt-1 block">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
