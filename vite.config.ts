import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			include: ['src'],
		}),
	],
	build: {
		lib: {
			fileName: 'main',
			entry: path.resolve(__dirname, 'src', 'main.ts'),
			formats: ['es'],
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime'],
		},
	},
})
