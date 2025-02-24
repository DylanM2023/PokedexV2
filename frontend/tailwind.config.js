/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        search_icon: "url('./assets/search_icon.jpg')"
      }
    },
  },
  plugins: [],
}

