<script lang="ts">
	export let buttonText: string | undefined = undefined;
	export let type: string | undefined = undefined;
	export let href: string | undefined = undefined;
	export let ariaExpanded: boolean | undefined = undefined;
	export let ariaControls: string | undefined = undefined;
	export let handleClick: () => void | undefined | boolean;
</script>

{#if type === 'button' || type === 'submit'}
	<button
		{type}
		class="button {$$restProps.class || ''}"
		aria-expanded={ariaExpanded}
		aria-controls={ariaControls}
		on:click={() => handleClick && handleClick()}>{buttonText}</button
	>
{:else}
	<a {href} class="button {$$restProps.class || ''}">{buttonText}</a>
{/if}

<style lang="scss">
	.button {
		font-size: 16px;
		font-weight: 200;
		letter-spacing: 1px;
		padding: 15px 20px;
		border: 1px solid currentColor;
		color: var(--sidebar-background);
		border-radius: 0.25rem;
		position: relative;
		background-color: var(--subtle-grey);
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		text-decoration: none;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
		&:hover {
			background-color: var(--pure-white);
		}
	}
	.button-spotify {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
	}
</style>
