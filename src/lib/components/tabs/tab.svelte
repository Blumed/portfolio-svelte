<script>
	import { getContext } from 'svelte';
	import { TABS } from './tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<button
	type="button"
	class="tab"
	class:selected={$selectedTab === tab}
	on:click={() => selectTab(tab)}
>
	<slot />
</button>

<style>
	button {
		background: none;
		border: none;
		border-bottom: 2px solid var(--pure-white);
		border-radius: 0;
		margin: 0;
		color: var(--pure-black);
	}

	.tab {
		border: 2px solid transparent;
		background-color: transparent;
		cursor: pointer;
		position: relative;
		font-size: 1rem;
		padding: 0.5rem 0.6rem;
		outline: 0;
	}
	.tab.selected {
		transition: all 0.2s ease-in-out;
		border: 2px solid var(--sidebar-background);
		position: relative;
	}
	.tab.selected:after {
		content: '';
		width: 100%;
		height: 6px;
		background: var(--pure-white);
		display: inline-block;
		position: absolute;
		bottom: -4px;
		left: 0;
	}
</style>
