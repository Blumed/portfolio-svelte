<script lang="ts">
	import Seo from '$lib/components/seo/page-meta.svelte';
	import CardsList from '$lib/components/cards/list.svelte';
	import tools from '$lib/data/tools.json';
	import bookmarklets from '$lib/data/bookmarklets.json';
</script>

<Seo title="Web Development Tools" pageCanonicalUrl="/tools" />

<h1>Web Development Tools</h1>

<section class="clean-background">
	<h2>Web Tools</h2>
	<p>
		A healthy amount of paranoia using random tools on the internet inspired me to create my own
		tool set. I wanted to know they work. Don't want to be bombarded by ads and tracking just to use
		a simple tool. Many of them are pretty ugly and overly complex. Applying my own UX/UI is so much
		fun and I hope you enjoy.
	</p>
</section>
<CardsList cardData={tools} />

<section class="clean-background">
	<h2>Bookmarklets</h2>
	<p>I love bookmarklets. Small apps that work on any device? Yes please.</p>
</section>
<CardsList cardData={bookmarklets} />
