import { sveltekit } from '@sveltejs/kit/vite';
import fs from 'fs';
//import { ViteMinifyPlugin } from 'vite-plugin-minify'
import { defineConfig } from 'vite'
import type { UserConfig } from 'vite';

export default defineConfig(({command}: any) => {
	if (command === 'serve') {
		return {
			server: {       
				host: "0.0.0.0",
				port: 3666,
				proxy: {},
				https: {
					key: fs.readFileSync('./.cert/key.pem'),
					cert: fs.readFileSync('./.cert/cert.pem'),
				},
			},
			plugins: [
				sveltekit(),
			]
		}
	  } else {
		return {
			plugins: [
				sveltekit(),
			]
		}
	  }
}) as UserConfig;