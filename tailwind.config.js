/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lightViolet':'#9445FF',
        'darkViolet':'#512194'

      }
    },
  },
  plugins: [],
  theme: {
    textColor: theme => theme('colors'),

    textColor: {

      'primary': '#5E6670',
      'white':'#FFFFFF',
      'secondary': '#434955',

    }
  },
}

