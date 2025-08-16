<script>
import Prism from "$lib/components/code-snippet/prisma-js.svelte";
import Seo from "$lib/components/seo/page-meta.svelte";
import pixelToRem from "./pixel-to-rem";
</script>

<Seo title="Pixel to rem converter bookmarklet" pageCanonicalUrl="/tools/pixel-to-rem-converter-bookmarklet" />

<h1>Pixel to Rem converter</h1>

<section class="clean-background">
	<h2>Why make this tool?</h2>
	<p>
        As a frontend developer I often need to bounce back and forth using rems and pixels regularly.
        Sure there are nice websites that can do this. You can use preprocessor tools like sass mixins. Browser devtools have also introduced
        some handy new was to do this. 
	</p>
    <Prism language="javascript" id="jsFacade" code={pixelToRem} copyScript />
</section>