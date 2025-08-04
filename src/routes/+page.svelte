<script>
import { differenceInYears } from "date-fns";
import Button from "$lib/components/Button.svelte";
import Seo from "$lib/components/seo/page-meta.svelte";

const workingYears = differenceInYears(new Date(), new Date(2009, 1, 1));
</script>

<Seo title="Home" pageCanonicalUrl="/" />
<section>
	<h1>Hi, my name is Cullan and I am a web developer.</h1>

	<p>UX Strategy, SEO and Marketing Development, Web Applications.</p>

	<Button href="/freelancing-and-consultation" buttonText="Need Something Built?" />
</section>

<picture>
	<source srcSet="https://images.cullanluther.com/its-small-me.webp" media="(max-width: 768px)" />
	<img
		class="its-me"
		src="https://images.cullanluther.com/its-me.webp"
		alt="Cullan Luther Smiling At You"
	/>
</picture>

<style lang="scss">
	h1 {
		margin: 0;
		font-size: 2.5rem;
		letter-spacing: 0.5vw;
		color: white;
		background-size: auto 200%;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		animation: shine 8s linear infinite;
		text-shadow: -1px 1px 0 white;
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: black;
		font-family: arial;
		position: relative;
		margin-bottom: 30px;
		&:after {
			content: 'Hi, my name is Cullan and I am a web developer.';
			position: absolute;
			left: -3px;
			top: -2px;
			z-index: 1;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
	}
	:global(.sidebar-checkbox:checked + .sidebar + .container .its-me) {
		right: -100%;
		transform: translateX(-14rem);
	}
	.its-me {
		all: unset;
		max-width: 1128px;
		width: auto;
		position: fixed;
		bottom: 0;
		right: 0;
		z-index: -1;
		filter: grayscale(1);
		display: block;
	}

	p {
		background-color: var(--pure-white);
		display: table;
		padding-right: 15px;
		margin-bottom: 30px;
	}

	@media (min-width: 769px) {
		h1 {
			font-size: 4rem;
		}
	}
	@media (max-width: 768px) {
		.its-me {
			top: 30%;
			right: -569px;
		}
	}
</style>
