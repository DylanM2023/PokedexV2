import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts : ["pokedexv2.onrender.com"],
  },
  resolve: {
    alias: {
        "react/jsx-runtime": "react/jsx-runtime.js"
    }
},
  plugins: [react()],
})
