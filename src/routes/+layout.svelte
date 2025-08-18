<script lang="ts">
	import { page } from "$app/stores";
	import GithubIcon from "$lib/components/svgeez/icon-github.svelte";
	import LinkedInIcon from "$lib/components/svgeez/icon-linkedIn.svelte";
	import CircleIcon from "$lib/components/svgeez/toggle-circle-icon.svelte";
	import Switch from "$lib/components/Theme-switch.svelte";
	import "$lib/styles/global.scss";

	const { children } = $props();
	let isOpen = $state(false);
	let isToolsRoute = $state(false);
	const isHomePage = $derived($page.url.pathname === "/");
	const isToolsPage = () => {
		if (
			$page.url.pathname.includes("/tools") ||
			$page.url.pathname.includes("/bookmarklets") ||
			$page.url.pathname.includes("/snippets")
		) {
			isToolsRoute = !isToolsRoute;
		}
	};

	function openSidebar() {
		isOpen = true;
	}

	function closeSidebar() {
		isOpen = false;
	}

	function focusTrap(node) {
		let focusableElements = [];
		let firstElement, lastElement;

		function updateFocusableElements() {
			focusableElements = Array.from(
				node.querySelectorAll(
					'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
				),
			).filter((el) => !el.hasAttribute("disabled"));
			firstElement = focusableElements[0];
			lastElement = focusableElements[focusableElements.length - 1];
		}

		function handleKeydown(event) {
			if (!isOpen || event.key !== "Tab") return;

			updateFocusableElements();
			if (focusableElements.length === 0) return;

			if (event.shiftKey) {
				if (document.activeElement === firstElement) {
					event.preventDefault();
					lastElement.focus();
				}
			} else {
				if (document.activeElement === lastElement) {
					event.preventDefault();
					firstElement.focus();
				}
			}
		}

		node.addEventListener("keydown", handleKeydown);

		return {
			destroy() {
				node.removeEventListener("keydown", handleKeydown);
			},
		};
	}
</script>

<svelte:window on:keydown={(e) => e.key === "Escape" && closeSidebar()} />

<a href="#main" class="skip-to-content">Skip to main content</a>

<div class="sidebar" id="sidebar" use:focusTrap class:active={isOpen}>
	<button
		type="button"
		class="sidebar-toggle triangle"
		title="menu"
		aria-label="Enter and Exit Navigation"
		onclick={() => (isOpen = !isOpen)}
	>
		<CircleIcon
			class="regular-old-circle"
			toggle={isOpen}
			style="pointer-events: none;"
		/>
	</button>
	<nav class="sidebar-nav">
		<ul class="sidebar-items">
			<li>
				<a
					class="sidebar-nav-item"
					id="first-menu-item"
					class:active={$page.url.pathname === "/"}
					onclick={closeSidebar}
					href="/"
					tabindex={isOpen ? 0 : -1}
					>Home <CircleIcon toggle={$page.url.pathname === "/"} /></a
				>
			</li>
			<li>
				<a
					class="sidebar-nav-item"
					class:active={$page.url.pathname === "/about"}
					onclick={closeSidebar}
					href="/about"
					tabindex={isOpen ? 0 : -1}
					>About <CircleIcon
						toggle={$page.url.pathname === "/about"}
					/>
				</a>
			</li>
			<li>
				<a
					class="sidebar-nav-item"
					class:active={$page.url.pathname === "/work"}
					onclick={closeSidebar}
					href="/work"
					tabindex={isOpen ? 0 : -1}
					>Work <CircleIcon
						toggle={$page.url.pathname === "/work"}
					/></a
				>
			</li>
			<li>
				<a
					class="sidebar-nav-item"
					class:active={$page.url.pathname.includes("/tools") ||
						$page.url.pathname.includes("/bookmarklets") ||
						$page.url.pathname.includes("/snippets")}
					onclick={closeSidebar}
					href="/tools"
					tabindex={isOpen ? 0 : -1}
					>Tools <CircleIcon
						toggle={$page.url.pathname.includes("/tools") ||
							$page.url.pathname.includes("/bookmarklets") ||
							$page.url.pathname.includes("/snippets")}
					/></a
				>
			</li>
			<li>
				<a
					class="sidebar-nav-item"
					class:active={$page.url.pathname.includes("/art")}
					onclick={closeSidebar}
					href="/art"
					tabindex={isOpen ? 0 : -1}
					>Art <CircleIcon
						toggle={$page.url.pathname.includes("/art")}
					/></a
				>
			</li>
			<li>
				<a
					class="sidebar-nav-item"
					class:active={$page.url.pathname.includes(
						"/freelancing-and-consultation",
					)}
					onclick={closeSidebar}
					href="/freelancing-and-consultation"
					tabindex={isOpen ? 0 : -1}
					>Freelancing <CircleIcon
						toggle={$page.url.pathname.includes(
							"/freelancing-and-consultation",
						)}
					/></a
				>
			</li>
			<li>
				<a
					class="sidebar-nav-item"
					class:active={$page.url.pathname === "/contact"}
					onclick={closeSidebar}
					href="/contact"
					tabindex={isOpen ? 0 : -1}
					>Contact <CircleIcon
						toggle={$page.url.pathname === "/contact"}
					/></a
				>
			</li>
		</ul>

		<div class="social">
			<a
				class="sidebar-nav-social-item"
				href="https://github.com/blumed"
				target="_blank"
				rel="noopener noreferrer"
				tabindex={isOpen ? 0 : -1}
				title="Visit my Github"
				aria-label="Visit my Github"
				><GithubIcon />
			</a>
			<a
				class="sidebar-nav-social-item"
				href="https://www.linkedin.com/in/cullan-luther-55812234"
				target="_blank"
				rel="noopener noreferrer"
				tabindex={isOpen ? 0 : -1}
				title="Go to my LinkedIn"
				aria-label="Go to my LinkedIn"
				><LinkedInIcon />
			</a>
		</div>
		<Switch />
	</nav>

	<div class="sidebar-item">
		<p>
			&copy;2009-{new Date().getFullYear()} All rights reserved.
			<a
				href="/privacy-policy"
				onclick={closeSidebar}
				tabindex={isOpen ? 0 : -1}>Privacy Policy</a
			>
		</p>
	</div>
