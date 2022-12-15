import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@pro': resolve(__dirname, 'packages')
    }
  }
})
