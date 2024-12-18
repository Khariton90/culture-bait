import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@/entities': path.resolve(__dirname, './src/entities'),
			'@/pages': path.resolve(__dirname, './src/pages'),
			'@/features': path.resolve(__dirname, './src/features'),
			'@/shared': path.resolve(__dirname, './src/shared'),
			'@/widgets': path.resolve(__dirname, './src/widgets'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				additionalData: `
         		 @use '@/shared/lib/sass/variables' as *;    
                 @use '@/shared/lib/sass/mixins' as *;
        `,
			},
		},
	},
	plugins: [react()],
})
