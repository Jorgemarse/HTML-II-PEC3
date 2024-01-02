/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#182e72',
      'gray-light': '#d3dce6',
      'white': '#fff',
    },
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'cursive': ['Dancing Script', 'cursive']
      }
    },
  },
  plugins: [],
}

