<script>
	import Button from "$lib/components/Button.svelte";
	import Seo from "$lib/components/Seo.svelte";
</script>

<Seo title="Home" pageCanonicalUrl="/" />

<svelte:head>
	<link rel="preconnect" href="https://images.cullanluther.com" crossorigin />
</svelte:head>

<section>
	<h1 class="text-shadows">Hi, my name is Cullan and I am a web developer</h1>

	<p>UX Strategy, SEO and Marketing Development, Web Applications.</p>

	<Button
		class="button-link"
		href="/freelancing-and-consultation"
		buttonText="Need Something Built?"
	/>
</section>

<style lang="scss">
	.text-shadows {
		text-shadow:
			2px 2px 0 var(--secondary-color),
			4px 4px 0 var(--primary-color);
		font-size: max(2.875rem, min(9vw, 4.625rem));
		margin: 0;
		color: var(--primary-color);
		letter-spacing: 0.2vw;
	}
	:global(.sidebar-checkbox:checked + .sidebar + .container .its-me) {
		right: -100%;
		transform: translateX(-14rem);
	}

	p {
		background-color: var(--pure-white);
		display: table;
		padding-right: 15px;
		margin-bottom: 30px;
		margin-top: 60px;
	}

	@media (min-width: 769px) {
		h1 {
			font-size: 4rem;
		}
		p {
			margin-top: 0;
		}
	}
</style>
