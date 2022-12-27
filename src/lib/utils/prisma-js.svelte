<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	export let language: string;
	export let code: string;
	export let header: string | undefined = undefined;

	onMount(() => {
		let script = document.createElement('script');
		script.src = 'https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism.js';
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

<svelte:head>
	<link
		rel="stylesheet"
		href="https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism_okaidia.css"
		type="text/css"
	/>
	<script
		src="https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism.js"
		id="tutsplus"></script>
</svelte:head>

<div class="code-highlight-container" in:scale>
	{#if header !== undefined}
		<h2>{header}</h2>
	{/if}

	<pre class="line-numbers"><code class="language-{language}" data-prismjs-copy="Copy Snippet"
			>{code}</code
		></pre>
</div>

<style lang="scss">
	.code-highlight-container {
		margin-bottom: 35px;
		pre {
			background: black;
			border-radius: 8px;
		}
	}
</style>
