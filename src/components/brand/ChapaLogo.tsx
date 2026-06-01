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

  // C abre à direita — arco de ~50° (baixo-direita) passando pelo lado esquerdo até ~-50° (cima-direita)
  // viewBox 100×100, centro 50 50, raio 33, stroke 17
  const cx = 50, cy = 50, r = 33
  const angleRad = (50 * Math.PI) / 180
  const x = cx + r * Math.cos(angleRad)
  const yTop = cy - r * Math.sin(angleRad)  // abertura superior
  const yBot = cy + r * Math.sin(angleRad)  // abertura inferior

  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="CHAPA Delivery">
      <svg width={s.mark} height={s.mark} viewBox="0 0 100 100" fill="none" aria-hidden="true">
        {/* C — arco abrindo à direita, sentido horário do ponto inferior ao superior */}
        <path
          d={`M ${x.toFixed(1)} ${yBot.toFixed(1)} A ${r} ${r} 0 1 0 ${x.toFixed(1)} ${yTop.toFixed(1)}`}
          stroke={markColor}
          strokeWidth="17"
          strokeLinecap="round"
          fill="none"
        />
        {/* Ponto/sol em Brasa — dentro da abertura do C */}
        <circle cx="67" cy="50" r="9" fill={dotColor} />
      </svg>
      {variant !== 'markOnly' && (
        <span className={`font-logo font-bold tracking-tight leading-none ${s.text} ${textColor}`}>
          chapa<span style={{ color: dotColor }}>.</span>
        </span>
      )}
    </div>
  )
}
