/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1366px",
    "3xl": "1440px",
    "4xl": "1536px",
    "5xl": "1600px",
    "6xl": "1920px",
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        "@layer utilities": {
          ".from-white-10": { "background-color": "rgba(255, 255, 255, 0.1)" },
          // Add other custom classes if necessary
        },
      });
    },
  ],
};
