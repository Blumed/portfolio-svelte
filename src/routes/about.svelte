

<script lang="ts">
	import Twitter from '$lib/Twitter/index.svelte';
	import Selfie from '$lib/Selfy/index.svelte';

	export async function postData(url = 'https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=copcircles&limit=12&api_key=f7816da1f6c9d00d09ee8e5e92c935c6&format=json&callback=myTopArtists', data = {}) {
		const response = await fetch(url, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
			'Content-Type': 'application/json'
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify(data) // body data type must match "Content-Type" header
	})
  	return response.text();
  }

	console.log(typeof postData());
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="container">
	<h1 class="page-title">About</h1>
<Selfie />
	

		<section>
			<p>Hey there! Thanks for stopping by. Allow me to tell you a little about myself. Born and raised in Minneapolis, Minnesota. I am 100% self taught so I code a lot during my free time. Besides coding I like to <a href="https://www.instagram.com/p/dbNhDmFNgX/">skateboard</a> and <a href="https://youtu.be/qbZn07rZJ88">bike</a> everywhere all year round. Main purpose of this site is to organize my thoughts about web development. Show my work and to flex my self expression muscle.</p>
		</section>
		<section>
			<h3>Nerd Stuff</h3>
			<ul>
				<li><a href="https://developers.google.com/web/progressive-web-apps/">Progressive Web Apps</a> are sweet. My site just so happens to be one.</li>
				<li>Currently using <a href="https://github.com/sondr3/generator-jekyllized">Jekyllized</a>, which is a <a href="http://jekyllrb.com">Jekyll</a> and <a href="http://gulpjs.com/">gulp</a> build system.</li>
				<li>My IDE of choice up untill recently was <a href="http://www.sublimetext.com/">Sublime Text 3</a> and now I have joined the darkside <a href="https://code.visualstudio.com/">Visual Studio Code</a>.</li>
				<li>Favorite theme is <a href="https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme">Material Design</a></li>
				<li>Hosted my sites at <a href="https://mediatemple.net/">Media Temple</a> for ever but recently moved them over to <a href="https://aws.amazon.com/">Amazon Web Services</a>. The power and speed is addicting.</li>
				<li>I love unix!</li>
				<li>Version Controlled with <a href="https://github.com/Blumed/portfolio">git</a>.</li>
				<li>My fuel of choice is the blackest office coffee while listening to <a href="http://4ad.com/artists/arielpinkshauntedgraffiti">Ariel Pinks Haunted Graffiti</a>.</li>
				<li>If you would like to know even more nerdy facts about my site feel free to peep my <a href="/humans.txt">humans.txt</a> file.</li>
				<li>This site has a public <a href="https://trello.com/b/WXxWYHWj">Trello board</a> if you have nothing else going on feel free to check it out.</li>
			</ul>
		</section>
		<!-- <section>
			<h3>Music</h3>
			<div class="music-list">
				<div id="row-one"></div>
			</div>
		</section> -->
		<section>
			<h3>Twitter</h3> 
			<Twitter/>
		</section>
	
	</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
