<script>
	import Button from "$lib/components/Button.svelte";
	import Seo from "$lib/components/seo/page-meta.svelte";
	import { Tab, TabList, TabPanel, Tabs } from "$lib/components/tabable";
	import { workingYears } from "$lib/constaints";
</script>

<Seo
	title="Freelancing and Consultation"
	pageCanonicalUrl="/freelancing-and-consultation"
/>

<h1>Freelancing and Consultation</h1>
<section class="clean-background">
	<h2><strong>A little about myself</strong></h2>
	<p>
		I have been a developer for {workingYears} years. Most of my career I have
		been focused on large and small marketing sites. I really enjoy solving the
		types of problems that arise from creating performant informative websites
		and applications. Spent 6 years working at various agencies where time and
		performance matter. For the last 7 years I have been working at start up
		working and maintaining a large web app.
	</p>
</section>

<section class="decorative-background">
	<h2><strong>Let's build something together</strong></h2>
	<p>
		Over the years I have worked on a wide breath of projects and
		technologies. I have created full Javascript banner ads to ecommerce
		sites.
	</p>
	<Tabs>
		<TabList>
			<Tab>Project Types</Tab>
			<Tab>Technologies</Tab>
		</TabList>
		<TabPanel>
			<ul>
				<li>Site Audit ( Performance, SEO, Security)</li>
				<li>SEO Strategy</li>
				<li>Site Migration</li>
				<li>Single Page Site or Applications</li>
				<li>UX/Ui Updates</li>
				<li>Responsive Design</li>
				<li>Micro Automations ( Bookmarklets, Browser Extensions )</li>
				<li>SSL Certificate Management</li>
				<li>DNS</li>
				<li>macOS Applications</li>
			</ul>
		</TabPanel>
		<TabPanel>
			<ul class="list-large">
				<li>React</li>
				<li>Redux</li>
				<li>Angular</li>
				<li>jQuery</li>
				<li>Typescript</li>
				<li>React Testing Library</li>
				<li>Gatsby</li>
				<li>GraphQL</li>
				<li>Svelte</li>
				<li>Nextjs</li>
				<li>PHP</li>
				<li>Wordpress</li>
				<li>Scss</li>
				<li>Webpack</li>
				<li>Unix</li>
				<li>AWS</li>
				<li>Shopify</li>
				<li>Square Space</li>
				<li>Green Sock</li>
				<li>Web Components</li>
				<li>D3</li>
				<li>Gatsbyjs</li>
				<li>Knockoutjs</li>
				<li>Backbonejs</li>
				<li>Python</li>
				<li>Jekyll</li>
				<li>Hugo</li>
				<li>Golang</li>
				<li>Canvas</li>
				<li>Charts &amp; Graph frameworks</li>
			</ul>
		</TabPanel>
	</Tabs>

	<div class="buttons">
		<Button href="/work" buttonText="View Work" />
		<Button href="/contact" buttonText="Let's Chat" />
	</div>
</section>

<style>
	.buttons {
		display: grid;
		gap: 20px;
		grid-template-columns: auto auto;
		justify-content: flex-start;
		align-items: flex-end;
	}

	.list-large {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0 20px;
	}

	@media (max-width: 38rem) {
		.list-large {
			grid-template-columns: 1fr;
		}
	}
</style>
