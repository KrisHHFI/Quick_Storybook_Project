type SectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center' }: SectionHeaderProps) {
  const alignClasses = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-3 ${alignClasses}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cx-moss">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl text-cx-ink md:text-5xl">{title}</h2>
      {subtitle && (
        <p className="max-w-xl text-lg text-cx-ink/70">{subtitle}</p>
      )}
    </div>
  )
}
