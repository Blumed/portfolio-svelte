<script lang="ts">
	import Seo from '$lib/components/seo/page-meta.svelte';
	import CardsList from '$lib/components/cards/list.svelte';
	import data from '$lib/data/tools.json';
</script>

<Seo title="Code Tools" pageCanonicalUrl="/tools" />

<h1>Code Tools</h1>
<p>
	A healthy amount of paranoia using random tools found on the internet has inspired me to create my
	own, and also to learn how they work.
</p>
<CardsList cardData={data} />
