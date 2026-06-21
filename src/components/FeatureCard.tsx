type FeatureCardProps = {
  title: string
  description: string
  eyebrow?: string
}

export function FeatureCard({ title, description, eyebrow = 'Feature' }: FeatureCardProps) {
  return (
    <article className="max-w-sm rounded-xl2 border border-cx-ink/10 bg-white p-6 shadow-panel">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cx-moss">{eyebrow}</p>
      <h3 className="font-display text-2xl text-cx-ink">{title}</h3>
      <p className="mt-3 text-cx-ink/75">{description}</p>
    </article>
  )
}
