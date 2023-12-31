/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        cinza: {
          // #827d80
          claro: "#827d80",
          claroFooter: "#5E575C",
          escuro: "#333333",
        },
        vermelho: {
          claro: "#e93338",
          escuro: "#9c2225",
          hover: "#c42a2e",
        },
      },
      screens: {
        xs: "375px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-1": "url('./assets/img/hero-plena/clinica-enhanced-1.webp')",
        "hero-2": "url('./assets/img/hero-plena/clinica-enhanced-2.webp')",
        "hero-3": "url('./assets/img/hero-plena/clinica-enhanced-3.webp')",
        "hero-4": "url('./assets/img/hero-plena/clinica-enhanced-4.webp')",
      },
      // gridTemplateColumns: {
      //   "16": "2fr 2fr 2fr 1fr",
      // }
    },
  },
  plugins: [require("flowbite/plugin")],
}
