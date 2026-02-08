/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        market: {
          dark: '#0b2240',
          primary: '#0f3b66',
          accent: '#1b7f5a',
          light: '#f5f9ff'
        }
      },
      boxShadow: {
        soft: '0 20px 60px -45px rgba(12, 32, 64, 0.45)'
      }
    }
  },
  plugins: []
};
