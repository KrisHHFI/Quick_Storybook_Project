type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'
type BadgeSize = 'sm' | 'md'

type BadgeProps = {
  label: string
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-cx-coral/15 text-cx-coral ring-cx-coral/25',
  success: 'bg-cx-moss/15 text-cx-moss ring-cx-moss/25',
  warning: 'bg-amber-50 text-amber-700 ring-amber-300/50',
  danger: 'bg-red-50 text-red-600 ring-red-300/50',
  info: 'bg-cx-sky/20 text-sky-700 ring-cx-sky/35',
  neutral: 'bg-cx-ink/8 text-cx-ink/70 ring-cx-ink/15',
}

const dotColors: Record<BadgeVariant, string> = {
  default: 'bg-cx-coral',
  success: 'bg-cx-moss',
  warning: 'bg-amber-500',
  danger: 'bg-red-500',
  info: 'bg-sky-500',
  neutral: 'bg-cx-ink/40',
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
}

export function Badge({ label, variant = 'default', size = 'md', dot = false }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold ring-1 ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {dot && <span className={`inline-block h-1.5 w-1.5 rounded-full ${dotColors[variant]}`} />}
      {label}
    </span>
  )
}
