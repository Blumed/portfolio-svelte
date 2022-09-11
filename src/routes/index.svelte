<script>
	export const prerender = true;
	import Seo from '$lib/SEO/index.svelte';
	import { differenceInYears } from 'date-fns';
	const workingYears = differenceInYears(new Date(), new Date(2009, 1, 1));
</script>

<Seo title="Home" pageCanonicalUrl="/" />

<div class="container">
	<h1>Cullan Luther</h1>
	<h2><strong>Web Developer</strong></h2>
	<p>I have been a developer for {workingYears} years. Most of my career I have been focused on marketing sites. Constructing websites using animations, clean design, SEO, and accesability.
		 I have been turning my attention toward application development recently, but static sites are my jam.</p>

	<p>Currently open to small projects and consulting. If you have a need for a new site or you need a hand with some updates to your site.</p>
	<a class="button" href="/contact"><span class="text-center">Let's Chat</span></a>
	<h3>List of technologies am comfertable with:</h3>
	<ul>
		<li>React</li>
		<li>Typescript</li>
		<li>React Testing Library</li>
		<li>Gatsby</li>
		<li>Sveltkit</li>
		<li>PHP</li>
		<li>Wordpress</li>
		<li>Scss</li>
		<li>Webpack</li>
		<li>Unix</li>
		<li>AWS</li>
		<li>Gulp</li>
	</ul>
</div>

<style>

	h1 {
		margin: 0;
		font-size: 2.5rem;
		letter-spacing: 0.5vw;
		color: white;
		/* background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Original_William_Morris%27s_patterns%2C_digitally_enhanced_by_rawpixel_00015.jpg/1024px-Original_William_Morris%27s_patterns%2C_digitally_enhanced_by_rawpixel_00015.jpg'); */
		background: url('https://freesvg.org/img/1599145392black-white-zigzag-pattern.png');
		background: url('https://media.giphy.com/media/3oriNZaOPAsI3eX70Y/giphy.gif');
		background-size: auto 200%;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: shine 8s linear infinite;
		text-shadow: 2px 5px 0 rgba(227, 166, 194, 0.562);
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
