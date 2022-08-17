<script context="module" lang="ts">
	export const prerender = true;
</script>

<!-- <script lang="ts">
	import Counter from 'src/components/Counter/index.svelte';
</script> -->

<script>
	import Seo from '$lib/SEO/index.svelte';
</script>

<Seo title="Home" pageCanonicalUrl="/" />

<section>
Play Area
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
