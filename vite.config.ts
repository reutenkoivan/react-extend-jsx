import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@stories-components': path.resolve(__dirname, 'src', '_stories-components'),
		},
	},
	plugins: [
		react(),
		dts({
			include: ['src'],
			exclude: ['src/**/*.stories.tsx', 'src/_stories-components/**'],
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
