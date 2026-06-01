interface ChapaLogoProps {
  variant?: 'default' | 'markOnly' | 'inverse'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = { sm: { mark: 24, text: 'text-base' }, md: { mark: 32, text: 'text-xl' }, lg: { mark: 48, text: 'text-3xl' } }

export function ChapaLogo({ variant = 'default', size = 'md', className = '' }: ChapaLogoProps) {
  const s = sizes[size]
  const isInverse = variant === 'inverse'
  const markColor = isInverse ? '#FBF8F2' : '#0E5E78'
  const dotColor = '#E15A35'
  const textColor = isInverse ? 'text-espuma' : 'text-tinta'

  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="CHAPA Delivery">
      <svg width={s.mark} height={s.mark} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        {/* C aberto em Maré */}
        <path d="M26 8C23.5 5.5 20 4 16 4C8.268 4 2 10.268 2 18C2 25.732 8.268 32 16 32C20 32 23.5 30.5 26 28" stroke={markColor} strokeWidth="4" strokeLinecap="round" fill="none"/>
        {/* Ponto/sol em Brasa */}
        <circle cx="27" cy="6" r="4" fill={dotColor}/>
      </svg>
      {variant !== 'markOnly' && (
        <span className={`font-logo font-bold tracking-tight leading-none ${s.text} ${textColor}`}>
          chapa<span style={{ color: dotColor }}>.</span>
        </span>
      )}
    </div>
  )
}
