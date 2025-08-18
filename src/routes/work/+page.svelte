<script lang="ts">
	export const pageName = "";

	import { scale } from "svelte/transition";
	import Seo from "$lib/components/seo/page-meta.svelte";
	import { Tab, TabList, TabPanel, Tabs } from "$lib/components/tabable";
	import data from "$lib/data/work.json";

	const dataAll = data.data.map((item) => item);
	const projects = data.data.filter((item) => item.type === "project");
	const sites = data.data.filter((item) => item.type === "site");
</script>

<Seo title="Work" pageCanonicalUrl="/work" />

<h1 class="page-title">Work</h1>
<p class="clean-background">
	There are many projects that no longer exist but here are few recent or
	currently active projects. Started working on websites in 2009 so the list
	of things that no longer exist is long.
</p>
<Tabs>
	<TabList>
		<Tab>All</Tab>
		<Tab>Projects</Tab>
		<Tab>Sites</Tab>
	</TabList>
	<div class="articles">
		<TabPanel>
			{#each dataAll as all (all.title)}
				<article class="work">
					<a
						href={all.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={all.image} alt={all.alt} />
					</a>
					<div class="work-info">
						<h2>
							<a
								href={all.link}
								target="_blank"
								rel="noopener noreferrer">{all.title}</a
							>
						</h2>
						<p>{all.copy}</p>
						<h3 class="work-type">Type: <span>{all.type}</span></h3>
						{#if all.repo}
							<h3 class="work-type">
								Repo: <a
									href={all.repo}
									target="_blank"
									rel="noopener noreferrer">Check it out</a
								>
							</h3>
						{/if}
						<h3>Url: <a href={all.link}>Link</a></h3>
						<figure>
							<figcaption class="list-title">
								Technologies:
							</figcaption>
							<ul>
								{#each all.technologies as technology}
									<li>{technology}</li>
								{/each}
							</ul>
						</figure>
					</div>
				</article>
			{/each}
		</TabPanel>
		<TabPanel>
			{#each projects as project (project.title)}
				<article class="work">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							loading="lazy"
							src={project.image}
							alt={project.alt}
						/>
					</a>
					<div class="work-info">
						<h2>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer">{project.title}</a
							>
						</h2>
						<p>{project.copy}</p>
						<h3 class="work-type">
							Repo: <a
								href={project.repo}
								target="_blank"
								rel="noopener noreferrer">Check it out</a
							>
						</h3>
						<h3>Url: <a href={project.link}>Link</a></h3>
						<figure>
							<figcaption class="list-title">
								Technologies:
							</figcaption>
							<ul>
								{#each project.technologies as technology}
									<li>{technology}</li>
								{/each}
							</ul>
						</figure>
					</div>
				</article>
			{/each}
		</TabPanel>

		<TabPanel>
			{#each sites as site (site.title)}
				<article class="work">
					<a
						href={site.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img loading="lazy" src={site.image} alt={site.alt} />
					</a>
					<div class="work-info">
						<h2>
							<a
								href={site.link}
								target="_blank"
								rel="noopener noreferrer">{site.title}</a
							>
						</h2>
						<p>{site.copy}</p>
						<h3 class="work-type">
							Repo: <a
								href={site.repo}
								target="_blank"
								rel="noopener noreferrer">Check it out</a
							>
						</h3>
						<h3>Url: <a href={site.link}>Link</a></h3>
						<figure>
							<figcaption class="list-title">
								Technologies:
							</figcaption>
							<ul>
								{#each site.technologies as technology}
									<li>{technology}</li>
								{/each}
							</ul>
						</figure>
					</div>
				</article>
			{/each}
		</TabPanel>
	</div>
</Tabs>

<style>
	.work {
		transition: height 0.5s ease-in-out;
		border-radius: 24px;
		border: 2px solid var(--primary-color);
		box-shadow: 6px 6px 0 0 var(--primary-color);
		overflow: clip;
		margin-bottom: 30px;
	}
	.work > a {
		min-height: 200px;
		display: block;
		background-color: white;
	}
	.work img {
		max-width: 100%;
		min-height: 200px;
		height: auto;
		display: block;
		object-fit: contain;
	}
	.work figure {
		margin: 0;
		background-color: var(--pure-white);
	}
	.work h2 {
		font-size: 1.5rem;
		font-weight: bolder;
		color: var(--pure-black);
	}
	.work h3 {
		font-size: 1.125rem;
	}
	.work h2 a {
		color: inherit;
	}
	.work-type span {
		text-transform: capitalize;
		color: #666;
	}
	.work figure {
		background-color: var(--pure-white);
	}
	.work .list-title {
		display: inline-flex;
		margin-top: 0;
	}
	.work ul {
		list-style: none;
		display: inline-flex;
		margin-top: 0;
		flex-wrap: wrap;
		margin-bottom: 1rem;
		padding-left: 0;
	}
	.work li {
		color: #666;
	}
	.work li:not(:last-child):after {
		content: ",";
		margin-right: 5px;
	}
	.work-info {
		background-color: var(--pure-white);
		padding: 20px 40px;
		height: 100%;
		height: -webkit-fill-available;
	}
	.work-info h3 {
		margin-block: 0.5rem;
	}
	.articles {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
		margin-bottom: 60px;
	}
	@media (max-width: 768px) {
		.articles {
			grid-template-columns: 1fr;
		}
	}
</style>
