/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}', './.storybook/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'cx-ink': '#0b1a2f',
        'cx-moss': '#355f4f',
        'cx-sand': '#f6f2eb',
        'cx-coral': '#eb6e4b',
        'cx-sky': '#8ecae6',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 10px 30px -14px rgba(11, 26, 47, 0.35)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}

