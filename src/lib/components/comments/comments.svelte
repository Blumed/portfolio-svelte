<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	//import { prefersDarkMode } from '$lib/data/store';

	// Translate the user's dark mode preference to a theme
	//const siteTheme = $prefersDarkMode ? 'github-dark' : 'github-light';

	// An object with all the utterances options I want
	const options = {
		src: 'https://utteranc.es/client.js',
		repo: 'Blumed/portfolio-svelte',
		label: 'comment',
		crossorigin: 'anonymous',
		theme: 'github-dark',
		crossorigin: 'anonymous',
		async: true,
		'issue-term': $page.route.id
	};

	onMount(() => {
		const utteranceScript = document.createElement('script');
		const targetTag = document.getElementById('utterances-comments');

		// Loop over the options & apply each property as an attribute
		for (const prop in options) {
			utteranceScript.setAttribute(prop, options[prop]);
		}

		targetTag && targetTag.appendChild(utteranceScript);
	});
</script>

<section class="decorative-background">
	<h2>Leave a comment</h2>
	<div id="utterances-comments" />
</section>
