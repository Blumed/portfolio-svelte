<script>
import Prism from "$lib/components/code-snippet/prisma-js.svelte";
import Seo from "$lib/components/seo/page-meta.svelte";
import betterConsoles from "./better-consoles";
</script>

<Seo title="Better JS Console Logs with Visual Studio Code" pageCanonicalUrl="/snippets/visual-studio-code-snippets" />

<h1>Better console logs in JS</h1>

<section class="clean-background">
	<h2>Why make this tool?</h2>
	<p>
I work in large codebase with lots of errors and warnings in the console that do not actually matter. I also don't like filtering my console messages to info only because I will forget to switch it back to verbose. Might be a me issue ?? I wanted to make my console message standout more visually in devtools and provide a quick way to jump back into my code from the browser.
	</p>
    <Prism language="javascript" id="jsFacade" code={betterConsoles} copyScript />
        <h2>Features</h2>
    <ol>
        <li>clog will make a console.log from a copied variable/function in your current clipboard. Fills out message and variable automatically.</li>
        <li>slog will make a console.log with a curosor in both the message and variable name so they are created at the same time.</li>
        <li>dlog will make a console log with a cursor in the message automatically</li>
        <li>Each feature creates a clickable link in devtools to jump back into VScode from the console. Snippet was made for a mac. Vscode adds ~ when using TM_FILEPATH for the username which doesn't work for full file paths so I added a little regex to remove it. Different OS's may need to do some additional changes to the file paths to get them to work. If you get it working on Linux/Windows feel free to share what you did so others can profit from your work.</li>
        <li>The css I added was very basic. I added green as a positive reinforcement color.</li>
        <li>The code this snippet generates is thick and ugly, which helps you spot it when getting ready for a code review. Additiionally I added //temp.console to the end so you can do a find in VScode and see all of your consoles quickly for easy cleanup.</li>
    </ol>
        <h2>How To Use It</h2>
<ol>
    <li>Open VScode</li>
    <li>shift + command + p</li>
    <li>Snippets: Configure Snippets</li>
    <li>Click add new global snippet</li>
    <li>Type whatever you want</li>
    <li>Paste in code above</li>
    <li>🎉 Save, and you did it 🎉 Now in your ts/js file type clog, slog, dlog and feel the power 💪</li>
</ol>
</section>
