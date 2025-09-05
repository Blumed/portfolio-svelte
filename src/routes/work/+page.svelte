<script lang="ts">
	import { browser } from "$app/environment";
	import Seo from "$lib/components/Seo.svelte";
	import { Tab, TabList, TabPanel, Tabs } from "$lib/components/tabable";
	import work from "$lib/data/work.json";
	import employers from "$lib/data/employers.ts";
	import PlusIcon from "$lib/assets/svgeez/icon-plus.svelte";

	export const pageName = "";

	const dataAll = work.data.map((item) => item);
	const projects = work.data.filter((item) => item.type === "project");
	const sites = work.data.filter((item) => item.type === "site");
	const iconsSvg =
		"font-size: 1rem; width: 24px; height: 24px; position: absolute; right: -32px;top: 40px; color: var(--pure-white);";
</script>

<Seo title="Work" pageCanonicalUrl="/work" />

<h1 class="page-title">Work</h1>
<p class="clean-background">
	There are many projects that no longer exist but here are few recent or
	currently active projects. Started working on websites in 2009 so the list
	of things that no longer exist is long.
</p>

<section class="decorative-background">
	<h2>Work history</h2>
	<p>
		Worked with the following companies as a web developer in some capacity.
		Some of them are previous employers and others I have done freelance or
		contract work for.
	</p>
	<ul class="company-logos">
		{#each employers as employer, i}
			<li>
				<button
					type="button"
					onclick={() =>
						browser &&
						document.getElementById(`dialog-${i}`).showModal()}
					><img
						class="company-logo"
						src={employer.logo}
						alt={employer.alt}
					/></button
				>
			</li>
		{/each}
	</ul>
</section>
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
								{all.listTitle}:
							</figcaption>
							<ul>
								{#each all.listItems as listItem}
									<li>{listItem}</li>
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
								{project.listTitle}:
							</figcaption>
							<ul>
								{#each project.listItems as listItem}
									<li>{listItem}</li>
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
								{site.listTitle}:
							</figcaption>
							<ul>
								{#each site.listItems as listItem}
									<li>{listItem}</li>
								{/each}
							</ul>
						</figure>
					</div>
				</article>
			{/each}
		</TabPanel>
	</div>
</Tabs>

{#each employers as employer, i}
	<dialog id={`dialog-${i}`}>
		<button
			type="button"
			class="button button-close"
			onclick={() =>
				browser && document.getElementById(`dialog-${i}`).close()}
			><span class="sr-only">Close Dialog</span><PlusIcon
				style={`${iconsSvg} rotate: 45deg;`}
			/></button
		>
		<div class="dialog-innerds">
			<header>
				<h2>{employer.who}</h2>
				<img src={employer.logo} alt={employer.alt} loading="lazy" />
			</header>
			<p class="employer-when">
				<strong>When: </strong><small>{employer.when}</small>
			</p>
			<p class="employer-title">
				<strong>Title: </strong><small>{employer.title}</small>
			</p>
			<h3>Details</h3>
			<p>{employer.what}</p>
			{#if employer.listItems[0] !== null}
				<details>
					<summary>{employer.listTitle}</summary>
					<ul>
						{#each employer.listItems as item}
							<li class="employer-list-item">{item}</li>
						{/each}
					</ul>
				</details>
			{/if}
		</div>
	</dialog>
{/each}

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
	section.decorative-background {
		margin-bottom: 60px;
	}

	.company-logos {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
		list-style: none;
		padding-left: 0;

		& button {
			background-color: var(--pure-white);
			padding: 0;
			border-radius: 5px;
			border: 2px solid var(--primary-color);
			box-shadow: 4px 4px 0 0 var(--primary-color);
			margin-bottom: 0;
			height: 64px;
			width: 64px;
			overflow: clip;
			cursor: pointer;
		}
		& img {
			width: 100%;
		}
	}

	dialog {
		background-color: var(--pure-white);
		padding: 0;
		border: 2px solid var(--pure-black);
		max-width: 50rem;
		width: 100%;

		& .dialog-innerds {
			position: relative;
			padding: 0 30px 30px;
			color: var(--pure-black);
		}

		header {
			display: flex;
			align-items: center;
			gap: 1rem;
			margin-bottom: 15px;
			& h2 {
				margin-block: 0;
			}
			& img {
				width: 50px;
			}
		}

		p {
			margin: 0;
		}
		strong {
			margin-right: 0.5rem;
		}
		details {
			margin-top: 30px;
			cursor: pointer;
		}
	}

	.button-close {
		width: 75px;
		height: 60px;
		border-style: solid;
		border-width: 0 75px 75px 0px;
		border-color: transparent transparent var(--pure-black) transparent;
		rotate: -180deg;
		background-color: transparent;
		display: flex;
		justify-content: flex-end;
		margin-left: auto;
		padding: 0;
		cursor: pointer;
		:global(&:hover svg) {
			transition: var(--global-transition);
			transform: scale(1.2);
		}
	}

	@media (max-width: 768px) {
		.articles {
			grid-template-columns: 1fr;
		}
		dialog .dialog-innerds {
			padding: 0 15px 30px;
		}
	}
</style>
