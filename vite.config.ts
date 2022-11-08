import { sveltekit } from '@sveltejs/kit/vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		ViteMinifyPlugin({
			collapseBooleanAttributes: true,
			collapseWhitespace: true,
			conservativeCollapse: true,
			decodeEntities: true,
			html5: true,
			ignoreCustomComments: [/^#/],
			minifyCSS: true,
			minifyJS: true,
			removeAttributeQuotes: true,
			removeComments: true,
			removeOptionalTags: true,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			sortAttributes: true,
			sortClassName: true,
			removeEmptyElements: true
		
		}),
	]
};

export default config;