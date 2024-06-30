/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#374151",
        "primary-orange": "#ea580c",
        "btn-primary": "#f97316",
        "btn-primary-hovered": "#ea580c",
      },
    },
  },
  plugins: [],
};
