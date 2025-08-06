<script lang="ts">
import type { Snippet } from "svelte";
import { getContext } from "svelte";
import { TABS } from './Tabs.svelte';

interface Props {
	children: Snippet;
}

const { registerPanel, selectedIndex }: { registerPanel: () => number; selectedIndex: () => number } = getContext(TABS);
const { children }: Props = $props();
const index = registerPanel();

const isSelected = $derived(selectedIndex() === index);

</script>

{#if isSelected}
	{@render children?.()}
{/if}
