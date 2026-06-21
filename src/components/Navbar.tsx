import { useState } from 'react'
import { Button } from './Button'
import { Logo } from './Logo'

type NavLink = { label: string; active?: boolean }

type NavbarProps = {
  links: (string | NavLink)[]
  ctaLabel?: string
}

function normalise(link: string | NavLink): NavLink {
  return typeof link === 'string' ? { label: link } : link
}

export function Navbar({ links, ctaLabel = 'Get Started' }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="w-full max-w-5xl">
      {/* Main bar */}
      <div className="flex items-center justify-between gap-4 rounded-full border border-cx-ink/10 bg-white/90 px-4 py-3 shadow-panel backdrop-blur md:px-6">
        <Logo size={32} variant="wordmark" />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((raw) => {
            const { label, active } = normalise(raw)
            return (
              <li key={label}>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className={`group relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-150
                    ${active
                      ? 'text-cx-ink'
                      : 'text-cx-ink/55 hover:text-cx-ink'
                    }`}
                >
                  {/* Hover pill background */}
                  <span className={`absolute inset-0 rounded-full transition-opacity duration-150
                    ${active ? 'bg-cx-ink/6 opacity-100' : 'bg-cx-ink/5 opacity-0 group-hover:opacity-100'}`}
                  />
                  <span className="relative">{label}</span>
                  {/* Active dot */}
                  {active && (
                    <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cx-coral" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button label={ctaLabel} variant="secondary" size="sm" />

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-cx-ink/60 transition hover:bg-cx-ink/6 hover:text-cx-ink md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="mt-2 rounded-2xl border border-cx-ink/10 bg-white/95 px-2 py-2 shadow-panel backdrop-blur md:hidden">
          <ul className="flex flex-col">
            {links.map((raw) => {
              const { label, active } = normalise(raw)
              return (
                <li key={label}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors
                      ${active ? 'bg-cx-ink/6 text-cx-ink' : 'text-cx-ink/60 hover:bg-cx-ink/5 hover:text-cx-ink'}`}
                  >
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-cx-coral" />}
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}
