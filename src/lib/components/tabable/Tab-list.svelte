<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
	}
	const { children }: Props = $props();
</script>

<nav class="tab-list">
	{@render children()}
</nav>

<style>
	.tab-list {
		border-bottom: 2px solid var(--sidebar-background);
		margin-top: 2px;
		margin-bottom: 15px;
		text-align: right;
		background-color: var(--pure-white);
	}
</style>
