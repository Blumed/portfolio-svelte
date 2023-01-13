<script lang="ts">
	import { page } from '$app/stores';
	import '$lib/styles/global.scss';
	import CircleIcon from '$lib/components/svgeez/icon-circle.svelte';
	import GithubIcon from '$lib/components/svgeez/icon-github.svelte';
	import LinkedInIcon from '$lib/components/svgeez/icon-linkedIn.svelte';
	import Switch from '$lib/components/theme/theme-switch.svelte';

	let toggleNav = false;
	const closeNav = () => (toggleNav = false);
</script>

<a href="#main" class="skip-link sr-only">Skip to main content</a>

<input
	type="checkbox"
	class="sidebar-checkbox"
	id="sidebar-checkbox"
	aria-hidden="true"
	bind:checked={toggleNav}
/>

<div class="sidebar" id="sidebar">
	<nav class="sidebar-nav">
		<ul class="sidebar-items">
			<li>
				<a
					class="sidebar-nav-item"
					id="first-menu-item"
					class:active={$page.url.pathname === '/'}
					on:click={closeNav}
					href="/">Home <CircleIcon toggle={$page.url.pathname === '/'} /></a
				>
			</li>
			<li>
				<a
					class="sidebar-nav-item"
					class:active={$page.url.pathname === '/about'}
					on:click={closeNav}
					href="/about"
					>About <CircleIcon toggle={$page.url.pathname === '/about'} />
				</a>
			</li>
			<li>
				<a
					class="sidebar-nav-item"
					class:active={$page.url.pathname === '/work'}
					on:click={closeNav}
					href="/work">Work <CircleIcon toggle={$page.url.pathname === '/work'} /></a
				>
			</li>
			<li>
				<a
					class="sidebar-nav-item"
					class:active={$page.url.pathname.includes('/snippets')}
					on:click={closeNav}
					href="/snippets"
					>Snippets <CircleIcon toggle={$page.url.pathname.includes('/snippets')} /></a
				>
			</li>
			<li>
				<a
					class="sidebar-nav-item"
					class:active={$page.url.pathname === '/contact'}
					on:click={closeNav}
					href="/contact">Contact <CircleIcon toggle={$page.url.pathname === '/contact'} /></a
				>
			</li>
		</ul>

		<div class="social">
			<a
				class="sidebar-nav-social-item"
				href="https://github.com/blumed"
				target="_blank"
				rel="noopener noreferrer"
				><GithubIcon />
			</a>
			<a
				class="sidebar-nav-social-item"
				href="https://www.linkedin.com/in/cullan-luther-55812234"
				target="_blank"
				rel="noopener noreferrer"
				><LinkedInIcon />
			</a>
		</div>
		<Switch />
	</nav>

	<div class="sidebar-item">
		<p>
			&copy; {new Date().getFullYear()}. All rights reserved.
		</p>
	</div>
</div>

<main class="container" id="main">
	<slot />
</main>

<label
	for="sidebar-checkbox"
	class="sidebar-toggle triangle"
	title="menu"
	aria-label="Enter and Exit Navigation"
>
	<CircleIcon class="regular-old-circle" toggle={toggleNav} />
</label>

<style lang="scss">
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
		z-index: 6;
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
		color: rgba(255, 255, 255, 0.6);
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
		font-size: 1rem;
		padding: 0.5rem 1rem;
		border-top-width: 1px;
		border-top-style: solid;
		border-top-color: transparent;
		border-bottom-width: 1px;
		border-bottom-style: solid;
		border-bottom-color: transparent;
		position: relative;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		transition: all 0.3s ease-in-out;
	}
	:global(.sidebar-nav-item svg) {
		position: absolute;
		right: 15%;
		width: 12.5px;
	}

	a.sidebar-nav-item {
		transition: all 0.3s ease-in-out;
	}
	a.sidebar-nav-item:hover,
	a.sidebar-nav-item:focus {
		text-decoration: none;
		transform: scale(1.1);
	}

	input[type='checkbox']:before {
		content: '';
	}

	input[type='checkbox'] {
		content: '';
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

	.sidebar-toggle.triangle {
		top: 0;
		left: -20px;
		width: 0;
		height: 0;
		border-top: 100px solid #202020;
		border-right: 100px solid transparent;
		border-left: 0;
		border-bottom: 0;
		z-index: 5;
	}
	.sidebar-items {
		padding: 0;
		list-style: none;
		li {
			line-height: 1.3;
			margin-bottom: 0;
		}
	}
	:global(.sidebar-toggle.triangle svg.svg-circle) {
		display: inline-block;
		width: 20.5px;
		font-size: 1.2rem;
		position: absolute;
		top: -80px;
		left: 37px;
		color: #fff;
		transition: all 0.3s ease-in-out;
	}
	:global(.sidebar-toggle.triangle:hover svg) {
		transform: scale(1.1);
	}
	.sidebar-toggle:before {
		display: block;
		content: '';
		width: 100%;
		padding-bottom: 0.125rem;
	}

	.container,
	.sidebar,
	.sidebar-toggle {
		backface-visibility: hidden;
	}

	.container,
	.sidebar-toggle {
		transition: transform 0.3s ease-in-out;
	}
	.sidebar-checkbox {
		position: fixed;
		&:focus-visible ~ .sidebar-toggle {
			outline: Highlight auto 1px;
		}
	}

	.sidebar-checkbox:checked + .sidebar {
		visibility: visible;
	}

	.sidebar-checkbox:checked ~ .sidebar,
	.sidebar-checkbox:checked ~ .container,
	.sidebar-checkbox:checked ~ .sidebar-toggle {
		transform: translateX(14rem);
	}
	.social {
		display: flex;
		flex-direction: row;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
		margin-bottom: 1rem;
		padding-left: 1.5rem;
		padding-right: 1.6rem;
	}
	.social a {
		flex: 1 1 auto;
		padding: 0.5rem 0;
		transition: all 0.3s ease-in-out;
	}
	:global(.social a:last-of-type svg) {
		margin-left: auto;
		display: block;
	}
	:global(.social a svg) {
		width: 12.5px;
	}
	:global(.social a:hover svg) {
		transform: scale(1.3);
	}
	:global(.social a svg) {
		transition: all 0.3s ease-in-out;
	}

	.sr-only {
		border: 0 !important;
		clip: rect(1px, 1px, 1px, 1px) !important;
		clip-path: inset(50%) !important;
		height: 1px !important;
		overflow: hidden !important;
		margin: -1px !important;
		padding: 0 !important;
		position: absolute !important;
		width: 1px !important;
		white-space: nowrap !important;
	}
	.container {
		max-width: 760px;
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
		margin-left: auto;
		margin-right: auto;
		padding-bottom: 4rem;
		padding-top: 94px;
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
</style>
