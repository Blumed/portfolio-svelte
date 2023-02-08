<script lang="ts">
	import CodeMutator from '$lib/components/code-mutator/app.svelte';
	import Seo from '$lib/components/seo/page-meta.svelte';
</script>

<Seo title="Beautify Json" pageCanonicalUrl="/tools/beautify-json" />
<CodeMutator language="json" processType="beautify" />

<section class="clean-background">
	<h2>What is beautification?</h2>
	<p>
		Formatted code is easier to read for us humans. Computers don't read code like we do. They don't
		need visual spacing, so that is what minification removes. Each space, tab, or carriage return
		is processed by the browser. Removing them makes our code smaller and more performant.
	</p>
	<!-- <h2>What is not minification</h2>
	<p>
		Minification is not compression. Compression rewrites a files binary code and encodes it using
		less bites. On the web we commonly interact with compression when we serve the browser
		compressed files using compression algorithms like gzip or brotli. Serving compressed files is
		faster because there is less bytes the browser needs to decode.
		<br />
		<br />
		Minification is not uglification. Uglification rewrites your variables and functions names to single
		letters. It does way more than this but this is the basic idea. Obfuscates your public code.
	</p> -->
</section>
