import type { InputHTMLAttributes } from 'react'

type InputFieldProps = {
  label: string
  hint?: string
} & InputHTMLAttributes<HTMLInputElement>

export function InputField({ label, hint, id, className = '', ...props }: InputFieldProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <label className="flex w-full max-w-md flex-col gap-2" htmlFor={inputId}>
      <span className="text-sm font-semibold text-cx-ink">{label}</span>
      <input
        id={inputId}
        className={`w-full rounded-xl border border-cx-ink/20 bg-white px-4 py-3 text-cx-ink outline-none transition placeholder:text-cx-ink/45 focus:border-cx-sky focus:ring-2 focus:ring-cx-sky/40 ${className}`}
        {...props}
      />
      {hint ? <span className="text-xs text-cx-ink/60">{hint}</span> : null}
    </label>
  )
}
