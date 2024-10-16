import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // Listen on all network interfaces (equivalent to 0.0.0.0)
    port: 3000, // Optional: specify a port (default is 5173)
  },
  
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
