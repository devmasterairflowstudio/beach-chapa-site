const badgeVariants: Record<string, string> = {
  pix: 'bg-mata/10 text-mata border border-mata/20',
  verificado: 'bg-mare/10 text-mare border border-mare/20',
  'ao vivo': 'bg-brasa/10 text-brasa border border-brasa/20',
  rápido: 'bg-sol/20 text-tinta border border-sol/30',
  promo: 'bg-brasa text-espuma',
  'entrega na areia': 'bg-areia text-tinta border border-linha',
  default: 'bg-areia text-tinta border border-linha',
}

export function Badge({ label }: { label: string }) {
  const cls = badgeVariants[label.toLowerCase()] ?? badgeVariants.default
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-pill text-xs font-mono font-medium whitespace-nowrap ${cls}`}>
      {label}
    </span>
  )
}
