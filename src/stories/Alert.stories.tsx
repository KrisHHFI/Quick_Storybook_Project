import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from '../components/Alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    message: 'Your workspace settings have been saved.',
    variant: 'info',
  },
  argTypes: {
    variant: {
      options: ['info', 'success', 'warning', 'error'],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    title: 'New feature available',
    message: 'You can now enable multi-region deployment in your plan settings.',
    variant: 'info',
  },
}

export const Success: Story = {
  args: {
    title: 'Changes saved',
    message: 'Your workspace settings have been updated successfully.',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    title: 'Trial ending soon',
    message: 'Your trial expires in 3 days. Upgrade to keep access to all features.',
    variant: 'warning',
  },
}

export const Error: Story = {
  args: {
    title: 'Deployment failed',
    message: 'Build step exited with code 1. Check the run log for details.',
    variant: 'error',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex max-w-lg flex-col gap-3">
      <Alert title="New feature available" message="Enable multi-region deployment in your plan settings." variant="info" />
      <Alert title="Changes saved" message="Your workspace settings have been updated successfully." variant="success" />
      <Alert title="Trial ending soon" message="Your trial expires in 3 days. Upgrade to keep access." variant="warning" />
      <Alert title="Deployment failed" message="Build step exited with code 1. Check the run log." variant="error" />
    </div>
  ),
}
