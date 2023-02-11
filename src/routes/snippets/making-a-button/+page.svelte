<script lang="ts">
	import Comments from '$lib/components/comments/comments.svelte';
</script>

<h1>Making a button</h1>

<p class="decorative-background">
	Some opinions and facts about the html button element. This is meant to be a living document.
</p>

<section class="decorative-background">
	<h2>Opinions Facts, and Accessability</h2>

	<ul class="list-item-circle">
		<li>
			Often other elements will look like a button but will keep its own behavior. Make a top level
			class to initialize the base button style like css frameworks do. I use <strong
				class="highlight-pill">button</strong
			>
			like <a href="https://bulma.io/documentation/elements/button/">bulma</a>
			does. The following classes should be modifiers or extensions of the base style.
		</li>
		<li>
			The default type of an html element is <strong class="highlight-pill">submit</strong>. It
			makes sense because of history but its kinda crazy that this is the case today. This means if
			you want to make sure none of your buttons accidentally post your form make sure to always use
			<strong class="highlight-pill">type="button"</strong>.
		</li>
		<li>Buttons should never be links. They should be scoped to update UI on the current page.</li>
		<li>
			Button text should say what it does. This is not a place to be cryptic. Screen readers will
			use this text.
		</li>
		<li>
			I can't recommend enough using a span to wrap text inside the button. This makes vertically
			centering text much easier and span's are <strong class="highlight-pill"
				>display: inline</strong
			> by default which just makes sense for the use case.
		</li>
		<li>
			If a button shows or hides UI on the page then <strong class="highlight-pill"
				>aria-expanded</strong
			>
			and <strong class="highlight-pill">aria-controls</strong> should be used to indicate the state
			of the UI and to point to what UI is controlled by the button.
		</li>
		<li>Never remove the outline style. Fight all differing opinions.</li>
	</ul>
</section>

<Comments />
