/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend:
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
      },
      screens: {
        'xs': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}