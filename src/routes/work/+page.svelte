<script lang="ts">
	export const pageName = '';
	import { Tabs, TabList, TabPanel, Tab } from '$lib/components/tabs/tabs';
	import data from '$lib/data/work.json';
	import { scale } from 'svelte/transition';
	import Seo from '$lib/components/seo/page-meta.svelte';

	const dataAll = data.data.map((item) => item);
	const projects = data.data.filter((item) => item.type === 'project');
	const sites = data.data.filter((item) => item.type === 'site');
</script>

<Seo title="Work" pageCanonicalUrl="/work" />

<h1 class="page-title">Work</h1>
<p class="clean-background">
	A few note worthy projects and sites I have created over the years. I am currently in the middle
	of adding more to this page, so stay tuned.
</p>
<Tabs>
	<TabList>
		<Tab>All</Tab>
		<Tab>Projects</Tab>
		<Tab>Sites</Tab>
	</TabList>
	<TabPanel>
		{#each dataAll as all}
			<section class="work" in:scale out:scale>
				<a href={all.link} target="_blank" rel="noopener noreferrer">
					<figure>
						<img loading="lazy" src={all.image} alt={all.alt} />
					</figure>
				</a>
				<div class="work-info">
					<h2><a href={all.link} target="_blank" rel="noopener noreferrer">{all.title}</a></h2>
					<p>{all.copy}</p>
					<h3 class="work-type">Type: <span>{all.type}</span></h3>
					{#if all.repo}
						<h3 class="work-type">
							Repo: <a href={all.repo} target="_blank" rel="noopener noreferrer">Check it out</a>
						</h3>
					{/if}
					<h3>Url: <a href={all.link}>Link</a></h3>
					<h3 class="list-title">Technologies:</h3>
					<ul>
						{#each all.technologies as technology}
							<li>{technology}</li>
						{/each}
					</ul>
				</div>
			</section>
		{/each}
	</TabPanel>
	<TabPanel>
		{#each projects as project}
			<section class="work" in:scale out:scale>
				<a href={project.link} target="_blank" rel="noopener noreferrer">
					<figure>
						<img loading="lazy" src={project.image} alt={project.alt} />
					</figure>
				</a>
				<div class="work-info">
					<h2>
						<a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
					</h2>
					<p>{project.copy}</p>
					<h3 class="work-type">
						Repo: <a href={project.repo} target="_blank" rel="noopener noreferrer">Check it out</a>
					</h3>
					<h3>Url: <a href={project.link}>Link</a></h3>
					<h3 class="list-title">Technologies &mdash;</h3>
					<ul>
						{#each project.technologies as technology}
							<li>{technology}</li>
						{/each}
					</ul>
				</div>
			</section>
		{/each}
	</TabPanel>

	<TabPanel>
		{#each sites as site}
			<section class="work" in:scale out:scale>
				<a href={site.link} target="_blank" rel="noopener noreferrer">
					<figure>
						<img loading="lazy" src={site.image} alt={site.alt} />
					</figure>
				</a>
				<div class="work-info">
					<h2><a href={site.link} target="_blank" rel="noopener noreferrer">{site.title}</a></h2>
					<p>{site.copy}</p>
					<h3>Url: <a href={site.link}>Link</a></h3>
					<h3 class="list-title">Technologies &mdash;</h3>
					<ul>
						{#each site.technologies as technology}
							<li>{technology}</li>
						{/each}
					</ul>
				</div>
			</section>
		{/each}
	</TabPanel>
</Tabs>

<style>
	.work {
		transition: height 0.5s ease-in-out;
		border-radius: 24px;
		border: 2px solid var(--primary-color);
		box-shadow: 6px 6px 0 0 var(--primary-color);
		overflow: hidden;
		margin-bottom: 30px;
	}
	.work > a {
		overflow: hidden;
		background-color: var(--primary-color);
	}
	.work img {
		max-width: 100%;
		height: auto;
		display: block;
	}
	.work figure {
		margin: 0;
		background-color: var(--primary-color);
	}
	.work h2 {
		font-size: 1.5rem;
		font-weight: bolder;
		color: var(--pure-black);
	}
	.work h2 a {
		color: inherit;
	}
	.work-type span {
		text-transform: capitalize;
		color: #666;
	}
	.work .list-title {
		display: inline-flex;
		margin-top: 0;
	}
	.work ul {
		display: inline-flex;
		margin-top: 0;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}
	.work li {
		color: #666;
	}
	.work li:not(:last-child):after {
		content: ',';
		margin-right: 5px;
	}
	.work-info {
		background-color: var(--pure-white);
		padding: 40px;
	}
	@media (max-width: 768px) {
		.work-info {
			background-color: var(--pure-white);
			padding: 20px 10px;
		}
	}
</style>
