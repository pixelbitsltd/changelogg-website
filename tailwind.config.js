/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{njk,md}",
    './.markdown-tailwind-mapping.js',
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      colors: {
        offwhite: '#F6F8FA',
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

