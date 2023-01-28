/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['"PT Sans Caption"'],
      },
      colors: {
        'primary': '#607686',
        'secondary': '#5B5A4D',
      },
    },
  },
  plugins: [require("daisyui")],

};
