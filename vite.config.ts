import { sveltekit } from '@sveltejs/kit/vite';
import { svelteSitemap } from 'svelte-sitemap/vite';
import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
  plugins: [
    sveltekit(),
    devtoolsJson(),
    svelteSitemap({
      domain: 'https://cullanluther.com',
      ignore: ['404.html'],
      outDir: 'build'
    })]
});
