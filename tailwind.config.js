/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
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
