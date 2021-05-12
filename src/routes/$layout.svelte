<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
</script>


		<!-- <a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a> -->
		<input type="checkbox" class="sidebar-checkbox" id="sidebar-checkbox">
	
	<div class="sidebar" id="sidebar">
		<nav class="sidebar-navigation">
			<ul class="sidebar-items">
				<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
				<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
				<li class:active={$page.path === '/work'}><a sveltekit:prefetch href="/work">Work</a></li>
				<li class:active={$page.path === '/contact'}><a sveltekit:prefetch href="/contact">Contact</a></li>
			</ul>
		  <!-- <a class="sidebar-nav-item{% if page.title == "Web Developer" %} active{% endif %}" href="/">Home<i class="fa fa-circle-thin"></i><i class="fa fa-circle"></i></a>
	  

		  <!-- <div class="social">
			<a class="sidebar-nav-social-item" href="https://github.com/blumed"><i class="fa fa-github"></i></a>
			<a class="sidebar-nav-social-item" href="{{ site.author.twitter }}"><i class="fa fa-twitter"></i></a>
			<a class="sidebar-nav-social-item" href="http://codepen.io/Blummed/"><i class="fa fa-codepen"></i></a>
		  </div> -->
		  <div class="social">
				  <a class="sidebar-nav-social-item" href="http://feeds.feedburner.com/CullanLuther">
					<i class="fa fa-rss"></i>
				  </a>
				  <a class="sidebar-nav-social-item" href="/humans.txt">
					<i class="fa fa-male"></i>
				  </a>
				  <a class="sidebar-nav-social-item" href="https://www.linkedin.com/in/cullan-luther-55812234">
					<i class="fa fa-linkedin-square"></i>
				  </a>
		  </div>
		  
		</nav>
	  
		<div class="sidebar-btn">
		<a class="btn is-full-width" href="/contact"><span class="text-center">Hire Me</span></a>
		</div>
		<div class="sidebar-item">
		  <p>
			&copy; {new Date().getFullYear()}. All rights reserved.
		  </p>
	  
		</div>
	  </div>

<main class="page-wrapper">
	<slot />
</main>

<label for="sidebar-checkbox" class="sidebar-toggle triangle" title="menu"><i class="fa fa-circle-thin"></i></label>

<style>
@charset "UTF-8";
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: -14rem;
  width: 14rem;
  visibility: hidden;
  overflow-y: auto;
  font-size: 0.875rem;
  padding-top: 118px;
  z-index: 1;
  color: rgba(255, 255, 255, 0.6);
  background-color: #202020;
  transition: all 0.3s ease-in-out;
  backface-visibility: hidden;
}
.sidebar a {
  font-weight: normal;
  color: #fff;
}

.sidebar-item {
  padding: 1.5rem;
}

.sidebar-item p {
	font-size: 0.75rem;
	color: rgba(255,255,255,0.6);
}
.sidebar-item p:last-child {
  margin-bottom: 0;
}

.sidebar-nav {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.sidebar-nav-item {
  display: block;
  padding: 0.5rem 1rem;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  position: relative;
}
.sidebar-nav-item i {
  position: absolute;
  right: 15%;
}
.sidebar-nav-item i.fa-circle {
  visibility: hidden;
}
.sidebar-nav-item.active {
  text-decoration: none;
}
.sidebar-nav-item.active i.fa-circle-thin {
  visibility: hidden;
}
.sidebar-nav-item.active i.fa-circle {
  visibility: visible;
}

.sidebar-btn {
  width: 100%;
  padding: 0 3rem;
}

a.sidebar-nav-item {
  transition: all 0.3s ease-in-out;
}
a.sidebar-nav-item:hover, a.sidebar-nav-item:focus {
  text-decoration: none;
  transform: scale(1.1);
}

.sidebar-checkbox {
  display: none;
}

input[type=checkbox]:before {
  content: "";
}

input[type=checkbox] {
  content: "";
}

.sidebar-toggle {
  font-size: 2.2rem;
  position: fixed;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  color: #505050;
  cursor: pointer;
  padding: 0.45rem;
  border: 1px solid #505050;
  line-height: 1.3rem;
}
.sidebar-toggle.circle {
  top: 0.7rem;
  left: 1rem;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background-color: #fff;
}
.sidebar-toggle.triangle {
  top: 0;
  left: -20px;
  width: 0;
  height: 0;
  border-top: 100px solid #202020;
  border-right: 100px solid transparent;
  border-left: 0;
  border-bottom: 0;
}
.sidebar-toggle.triangle i {
  font-size: 1.2rem;
  position: absolute;
  top: -80px;
  left: 37px;
  color: #fff;
  transition: all 0.3s ease-in-out;
}
.sidebar-toggle.triangle:hover i {
  transform: scale(1.1);
}
.sidebar-toggle:before {
  display: block;
  content: "";
  width: 100%;
  padding-bottom: 0.125rem;
}
.sidebar-toggle:before span {
  position: absolute;
  left: 25%;
  top: 25%;
}

.page-wrapper,
.sidebar,
.sidebar-toggle {
  -webkit-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
}

.page-wrapper,
.sidebar-toggle {
  -webkit-transition: -webkit-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
}

#sidebar-checkbox:checked + .sidebar {
  visibility: visible;
}

#sidebar-checkbox:checked ~ .sidebar,
#sidebar-checkbox:checked ~ .page-wrapper,
#sidebar-checkbox:checked ~ .sidebar-toggle {
  -webkit-transform: translateX(14rem);
  -ms-transform: translateX(14rem);
  transform: translateX(14rem);
}

.social {
  display: flex;
  flex-direction: row justified;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
.social a {
  flex: 1 1 auto;
  float: left;
  padding: 0.5rem;
  text-align: center;
  transition: all 0.3s ease-in-out;
}
.social a:hover i {
  transform: scale(1.3);
}
.social a i {
  transition: all 0.3s ease-in-out;
}

@media (min-width: 30rem) {
  .sidebar {
    font-size: 0.75rem;
  }
}
@media (min-width: 30.1rem) {
  .sidebar-toggle {
    position: fixed;
    width: 2.25rem;
    height: 2.25rem;
    line-height: 1rem;
  }

  .sidebar-toggle:before {
    padding-bottom: 0.15rem;
    border-top-width: 0.45rem;
    border-bottom-width: 0.15rem;
  }
}
@media (min-width: 48rem) {
  .sidebar-item {
    padding: 2.5rem;
  }

  .sidebar-nav-item {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
.container {
	max-width: 38rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    margin-right: auto;
}
</style>
