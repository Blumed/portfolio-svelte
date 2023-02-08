<script lang="ts">
	import Bookmarklet from './bookmarklet.svelte';

	let data = {
		backgroundColors: {
			container: '#000000',
			xxl: '#999999',
			xl: '#7d96ff',
			lg: '#98ff7d',
			md: '#ff837d',
			sm: '#b57dff',
			xs: '#ff7dd6'
		},
		text: {
			xxl: 'xxl',
			xl: 'xl',
			lg: 'lg',
			md: 'md',
			sm: 'sm',
			xs: 'xs'
		},
		breakpoint: {
			xxl: 1400,
			xl: 1200,
			lg: 992,
			md: 768,
			sm: 576,
			xs: 400
		}
	};
</script>

<h1>Responsive Breakpoint Bookmarklet</h1>

<section>
	<h2>Background Colors</h2>
	<label for="containerBg">Container</label>
	<input id="containerBg" type="color" bind:value={data.backgroundColors.container} />
	<label for="xxlBg">xxl</label>
	<input id="xxlBg" type="color" bind:value={data.backgroundColors.xxl} />
	<label for="xlBg">xl</label>
	<input id="xlBg" type="color" bind:value={data.backgroundColors.xl} />
	<label for="lgBg">lg</label>
	<input id="lgBg" type="color" bind:value={data.backgroundColors.lg} />
	<label for="mdBg">md</label>
	<input id="mdBg" type="color" bind:value={data.backgroundColors.md} />
	<label for="smBg">sm</label>
	<input id="smBg" type="color" bind:value={data.backgroundColors.sm} />
	<label for="xsBg">xs</label>
	<input id="xsBg" type="color" bind:value={data.backgroundColors.xs} />
</section>
<section>
	<h2>Text</h2>
	<label for="xxlText">xxl</label>
	<input id="xxlText" type="text" bind:value={data.text.xxl} />
	<label for="xlText">xl</label>
	<input id="xlText" type="text" bind:value={data.text.xl} />
	<label for="lgText">lg</label>
	<input id="lgText" type="text" bind:value={data.text.lg} />
	<label for="mdText">md</label>
	<input id="mdText" type="text" bind:value={data.text.md} />
	<label for="smText">sm</label>
	<input id="smText" type="text" bind:value={data.text.sm} />
	<label for="xsText">xs</label>
	<input id="xsText" type="text" bind:value={data.text.xs} />
</section>
<section>
	<h2>Responsive Breakpoints</h2>
	<label for="xxlText">xxl: {data.breakpoint.xxl}</label>
	<input id="xxlText" type="range" min="0" max="2400" bind:value={data.breakpoint.xxl} />
	<label for="xlText">xl: {data.breakpoint.xl}</label>
	<input id="xlText" type="range" min="0" max="2400" bind:value={data.breakpoint.xl} />
	<label for="lgText">lg: {data.breakpoint.lg}</label>
	<input id="lgText" type="range" min="0" max="2400" bind:value={data.breakpoint.lg} />
	<label for="mdText">md: {data.breakpoint.md}</label>
	<input id="mdText" type="range" min="0" max="2400" bind:value={data.breakpoint.md} />
	<label for="smText">sm: {data.breakpoint.sm}</label>
	<input id="smText" type="range" min="0" max="2400" bind:value={data.breakpoint.sm} />
	<label for="xsText">xs: {data.breakpoint.xs}</label>
	<input id="xsText" type="range" min="0" max="2400" bind:value={data.breakpoint.xs} />
</section>

{#key data}
	<Bookmarklet {data} />
{/key}
