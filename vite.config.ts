import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  base: '/', // Custom domain routing
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    // Ensures transpilation compatibility with iOS Safari & modern WebKit
    target: ['es2020', 'safari14'],
    // Splits giant JS bundle into smaller chunks to prevent mobile Safari main-thread blocking
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react'
            if (id.includes('framer-motion') || id.includes('motion')) return 'vendor-motion'
            if (id.includes('lucide-react')) return 'vendor-icons'
            return 'vendor'
          }
        },
      },
    },
  },
})
