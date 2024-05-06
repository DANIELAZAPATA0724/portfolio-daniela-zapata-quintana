/** @type {import('tailwindcss').Config} */
module.exports = {

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  content: ["./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui" , "tailwindcss-animated")],

};
