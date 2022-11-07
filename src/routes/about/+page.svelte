<script lang="ts">
	import Twitter from '$lib/Twitter/index.svelte';
	import Selfie from '$lib/Selfy/index.svelte';
	import Seo from '$lib/SEO/index.svelte';

	let userClicked = false;

	function removeFacade() {
		userClicked = true;
	}
</script>

<Seo title="About" pageCanonicalUrl="/about" />

<div class="container">
	<h1 class="page-title">About</h1>

	<Selfie />

	<section>
		<p>
			Hey there! Thanks for stopping by. Allow me to tell you a little about myself. Born and raised
			in Minneapolis, Minnesota. I am 100% self taught so I code a lot during my free time. Besides
			coding I like to <a href="https://www.instagram.com/p/dbNhDmFNgX/">skateboard</a> and
			<a href="https://youtu.be/qbZn07rZJ88">bike</a> everywhere all year round. Main purpose of this
			site is to organize my thoughts about web development. Show my work and to flex my self expression
			muscle.
		</p>
	</section>
	<section>
		<header>
			<h2>Nerd Stuff</h2>
		</header>
		<ul>
			<li>
				This site fist launched in 2011. Originally it was artisnally written in html, css, and
				javascript. A few other formations occured using Wordpress, Jekyll, and now Svelte.
			</li>
			<li>
				My IDE of choice is <a href="https://code.visualstudio.com/">Visual Studio Code</a>. Before
				VS Code I was a <a href="http://www.sublimetext.com/">Sublime Text</a> guy.
			</li>
			<li>
				Favorite theme is <a
					href="https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme"
					>Material Design</a
				>
			</li>
			<li>
				Hosted my sites at <a href="https://mediatemple.net/">Media Temple</a> forever but now I
				enjoy the pain of <a href="https://aws.amazon.com/">Amazon Web Services</a>. And no I didn't
				use Amplify. Cobbled everything together myself.
			</li>
			<li>I love unix!</li>
			<li>Version Controlled with <a href="https://github.com/Blumed/portfolio">git</a>.</li>
		</ul>
	</section>
	<section>
		<header>
			<h2>Music</h2>
		</header>
		<p>
			One of the reasons I love web development is the ability to listen to music all day long. Here
			are some bands and songs I am currently listening to.
		</p>
		{#if !userClicked}
			<div class="spotify-facade">
				<button type="button" class="button lite" on:click={removeFacade}>Click To Load</button>
				<img id="spotify" src="/spotify-facade.webp" alt="" />
			</div>
		{/if}
		{#if userClicked}
			<iframe
				id="iframe"
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
	<section>
		<header>
			<h2>Social Media</h2>
		</header>
		<p>
			This section used to have my social media feeds. I was a pretty active Twitter user but as of
			the changes made in late 2022 I had to say goodbye. Once I find another social media outlit I
			support you can expect some more feeds again.
		</p>
	</section>
</div>

<style lang="scss">
	h2 {
		font-size: 1.5rem;
		margin-bottom: 0;
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
			background-image: url('/spotify-facade-side.webp');
		}
		.button {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-color: #fff;
			z-index: 2;
			color: #0a0a0a;
			background: white;
		}
		img {
			position: relative;
			z-index: 1;
		}
	}
	ul {
		list-style: circle;
		padding-left: 26px;
		li {
			line-height: 1.6rem;
			margin-bottom: 5px;
		}
	}
</style>
