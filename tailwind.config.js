/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#faeff0",
      },
    },
    plugins: [require('@tailwindcss/forms')],
  },
};
