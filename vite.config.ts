import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/components/index.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      input: {
        index: 'src/components/index.ts',
        injectionKeys: 'src/InjectionKeys.ts',
        classes: 'src/classes/AppConfig.ts'
      },
      output: {
        dir: 'dist',
        format: 'es',
        entryFileNames: '[name].js'
      }
    }
  }
})
