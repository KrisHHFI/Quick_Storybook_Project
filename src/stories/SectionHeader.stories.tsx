import type { Meta, StoryObj } from '@storybook/react-vite'
import { SectionHeader } from '../components/SectionHeader'
import { Stat } from '../components/Stat'

const meta = {
  title: 'Components/Section Header',
  component: SectionHeader,
  tags: ['autodocs'],
  args: {
    eyebrow: 'Platform',
    title: 'Move faster with fewer handoffs.',
    subtitle: 'Company X helps product, engineering, and ops teams collaborate without friction.',
    align: 'center',
  },
  argTypes: {
    align: { options: ['left', 'center'], control: { type: 'inline-radio' } },
  },
} satisfies Meta<typeof SectionHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Centered: Story = {}

export const LeftAligned: Story = {
  args: { align: 'left' },
}

export const WithStats: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-10">
      <SectionHeader
        eyebrow="Traction"
        title="Built for teams that ship fast."
        subtitle="Trusted by engineering and product organisations of every size."
      />
      <div className="grid w-full max-w-3xl grid-cols-3 gap-4">
        <Stat label="Active customers" value="12,400+" trend="18% this month" trendUp />
        <Stat label="Uptime" value="99.98%" trend="0.01% better" trendUp />
        <Stat label="Avg. deploy time" value="4.2 min" trend="12% faster" trendUp />
      </div>
    </div>
  ),
}
