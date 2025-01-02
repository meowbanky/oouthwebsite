import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: '/oouth_new/',
  plugins: [react()],
  server: {
    host: true, // This will expose the server to your network
    port: 5173  // Optional: specify port
  }
})