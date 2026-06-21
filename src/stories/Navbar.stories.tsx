import type { Meta, StoryObj } from '@storybook/react-vite'
import { Navbar } from '../components/Navbar'

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="min-h-56 bg-cx-sand p-6 md:p-10">
        <Story />
      </div>
    ),
  ],
  args: {
    links: ['Platform', 'Solutions', 'Pricing', 'Resources'],
    ctaLabel: 'Talk to Sales',
  },
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithActiveLink: Story = {
  args: {
    links: [
      { label: 'Platform', active: true },
      { label: 'Solutions' },
      { label: 'Pricing' },
      { label: 'Resources' },
    ],
    ctaLabel: 'Talk to Sales',
  },
}

export const OnDark: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-56 bg-cx-ink p-6 md:p-10">
        <Story />
      </div>
    ),
  ],
  args: {
    links: [
      { label: 'Platform', active: true },
      { label: 'Solutions' },
      { label: 'Pricing' },
      { label: 'Resources' },
    ],
  },
}
