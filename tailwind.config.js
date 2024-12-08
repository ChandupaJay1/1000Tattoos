/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#dc2626',
          dark: '#b91c1c'
        }
      },
      backgroundColor: {
        dark: '#121212',
        'dark-card': '#1e1e1e'
      }
    },
  },
  plugins: [],
};