/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "fire": {
          100:'#db3b3b',
          500:'#f31f1f',
        }
      },
      backgroundImage:{
        search_icon: "url('./assets/search_icon.jpg')"
      }
    },
  },
  plugins: [],
}

