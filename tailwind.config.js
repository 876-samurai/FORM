/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Your custom FORM color palette
        'off-white': '#F8F8F6',
        'true-black': '#0A0A0A',
        charcoal: '#2C2C2C',
        'slate-dark': '#4A4A4A',
        taupe: '#6B5B52',
        'elegant-gray': '#8B8B8B',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'SF Mono',
          'Monaco',
          'Cascadia Code',
          'Roboto Mono',
          'Consolas',
          'Courier New',
          'monospace',
        ],
      },
      spacing: {
        // Additional custom spacing if needed (Tailwind has great defaults)
        18: '4.5rem',
        88: '22rem',
      },
      borderRadius: {
        subtle: '2px',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.08)',
        elegant: '0 4px 16px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
