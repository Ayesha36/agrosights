const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      transform: ['hover', 'focus']
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1400px',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

