<script lang="ts">
	import Seo from '$lib/components/seo/page-meta.svelte';
	import CardsList from '$lib/components/cards/list.svelte';
	import data from '$lib/data/snippets.json';
</script>

<Seo title="Code Snippets" pageCanonicalUrl="/snippets" />

<h1>Code Snippets</h1>
<p class="clean-background">
	Sharing code helps everyone learn and improve. The following pages are some code snippets I have
	created to make my life easier and my hope is that it will do the same for you.
</p>
<CardsList cardData={data} />
