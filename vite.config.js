import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rezept-app/', // Setzen Sie dies auf den Namen Ihres Repositories
  plugins: [react()],
})