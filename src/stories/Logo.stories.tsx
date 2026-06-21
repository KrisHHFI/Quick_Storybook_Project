import type { Meta, StoryObj } from '@storybook/react-vite'
import { Logo } from '../components/Logo'

const meta = {
  title: 'Brand/Logo',
  component: Logo,
  tags: ['autodocs'],
  args: {
    variant: 'wordmark',
    inverted: false,
    size: 40,
  },
  argTypes: {
    variant: { options: ['mark', 'wordmark'], control: { type: 'inline-radio' } },
    size: { control: { type: 'range', min: 20, max: 96, step: 4 } },
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Wordmark: Story = {}

export const Mark: Story = {
  args: { variant: 'mark', size: 48 },
}

export const Inverted: Story = {
  args: { inverted: true },
  decorators: [(Story) => (
    <div className="rounded-xl bg-cx-ink p-6">
      <Story />
    </div>
  )],
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      {([20, 28, 40, 56, 72] as const).map((s) => (
        <Logo key={s} size={s} variant="mark" />
      ))}
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-6 rounded-xl bg-cx-sand p-6">
        <Logo size={40} variant="wordmark" />
        <Logo size={40} variant="mark" />
        <Logo size={56} variant="mark" />
      </div>
      <div className="flex flex-wrap items-center gap-6 rounded-xl bg-cx-ink p-6">
        <Logo size={40} variant="wordmark" inverted />
        <Logo size={40} variant="mark" inverted />
        <Logo size={56} variant="mark" inverted />
      </div>
    </div>
  ),
}
