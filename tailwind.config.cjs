const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          // '50': '#EBECEC',
        },
      },
      fontSize: {},
      fontWeight: {},
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        monst: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
});
