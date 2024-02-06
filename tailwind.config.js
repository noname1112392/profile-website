/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '414px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1920px',
      '2xl': '2560px',
      '3xl': '3840px'
    }
  },
  plugins: [],
}

