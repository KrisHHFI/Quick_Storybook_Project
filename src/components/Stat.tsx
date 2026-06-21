type StatProps = {
  label: string
  value: string
  trend?: string
  trendUp?: boolean
}

export function Stat({ label, value, trend, trendUp }: StatProps) {
  return (
    <article className="flex flex-col gap-1 rounded-xl2 border border-cx-ink/10 bg-white p-6 shadow-panel">
      <p className="text-sm font-medium text-cx-ink/60">{label}</p>
      <p className="font-display text-4xl text-cx-ink">{value}</p>
      {trend && (
        <p className={`flex items-center gap-1 text-sm font-semibold ${trendUp ? 'text-cx-moss' : 'text-cx-coral'}`}>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {trendUp
              ? <path d="M12 19V5m0 0-7 7m7-7 7 7" />
              : <path d="M12 5v14m0 0 7-7m-7 7-7-7" />
            }
          </svg>
          {trend}
        </p>
      )}
    </article>
  )
}
