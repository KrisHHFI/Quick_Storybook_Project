type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type AvatarStatus = 'online' | 'busy' | 'offline'

type AvatarProps = {
  name: string
  src?: string
  size?: AvatarSize
  status?: AvatarStatus
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'h-6 w-6 text-[10px]',
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-lg',
  xl: 'h-20 w-20 text-2xl',
}

const statusClasses: Record<AvatarStatus, string> = {
  online: 'bg-cx-moss',
  busy: 'bg-cx-coral',
  offline: 'bg-cx-ink/30',
}

const statusDotSize: Record<AvatarSize, string> = {
  xs: 'h-1.5 w-1.5 ring-1',
  sm: 'h-2 w-2 ring-1',
  md: 'h-2.5 w-2.5 ring-1',
  lg: 'h-3.5 w-3.5 ring-2',
  xl: 'h-4 w-4 ring-2',
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

const bgColors = [
  'bg-cx-coral/20 text-cx-coral',
  'bg-cx-moss/20 text-cx-moss',
  'bg-cx-sky/30 text-sky-700',
  'bg-amber-100 text-amber-700',
  'bg-purple-100 text-purple-700',
]

function hashColor(name: string) {
  let h = 0
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % bgColors.length
  return bgColors[h]
}

export function Avatar({ name, src, size = 'md', status }: AvatarProps) {
  return (
    <span className="relative inline-block">
      {src ? (
        <img
          src={src}
          alt={name}
          className={`rounded-full object-cover ring-2 ring-white ${sizeClasses[size]}`}
        />
      ) : (
        <span
          className={`inline-flex items-center justify-center rounded-full font-semibold ring-2 ring-white ${sizeClasses[size]} ${hashColor(name)}`}
          aria-label={name}
        >
          {getInitials(name)}
        </span>
      )}
      {status && (
        <span
          className={`absolute bottom-0 right-0 rounded-full ring-white ${statusClasses[status]} ${statusDotSize[size]}`}
          aria-label={status}
        />
      )}
    </span>
  )
}
