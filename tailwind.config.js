/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "700px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily:{
      "Nunito": ['Nunito', 'sans-serif']
    },
    extend: {
      colors: {
        BlackGray: "#444B59",
        BlueGray: "#8699DA",
      },
    },
  },
  plugins: [],
};
