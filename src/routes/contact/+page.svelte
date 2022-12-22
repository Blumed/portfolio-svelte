<script>
	export const prerender = true;
	import Seo from '$lib/components/seo/page-meta.svelte';
</script>

<Seo title="Contact" pageCanonicalUrl="/contact" />

<div class="container">
	<h1 class="page-title">Contact</h1>
	<section>
		<h3>Leave a message after the . . . . beep</h3>
		<form action="//formspree.io/cullan.luther@gmail.com" method="POST">
			<div class="clear">
				<div class="field">
					<input
						class="-m-break"
						type="text"
						id="frmName"
						placeholder="Jim Gime"
						name="name"
						required
						autocomplete="name"
						focus
					/>
					<label for="frmName">Full Name</label>
				</div>
				<div class="field">
					<input
						class="-m-break"
						type="email"
						id="frmEmail"
						placeholder="jim.gime@email.com"
						name="_replyto"
						required
						autocomplete="email"
					/>
					<label for="frmEmail">Email</label>
				</div>
				<input type="hidden" name="_subject" value="New Blog Submission!" />
				<div class="field">
					<textarea
						class="-m-break"
						type="text"
						placeholder="Enter Your Hiko's Here"
						name="message"
					/>
					<label for="frmMessage">Message</label>
				</div>
			</div>
			<input type="text" name="_gotcha" style="display:none" />
			<button type="submit" class="button">Send</button>
			<input type="hidden" name="_next" value="/thanks" />
		</form>
	</section>
</div>

<style>
	h3 {
		margin-bottom: 0;
	}
	form {
		position: relative;
	}
	form input {
		border: 0;
		border-bottom: 2px solid currentColor;
		outline: none;
	}
	form input::placeholder,
	form textarea::placeholder {
		color: inherit;
		text-transform: uppercase;
	}
	form input.-m-break {
		margin-bottom: 1rem;
		width: 24.3rem;
	}
	form textarea {
		border: 0;
		border-left: 2px solid currentColor;
		outline: none;
		border-bottom: 2px solid currentColor;
	}
	form textarea {
		height: 30vh;
		width: 100%;
		max-width: 24.3rem;
		resize: none;
	}

	.field {
		display: flex;
		flex-flow: column-reverse;
		margin-bottom: 1em;
	}
	/**
* Add a transition to the label and input.
* I'm not even sure that touch-action: manipulation works on
* inputs, but hey, it's new and cool and could remove the 
* pesky delay.
*/
	label,
	input,
	textarea {
		transition: all 0.2s;
		touch-action: manipulation;
		padding-left: 0.5rem;
	}

	input,
	textarea {
		font-size: 1.5em;
		border: 0;
		border-bottom: 1px solid #ccc;
		font-family: inherit;
		-webkit-appearance: none;
		border-radius: 0;
		padding: 0;
		cursor: text;
	}

	input:focus,
	textarea:focus {
		outline: 0;
		border-bottom: 1px solid #666;
	}

	label {
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	/**
* Translate down and scale the label up to cover the placeholder,
* when following an input (with placeholder-shown support).
* Also make sure the label is only on one row, at max 2/3rds of the
* field—to make sure it scales properly and doesn't wrap.
*/
	input:placeholder-shown + label,
	textarea:placeholder-shown + label {
		cursor: text;
		max-width: 66.66%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		transform-origin: left bottom;
		transform: translate(0, 2.125rem) scale(1.5);
	}
	/**
* By default, the placeholder should be transparent. Also, it should 
* inherit the transition.
*/
	::-webkit-input-placeholder {
		opacity: 0;
		transition: inherit;
	}
	/**
* Show the placeholder when the input is focused.
*/
	input:focus::-webkit-input-placeholder,
	textarea:focus::-webkit-input-placeholder {
		opacity: 1;
	}
	/**
* When the element is focused, remove the label transform.
* Also, do this when the placeholder is _not_ shown, i.e. when 
* there's something in the input at all.
*/
	input:not(:placeholder-shown) + label,
	input:focus + label,
	textarea:not(:placeholder-shown) + label,
	textarea:focus + label {
		transform: translate(0, 0) scale(1);
		cursor: pointer;
	}
	textarea {
		max-height: 200px;
	}
	@media (max-width: 30rem) {
		form input:not(:last-child),
		textarea.-m-break {
			width: 100%;
		}
	}
</style>
