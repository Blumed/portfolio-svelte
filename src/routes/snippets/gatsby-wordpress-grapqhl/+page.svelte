<script lang="ts">
	import Seo from '$lib/components/seo/page-meta.svelte';
	import Prism from '$lib/components/code-snippet/prisma-js.svelte';
	import selfLink from './self-href';
	import largeAssets from './large-assets';
	import templateUrls from './show-template-urls';
</script>

<Seo title="Gatsby Wordpress Graphql" pageCanonicalUrl="/snippets/gatsby-wordpress-graphql" />

<h1>Gatsby Graphql</h1>
<p>
	Love me some Gatsby. Using Gatsby with Wordpress can be a little tricky in the beginning. The
	following are some helpful snippets for debugging. The following snippets are using the old <a
		href="https://www.gatsbyjs.com/plugins/gatsby-source-wordpress/"
		target="_blank"
		rel="noopener">gatsby-wrodpress-source plugin</a
	>. Someday I will be able to update to the latest version of the plugin but until then here is
	some code.
</p>
<hr />
<section>
	<header><h2 id="check-wordpress-data">Check data data coming from Wordpress</h2></header>
	<p>
		This snippet is crucial when data doesn't match what is coming from wordpress. This graphql
		snippet will print the slug from Wordpress so you know what page is being identified, also show
		you the url created by Wordpress's rest API. The url will show you the post_id which is needed
		if you need to go into the database and clean it up. Alternatively you can use wordpress_id to
		the id related to your post.
	</p>
	<Prism language="graphql" code={selfLink} copyScript />
</section>
<section>
	<header><h2>Find large assets in your Wordpress media library</h2></header>
	<p>
		If you are not watching all the assets being uploaded to the media library like a hawk, people
		might upload some big stuff. Maybe you want to investigate why developers with slower internet
		have intermittent problems getting local development environment to run. This snippet will show
		you all media assets greater then 1MB.
	</p>
	<Prism language="graphql" code={largeAssets} copyScript />
</section>
<section>
	<header><h2>Investigate template pages</h2></header>
	<p>
		First off the way I organize templates in wordpress is as follows. I make a parent page and all
		children pages point to the parent. Then in gatsby-node you just need to parse the
		parent_element slug. One benefit doing things this way is if you have components which all
		children share a single components data you can make them on the parent and then each child will
		have access to the data. Not all templates will have an index displaying a list template
		children, so this snippet will show you all the urls associated with a given parent url path.
		Ex. https://example.com/parent-url/child-url
	</p>
	<Prism language="graphql" code={templateUrls} copyScript />
</section>
