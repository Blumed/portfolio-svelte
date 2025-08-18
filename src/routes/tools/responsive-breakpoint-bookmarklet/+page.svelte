<script lang="ts">
	/** biome-ignore-all lint/style/useConst: <explanation> */
	import Button from "$lib/components/Button.svelte";
	import Seo from "$lib/components/seo/page-meta.svelte";
	import Bookmarklet from "./bookmarklet.svelte";

	let toggleBookmarklet = false;

	const data = {
		backgroundColors: {
			container: "#000000",
			xxl: "#999999",
			xl: "#7d96ff",
			lg: "#98ff7d",
			md: "#ff837d",
			sm: "#b57dff",
			xs: "#ff7dd6",
		},
		colors: {
			container: "#ffffff",
			xxl: "#ffffff",
			xl: "#ffffff",
			lg: "#ffffff",
			md: "#ffffff",
			sm: "#ffffff",
			xs: "#ffffff",
		},
		text: {
			xxl: "xxl",
			xl: "xl",
			lg: "lg",
			md: "md",
			sm: "sm",
			xs: "xs",
		},
		textColor: {
			currentColor: "#ffffff",
		},
		breakpoint: {
			xxl: 1400,
			xl: 1200,
			lg: 992,
			md: 768,
			sm: 576,
			xs: 400,
		},
		bookmarkletName: "Drag Me To Your Bookmark Bar",
	};
	const bulma = () => {
		data.text.xs = "mobile";
		data.breakpoint.xs = 768;
		data.text.sm = "tablet";
		data.breakpoint.sm = 1023;
		data.text.md = "desktop";
		data.breakpoint.md = 1215;
		data.text.lg = "widescreen";
		data.breakpoint.lg = 1408;
		data.text.xl = "fullhd";
		data.breakpoint.xl = 2816;
		data.text.xxl = "";
		data.breakpoint.xxl = 0;
	};
	const semanticUI = () => {
		data.text.xs = "mobile";
		data.breakpoint.xs = 768;
		data.text.sm = "tablet";
		data.breakpoint.sm = 991;
		data.text.md = "small monitor";
		data.breakpoint.md = 1200;
		data.text.lg = "large monitor";
		data.breakpoint.lg = 2000;
		data.text.xl = "";
		data.breakpoint.xl = 0;
		data.text.xxl = "";
		data.breakpoint.xxl = 0;
	};
	const bootstrap = () => {
		data.text.xs = "xs";
		data.breakpoint.xs = 400;
		data.text.sm = "sm";
		data.breakpoint.sm = 576;
		data.text.md = "md";
		data.breakpoint.md = 768;
		data.text.lg = "lg";
		data.breakpoint.lg = 992;
		data.text.xl = "xl";
		data.breakpoint.xl = 1200;
		data.text.xxl = "xxl";
		data.breakpoint.xxl = 1400;
	};
</script>

<Seo
	title="Responsive Breakpoint Bookmarklet"
	pageCanonicalUrl="/tools/responsive-breakpoint-bookmarklet"
/>
<h1>Responsive Breakpoint Bookmarklet</h1>
<p class="clean-background">
	Have you ever wanted a quick view of your responsive breakpoints? This tool
	helps you see the relationship between breakpoints for dialing in UI. Change
	the breakpoints to fit your needs. Change text and color and make it your
	own.
