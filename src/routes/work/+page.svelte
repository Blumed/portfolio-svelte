<script lang="ts">
	export const pageName = "";
	import Seo from "$lib/components/Seo.svelte";
	import { Tab, TabList, TabPanel, Tabs } from "$lib/components/tabable";
	import work from "$lib/data/work.json";
	import capella from "$lib/assets/images/company/capella_university_logo.jpg";
	import sleepnumber from "$lib/assets/images/company/sleep_number_logo.jpg";
	import hellomoon from "$lib/assets/images/company/hellomoon_logo.jpg";
	import horizontal from "$lib/assets/images/company/horizontalinc_logo.jpg";
	import wheniwork from "$lib/assets/images/company/wheniwork_logo.jpg";
	import agreatdayfarm from "$lib/assets/images/company/a_great_day_farm_foundation_logo.jpg";
	import caribou from "$lib/assets/images/company/caribou_coffee_logo.jpg";
	import sunabloom from "$lib/assets/images/company/sunabloom_logo.jpg";
	import space2burn from "$lib/assets/images/company/space2burn_new_media_logo.jpg";
	import levolor from "$lib/assets/images/company/levolor_logo.jpg";
	import raymondjames from "$lib/assets/images/company/raymond_james_financial_inc_logo.jpg";
	import newell from "$lib/assets/images/company/newell_rubbermaid_logo.jpg";
	import subzerowolfcove from "$lib/assets/images/company/sub_zero_wolf_cove_logo.jpg";
	import LinkedInIcon from "$lib/assets/svgeez/icon-linkedIn.svelte";

	const dataAll = work.data.map((item) => item);
	const projects = work.data.filter((item) => item.type === "project");
	const sites = work.data.filter((item) => item.type === "site");
	const employerLogos = [
		wheniwork,
		sunabloom,
		agreatdayfarm,
		caribou,
		subzerowolfcove,
		raymondjames,
		horizontal,
		levolor,
		newell,
		hellomoon,
		sleepnumber,
		capella,
		space2burn,
	];
</script>

<Seo title="Work" pageCanonicalUrl="/work" />

<svelte:head>
	<link rel="preconnect" href="https://images.cullanluther.com" />
</svelte:head>

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
		{#each employerLogos as logo}
			<li><img class="company-logo" src={logo} alt="" /></li>
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

		& li {
			background-color: var(--pure-white);
			padding: 0;
			border-radius: 4px;
			border: 2px solid var(--primary-color);
			box-shadow: 4px 4px 0 0 var(--primary-color);
			margin-bottom: 0;
			height: 64px;
			width: 64px;
			overflow: clip;
		}
		& img {
			width: 100%;
		}
	}

	@media (max-width: 768px) {
		.articles {
			grid-template-columns: 1fr;
		}
	}
</style>
