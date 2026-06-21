import type { SelectHTMLAttributes } from 'react'

type SelectOption = { value: string; label: string }

type SelectProps = {
  label: string
  options: SelectOption[]
  hint?: string
} & SelectHTMLAttributes<HTMLSelectElement>

export function Select({ label, options, hint, id, className = '', ...props }: SelectProps) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <label className="flex w-full max-w-md flex-col gap-2" htmlFor={selectId}>
      <span className="text-sm font-semibold text-cx-ink">{label}</span>
      <div className="relative">
        <select
          id={selectId}
          className={`w-full appearance-none rounded-xl border border-cx-ink/20 bg-white px-4 py-3 pr-10 text-cx-ink outline-none transition focus:border-cx-sky focus:ring-2 focus:ring-cx-sky/40 ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cx-ink/50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {hint && <span className="text-xs text-cx-ink/60">{hint}</span>}
    </label>
  )
}
