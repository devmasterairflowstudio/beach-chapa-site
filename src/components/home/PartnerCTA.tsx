import { siteConfig } from '@/config/site'
import Link from 'next/link'

export function PartnerCTA() {
  return (
    <section className="py-20 bg-mare" aria-labelledby="partner-heading">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 id="partner-heading" className="font-logo text-3xl md:text-5xl font-bold text-espuma mb-4">
          vende na praia? seja chapa.
        </h2>
        <p className="text-espuma/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Cadastre seu negócio, receba pedidos direto no celular e apareça para quem já está na areia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.vendorSignupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brasa hover:bg-brasa-deep text-espuma font-semibold px-8 py-4 rounded-pill text-base transition-colors inline-block"
          >
            quero vender pelo CHAPA
          </a>
          <Link
            href="/vendedores"
            className="bg-espuma/10 hover:bg-espuma/20 text-espuma font-semibold px-8 py-4 rounded-pill text-base transition-colors border border-espuma/20 inline-block"
          >
            ver como funciona para vendedores
          </Link>
        </div>
      </div>
    </section>
  )
}
