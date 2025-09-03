import { defineConfig } from 'vite'

export default defineConfig(async () => {
    const tailwind = (await import('@tailwindcss/vite')).default
    return {
        root: 'public',
        plugins: [tailwind()],
        server: {
            proxy: {
                '/tasks': 'http://localhost:3000'
            }
        },
        build: {
            outDir: '../dist',
            emptyOutDir: true
        }
    }
})