/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: 'rgb(233, 84, 43)',
          hover: 'rgb(213, 64, 23)'
        }
      }
    },
  },
  plugins: [],
};