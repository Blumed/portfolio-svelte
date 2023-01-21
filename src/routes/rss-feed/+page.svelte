<!-- <script lang="ts">
	import { browser } from '$app/environment';
	import Seo from '$lib/components/seo/page-meta.svelte';
	export const CODE_DROPS_URL = 'https://tympanus.net/codrops/feed';
	export const ADDY_OSMANI_URL = 'https://addyosmani.com/feed';
	import rss from '$lib/data/rss.json';
	const getFeed = async () => {
		const allResponses = await Promise.all([fetch(rss.data[0].url), fetch(rss.data[1].url)]);
		// console.log(allResponses);
		// const data1 = await allResponses[0].text();
		// const data2 = await allResponses[1].text();
		// console.log(data1);
		// const codeDropsResponse = await fetch(rss.data[0].url);
		// const codeDrops = await codeDropsResponse.text();
		const result = allResponses.map(async (feed) => await Promise.resolve(feed.text()));
		return result;
	};
	console.log(
		'getFeed',
		getFeed().then((result) => result.map((sup) => sup))
	);
	let promise = getFeed()
		.then((feeds) =>
			feeds.map((feed) => {
				feed.then(
					(parseFeed) => parseFeed.map(feed => browser && new window.DOMParser().parseFromString(parseFeed, 'text/xml'))
				);
			})
		)
		.then((data) => {
			console.log(data);
			const items = data && data.querySelectorAll('item');
			let html = '';
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
{/await} -->
<script lang="ts">
	import { browser } from '$app/environment';
	import Seo from '$lib/components/seo/page-meta.svelte';
	export const CODE_DROPS_URL = 'https://tympanus.net/codrops/feed';
	export const ADDY_OSMANI_URL = 'https://addyosmani.com/feed';
	const getFeed = async () => {
		const codeDropsResponse = await fetch(CODE_DROPS_URL);
		const codeDrops = await codeDropsResponse.text();
		return codeDrops;
	};
	let promise = getFeed()
		.then((codeDrops) => browser && new window.DOMParser().parseFromString(codeDrops, 'text/xml'))
		.then((data) => {
			const items = data && data.querySelectorAll('item');
			let html = '';
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
