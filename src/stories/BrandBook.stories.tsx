import type { Meta, StoryObj } from '@storybook/react-vite'
import { Logo } from '../components/Logo'

const meta = {
  title: 'Brand/Brand Book',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => (
    <div className="min-h-screen bg-cx-sand px-6 py-10 text-cx-ink md:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 rounded-xl2 border border-cx-ink/10 bg-white p-8 shadow-panel md:p-10">
          <div className="mb-5 flex items-center gap-5">
            <Logo size={56} variant="mark" />
            <Logo size={56} variant="mark" inverted />
            <Logo size={40} variant="wordmark" />
          </div>
          <h1 className="text-4xl md:text-6xl">Brand Book</h1>
          <p className="mt-4 max-w-2xl text-lg text-cx-ink/75">
            A practical visual system for a modern website application: calm structure,
            energetic highlights, and clear typography.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl">Logo</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-cx-ink/10 bg-white p-6 shadow-panel">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cx-moss">On light</p>
              <div className="flex flex-wrap items-end gap-6">
                <Logo size={28} variant="wordmark" />
                <Logo size={40} variant="wordmark" />
                <Logo size={48} variant="wordmark" />
                <Logo size={36} variant="mark" />
              </div>
            </article>
            <article className="rounded-xl bg-cx-ink p-6 shadow-panel">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cx-sky">On dark</p>
              <div className="flex flex-wrap items-end gap-6">
                <Logo size={28} variant="wordmark" inverted />
                <Logo size={40} variant="wordmark" inverted />
                <Logo size={48} variant="wordmark" inverted />
                <Logo size={36} variant="mark" inverted />
              </div>
            </article>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl">Color Palette</h2>
          <div className="grid gap-4 md:grid-cols-5">
            {[
              { name: 'CX Ink', hex: '#0b1a2f', cls: 'bg-cx-ink text-white' },
              { name: 'CX Moss', hex: '#355f4f', cls: 'bg-cx-moss text-white' },
              { name: 'CX Sand', hex: '#f6f2eb', cls: 'bg-cx-sand text-cx-ink' },
              { name: 'CX Coral', hex: '#eb6e4b', cls: 'bg-cx-coral text-white' },
              { name: 'CX Sky', hex: '#8ecae6', cls: 'bg-cx-sky text-cx-ink' },
            ].map((token) => (
              <article key={token.name} className="overflow-hidden rounded-xl border border-cx-ink/10 bg-white shadow-panel">
                <div className={`h-24 w-full ${token.cls}`} />
                <div className="p-4">
                  <p className="font-semibold">{token.name}</p>
                  <p className="text-sm text-cx-ink/65">{token.hex}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl2 border border-cx-ink/10 bg-white p-6 shadow-panel">
            <h2 className="mb-4 text-2xl">Typography</h2>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cx-moss">Display: Space Grotesk</p>
            <p className="mt-2 font-display text-4xl">Intentional Clarity</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cx-moss">Body: Manrope</p>
            <p className="mt-2 text-base text-cx-ink/75">
              Company X speaks in concise, human language with enough warmth to feel approachable.
            </p>
          </article>

          <article className="rounded-xl2 border border-cx-ink/10 bg-white p-6 shadow-panel">
            <h2 className="mb-4 text-2xl">Voice and UI Principles</h2>
            <ul className="space-y-3 text-cx-ink/80">
              <li>Lead with outcomes, not technical detail.</li>
              <li>Use contrast to guide attention, not to decorate.</li>
              <li>Prefer rounded geometry and soft shadows for trust.</li>
              <li>Keep interaction labels action-oriented and short.</li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  ),
}
