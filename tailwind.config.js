/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md}",
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      colors: {
        offwhite: '#F6F8FA',
      },
      fontFamily: {
        serif: 'Garamond'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ],
}

