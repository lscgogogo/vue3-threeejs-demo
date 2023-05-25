import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';
//引入自动引入插件
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), AutoImport({
    imports: ['vue'], dts: 'src/auto-import.d.ts'
  })],
  // 配置 @ 符号
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  }
})