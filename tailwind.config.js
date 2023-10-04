/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        cinza: {
          claro: "#827d80",
          escuro: "#333333",
        },
        vermelho: {
          claro: "#e93338",
          escuro: "#9c2225",
          hover: "#c42a2e",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      // gridTemplateColumns: {
      //   "16": "2fr 2fr 2fr 1fr",
      // }
    },
  },
  plugins: [require('flowbite/plugin')],
};

