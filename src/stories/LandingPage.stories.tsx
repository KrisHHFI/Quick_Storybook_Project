import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../components/Button'
import { FeatureCard } from '../components/FeatureCard'
import { InputField } from '../components/InputField'
import { Navbar } from '../components/Navbar'
import { Badge } from '../components/Badge'
import { Stat } from '../components/Stat'
import { Avatar } from '../components/Avatar'
import { SectionHeader } from '../components/SectionHeader'

const SOCIAL_PROOF = ['Acme Corp', 'Northlight', 'Vertex AI', 'Cloudpeak', 'Strata Co', 'Monolith']

const TESTIMONIALS = [
  { quote: 'Company X cut our deployment cycle in half. The audit trail alone saved us two compliance headaches.', name: 'Priya Mehta', role: 'Head of Engineering, Northlight' },
  { quote: 'We finally have a single source of truth for all customer-facing workflows. Onboarding new team members is a joy.', name: 'Jake Torres', role: 'VP Product, Acme Corp' },
  { quote: 'The analytics surfaced patterns we had been guessing at for months. Immediate ROI on day one.', name: 'Lin Wei', role: 'Director of Operations, Strata Co' },
]

function LandingPagePreview() {
  return (
    <div className="min-h-screen bg-cx-sand text-cx-ink">
      {/* Sticky nav */}
      <div className="flex justify-center px-4 py-6 md:px-10">
        <Navbar
          links={[
            { label: 'Platform', active: true },
            { label: 'Use Cases' },
            { label: 'Pricing' },
            { label: 'About' },
          ]}
          ctaLabel="Get Started"
        />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-8 md:px-10">
        <div className="grid gap-6 rounded-xl2 border border-cx-ink/10 bg-white p-8 shadow-panel md:grid-cols-[1.3fr_1fr] md:p-10">
          <div>
            <Badge label="Now in GA — v3.0" variant="success" dot />
            <h1 className="mt-4 text-4xl leading-tight md:text-6xl">
              Move faster with fewer handoffs.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-cx-ink/75">
              Company X helps teams ship customer-facing workflows that are measurable,
              compliant, and easier to maintain.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button label="Start free" variant="primary" size="lg" />
              <Button label="See product demo" variant="ghost" size="lg" />
            </div>
            <div className="mt-6 flex items-center gap-2">
              <div className="flex">
                {['Priya M', 'Jake T', 'Lin W', 'Sam R'].map((n, i) => (
                  <span key={n} className="-ml-2 first:ml-0" style={{ zIndex: 4 - i }}>
                    <Avatar name={n} size="sm" />
                  </span>
                ))}
              </div>
              <p className="text-sm text-cx-ink/65">Trusted by <strong className="text-cx-ink">12,000+</strong> teams worldwide</p>
            </div>
          </div>

          <div className="rounded-xl bg-cx-ink p-5 text-white md:p-6">
            <h2 className="text-2xl">Book a live walkthrough</h2>
            <p className="mt-2 text-white/75">Meet the team and evaluate fit in 30 minutes.</p>
            <div className="mt-5 space-y-3">
              <InputField label="Work email" placeholder="you@company.com" className="bg-white text-cx-ink" />
              <InputField label="Company size" placeholder="e.g. 50–200 people" className="bg-white text-cx-ink" />
              <Button label="Request demo" variant="primary" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-cx-ink/8 bg-white/60 px-4 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cx-ink/45 md:mr-4">Trusted by</p>
          {SOCIAL_PROOF.map((name) => (
            <span key={name} className="font-display font-semibold text-cx-ink/50">{name}</span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-10">
        <SectionHeader
          eyebrow="By the numbers"
          title="Results teams actually measure."
          subtitle="Company X customers consistently report faster cycles and clearer accountability."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Stat label="Active customers" value="12,400+" trend="18% this month" trendUp />
          <Stat label="Uptime SLA" value="99.98%" trend="0.01% better YoY" trendUp />
          <Stat label="Avg. deploy time" value="4.2 min" trend="12% faster" trendUp />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-4 pb-12 md:px-10">
        <SectionHeader
          eyebrow="Platform"
          title="Everything in one governed place."
          align="left"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <FeatureCard eyebrow="Operations" title="One source of truth" description="Track critical workflows and owners without spreadsheet archaeology." />
          <FeatureCard eyebrow="Insights" title="Meaningful analytics" description="Measure feature adoption and customer outcomes in real time." />
          <FeatureCard eyebrow="Scale" title="Reusable patterns" description="Ship reusable templates that reduce setup time for every new team." />
          <FeatureCard eyebrow="Compliance" title="Built-in audit trails" description="Every action is logged and attributable — no additional tooling required." />
          <FeatureCard eyebrow="Integrations" title="Connect your stack" description="Native connectors for Slack, Linear, GitHub, and 40+ tools your team already uses." />
          <FeatureCard eyebrow="Access" title="Policy-first permissions" description="Define roles and boundaries that travel with workflows, not settings pages." />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cx-ink px-4 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Customer stories"
            title="What teams say."
            subtitle="From early-stage startups to enterprise product orgs."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="text-white/85">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-5 flex items-center gap-3">
                  <Avatar name={t.name} size="sm" />
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/55">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mx-auto max-w-6xl px-4 py-14 text-center md:px-10">
        <SectionHeader
          eyebrow="Get started today"
          title="Ready to ship faster?"
          subtitle="Set up your workspace in minutes. No credit card required."
        />
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button label="Create free account" variant="primary" size="lg" />
          <Button label="Talk to sales" variant="secondary" size="lg" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cx-ink/10 px-4 py-8 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <span className="text-xs text-cx-ink/45">&copy; 2026 Company X. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

const meta = {
  title: 'Pages/Landing Page',
  component: LandingPagePreview,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LandingPagePreview>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
