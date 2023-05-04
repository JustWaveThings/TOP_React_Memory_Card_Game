import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/TOP_React_Memory_Card_Game/',
	plugins: [react()],
});
