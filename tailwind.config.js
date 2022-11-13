/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    node: 'layers',
    content: ['./client/components/**.jsx', './client/components/**/**.jsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        transparent: 'transparent',
        current: 'currentColor',
        'palette-blue': '#0081A7',
        'palette-light-blue': '#00AFB9',
        'palette-sand': '#FDFCDC',
        'palette-peach': '#FED9B7',
        'palette-orange': '#F07167',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
