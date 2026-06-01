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
      {/* Marca oficial do brand book: M 158 60 A 60 60 0 1 0 158 140, viewBox 200×200 */}
      <svg width={s.mark} height={s.mark} viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <path
          d="M 158 60 A 60 60 0 1 0 158 140"
          fill="none"
          stroke={markColor}
          strokeWidth="30"
          strokeLinecap="round"
        />
        <circle cx="128" cy="100" r="13" fill={dotColor} />
      </svg>
      {variant !== 'markOnly' && (
        <span className={`font-logo font-bold tracking-tight leading-none ${s.text} ${textColor}`}>
          chapa<span style={{ color: dotColor }}>.</span>
        </span>
      )}
    </div>
  )
}
