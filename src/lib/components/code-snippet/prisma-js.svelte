<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import './prism.css';

	export let language: string;
	export let code: string;
	export let id: string | undefined = undefined;
	export let copyScript: boolean | undefined = undefined;
	export let minifiedScript: string | undefined = undefined;

	onMount(() => {
		let script = document.createElement('script');
		script.src = '/prism-syntax.js';
		document.head.append(script);

		script.onload = () => {
			let langJS = false;
			let lang_script;
			let lang_module;

			// This switch statement, evaluates what language is being used, if one of a key language is being used, it will
			// load the proper Prisim support tool, like Python requires "prism-python.js" to modify the raw code so that
			// Prisim can render it properly.
			switch (language) {
				case 'json':
					lang_module = 'https://prismjs.com/components/prism-json.js';
					langJS = true;
					break;

				case 'bash':
					lang_module = 'https://prismjs.com/components/prism-bash.js';
					langJS = true;
					break;

				case 'css':
					lang_module = 'https://prismjs.com/components/prism-css.js';
					langJS = true;
					break;

				case 'js':
					lang_module = 'https://prismjs.com/components/prism-javascript.js';
					langJS = true;
					break;

				case 'html':
					lang_module = 'https://prismjs.com/components/prism-html.js';
					langJS = true;
					break;
				case 'graphql':
					lang_module = 'https://prismjs.com/components/prism-graphql.js';
					langJS = true;
					break;
			}

			if (langJS == true) {
				lang_script = document.createElement('script');
				lang_script.src = lang_module;
				lang_script.async = true;
				document.head.append(lang_script);

				lang_script.onload = () => {
					Prism.highlightAll();
				};
			} else {
				Prism.highlightAll();
			}
		};
	});
</script>

<div {id} class="code-snippet-container" in:scale>
	<div class="code-snippet-actions">
		{#if copyScript}
			<button
				type="button"
				class="button-code-snippet"
				on:click={() => navigator.clipboard.writeText(code)}>Copy Script</button
			>
		{/if}
		{#if minifiedScript}
			<button
				type="button"
				class="button-code-snippet"
				on:click={() => navigator.clipboard.writeText(minifiedScript)}>Copy Minified</button
			>
		{/if}
		<span class="code-snippet-language">{language}</span>
	</div>
	<pre class="line-numbers"><code class="language-{language}" data-prismjs-copy="Copy Snippet"
			>{code}</code
		></pre>
</div>

<style lang="scss">
	.code-snippet-container {
		margin-bottom: 35px;
		pre {
			background: black;
			border-radius: 8px;
		}
	}
	.code-snippet-actions {
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		border-bottom: 1px solid white;
		//padding: 1rem 1rem 1rem 46px;
		background-color: black;
		display: flex;
		+ pre {
			border-top-left-radius: 0;
			border-top-right-radius: 0;
		}
	}
	.code-snippet-language {
		color: white;
		padding: 5px 20px;
		margin-left: auto;
	}
	.button-code-snippet {
		cursor: pointer;
		padding: 5px 20px;
		border: 0;
		color: white;
		height: 100%;
		margin: 0;
		background-color: transparent;
		border-right: 1px solid white;
		transition: background 0.4s ease;
		&:first-of-type {
			border-top-left-radius: 8px;
		}
		&:hover {
			background-color: var(--accent-color);
		}
	}
	@media (max-width: 768px) {
		.button-code-snippet {
			padding-left: 8px;
			padding-right: 8px;
		}
	}
</style>
