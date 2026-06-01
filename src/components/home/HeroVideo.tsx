// Substituir por vídeo licenciado antes da publicação oficial. Ver megapixl.com para licenciamento.

export function HeroVideo() {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-mare/10 border border-linha" aria-label="Vídeo ilustrativo da praia com o CHAPA Delivery">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/chapa-praia-hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/chapa-praia-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-tinta/40 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-espuma font-logo text-sm md:text-base font-semibold leading-snug drop-shadow-sm">
          vendedor perto. pedido no celular. entrega na areia.
        </p>
      </div>
    </div>
  )
}
