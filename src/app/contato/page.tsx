import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato e suporte — CHAPA Delivery',
  description: 'Fale com o CHAPA Delivery para suporte, parcerias, vendedores e atendimento.',
}

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-espuma">
      <section className="bg-mare text-espuma pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-logo text-4xl md:text-5xl font-black mb-4">fale com a gente</h1>
          <p className="text-espuma/80 text-lg">suporte, parcerias, imprensa ou só um oi.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {[
              { icon: '📧', title: 'e-mail', desc: '{{EMAIL_SUPORTE}}', note: 'suporte e atendimento' },
              { icon: '💬', title: 'whatsapp', desc: '{{WHATSAPP_SUPORTE}}', note: 'atendimento rápido' },
              { icon: '🏢', title: 'empresa', desc: 'HERA TECHNOLOGY', note: '{{ENDERECO_HERA}}' },
              { icon: '🤝', title: 'parcerias', desc: 'seja um parceiro chapa', note: 'vendedores, barracas, quiosques' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-linha p-6">
                <span className="text-3xl mb-3 block" role="img" aria-hidden="true">{item.icon}</span>
                <h2 className="font-semibold text-tinta mb-1">{item.title}</h2>
                <p className="text-tinta/70 text-sm font-mono">{item.desc}</p>
                <p className="text-tinta/40 text-xs mt-1">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="bg-areia/40 rounded-2xl border border-linha p-8">
            <h2 className="font-logo text-2xl font-bold text-tinta mb-6">envie uma mensagem</h2>
            <form className="space-y-4" aria-label="Formulário de contato">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-tinta/70 mb-1">nome</label>
                <input id="name" type="text" className="w-full border border-linha rounded-xl px-4 py-3 bg-white text-tinta placeholder-tinta/30 outline-none focus:ring-2 focus:ring-mare/30 text-sm" placeholder="seu nome" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-tinta/70 mb-1">e-mail</label>
                <input id="email" type="email" className="w-full border border-linha rounded-xl px-4 py-3 bg-white text-tinta placeholder-tinta/30 outline-none focus:ring-2 focus:ring-mare/30 text-sm" placeholder="seu@email.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-tinta/70 mb-1">assunto</label>
                <select id="subject" className="w-full border border-linha rounded-xl px-4 py-3 bg-white text-tinta outline-none focus:ring-2 focus:ring-mare/30 text-sm">
                  <option value="">selecione</option>
                  <option value="suporte">suporte ao cliente</option>
                  <option value="vendedor">quero ser vendedor</option>
                  <option value="parceria">parceria comercial</option>
                  <option value="imprensa">imprensa</option>
                  <option value="outro">outro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-tinta/70 mb-1">mensagem</label>
                <textarea id="message" rows={5} className="w-full border border-linha rounded-xl px-4 py-3 bg-white text-tinta placeholder-tinta/30 outline-none focus:ring-2 focus:ring-mare/30 text-sm resize-none" placeholder="como podemos ajudar?" />
              </div>
              <button type="submit" className="w-full bg-mare hover:bg-mare-deep text-espuma font-semibold py-4 rounded-xl transition-colors">
                enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
