import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import "flowbite/plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  darkMode: "class",
  server: {
    proxy: {
      '/auth': {
        target: 'https://carefree-geek.vercel.app',
        changeOrigin: false,
        secure: false,
        credentials: 'include'
      }
    }
  }
})

