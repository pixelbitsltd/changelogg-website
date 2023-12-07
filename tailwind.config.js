/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{njk,md}",
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      colors: {
        offwhite: '#F6F8FA',
        brand: '#00C78C'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: 'Garamond'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ],
}