</p>
<section>
	<h2>Breakpoints</h2>
	<div class="cards">
		<div class="card">
			<h3>Extra Extra Large</h3>
			<div class="field-group is-spaced">
				<label for="xxlBg" aria-label="Background Color"
					>Background</label
				>
				<input
					class="input-color"
					id="xxlBg"
					type="color"
					bind:value={data.backgroundColors.xxl}
				/>
			</div>
			<div class="field-group is-spaced">
				<label for="xxlColor" aria-label="Text Color">Text</label>
				<input
					class="input-color"
					id="xxlColor"
					type="color"
					bind:value={data.colors.xxl}
				/>
			</div>
			<div class="field-group">
				<label class="sr-only" for="xxlText">Text</label>
				<input
					class="input-text"
					id="xxlText"
					type="text"
					bind:value={data.text.xxl}
				/>
			</div>
			<div class="field-group">
				<label for="xxlBreakpoint"
					>Max Width: {data.breakpoint.xxl}</label
				>
				<input
					class="input-range"
					id="xxlBreakpoint"
					type="range"
					min="0"
					max="2400"
					style={`accent-color: ${data.backgroundColors.xxl}`}
					bind:value={data.breakpoint.xxl}
				/>
			</div>
		</div>
		<div class="card">
			<h3>Extra Large</h3>
			<div class="field-group is-spaced">
				<label for="xlBg" aria-label="Background Color"
					>Background</label
				>
				<input
					class="input-color"
					id="xlBg"
					type="color"
					bind:value={data.backgroundColors.xl}
				/>
			</div>
			<div class="field-group is-spaced">
				<label for="xlColor" aria-label="Text Color">Text</label>
				<input
					class="input-color"
					id="xlColor"
					type="color"
					bind:value={data.colors.xl}
				/>
			</div>
			<div class="field-group">
				<label class="sr-only" for="xlText">Text</label>
				<input
					class="input-text"
					id="xlText"
					type="text"
					bind:value={data.text.xl}
				/>
			</div>
			<div class="field-group">
				<label for="xlBreakpoint">Max Width: {data.breakpoint.xl}</label
				>
				<input
					class="input-range"
					id="xlBreakpoint"
					type="range"
					min="0"
					max="2400"
					style={`accent-color: ${data.backgroundColors.xl}`}
					bind:value={data.breakpoint.xl}
				/>
			</div>
		</div>
		<div class="card">
			<h3>Large</h3>
			<div class="field-group is-spaced">
				<label for="lgBg" aria-label="Background Color"
					>Background</label
				>
				<input
					class="input-color"
					id="lgBg"
					type="color"
					bind:value={data.backgroundColors.lg}
				/>
			</div>
			<div class="field-group is-spaced">
				<label for="lgColor" aria-label="Text Color">Text</label>
				<input
					class="input-color"
					id="lgColor"
					type="color"
					bind:value={data.colors.lg}
				/>
			</div>
			<div class="field-group">
				<label class="sr-only" for="lgText">Text</label>
				<input
					class="input-text"
					id="lgText"
					type="text"
					bind:value={data.text.lg}
				/>
			</div>
			<div class="field-group">
				<label for="lgBreakpoint">Max Width: {data.breakpoint.lg}</label
				>
				<input
					class="input-range"
					id="lgBreakpoint"
					type="range"
					min="0"
					max="2400"
					style={`accent-color: ${data.backgroundColors.lg}`}
					bind:value={data.breakpoint.lg}
				/>
			</div>
		</div>
		<div class="card">
			<h3>Medium</h3>
			<div class="field-group is-spaced">
				<label for="mdBg" aria-label="Background Color"
					>Background</label
				>
				<input
					class="input-color"
					id="mdBg"
					type="color"
					bind:value={data.backgroundColors.md}
				/>
			</div>
			<div class="field-group is-spaced">
				<label for="mdColor" aria-label="Text Color">Text</label>
				<input
					class="input-color"
					id="mdColor"
					type="color"
					bind:value={data.colors.md}
				/>
			</div>
			<div class="field-group">
				<label class="sr-only" for="mdText">Text</label>
				<input
					class="input-text"
					id="mdText"
					type="text"
					bind:value={data.text.md}
				/>
			</div>
			<div class="field-group">
				<label for="mdBreakpoint">Max Width: {data.breakpoint.md}</label
				>
				<input
					class="input-range"
					id="mdBreakpoint"
					type="range"
					min="0"
					max="2400"
					style={`accent-color: ${data.backgroundColors.md}`}
					bind:value={data.breakpoint.md}
				/>
			</div>
		</div>
		<div class="card">
			<h3>Small</h3>
			<div class="field-group is-spaced">
				<label for="smBg" aria-label="Background Color"
					>Background</label
				>
				<input
					class="input-color"
					id="smBg"
					type="color"
					bind:value={data.backgroundColors.sm}
				/>
			</div>
			<div class="field-group is-spaced">
				<label for="smColor" aria-label="Text Color">Text</label>
				<input
					class="input-color"
					id="smColor"
					type="color"
					bind:value={data.colors.sm}
				/>
			</div>
			<div class="field-group is-spaced">
				<label class="sr-only" for="smText">Text</label>
				<input
					class="input-text"
					id="smText"
					type="text"
					bind:value={data.text.sm}
				/>
			</div>
			<div class="field-group">
				<label for="smBreakpoint">Max Width: {data.breakpoint.sm}</label
				>
				<input
					class="input-range"
					id="smBreakpoint"
					type="range"
					min="0"
					max="2400"
					style={`accent-color: ${data.backgroundColors.sm}`}
					bind:value={data.breakpoint.sm}
				/>
			</div>
		</div>
		<div class="card">
			<h3>Extra Small</h3>
			<div class="field-group is-spaced">
				<label for="xsBg" aria-label="Background Color"
					>Background</label
				>
				<input
					class="input-color"
					id="xsBg"
					type="color"
					bind:value={data.backgroundColors.xs}
				/>
			</div>
			<div class="field-group is-spaced">
				<label for="xsColor" aria-label="Text Color">Text</label>
				<input
					class="input-color"
					id="xsColor"
					type="color"
					bind:value={data.colors.xs}
				/>
			</div>
			<div class="field-group">
				<label class="sr-only" for="xsText">Text</label>
				<input
					class="input-text"
					id="xsText"
					type="text"
					bind:value={data.text.xs}
				/>
			</div>
			<div class="field-group">
				<label for="xsBreakpoint">Max Width: {data.breakpoint.xs}</label
				>
				<input
					class="input-range"
					id="xsBreakpoint"
					type="range"
					min="0"
					max="2400"
					style={`accent-color: ${data.backgroundColors.xs}`}
					bind:value={data.breakpoint.xs}
				/>
			</div>
		</div>
	</div>
