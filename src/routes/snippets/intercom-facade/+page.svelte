<script lang="ts">
	import Seo from '$lib/components/seo/page-meta.svelte';

	import Prism from '$lib/utils/prism/prisma-js.svelte';
	import jsFacade from './js-facade';
	import jsFacadeMinified from './js-facade-minified';
	import gtmJsFacade from './gtm-js-facade';
	let showJsFacade = false;
	let showGTMJsFacade = false;
	const facadeConfig = `
    const config = {
        appId: 'INTERCOM_APP_ID',
        bypassUrls: ['/add-list-of-urls-intercom-must-load-on'],
        facadeContainerClass: 'companyname-intercom-facade',
        intercomLogo: 'INTERCOM_SVG_LOGO',
        facadeColor: 'pink',
        siteIsSPA: true,
    };`;
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

	<Prism language="javascript" code={facadeConfig} header="Script Configuration" />
	<ol>
		<li>
			<strong>appId</strong>: In order to use Intercom you need an appId so paste it in as a string.
		</li>
		<li>
			<strong>bypassUrls</strong>: If the array is empty which it can be then the facade will load
			on every page this script runs on. If you do need to run Intercom on specific pages then add
			relative paths to this array.
		</li>
		<li>
			<strong>facadeContainerClass</strong>: This is a unique class to gaurd against css collision.
		</li>
		<li>
			<strong>intercomLogo</strong>: It is important to match the intercom logo provided by
			intercom. You can also grab an svg from
			<a
				href="https://fontawesome.com/icons/intercom?s=&f=brands"
				target="_blank"
				rel="noopener noreferrer">Font Awesome</a
			>.
		</li>
		<li>
			<strong>facadeColor</strong>: This should match the same color as your brand color used in
			Intercom.
		</li>
		<li>
			<strong>siteIsSPA</strong>: If your site is traditional and each page navigation creates a
			page refresh then you can change this value to false.
		</li>
	</ol>
	<div class="buttons">
		<button type="button" class="button" on:click={() => (showJsFacade = !showJsFacade)}
			>{!showJsFacade ? 'Show' : 'Hide'} Script</button
		>
		<button type="button" class="button" on:click={() => navigator.clipboard.writeText(jsFacade)}
			>Copy Script</button
		>
		<button
			type="button"
			class="button"
			on:click={() => navigator.clipboard.writeText(jsFacadeMinified)}>Copy Minified Script</button
		>
	</div>

	{#if showJsFacade}
		<Prism language="javascript" code={jsFacade} animate />
	{/if}

	<!-- <Gist gistUri="Blumed/81cbb4a9d7dc8c411f7f756baf1cb68a" /> -->
	<h2>Google Tag Manager Intercom Facade</h2>
	<p>
		The following was designed to be used in Google Tag Manager on a SPA website. In my situation
		GTM is triggered on page change and on initial page load. Another thing I should point out here
		is GTM will minify your code for you so there is no need to minify your code before you paste it
		into your html tag.
	</p>
	<div class="buttons">
		<button type="button" class="button" on:click={() => (showGTMJsFacade = !showGTMJsFacade)}
			>{!showGTMJsFacade ? 'Show' : 'Hide'} Script</button
		>
		<button type="button" class="button" on:click={() => navigator.clipboard.writeText(gtmJsFacade)}
			>Copy Script</button
		>
	</div>

	{#if showGTMJsFacade}
		<Prism language="javascript" code={gtmJsFacade} />
	{/if}
</div>

<style lang="scss">
	ol {
		padding-left: 2rem;
		list-style: decimal;
	}
	.buttons {
		display: flex;
		column-gap: 48px;
		margin-bottom: 60px;
	}
	@media (max-width: 768px) {
		.buttons {
			display: block;
			.button {
				width: 100%;
				margin-bottom: 20px;
			}
		}
	}
</style>
