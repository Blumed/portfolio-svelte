<script>
	import CircleIcon from '$lib/components/svgeez/toggle-circle-icon.svelte';
	export let cardData;
	export let toggleIcon = false;
	export let currentCard = 100; //This will be false until current card id value is stored
	const cards = cardData.data.map((item) => item);
</script>

<article class="cards-list-container">
	{#each cards as card, i}
		<article
			class="cards-list-card"
			on:mouseenter={() => {
				currentCard = card.id;
				toggleIcon = !toggleIcon;
			}}
			on:mouseleave={() => {
				currentCard = card.id;
				toggleIcon = !toggleIcon;
			}}
		>
			<CircleIcon class="regular-old-circle" toggle={i === currentCard && toggleIcon} />
			<header>
				<h2><a href={card.url} class="cards-list-title">{card.title}</a></h2>
			</header>
			<a href={card.url} class="cards-list-copy"><p>{card.copy}</p></a>
			<footer>
				<ul class="no-list-style">
					{#each card.technologies as technology}
						<li>{technology}</li>
					{/each}
				</ul>
			</footer>
		</article>
	{/each}
</article>

<style lang="scss">
	.cards-list-container {
		display: grid;
		grid-template-columns: auto auto;
		gap: 30px;
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
	:global(.cards-list-card svg) {
		width: 18px;
	}
	@media (max-width: 768px) {
		.cards-list-container {
			grid-template-columns: 1fr;
		}
	}
</style>
