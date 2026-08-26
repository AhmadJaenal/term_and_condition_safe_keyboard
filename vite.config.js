import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Output ke folder `dist/`, yang menjadi target Firebase Hosting (lihat firebase.json).
// Semua isi folder `public/` (dokumen legal .html + css/legal.css) disalin apa adanya
// ke `dist/`, sehingga URL seperti /kebijakan-privasi.html tetap sama.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
