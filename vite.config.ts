import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ["clsx", "tailwind-merge"]
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
