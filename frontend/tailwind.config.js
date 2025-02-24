/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ground-type": "#9d624d",
        "dragon-type": "#6562a1"
      },
      backgroundImage:{
        search_icon: "url('./assets/search_icon.jpg')"
      }
    },
  },
  plugins: [],
}

