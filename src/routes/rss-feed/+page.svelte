<script lang="ts">
	import { browser } from '$app/environment';
	import Seo from '$lib/components/seo/page-meta.svelte';
	export const CODE_DROPS_URL = `https://tympanus.net/codrops/feed/`;
	const getFeed = async () => {
		const codeDropsResponse = await fetch(CODE_DROPS_URL);
		const codeDrops = await codeDropsResponse.text();
		return codeDrops;
	};
	let promise = getFeed()
		.then((codeDrops) => browser && new window.DOMParser().parseFromString(codeDrops, 'text/xml'))
		.then((data) => {
			const items = data && data.querySelectorAll('item');
			let html = ``;
			items &&
				items.forEach((el) => {
					html += `
			<article>

			<h2>
				<a href="${el.querySelector('link').innerHTML}" target="_blank" rel="noopener">
				${el.querySelector('title').innerHTML}
				</a>
			</h2>
			</article>
		`;
				});
			browser && document.querySelector('h1').insertAdjacentHTML('afterend', html);
			return null;
		})
		.catch((error) => {
			console.log(error);
		});
</script>

<svelte:head>
	<meta name="robots" content="noindex,nofollow" />
</svelte:head>

<Seo title="Rss Feed" pageCanonicalUrl="/rss-feed" />

<h1 class="page-title">Rss Feed</h1>
{#await promise}
	<p>...waiting</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
