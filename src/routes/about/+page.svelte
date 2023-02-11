<script lang="ts">
	import Selfie from '$lib/components/svgeez/triangle-me.svelte';
	import Seo from '$lib/components/seo/page-meta.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	let userClicked = false;

	function removeFacade() {
		userClicked = true;
	}
</script>

<Seo title="About" pageCanonicalUrl="/about" />

<h1 class="page-title">About</h1>

<Selfie />

<section class="personal-info">
	<p>
		Hey there! Thanks for stopping by. Allow me to tell you a little about myself. Born and raised
		in Minneapolis, Minnesota. Besides coding I like to <a
			href="https://www.instagram.com/p/dbNhDmFNgX/">skateboard</a
		>
		and
		<a href="https://youtu.be/qbZn07rZJ88">bike</a> everywhere all year round. Main purpose of this site
		is to organize my thoughts about web development. Show my work and to flex my self expression muscle.
	</p>
</section>
<section class="decorative-background">
	<header>
		<h2>Nerd Stuff</h2>
	</header>
	<ul class="list-item-circle">
		<li>
			This site fist launched in 2011. Originally it was artisnally written in html, css, and
			javascript. A few other formations occurred using Wordpress, Jekyll, and now Svelte.
		</li>
		<li>
			My IDE of choice is <a
				href="https://code.visualstudio.com/"
				target="_blank"
				rel="noopener noreferrer">Visual Studio Code</a
			>. Before VS Code I was a
			<a href="http://www.sublimetext.com/" target="_blank" rel="noopener noreferrer"
				>Sublime Text</a
			> guy.
		</li>
		<li>
			Favorite theme is <a
				href="https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme"
				>Material Design</a
			>
		</li>
		<li>
			Hosted my sites at <a
				href="https://mediatemple.net/"
				target="_blank"
				rel="noopener noreferrer">Media Temple</a
			>
			forever but now I enjoy the pain of
			<a href="https://aws.amazon.com/">Amazon Web Services</a>. And no I didn't use Amplify.
			Cobbled everything together myself.
		</li>
		<li>I love unix!</li>
		<li>
			Version Controlled with <a
				href="https://github.com/Blumed/portfolio"
				target="_blank"
				rel="noopener noreferrer">git</a
			>.
		</li>
		<li>
			Have used Trello sinced it launched to keep stuff organized. Great tool for keeping my site
			organized and get my ideas out. Feel free to <a
				href="https://trello.com/invite/b/7DQLWOSL/ATTI91d30ae988d635b50eecddd5f40da62dAF315B9C/portfolio-site"
				target="_blank"
				rel="noopener noreferrer">take a peek.</a
			>
		</li>
	</ul>
</section>
<section class="decorative-background">
	<header>
		<h2>Music</h2>
	</header>
	<p>
		One of the reasons I love web development is the ability to listen to music all day long. Here
		are some bands and songs I am currently listening to.
	</p>
	{#if !userClicked}
		<div class="spotify-facade">
			<Button
				type="button"
				class="button-spotify"
				buttonText="Click to Load"
				handleClick={removeFacade}
			/>
			<img id="spotify" src="https://images.cullanluther.com/spotify-facade.webp" alt="" />
		</div>
	{/if}
	{#if userClicked}
		<iframe
			id="iframe"
			style="border-radius:12px"
			title="Music I am into"
			src="https://open.spotify.com/embed/playlist/5VpvNuzeBvsMrCeQ8PfTpC?utm_source=generator&theme=0"
			width="100%"
			height="380"
			frameBorder="0"
			allowfullscreen={true}
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
		/>
	{/if}
</section>
<section class="decorative-background">
	<header>
		<h2>Social Media</h2>
	</header>
	<p>
		This section used to have my social media feeds. I was a pretty active Twitter user but as of
		the changes made in late 2022 I had to say goodbye. Once I find another social media outlit I
		support you can expect some more feeds again.
	</p>
</section>

<style lang="scss">
	h2 {
		font-size: 1.5rem;
		margin-bottom: 0;
	}
	.personal-info {
		background-color: var(--pure-white);
		padding: 50px 40px 40px;
		margin-bottom: 60px;
	}

	.spotify-facade {
		position: relative;
		height: 380px;
		overflow: hidden;
		&::after {
			content: '';
			position: absolute;
			z-index: 5;
			right: 0;
			height: 379px;
			width: 66px;
			top: 0;
			background-image: url('https://images.cullanluther.com/spotify-facade-side.webp');
		}

		img {
			position: relative;
			z-index: 1;
		}
	}
</style>
