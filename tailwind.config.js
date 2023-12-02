/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-houses": "url('./assets/background.jpg')",
      },
    },
  },
  plugins: [],
}
