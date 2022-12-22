<script>
	export let cardData;
	const cards = cardData.data.map((item) => item);
</script>

<section class="cards-list-container">
	{#each cards as card}
		<div class="cards-list-card">
			<header>
				<h2><a href={card.url} class="cards-list-title">{card.title}</a></h2>
			</header>
			<a href={card.url} class="cards-list-copy"><p>{card.copy}</p></a>
			<footer>
				<ul>
					{#each card.technologies as technology}
						<li>{technology}</li>
					{/each}
				</ul>
			</footer>
		</div>
	{/each}
</section>

<style lang="scss">
	.cards-list-container {
		display: grid;
		grid-template-columns: auto auto;
		gap: 30px;
		&:hover .cards-list-card:not(:hover) {
			opacity: 0.4;
		}
	}
	.cards-list-card {
		padding: 20px;
		outline: 2px solid currentColor;
		transition: all 0.3s ease;
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
	@media (max-width: 768px) {
		.cards-list-container {
			grid-template-columns: 1fr;
		}
	}
</style>
