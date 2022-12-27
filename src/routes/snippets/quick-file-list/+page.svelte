<script lang="ts">
	import Seo from '$lib/components/seo/page-meta.svelte';
	import Prism from '$lib/utils/prisma-js.svelte';

	const fileList = `filelist() {

if [ $# -gt 0 ]; then
  shopt -s nullglob
  for ext in "$@"; do
	printf '%s\n' *.$ext
  done | pbcopy
  echo "copied listing for $@ files to clipboard"
else
 shopt -s nullglob
for ext in *.*; do
  echo "$ext"
done | pbcopy
  echo "copied listing for all files to clipboard"
fi

}`;
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
	<Prism language="bash" code={fileList} />
	<button type="button" class="button" on:click={() => navigator.clipboard.writeText(fileList)}
		>Copy Script</button
	>
</div>
