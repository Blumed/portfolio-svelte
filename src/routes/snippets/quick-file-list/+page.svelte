<script lang="ts">
	import Seo from '$lib/components/seo/page-meta.svelte';
	import Prism from '$lib/components/code-snippet/prisma-js.svelte';
	import fileList from './file-list';
</script>

<Seo title="Quick File List" pageCanonicalUrl="/snippet/quick-filter-list" />

<h1>Quick File List</h1>
<p class="clean-background">
	Paste the code found below into your .bash_profile found in the root of your computer. Open up a
	new terminal instance and boom you have a quick file list. The script will add the list
	automatically to your clipboard. No need to cat just paste. I have some improvements I am working
	on already, but if you have some ideas I would love to hear about them.
</p>
<Prism language="bash" code={fileList} copyScript />
