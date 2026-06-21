import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputField } from '../components/InputField'

const meta = {
  title: 'Components/Input Field',
  component: InputField,
  tags: ['autodocs'],
  args: {
    label: 'Work email',
    placeholder: 'name@company.com',
    hint: 'Use your corporate email for onboarding',
  },
} satisfies Meta<typeof InputField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    defaultValue: 'hello@companyx.com',
  },
}
