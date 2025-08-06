<script module lang="ts">
	export const TABS = Symbol('tabs');
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	let selectedIndex = $state(0);
	let tabCounter = 0;
	let panelCounter = 0;

	setContext(TABS, {
		registerTab: () => {
			return tabCounter++;
		},
		registerPanel: () => {
			return panelCounter++;
		},
		selectTab: (index: number = 0) => {
			selectedIndex = index;
		},
		selectedIndex: () => selectedIndex
	});
</script>

<div class="tabs">
	{@render children?.()}
</div>