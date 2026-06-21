type AlertVariant = 'info' | 'success' | 'warning' | 'error'

type AlertProps = {
  title?: string
  message: string
  variant?: AlertVariant
  onDismiss?: () => void
}

const config: Record<AlertVariant, { container: string; icon: string; iconPath: string }> = {
  info: {
    container: 'bg-cx-sky/15 border-cx-sky/40 text-sky-800',
    icon: 'text-sky-500',
    iconPath: 'M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2Zm0 9v5m0-8v.5',
  },
  success: {
    container: 'bg-cx-moss/10 border-cx-moss/30 text-cx-moss',
    icon: 'text-cx-moss',
    iconPath: 'M20 6 9 17l-5-5',
  },
  warning: {
    container: 'bg-amber-50 border-amber-300 text-amber-800',
    icon: 'text-amber-500',
    iconPath: 'M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z',
  },
  error: {
    container: 'bg-red-50 border-red-300 text-red-800',
    icon: 'text-red-500',
    iconPath: 'M18 6 6 18M6 6l12 12',
  },
}

export function Alert({ title, message, variant = 'info', onDismiss }: AlertProps) {
  const { container, icon, iconPath } = config[variant]

  return (
    <div
      role="alert"
      className={`flex w-full max-w-lg gap-3 rounded-xl border p-4 ${container}`}
    >
      <svg className={`mt-0.5 h-5 w-5 shrink-0 ${icon}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={iconPath} />
      </svg>
      <div className="flex-1">
        {title && <p className="mb-0.5 font-semibold">{title}</p>}
        <p className="text-sm opacity-90">{message}</p>
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="ml-1 shrink-0 opacity-60 transition hover:opacity-100"
          aria-label="Dismiss"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}
