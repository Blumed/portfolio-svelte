<script lang="ts">
	import CircleIcon from "$lib/assets/svgeez/toggle-circle-icon.svelte";

	interface Props {
		cardData: any;
	}

	const { cardData }: Props = $props();
	// biome-ignore lint/style/useConst: Let svetle svelte
	let toggleIcon = $state(false);
	// biome-ignore lint/style/useConst: Let svetle svelte
	let currentCard = $state(100); //This will be false until current card id value is stored
	const cards = cardData.data.map((item: any) => item);
</script>

<div class="cards-list-container">
	{#each cards as card, i}
		<article
			class="cards-list-card"
			onmouseenter={() => {
				currentCard = card.id;
				toggleIcon = !toggleIcon;
			}}
			onmouseleave={() => {
				currentCard = card.id;
				toggleIcon = !toggleIcon;
			}}
		>
			<CircleIcon
				class="regular-old-circle"
				toggle={i === currentCard && toggleIcon}
			/>
			<header>
				<h3>
					<a href={card.url} class="cards-list-title">{card.title}</a>
				</h3>
			</header>
			<a href={card.url} class="cards-list-copy"><p>{card.copy}</p></a>
			<footer>
				{#if card.listTitle}
					<figure>
						<figcaption>{card.listTitle}</figcaption>
						<ul class="no-list-style">
							{#each card.listItems as listItem}
								<li>{listItem}</li>
							{/each}
						</ul>
					</figure>
				{:else}
					<p>{card.category}</p>
				{/if}
			</footer>
		</article>
	{/each}
</div>

<style lang="scss">
	.cards-list-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
		margin-bottom: 60px;
	}
	.cards-list-card {
		padding: 20px;
		outline: 2px solid currentColor;
		box-shadow: 6px 6px 0 0 var(--primary-color);
		transition: all 0.3s ease;
		border-radius: 8px;
		background-color: var(--pure-white);
		p {
			opacity: 0.7;
		}
		&:hover {
			transform: scale(1.01);
			outline-width: 5px;
		}
	}
	.cards-list-title,
	.cards-list-copy {
		color: inherit;
	}
	figure {
		margin: 0;
		display: inline-flex;
		align-items: baseline;
		flex-wrap: wrap;
		gap: 5px;

		& figcaption {
			display: inline-flex;
			margin-top: 0;
		}
		& ul {
			list-style: none;
			display: inline-flex;
			margin-block: 0;
			flex-wrap: wrap;
			padding-left: 0;
			gap: 5px;
			& li {
				margin-bottom: 0;
			}
		}
	}
	:global(.cards-list-card svg) {
		width: 18px;
	}
	@media (max-width: 38rem) {
		.cards-list-container {
			grid-template-columns: 1fr;
			margin-bottom: 30px;
		}
	}
</style>
