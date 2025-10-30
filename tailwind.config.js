/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient-animate': 'gradientShift 3s infinite alternate',
      },
      keyframes: {
        gradientShift: {
          '0%': { 'background-position': '0% center' },
          '100%': { 'background-position': '100% center' },
        },
      },
    },
  },
  plugins: [],
}
