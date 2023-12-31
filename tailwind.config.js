/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   "./src/**/*.{js,jsx,ts,tsx}",  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors : {
        primary:'#4A3AFF',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

