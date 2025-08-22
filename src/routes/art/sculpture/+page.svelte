<script>
    import { browser } from "$app/environment";
    import PlusIcon from "$lib/assets/svgeez/icon-plus.svelte";
    import Seo from "$lib/components/Seo.svelte";

    import one from "$lib/assets/images/micky.jpg";
    import two from "$lib/assets/images/ancient.jpg";
    import three from "$lib/assets/images/deer.jpg";
    import four from "$lib/assets/images/eye.jpg";
    import five from "$lib/assets/images/meat.webp";
    import six from "$lib/assets/images/star-maker.png";
    import seven from "$lib/assets/images/harry.jpg";
    import eight from "$lib/assets/images/blocks.jpg";
    import nine from "$lib/assets/images/fell.webp";
    import ten from "$lib/assets/images/flag.webp";
    import eleven from "$lib/assets/images/inside.webp";
    import twelve from "$lib/assets/images/sad.webp";
    import thirteen from "$lib/assets/images/self.webp";
    import fourteen from "$lib/assets/images/shape.webp";
    import fifteen from "$lib/assets/images/sperm.webp";
    import sixteen from "$lib/assets/images/old-painting.webp";

    const iconsSvg =
        "font-size: 1rem; width: 24px; height: 24px; position: absolute; right: -32px;top: 40px; color: var(--pure-black);";

    const images = [
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
        ten,
        eleven,
        twelve,
        thirteen,
        fourteen,
        fifteen,
        sixteen,
    ];
</script>

<Seo
    title="Found objects and mixed media sculptures"
    pageCanonicalUrl="/art/sculpture"
/>

<h1>Sculpture</h1>

<p class="clean-background">
    Some pieces I have created over the years. It is something I think about
    often.
</p>

<section class="masonry-container">
    {#each images as image, i}
        <article class="masonry-item">
            <img src={image} alt="Add Text Here" />
            <button
                type="button"
                class="button button-expand"
                onclick={() =>
                    browser &&
                    document.getElementById(`dialog-${i}`).showModal()}
                ><PlusIcon style={iconsSvg} /><span class="sr-only"
                    >Open Bigger Image Dialog</span
                ></button
            >
        </article>
    {/each}
</section>

{#each images as image, i}
    <dialog id={`dialog-${i}`}>
        <div class="dialog-innerds">
            <button
                type="button"
                class="button button-close"
                onclick={() =>
                    browser && document.getElementById(`dialog-${i}`).close()}
                ><span class="sr-only">Close Dialog</span><PlusIcon
                    style={`${iconsSvg} rotate: 45deg;`}
                /></button
            >
            <img src={image} loading="lazy" alt="Add Text Here" />
        </div>
    </dialog>
{/each}

<style>
    .masonry-container {
        columns: 3 auto;
        column-gap: 1rem;
    }
    .masonry-item {
        break-inside: avoid;
        margin-bottom: 1rem;
        position: relative;
    }
    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
    .button-expand {
        width: 75px;
        height: 60px;
        border-style: solid;
        border-width: 0 75px 75px 0px;
        border-color: transparent transparent var(--pure-white) transparent;
        transform: rotate(-90deg);
        background-color: transparent;
        padding: 0;
        position: absolute;
        right: 0px;
        bottom: 0px;
        cursor: pointer;
    }

    dialog {
        max-width: inherit;
        padding: 0;
        border: 0;
        background: transparent;
        & .dialog-innerds {
            position: relative;
        }
        & img {
            width: 100%; /* Or a specific width */
            height: 100%; /* Or a specific height */
            object-fit: contain;
            margin-top: -75px;
        }
    }

    .button-close {
        width: 75px;
        height: 60px;
        border-style: solid;
        border-width: 0 75px 75px 0px;
        border-color: transparent transparent var(--pure-white) transparent;
        rotate: -180deg;
        background-color: transparent;
        padding: 0;
        position: sticky;
        left: 100%;
        top: 0px;
        cursor: pointer;
    }

    @media (max-width: 38rem) {
        .masonry-container {
            columns: 2 auto;
        }
    }
</style>
