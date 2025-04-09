/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}' // Asegúrate que esto cubra tus archivos
  ],
  theme: {
    extend: {
      // --- CÓDIGO AÑADIDO ---
      keyframes: {
        'gradient-shift': {
          '0%, 100%': {
            backgroundPosition: '0% 50%' // Posición inicial y final
          },
          '50%': {
            backgroundPosition: '100% 50%' // Posición intermedia
          },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 6s ease infinite', // nombre: keyframes duración timing iteraciones
      },
      // --- FIN CÓDIGO AÑADIDO ---

      // Aquí puedes tener otras extensiones si las necesitas en el futuro
    },
  },
  plugins: [],
};