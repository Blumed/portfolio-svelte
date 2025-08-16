<script>
    import background from "./painting.jpg";
    let { children } = $props();
</script>

{@render children()}

<img
    src={background}
    alt="Royalty free painting which is a stand in for something else I will add in the future"
    role="presentation"
    class="page-background"
/>

<style>
    .page-background {
        width: 100vw;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        display: block;
        height: 100vh;
        position: absolute;
        z-index: -1;
        inset: 0;
    }
</style>
