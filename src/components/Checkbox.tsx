import type { InputHTMLAttributes } from 'react'

type CheckboxProps = {
  label: string
  hint?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export function Checkbox({ label, hint, id, className = '', ...props }: CheckboxProps) {
  const inputId = id ?? `cb-${label.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <label className="inline-flex cursor-pointer gap-3" htmlFor={inputId}>
      <input
        type="checkbox"
        id={inputId}
        className={`mt-0.5 h-5 w-5 shrink-0 cursor-pointer appearance-none rounded border-2 border-cx-ink/25 bg-white transition checked:border-cx-coral checked:bg-cx-coral focus-visible:ring-2 focus-visible:ring-cx-sky/40 ${className}`}
        style={{
          backgroundImage: 'none',
        }}
        {...props}
      />
      <span className="select-none">
        <span className="block text-sm font-medium text-cx-ink">{label}</span>
        {hint && <span className="block text-xs text-cx-ink/60">{hint}</span>}
      </span>
    </label>
  )
}
