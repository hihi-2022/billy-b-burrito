/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    node: 'layers',
    content: ['./client/components/**.jsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
