

<script lang="ts">
	import Twitter from '$lib/Twitter/index.svelte';
	import Selfie from '$lib/Selfy/index.svelte';
	import Seo from '$lib/SEO/index.svelte';
</script>

<Seo title="About" pageCanonicalUrl="/about" />

<div class="container">
	<h1 class="page-title">About</h1>
	<Selfie />
	

	<section>
		<p>Hey there! Thanks for stopping by. Allow me to tell you a little about myself. Born and raised in Minneapolis, Minnesota. I am 100% self taught so I code a lot during my free time. Besides coding I like to <a href="https://www.instagram.com/p/dbNhDmFNgX/">skateboard</a> and <a href="https://youtu.be/qbZn07rZJ88">bike</a> everywhere all year round. Main purpose of this site is to organize my thoughts about web development. Show my work and to flex my self expression muscle.</p>
	</section>
	<section>
		<h2>Nerd Stuff</h2>
		<ul>
			<li>This site fist launched in 2011. Originally it was artisnally written in html, css, and javascript. Afew other formations occured using Wordpress, Jekyll, and now Svelte. </li>
			<li>My IDE of choice is <a href="https://code.visualstudio.com/">Visual Studio Code</a>. Before VS Code I was a <a href="http://www.sublimetext.com/">Sublime Text</a> guy.</li>
			<li>Favorite theme is <a href="https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme">Material Design</a></li>
			<li>Hosted my sites at <a href="https://mediatemple.net/">Media Temple</a> forever but now I enjoy the pain of <a href="https://aws.amazon.com/">Amazon Web Services</a>. The power and speed is addicting.</li>
			<li>I love unix!</li>
			<li>Version Controlled with <a href="https://github.com/Blumed/portfolio">git</a>.</li>
		</ul>
	</section>
	<section>
		<h2>Music</h2>
		<p>One of the reasons I love web development is the ability to listen to music all day long. Here are some bands and songs I am currently listening to.</p>
		<iframe title="Music I am into" src="https://open.spotify.com/embed/playlist/5VpvNuzeBvsMrCeQ8PfTpC?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>		</section>
	<section>
		<h2>Twitter</h2> 
		<Twitter/>
	</section>

	</div>

<style>
	h2 {
		font-size: 1.5rem;
	}
	ul {
		list-style: circle;
		padding-left: 26px;
	}
</style>