</section>
<section>
	<div class="cards is-two-columns">
		<div class="card">
			<h3>More Bookmarklet Configuration</h3>
			<div class="field-group is-spaced">
				<label for="containerBg">Container</label>
				<input
					class="input-color"
					id="containerBg"
					type="color"
					bind:value={data.backgroundColors.container}
				/>
			</div>
			<div class="field-group is-spaced">
				<label for="textColor">Window Display Color</label>
				<input
					class="input-color"
					id="textColor"
					type="color"
					bind:value={data.textColor.currentColor}
				/>
			</div>
			<div class="field-group">
				<label class="sr-only" for="bookmarkletName"
					>Bookmarklet Name</label
				>
				<input
					class="input-text"
					id="bookmarkletName"
					type="text"
					bind:value={data.bookmarkletName}
				/>
			</div>
		</div>
		<div class="card">
			<h3>Popular Css Framework Presets</h3>
			<div class="buttons">
				<Button type="button" handleClick={bulma} buttonText="Bulma" />
				<Button
					type="button"
					handleClick={semanticUI}
					buttonText="Semantic UI"
				/>
				<Button
					type="button"
					handleClick={bootstrap}
					buttonText="Bootstrap"
				/>
			</div>
		</div>
	</div>
</section>

{#key data || toggleBookmarklet}
	<Bookmarklet {data} {toggleBookmarklet} />
{/key}

<Button
	type="button"
	handleClick={() => (toggleBookmarklet = !toggleBookmarklet)}
	buttonText={`${toggleBookmarklet ? "Hide" : "Show"} Bookmarklet`}
	class="button-toggle-bookmarklet"
/>

<section class="decorative-background">
	<h2>Things to note</h2>
	<ul>
		<li>
			I don't use Bootstrap but everyone else does so I set it as the
			default breakpoint settings.
		</li>
		<li>
			Using max-width instead of min-width which goes against what
			everyone uses for breakpoint systems. I wasn't able to create the
			same visual effect using min-width so you will need to do the
			conversions yourself if you are using min-width for your sites. If
			are able to create something using min-width feel free to open up an
			issue and let me know in github.
		</li>
		<li>
			The tool bumps the site down a little to make room for the
			bookmarklet above pages. This is fine unless your site uses position
			fixed in the nav. If you are trying to debug the nav and there is
			overlap with the bookmarklet you will need to adjust for this.
		</li>
		<li>
			If you have multiple sites and each site uses different breakpoints.
			A nice way to organize this tool is by making a bookmark folder and
			placing each bookmarklet you need in it and renaming each
			bookmarklet to be the name of each of your sites.
		</li>
	</ul>
</section>

<style lang="scss">
	.decorative-background {
		margin-top: 60px;
	}
	.cards {
		display: grid;
		grid-template-columns: auto auto auto;
		gap: 22px;
		margin-bottom: 34px;
		&.is-two-columns {
			grid-template-columns: auto auto;
		}
	}
	.input-color,
	.input-text {
		margin-bottom: 15px;
	}
	.input-color {
		border: 2px solid var(--pure-black);

		cursor: pointer;
	}
	.input-text {
		padding: 5px 5px 3px;
		width: 100%;
		border-radius: 4px;
		border: 2px solid var(--pure-black);
	}
	.input-range {
		width: 100%;
	}
	.card {
		background-color: var(--pure-white);
		padding: 56px 32px 32px;
		border-radius: 24px;
		border: 2px solid var(--primary-color);
		box-shadow: 6px 6px 0 0 var(--primary-color);
		h3 {
			margin-top: 0;
		}
	}
	.buttons {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		:global(button) {
			margin: 0;
		}
	}
	.field-group.is-spaced {
		display: flex;
		justify-content: space-between;
	}
	@media (max-width: 768px) {
		.cards,
		.cards.is-two-columns {
			grid-template-columns: auto;
		}
	}
</style>
