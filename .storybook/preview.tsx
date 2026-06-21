import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'Surface',
      values: [
        { name: 'Surface', value: '#f6f2eb' },
        { name: 'White', value: '#ffffff' },
        { name: 'Night', value: '#111827' },
      ],
    },
  },
};

export default preview;