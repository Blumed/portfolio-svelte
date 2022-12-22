<script lang="ts">
	import Seo from '$lib/components/seo/page-meta.svelte';
	import Gist from '$lib/components/Gist/index.svelte';
</script>

<Seo title="Intercom Facade" pageCanonicalUrl="/snippet/intercom-facade" />

<div class="container">
	<h1>Pure JS Intercom Facade</h1>
	<p>
		Intercom.... so slow. If you are loading Intercom using GTM well then you it is 2x slower. As a
		front end dev always trying to make sites load fast and perform well Intercom has been
		challenging to contend with. An easy fix is to load UI that looks and behaves like Intercom but
		waits to initialize the heavy scripts until the user has interacted with it. Many of the
		solutions I have come across point out that if your business uses timed messages then their
		solution won't work and you'll need to create a bypass on your own. Well I have created one so
		you don't have to 😁
	</p>
	<hr />
	<ol>
		<li>
			If page pathname matches relative url given in bypass list then it will load Intercom normally
		</li>
		<li>
			If page pathname does not matches relative url a facade is loaded in. It is loaded in only
			once and won't load in again unless a route change occurred and it matches the bypass. Then
			Intercom will load and the facade will be destroyed.
		</li>
	</ol>

	<Gist gistUri="Blumed/81cbb4a9d7dc8c411f7f756baf1cb68a" />
	<h2>Google Tag Manager Intercom Facade</h2>
	<p>
		The following was designed to be used in Google Tag Manager on a SPA website. In my situation
		GTM is triggered on page change and on initial page load. Another thing I should point out here
		is the bypass built in so if you need intercom to load in because of timed messaging
		functionality is used on specific pages then it will. Here is how it works.
	</p>
	<Gist gistUri="Blumed/57f853dc64280556172e8cfcd807275d" />
</div>

<style>
	ol {
		padding-left: 2rem;
		list-style: decimal;
	}
</style>
