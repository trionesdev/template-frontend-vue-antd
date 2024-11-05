import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@apis': path.resolve(__dirname, './src/apis'),
            '@app': path.resolve(__dirname, './src/app'),
            '@components': path.resolve(__dirname, './src/components'),
        }
    },
})
