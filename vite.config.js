import { defineConfig } from 'vite'
import ViteRsw from 'vite-plugin-rsw'

export default defineConfig({
  base: '/sylt-wasm-example/',
  plugins: [
    ViteRsw(),
  ],
})
