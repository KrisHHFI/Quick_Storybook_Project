import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '../components/Badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    label: 'Active',
    variant: 'success',
    dot: false,
    size: 'md',
  },
  argTypes: {
    variant: {
      options: ['default', 'success', 'warning', 'danger', 'info', 'neutral'],
      control: { type: 'select' },
    },
    size: { options: ['sm', 'md'], control: { type: 'inline-radio' } },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithDot: Story = {
  args: { dot: true, label: 'Live', variant: 'success' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge label="Default" variant="default" />
      <Badge label="Success" variant="success" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Danger" variant="danger" />
      <Badge label="Info" variant="info" />
      <Badge label="Neutral" variant="neutral" />
    </div>
  ),
}

export const WithDots: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge label="Deploying" variant="default" dot />
      <Badge label="Healthy" variant="success" dot />
      <Badge label="Degraded" variant="warning" dot />
      <Badge label="Incident" variant="danger" dot />
      <Badge label="Syncing" variant="info" dot />
      <Badge label="Idle" variant="neutral" dot />
    </div>
  ),
}
