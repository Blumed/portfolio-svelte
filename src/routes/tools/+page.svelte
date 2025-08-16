<script lang="ts">
import CardsList from "$lib/components/Cards.svelte";
import Seo from "$lib/components/seo/page-meta.svelte";
import bookmarklets from "$lib/data/bookmarklets.json";
import snippets from "$lib/data/snippets.json";
import tools from "$lib/data/tools.json";
</script>

<Seo title="Web Development Tools" pageCanonicalUrl="/tools" />

<h1>Web Development Tools</h1>

<section class="clean-background">
	<h2>Web Tools</h2>
	<p>
		A healthy amount of paranoia using random tools on the internet inspired me to create my own
		tool sets. I wanted to know how they work. Don't want to be bombarded by ads and tracking just
		to use a simple tool. Many of them are pretty ugly and overly complex. Applying my own UX/UI is
		so much fun and I hope you enjoy.
	</p>
</section>
<CardsList cardData={tools} />

<section class="clean-background">
	<h2>Bookmarklets</h2>
	<p>
		I ❤️ bookmarklets. Small apps that work on any device? Yes please. I love using them and
		creating them for myself and for others. The following are a few bookmarklets I built. I create bookmarklets using this web-tool <a href="https://make-bookmarklets.com">Make Bookmarklets</a>
	</p>
</section>
<CardsList cardData={bookmarklets} />

<section class="clean-background">
	<h2>Code Snippets</h2>
	<p>
		Sharing code helps everyone learn and improve. The following pages are some code snippets I have
		created to make my life easier and my hope is that it will do the same for you.
	</p>
</section>
<CardsList cardData={snippets} />
