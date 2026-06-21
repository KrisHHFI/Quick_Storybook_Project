import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from '../components/Avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    name: 'Jordan Lee',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    status: {
      options: [undefined, 'online', 'busy', 'offline'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithStatus: Story = {
  args: { status: 'online', size: 'lg' },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-4">
      <Avatar name="Alex Kim" size="xs" />
      <Avatar name="Morgan Blake" size="sm" />
      <Avatar name="Jordan Lee" size="md" />
      <Avatar name="Sam Torres" size="lg" />
      <Avatar name="Riley Chen" size="xl" />
    </div>
  ),
}

export const Statuses: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar name="Alex Kim" size="md" status="online" />
      <Avatar name="Jordan Lee" size="md" status="busy" />
      <Avatar name="Sam Torres" size="md" status="offline" />
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <div className="flex items-center">
      {['Alex Kim', 'Jordan Lee', 'Sam Torres', 'Morgan Blake', 'Riley Chen'].map((name, i) => (
        <span key={name} className="-ml-2 first:ml-0" style={{ zIndex: 5 - i }}>
          <Avatar name={name} size="md" />
        </span>
      ))}
      <span className="-ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cx-ink/10 text-xs font-semibold text-cx-ink ring-2 ring-white">
        +4
      </span>
    </div>
  ),
}
