<script>
	//export const prerender = true;
	import Seo from '$lib/SEO/index.svelte';
	import { differenceInYears } from 'date-fns';
	const workingYears = differenceInYears(new Date(), new Date(2009, 1, 1));
</script>

<Seo title="Home" pageCanonicalUrl="/" />

<div class="container">
	<h1>Hi, my name is Cullan and I am web developer.</h1>
	<h2><strong>A little about myself</strong></h2>
	<p>
		I have been a developer for {workingYears} years. Most of my career I have been focused on large
		and small marketing sites. I really enjoy solving the types of problems that arise from creating
		performant informative websites. Past few years I have been creating web applications, which has
		been a fun skill to learn.
	</p>
	<h2><strong>Need a site audit?</strong></h2>
	<p>
		It is always helpful to have another set of eyes on site performance. So many things can slow
		down a site and most of them are created out of good intentions. Large assets, huge javascript
		bundles, server configs, third party scripts, and so much more. The fact is slow sites effect a
		bottom line.
	</p>
	<h2>Freelance and Consulting</h2>
	<p>
		Currently open to small projects. If you have a need for a new site or you can't get a hold of
		your previous developer feel free to drop me a line. A loose list of technologies I use
		regularly:
		<select>
			<option>React</option>
			<option>Typescript</option>
			<option>React Testing Library</option>
			<option>Gatsby</option>
			<option>GraphQL</option>
			<option>Sveltkit</option>
			<option>PHP</option>
			<option>Wordpress</option>
			<option>Scss</option>
			<option>Webpack</option>
			<option>Unix</option>
			<option>AWS</option>
			<option>Shopify</option>
		</select>
	</p>
	<a class="button" href="/contact"><span class="text-center">Let's Chat</span></a>
</div>

<style type="scss">
	h1 {
		margin: 0;
		font-size: 2.5rem;
		letter-spacing: 0.5vw;
		color: white;
		background: url('/home/zigzagz.webp');
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
		&:after {
			content: 'Hi, my name is Cullan and I am web developer.';
			position: absolute;
			left: -3px;
			top: -2px;
			z-index: 1;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
	}
	@keyframes shine {
		from {
			background-position: center 0;
		}
		to {
			background-position: center 200%;
		}
	}
	p {
		margin-bottom: 30px;
	}
	.button {
		color: #000;
		display: inline-block;
		margin-bottom: 15px;
	}
	@media (min-width: 768px) {
		h1 {
			font-size: 4rem;
		}
	}
</style>
