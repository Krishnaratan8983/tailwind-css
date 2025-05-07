/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-aura', 'bg-crimson', 'bg-field',
    'text-aura', 'text-crimson', 'text-field',
    'aura', 'crimson', 'field',
  ],
  theme: {
    extend: {
      colors: {
        aura: '#fcd34d',
        crimson: '#ef4444',
        field: '#22c55e',
      },
      transitionProperty: {
        theme: 'background-color, color',
      },
      keyframes: {
        bounceOnce: {
          '0%': { transform: 'scaleY(1)' },
          '30%': { transform: 'scaleY(1.05)' },
          '60%': { transform: 'scaleY(0.95)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        bounceOnce: 'bounceOnce 400ms ease-in-out',
      },
    },
  },
  plugins: [],
}
