import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sorting-visualizer/',
  server: {
    host: '0.0.0.0', // This allows other devices on the network to access the server
    port: 5174, // Default port, can be changed if needed
  }
})
