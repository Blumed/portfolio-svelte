<script lang="ts">
	import Seo from '$lib/components/seo/page-meta.svelte';

	import Prism from '$lib/components/code-snippet/prisma-js.svelte';
	import jsFacade from './js-facade';
	import jsFacadeMinified from './js-facade-minified';
	import gtmJsFacade from './gtm-js-facade';
	import facadeConfig from './facade-config';
	import Button from '$lib/components/buttons/button.svelte';
	import Comments from '$lib/components/comments/comments.svelte';
	let showJsFacade = false;
	let showGTMJsFacade = false;
</script>

<Seo title="Intercom Facade" pageCanonicalUrl="/snippet/intercom-facade" />

<h1>Pure JS Intercom Facade</h1>
<p class="clean-background">
	Intercom.... so slow. If you are loading Intercom using GTM well then you it is 2x slower. As a
	front end dev always trying to make sites load fast and perform well Intercom has been challenging
	to contend with. An easy fix is to load UI that looks and behaves like Intercom but waits to
	initialize the heavy scripts until the user has interacted with it. Many of the solutions I have
	come across point out that if your business uses timed messages then their solution won't work and
	you'll need to create a bypass on your own. Well I have created one so you don't have to 😁
</p>

<section class="code-example clean-background">
	<header>
		<h2>Script Configuration</h2>
	</header>
	<Prism language="javascript" code={facadeConfig} copyScript={false} />
	<ul class="list-item-circle">
		<li>
			<strong class="highlight-pill">appId</strong> In order to use Intercom you need an appId so paste
			it in as a string.
		</li>
		<li>
			<strong class="highlight-pill">bypassUrls</strong> If the array is empty which it can be then the
			facade will load on every page this script runs on. If you do need to run Intercom on specific
			pages then add relative paths to this array.
		</li>
		<li>
			<strong class="highlight-pill">facadeContainerClass</strong> This is a unique class to guard against
			css collision.
		</li>
		<li>
			<strong class="highlight-pill">intercomLogo</strong> It is important to match the intercom
			logo provided by intercom. You can also grab an svg from
			<a
				href="https://fontawesome.com/icons/intercom?s=&f=brands"
				target="_blank"
				rel="noopener noreferrer">Font Awesome</a
			>.
		</li>
		<li>
			<strong class="highlight-pill">facadeColor</strong> This should match the same color as your brand
			color used in Intercom.
		</li>
		<li>
			<strong class="highlight-pill">siteIsSPA</strong> If your site is traditional and each page navigation
			creates a page refresh then you can change this value to false.
		</li>
	</ul>

	<Button
		type="button"
		ariaExpanded={showJsFacade}
		ariaControls="jsFacade"
		buttonText={`${!showJsFacade ? 'Show' : 'Hide'} Script`}
		handleClick={() => (showJsFacade = !showJsFacade)}
	/>

	{#if showJsFacade}
		<Prism
			language="javascript"
			code={jsFacade}
			copyScript
			minifiedScript={jsFacadeMinified}
			id="jsFacade"
		/>
	{/if}
</section>
<section class="code-example clean-background">
	<header><h2>Google Tag Manager Intercom Facade</h2></header>
	<p>
		The following was designed to be used in Google Tag Manager on a SPA website. In my situation
		GTM is triggered on page change and on initial page load. Another thing I should point out here
		is GTM will minify your code for you so there is no need to minify your code before you paste it
		into your html tag.
	</p>

	<Button
		type="button"
		ariaExpanded={showGTMJsFacade}
		ariaControls="jsFacade"
		buttonText={`${!showGTMJsFacade ? 'Show' : 'Hide'} Script`}
		handleClick={() => (showGTMJsFacade = !showGTMJsFacade)}
		class="button-toggle"
	/>

	{#if showGTMJsFacade}
		<Prism language="javascript" code={gtmJsFacade} id="jsGTMFacade" copyScript />
	{/if}
</section>

<Comments />

<style lang="scss">
	:global(.code-example .button + .code-snippet-container) {
		margin-top: 30px;
		@media (max-width: 768px) {
			margin-bottom: 20px;
		}
	}
</style>
