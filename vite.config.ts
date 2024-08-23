import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), TanStackRouterVite()],
    resolve: {
        alias: {
            components: path.resolve('src/components/'),
            interfaces: path.resolve('src/interfaces/'),
            assets: path.resolve('src/assets/'),
            store: path.resolve('src/store/'),
            context: path.resolve('src/context/'),
            utils: path.resolve('src/utils/'),
            hooks: path.resolve('src/hooks/'),
            types: path.resolve('src/types/')
        }
    }
})
