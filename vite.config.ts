import { sveltekit } from '@sveltejs/kit/vite';
import fs from 'fs';
//import { ViteMinifyPlugin } from 'vite-plugin-minify'
import type { UserConfig } from 'vite';

const config: UserConfig = {
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
};

export default config;