<script>
    import Button from "$lib/components/Button.svelte";
    import Prism from "$lib/components/code-snippet/prisma-js.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import bookmarklet from "./bookmarklet";
    import bookmarkletCode from "./bookmarklet-code";
    import bookmarkletFunction from "./bookmarklet-function";

    let showCode = $state(false);
    let bookmarkletName = $state("Drag Me To Your Nearest Bookmark Bar");
</script>

<Seo
    title="Website green energy checker"
    pageCanonicalUrl="/bookmarklets/check-website-carbon-impact"
/>

<h1>Is your website using green energy?</h1>

<section class="clean-background">
    <h2>Why make this tool?</h2>
    <p>
        I love the idea of Cabin's claim to be able to tell you this information
        accurately. Does it 🤷. Most likely marketing. I use Carbon for
        analytics on my sites due to their privacy first and green energy focus.
        They provide a great service and worthy alternative to google analytics.
        If you would like to opt out of tracking everyone and know how your
        website is performing <a href="https://withcabin.com/#demo"
            >Check out Cabin</a
        >. My endorsement to Cabin analytics is not sponsored or paid for. This
        is purely my opinion.
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
            class="button-toggle"
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
            id="cabinCarbonChecker"
        />
    {/if}
</section>
<section class="decorative-background">
    <h2>Features</h2>
    <ul>
        <li>
            Takes the current url and sends to Cabin's green energy checker for
            evaluation.
        </li>
        <li>
            Provides information about requests and cookies which would be
            blocked by ad blockers. Weight of the site. Size of files downloaded
            organized by file extensions.
        </li>
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
    }
</style>