</div>

<main
	class={`${$page.url.pathname === "/" ? "home" : $page.url.pathname.replace(/\//g, "-")} container`}
	id="main"
	style={isOpen ? "transform: translateX(14rem);" : ""}
>
	{@render children()}
</main>

{#if isHomePage}
	<picture>
		<source
			srcSet="https://images.cullanluther.com/its-small-me.webp"
			media="(max-width: 768px)"
		/>
		<img
			class="its-me"
			fetchpriority="high"
			src="https://images.cullanluther.com/its-me.webp"
			alt="Cullan Luther Smiling At You"
		/>
	</picture>
{/if}

<style lang="scss">
	.skip-to-content {
		position: absolute;
		left: -9999px;
		top: 0;
		z-index: 4;
		display: inline-block;
		font-size: 1rem;
		font-weight: 200;
		letter-spacing: 1px;
		padding: 15px 20px;
		border: 2px solid currentColor;
		color: var(--sidebar-background);
		border-radius: 0.25rem;
		box-shadow: 6px 6px 0 0 var(--primary-color);
		background-color: var(--subtle-grey);
		width: fit-content;
		line-height: 1;
		transition: all 0.3s ease;
		&:focus {
			left: 94px;
			top: 18px;
		}
	}

	.sidebar {
		position: fixed;
		top: 0;
		bottom: 0;
		left: -14rem;
		width: 14rem;
		font-size: 0.875rem;
		padding-top: 118px;
		z-index: 6;
		color: var(--sidebar-color);
		background-color: var(--sidebar-background);
		transition: var(--global-transition);
		backface-visibility: hidden;
	}
	.sidebar a {
		font-weight: normal;
		color: var(--pure-white);
	}

	.sidebar-item {
		padding: 1.5rem;
	}

	.sidebar-item p {
		font-size: 0.75rem;
		color: var(--sidebar-color);
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
		transition: var(--global-transition);
	}
	:global(.sidebar-nav-item svg) {
		position: absolute;
		right: 15%;
		width: 12.5px;
	}

	a.sidebar-nav-item {
		transition: var(--global-transition);
	}
	a.sidebar-nav-item:hover,
	a.sidebar-nav-item:focus {
		text-decoration: none;
		transform: scale(1.1);
	}

	.sidebar-toggle {
		font-size: 2.2rem;
		position: absolute;
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
		right: -94px;
		min-width: 100px;
		min-height: 100px;
		width: 100px;
		height: 100px;
		border-top: 100px solid var(--sidebar-background);
		border-right: 100px solid transparent;
		border-left: 0;
		border-bottom: 0;
		z-index: 5;
		background-color: transparent;
		transition: var(--global-transition);
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
		color: var(--pure-white);
		transition: var(--global-transition);
	}
	:global(.sidebar-toggle.triangle:hover svg) {
		transform: scale(1.1);
	}
	.sidebar-toggle:before {
		display: block;
		content: "";
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

	.sidebar.active {
		visibility: visible;
		transform: translateX(14rem);
	}

	.sidebar-toggle.isOpen {
		transform: translateX(14rem);
	}
	.social {
		display: grid;
		align-items: center;
		grid-template-columns: auto auto;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 1rem;
	}
	.social a {
		display: flex;
		align-items: center;
		padding: 1.5rem;
		transition: var(--global-transition);
	}
	:global(.social a:last-of-type svg) {
		margin-left: auto;
		display: block;
	}
	:global(.social a svg) {
		width: 16px;
	}
	:global(.social a:hover svg) {
		transform: scale(1.3);
	}
	:global(.social a svg) {
		transition: var(--global-transition);
	}

	.container {
		max-width: 860px;
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
		margin-left: auto;
		margin-right: auto;
		padding-bottom: 4rem;
		padding-top: 94px;
		transition: transform 0.3s ease-in-out;
		&.home {
			height: 100vh;
			padding-bottom: 0;
		}
	}
	.its-me {
		all: unset;
		max-width: 1128px;
		width: auto;
		position: fixed;
		bottom: 0;
		right: 0;
		z-index: -1;
		filter: grayscale(1);
		display: block;
		transform: translateX(50px);
		overflow: clip;
	}

	@media (min-width: 30rem) {
		.sidebar {
			font-size: 0.75rem;
		}
	}
	@media (min-width: 30.1rem) {
		.sidebar-toggle {
			position: absolute;
			right: -80px;
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

	@media (max-width: 48rem) {
		.its-me {
			top: 30%;
			right: -504px;
		}
	}

	/*
		Page Level Overrides
	*/

	.-art-letters {
		height: 100vh;
		min-height: 100vh;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: none;
	}
</style>
