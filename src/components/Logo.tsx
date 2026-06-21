type LogoProps = {
  variant?: 'mark' | 'wordmark'
  inverted?: boolean
  size?: number
}

function LogoMark({ size, inverted }: { size: number; inverted: boolean }) {
  const bg = inverted ? '#f6f2eb' : '#0b1a2f'
  const stroke = inverted ? '#0b1a2f' : '#eb6e4b'
  const rx = Math.round(size * 0.22)
  const pad = size * 0.28
  const end = size - pad
  const sw = size * 0.135

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <rect width={size} height={size} rx={rx} fill={bg} />
      <line x1={pad} y1={pad} x2={end} y2={end} stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
      <line x1={end} y1={pad} x2={pad} y2={end} stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
    </svg>
  )
}

export function Logo({ variant = 'wordmark', inverted = false, size = 40 }: LogoProps) {
  const textSize = size >= 48 ? 'text-2xl' : size >= 36 ? 'text-xl' : size >= 28 ? 'text-lg' : 'text-base'
  const textColor = inverted ? 'text-white' : 'text-cx-ink'

  if (variant === 'mark') {
    return <LogoMark size={size} inverted={inverted} />
  }

  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark size={size} inverted={inverted} />
      <span className={`font-display font-semibold tracking-tight ${textColor} ${textSize}`}>
        Company X
      </span>
    </span>
  )
}
