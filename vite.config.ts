import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For User Pages (anthony-kobanda.github.io), base is '/'
  // For Project Pages (github.com/user/project), base would be '/project/'
  base: '/', 
  build: {
    outDir: 'dist',
  }
})