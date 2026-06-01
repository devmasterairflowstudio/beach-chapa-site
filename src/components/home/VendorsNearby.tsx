import { mockVendors } from '@/data/vendors'
import { Badge } from '@/components/ui/Badge'

export function VendorsNearby() {
  return (
    <section className="py-20 bg-white" aria-labelledby="vendors-heading">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <h2 id="vendors-heading" className="font-logo text-3xl md:text-4xl font-bold text-tinta">
            tem chapa por perto.
          </h2>
          <span className="text-tinta/40 text-sm hidden md:block">exemplo de vendedores</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockVendors.map((v) => (
            <article key={v.id} className="bg-espuma rounded-2xl border border-linha p-5 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col gap-3">
              <div className="flex-1">
                <h3 className="font-semibold text-tinta text-base mb-0.5">{v.name}</h3>
                <p className="text-sm text-tinta/50">{v.vendor}</p>
                <p className="text-xs text-tinta/40 mt-1">{v.location}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-mare">{v.price}</span>
                <span className="font-mono text-xs text-tinta/40 bg-areia px-2 py-1 rounded-pill">{v.distance}</span>
              </div>

              <div className="flex flex-wrap gap-1">
                {v.badges.map((badge) => (
                  <Badge key={badge} label={badge} />
                ))}
              </div>

              <a
                href="https://app.chapa.delivery/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-mare hover:bg-mare-deep text-espuma text-sm font-semibold py-2.5 rounded-xl transition-colors block text-center"
              >
                Pedir agora
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
