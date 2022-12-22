<script lang="ts">
	import Seo from '$lib/components/seo/page-meta.svelte';
	import Gist from '$lib/components/Gist/index.svelte';
</script>

<Seo title="Quick File List" pageCanonicalUrl="/snippet/quick-filter-list" />

<div class="container">
	<h1>Quick File List</h1>
	<p>
		Paste the code found below into your .bash_profile found in the root of your computer. Open up a
		new terminal instance and boom you have a quick file list. The script will add the list
		automatically to your clipboard. No need to cat just paste. I have some improvements I am
		working on already, but if you have some ideas I would love to hear about them.
	</p>
	<Gist gistUri="Blumed/a782c162398062b4e524af2860c18d9d" />
</div>
