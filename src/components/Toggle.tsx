import { useState } from 'react'

type ToggleProps = {
  label: string
  description?: string
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
}

export function Toggle({ label, description, defaultChecked = false, onChange }: ToggleProps) {
  const [on, setOn] = useState(defaultChecked)

  function handleChange() {
    const next = !on
    setOn(next)
    onChange?.(next)
  }

  return (
    <label className="inline-flex cursor-pointer items-start gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label={label}
        onClick={handleChange}
        className={`relative mt-0.5 inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cx-sky/60 ${
          on ? 'bg-cx-coral' : 'bg-cx-ink/20'
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 translate-x-0 rounded-full bg-white shadow-sm ring-0 transition-transform ${
            on ? 'translate-x-4' : 'translate-x-0'
          }`}
        />
      </button>
      <span className="select-none">
        <span className="block text-sm font-medium text-cx-ink">{label}</span>
        {description && <span className="block text-xs text-cx-ink/60">{description}</span>}
      </span>
    </label>
  )
}
