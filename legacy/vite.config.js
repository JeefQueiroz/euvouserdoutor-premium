import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: '/',
  build: {
    outDir: isSsrBuild ? 'dist-server' : 'dist',
    ...(isSsrBuild ? {} : {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            icons: ['lucide-react'],
          },
        },
      },
    }),
    chunkSizeWarningLimit: 600,
  },
}))
