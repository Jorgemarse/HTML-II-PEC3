/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
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

