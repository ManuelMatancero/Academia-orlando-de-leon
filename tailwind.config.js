/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dusty-beige': '#F7F4EF',
        'tobacco-brown': {
          DEFAULT: '#6B4F4B',
          dark: '#4E3A36',
        },
        'muted-gold': '#C8A97E',
        'text-dark': '#2A211E',
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
        // CAMBIO: Se usa Poppins para títulos. Es más moderno y directo.
        heading: ['Poppins', 'system-ui', 'sans-serif'], 
        script: ['Caveat', 'cursive'], 
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(200, 169, 126, 0.4)' },
          '50%': { transform: 'scale(1.1)', boxShadow: '0 0 0 10px rgba(200, 169, 126, 0)' },
        },
      },
      animation: {
        pulse: 'pulse 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};