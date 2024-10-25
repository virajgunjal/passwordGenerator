import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  server: {
    port: process.env.PORT || 3000, // fallback to port 3000 if PORT is not set
  },
});
