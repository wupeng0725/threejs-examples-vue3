import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({ open: true }),
  ],
  base: process.env.NODE_ENV === 'production' ? '/threejs-examples-vue3/' : '/',
  build: {
    outDir: 'docs', // 使用 GitHub Pages默认识别目录
    rollupOptions: {
      // 将文件分门别类，js，css这些资源目录分别打包到对应的文件夹下
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'static/js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
        manualChunks: {
          three: ['three'],
          highlight: ['highlight.js', '@highlightjs/vue-plugin'],
          // OrbitControls: ['three/examples/jsm/controls/OrbitControls'],
        },
        // 合并小chunk
        experimentalMinChunkSize: 15 * 1024, // 单位b
      },
    },
  },
  // 生成环境去除console，debugger
  esbuild: {
    drop: ['console', 'debugger']
  }
})
