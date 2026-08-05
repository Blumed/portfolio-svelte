<script lang="ts">
    import { browser } from "$app/environment";
    import CircleIcon from "$lib/assets/svgeez/icon-circle.svelte";
    import PlusIcon from "$lib/assets/svgeez/icon-plus.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import sculptures from "$lib/data/sculptures";

    const iconsSvg =
        "font-size: 1rem; width: 20.5px; height: 20.5px; position: absolute; right: -32px;top: 40px; color: var(--pure-black);";
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
    {#each sculptures as sculpture, i}
        <article class="masonry-item">
            <img src={sculpture.image} alt={sculpture.alt} />
            <button
                type="button"
                class="button button-expand"
                onclick={() =>
                    browser &&
                    (
                        document.getElementById(
                            `dialog-${i}`,
                        ) as HTMLDialogElement | null
                    )?.showModal()}
            >
                <CircleIcon class="regular-old-circle" style={iconsSvg} /><span
                    class="sr-only">Open Bigger Image Dialog</span
                ></button
            >
        </article>
    {/each}
</section>

{#each sculptures as sculpture, i}
    <dialog id={`dialog-${i}`}>
        <div class="dialog-innerds">
            <button
                type="button"
                class="button button-close"
                onclick={() =>
                    browser &&
                    (
                        document.getElementById(
                            `dialog-${i}`,
                        ) as HTMLDialogElement | null
                    )?.close()}
                ><span class="sr-only">Close Dialog</span><PlusIcon
                    style={`${iconsSvg} rotate: 45deg;`}
                /></button
            >
            <img src={sculpture.image} loading="lazy" alt={sculpture.alt} />
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
        overflow: clip;
        :global(&:hover svg) {
            transition: var(--global-transition);
            transform: scale(1.2);
        }
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
        right: -1px;
        bottom: 0px;
        cursor: pointer;
        :global(&:focus svg) {
            transition: var(--global-transition);
            transform: scale(1.2);
        }
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
            width: 100%;
            height: 100%;
            object-fit: contain;
            position: relative;
            top: -74px;
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
        z-index: 1;
        cursor: pointer;
        :global(&:hover svg) {
            transition: var(--global-transition);
            transform: scale(1.2);
        }
    }

    @media (max-width: 38rem) {
        .masonry-container {
            columns: 2 auto;
        }
    }
</style>
