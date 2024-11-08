import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()], // подключение плагинов
  server: {  // где поднять стенд разработки
    port: 3000,
    open: true,
  },
})
