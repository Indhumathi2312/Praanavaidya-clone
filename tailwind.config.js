/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          1: "#007f5f",
          2: "#55a630",
          3: "#365951",
          4: "#192c27",
          5: "#E6F0EE",
          6: "#F2F7F6",
          7: "#FFF7F1",
          8: "#ffffff",
          brandBlue: "#0595C4",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
