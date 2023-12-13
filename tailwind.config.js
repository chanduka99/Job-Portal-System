
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  
  'node_modules/flowbite-react/lib/esm/**/*.js'],
  
  theme: {
    extend: {
      colors: {
        s2condPurple: '#a32eff', // works ⭕️
        s2condPink: '#ff0099', // works ⭕️
        s2condOrange: '#ff5f55', // works ⭕️
        s2condYellow: '#ffe600', // should work⭕️
        s2condLime: '#cdff64', // works ⭕️
        s2condMint: '#2af1b5', // works at 'text-s2condMint' but not at 'border-s2condMint'
        secondTest: '#ffe600', // works ⭕️ <-- I tested it for s2condYellow but it works perfectly!
        s2condTest2: '#2af1b5', // should work ⭕️
    },
    },
  },
  plugins: [require('flowbite/plugin')],
  
  theme: {
    textColor: theme => theme('colors'),

    textColor: {

      'primary': '#5E6670',
      'white':'#FFFFFF',
      'secondary': '#434955',

    }
  },
  // safelist: [{
  //   pattern: /(bg|text|border)-s2cond(Purple|Pink|Orange|Yellow|Lime|Mint|Test|Test2)/
  // }]
  safelist: ['bg-s2condPurple'],
}

