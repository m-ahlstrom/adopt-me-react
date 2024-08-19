/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode : "class",
  theme: {
    extend: {
      colors: {
        "background-color": "#faeff0",
        "button-color": "#ad343e",
      },
    },
    plugins: [require('@tailwindcss/forms')],
  },
};
