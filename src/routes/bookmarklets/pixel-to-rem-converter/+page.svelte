<script>
    import Prism from "$lib/components/code-snippet/prisma-js.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import Button from "$lib/components/Button.svelte";
    import bookmarkletCode from "./bookmarklet-code";
    import bookmarklet from "./bookmarklet";
    import bookmarkletFunction from "./bookmarklet-function";
    let showCode = $state(false);
    let bookmarkletName = $state("Drag Me To Your Nearest Bookmark Bar");
</script>

<Seo
    title="Pixel to rem converter bookmarklet"
    pageCanonicalUrl="/bookmarklets/pixel-to-rem-converter"
/>

<h1>Pixel to Rem converter</h1>

<section class="clean-background">
    <h2>Why make this tool?</h2>
    <p>
        As a frontend developer I often need to bounce back and forth using rems
        and pixels regularly. Sure there are nice websites that can do this. You
        can use preprocessor tools like sass mixins. Browser devtools have also
        introduced some handy new was to do this.
    </p>
</section>
<section class="bookmarklet-controls decorative-background">
    <div class="button-group">
        <Button
            type="button"
            handleClick={() => bookmarkletFunction()}
            buttonText="Try it out!"
        />
        <Button
            type="button"
            ariaExpanded={showCode}
            ariaControls="pixelToRem"
            buttonText={`${!showCode ? "Show" : "Hide"} Script`}
            handleClick={() => (showCode = !showCode)}
        />
    </div>
    <div class="button-group">
        <div class="field-group">
            <label for="bookmarkletName">Bookmarklet Name</label>
            <input
                class="input-text"
                id="bookmarkletName"
                type="text"
                bind:value={bookmarkletName}
            />
        </div>
        <Button
            href={bookmarklet}
            buttonText={bookmarkletName}
            class="button-bookmarklet"
        />
    </div>

    {#if showCode}
        <Prism
            language="javascript"
            code={bookmarkletCode}
            copyScript
            id="pixelToRem"
        />
    {/if}
</section>
<section class="decorative-background">
    <h2>Features</h2>
    <ul>
        <li>
            It reads the current pages root pixel size and unit size
            calculations will be based off of it
        </li>
        <li>
            You can edit the root pixel size if you would like and all
            calculations of unit sizes will change accordingly
        </li>
        <li>
            Updating the pixel value will update the rem value automatically
        </li>
        <li>
            Updating the rem value will update the pixel value automatically
        </li>
        <li>
            Using the copy buttons will append the unit name to the end of the
            value for you ex. <strong class="highlight-pill">10px</strong> or
            <strong class="highlight-pill">0.625rem</strong>
        </li>
        <li>
            Using up and down arrow keys will increment and decrement values in
            each input field
        </li>
        <li>UI is all tabable so you don't need a mouse to use it</li>
        <li>Autofocus on pixel input when UI initializes</li>
        <li>UI is themeable. Feel free to change colors around with ease!</li>
        <li>
            Created with ❤️ using <a
                href="https://make-bookmarklets.com"
                target="_blank"
                rel="noopener">make-bookmarklets.com</a
            >
        </li>
    </ul>
</section>

<style>
    .field-group {
        margin-block: 30px;
        width: 50%;
        & input {
            margin-top: 0 !important;
        }
    }
    #bookmarkletName {
        padding: 5px 5px 3px;
        width: 100%;
        border-radius: 4px;
        border: 2px solid var(--pure-black);
        margin-top: 20px;
    }
    @media (max-width: 38rem) {
        .field-group {
            width: 100%;
        }

        .button-group > button:last-of-type {
            gap: 20px;
        }
    }
</style>
