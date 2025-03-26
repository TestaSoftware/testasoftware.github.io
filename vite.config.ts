import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'
import generouted from '@generouted/react-router/plugin'
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
      })
    },
    react(),
    tailwindcss(),
    generouted()
  ]
})
