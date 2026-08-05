/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

/**
 * Prism.js is loaded at runtime via a plain `<script src="/prism-syntax.js">`
 * tag (see `src/lib/components/code-snippet/prisma-js.svelte`), so it's a
 * global with no module of its own to import types from.
 */
declare global {
	const Prism: {
		highlightAll: () => void;
	};
}
