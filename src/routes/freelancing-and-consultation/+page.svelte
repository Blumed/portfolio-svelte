<script>
	import Seo from '$lib/components/seo/page-meta.svelte';
	import { differenceInYears } from 'date-fns';
	import Button from '$lib/components/buttons/button.svelte';
	const workingYears = differenceInYears(new Date(), new Date(2009, 1, 1));
</script>

<Seo title="Freelancing and Consultation" pageCanonicalUrl="/freelancing-and-consultation" />

<h1>Freelancing and Consultation</h1>
<section class="decorative-background">
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
	<h2><strong>Freelance and Consulting</strong></h2>
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
	<Button href="/work" buttonText="View Work" />
	<Button href="/contact" buttonText="Let's Chat" />
</section>

<style>
	select {
		border-top: 0;
		border-left: 0;
		border-right: 0;
		background-color: transparent;
		color: inherit;
		appearance: none;
		border-radius: 0;
		border-bottom: 1px solid currentColor;
	}
</style>
