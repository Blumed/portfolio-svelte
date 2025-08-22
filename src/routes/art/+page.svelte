<script lang="ts">
    import CardsList from "$lib/components/Cards.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import art from "$lib/data/art.json";
</script>

<Seo title="Collection of Art Projects" pageCanonicalUrl="/art" />

<h1>Collection of Art</h1>

<section class="clean-background">
    <h2>Art Background</h2>
    <p>
        I come from an artistic family. As a child I was exposed to galleries,
        art openings, and exhibits. Over the years I spent time learning
        different mediums. Painting, sculpture, photography, design, and
        performance art. I have participated in a few salon shows and solo
        shows.
    </p>
</section>
<CardsList cardData={art} />
