<script lang="ts">
import type { Snippet } from "svelte";
import { getContext } from "svelte";
import { TABS } from './Tabs.svelte';

interface Props {
	children: Snippet;
}

const { registerTab, selectTab, selectedIndex }: { registerTab: () => number; selectTab: (index: number) => void; selectedIndex: () => number } = getContext(TABS);
const { children }: Props = $props();
const index = registerTab();

const isSelected = $derived(selectedIndex() === index);

</script>

<button
	type="button"
	class="tab"
	class:selected={isSelected}
	onclick={() => {
		console.log('Tab clicked, index:', index);
		selectTab(index);
	}}
>
	{@render children?.()}
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