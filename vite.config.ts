import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom', 'react-icons', 'styled-components',"react-icons/pi","react-icons/fa","react-icons/bi"],
    },
  },
});
