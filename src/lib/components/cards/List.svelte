<script>
	export let cardData;
	const cards = cardData.data.map((item) => item);
	console.log(cards.technologies);
</script>

<section class="cards-list-container">
	{#each cards as card}
		<div class="cards-list-card">
			<header>
				<a href={card.url} class="cards-list-title"><h2>{card.title}</h2></a>
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
		grid-template-columns: auto auto auto;
		gap: 30px;
		&:hover .cards-list-card:not(:hover) {
			opacity: 0.4;
		}
	}
	.cards-list-card {
		padding: 20px;
		outline: 2px solid currentColor;
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
</style>
