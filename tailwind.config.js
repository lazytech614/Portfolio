/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          default: "#00ff99",
          hover: "00e187",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".custom-backdrop": {
          "background-color": "rgba(28, 28, 34, 0.7)", // Add opacity for blur effect
          "backdrop-filter": "blur(20px)",
          "-webkit-backdrop-filter": "blur(20px)",
        },
      });
    },
  ],
};
