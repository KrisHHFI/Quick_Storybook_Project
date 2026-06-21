import type { Meta, StoryObj } from '@storybook/react-vite'
import { FeatureCard } from '../components/FeatureCard'

const meta = {
  title: 'Components/Feature Card',
  component: FeatureCard,
  tags: ['autodocs'],
  args: {
    eyebrow: 'Productivity',
    title: 'Automations that respect context',
    description: 'Build workflows that adapt to user behavior without requiring custom code in each team.',
  },
} satisfies Meta<typeof FeatureCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Security: Story = {
  args: {
    eyebrow: 'Security',
    title: 'Policy-first access controls',
    description: 'Enforce permissions and observability standards across all customer-facing tools.',
  },
}
