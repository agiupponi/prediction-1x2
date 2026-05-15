/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#013369', // NFL Blue
          700: '#012652',
          800: '#011c3d',
          900: '#001229',
        },
        accent: {
          red: '#d50a0a',
        }
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        roboto: ['Roboto Condensed', 'sans-serif'],
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disabilitato per non rompere gli stili di base esistenti
  }
}
