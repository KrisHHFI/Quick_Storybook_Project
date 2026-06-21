import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from '../components/Select'
import { Checkbox } from '../components/Checkbox'
import { Toggle } from '../components/Toggle'

const meta = {
  title: 'Components/Form Controls',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const roleOptions = [
  { value: '', label: 'Choose a role…' },
  { value: 'admin', label: 'Admin' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Viewer' },
]

const planOptions = [
  { value: 'starter', label: 'Starter — Free' },
  { value: 'pro', label: 'Pro — $49 / mo' },
  { value: 'enterprise', label: 'Enterprise — Custom' },
]

export const SelectDefault: Story = {
  render: () => <Select label="Team role" options={roleOptions} hint="Determines what members can edit or view." />,
}

export const CheckboxDefault: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Send me product updates" defaultChecked />
      <Checkbox label="Enable email notifications" hint="Sent at most once per day." />
      <Checkbox label="Allow analytics collection" />
    </div>
  ),
}

export const ToggleDefault: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Toggle label="Dark mode" description="Switch the interface to a dark color scheme." defaultChecked />
      <Toggle label="Beta features" description="Opt in to early access features before general release." />
      <Toggle label="Two-factor authentication" description="Require a code each time you sign in." defaultChecked />
    </div>
  ),
}

export const FullFormSample: Story = {
  render: () => (
    <div className="w-full max-w-md rounded-xl2 border border-cx-ink/10 bg-white p-6 shadow-panel">
      <h3 className="mb-5 font-display text-xl text-cx-ink">Account preferences</h3>
      <div className="flex flex-col gap-5">
        <Select label="Plan" options={planOptions} />
        <div className="border-t border-cx-ink/8 pt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-cx-ink/50">Notifications</p>
          <div className="flex flex-col gap-3">
            <Toggle label="Weekly digest" description="A summary of your workspace activity." defaultChecked />
            <Toggle label="Mention alerts" description="Notify when someone mentions you." defaultChecked />
            <Toggle label="Release notes" />
          </div>
        </div>
        <div className="border-t border-cx-ink/8 pt-5">
          <Checkbox label="I agree to the terms of service" />
        </div>
      </div>
    </div>
  ),
}
