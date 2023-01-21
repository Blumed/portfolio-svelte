<script lang="ts">
	import { browser } from '$app/environment';
	import Seo from '$lib/components/seo/page-meta.svelte';
	import { slide } from 'svelte/transition';

	// Application Settings
	let auto = true;
	let language = 'json';
	let processType = 'minify';
	let codeIn = '';
	let codeOut = '';
	let isValid = true;
	let errorMessage = '';
	let codeInSize = 0;
	let codeOutSize = 0;
	let codeSavings = 0;
	let sizeName = 'bytes';

	// Reset to default values
	function defaultValues() {
		isValid = true;
		errorMessage = '';
		codeInSize = 0;
		codeOutSize = 0;
		codeSavings = 0;
		codeOut = '';
		codeIn = '';
	}

	function validateJson(jsonString: string) {
		try {
			const json = JSON.parse(jsonString);
			if (json && typeof json === 'object') {
				isValid = true;
				errorMessage = '';
				return json;
			}
		} catch (e: any) {
			errorMessage = e.message;
		}
		isValid = false;
		return isValid;
	}

	function processValues() {
		let jsonObject;
		jsonObject = validateJson(codeIn);
		codeOut = JSON.stringify(jsonObject, null, 0);
		codeInSize = new TextEncoder().encode(codeIn).length;
		codeOutSize = new TextEncoder().encode(codeOut).length;
		codeSavings = codeInSize - codeOutSize;
	}

	function processBytes(bytes: number) {
		bytes = Number(bytes);
		let kilobytes;
		if (bytes > 1000) {
			kilobytes = bytes / 1024;
			sizeName = 'kilobytes';
			return `${(Math.round(kilobytes * 10) / 10).toFixed(1)}`;
		}
		sizeName = 'bytes';
		return `${bytes}`;
	}

	if (browser) localStorage.autoProcess === 'false' ? (auto = false) : (auto = true);

	// Allow code to process when auto is checked
	$: if (auto && codeIn.length > 0) {
		processValues();
	} else if (auto && codeIn.length === 0) {
		defaultValues();
	}

	function storeAutoRun() {
		auto = !auto;
		localStorage.setItem('autoProcess', auto.toString());
	}

	function manualParse() {
		if (codeIn.length > 0) processValues();
	}
</script>

<Seo title="Minify Json" pageCanonicalUrl="/tools/minify-json" />

<section class="app">
	<h1 class="title">Minify {language}</h1>
	<p class="copy">
		100% client side json minification. Goal was to create this common web tool for myself so I know
		for a fact none my code is stored and harvested for sensitive data. I don't have a server to
		even process your code, so your code is safe. Check the network if you want to see for yourself.
	</p>
	<div class="code-controls">
		<div class="field">
			<label class="label-code-auto-run" for="code-auto-run">Auto {processType}</label>
			<input
				class="input-code-auto-run"
				type="checkbox"
				id="code-auto-run"
				bind:checked={auto}
				on:click={storeAutoRun}
			/>
		</div>

		{#if !auto}
			<div class="button-group" in:slide out:slide>
				<button type="button" class="button-action" on:click={manualParse}>{processType}</button>
				<button type="button" class="button-reset" on:click={defaultValues}>reset</button>
			</div>
		{/if}
	</div>

	<div class="code-input-container">
		<textarea
			class={`textarea-code-input ${!isValid ? 'invalid' : ''}`}
			name="code-input"
			id="code-input"
			placeholder="Right Here"
			bind:value={codeIn}
		/>
		<label class="label-code-input" for="code-input">Paste Code Here</label>
	</div>

	<div class="code-data">
		<h3>Code Savings</h3>
		<span class="savings">{processBytes(codeSavings)}</span>
		{sizeName}
		<div class="code-sizes">
			<span class="code-size-label">Before: <span>{processBytes(codeInSize)}</span></span>
			<span class="code-size-label">After: <span>{processBytes(codeOutSize)}</span></span>
		</div>
	</div>

	<div class="code-output-container">
		<button
			type="button"
			class="button-copy"
			on:click={() => navigator.clipboard.writeText(codeOut)}>Copy</button
		>
		{#if errorMessage !== ''}
			<div class="error-message">
				<span>{errorMessage}</span>
			</div>
		{/if}

		<label class={`label-code-output ${codeOut.length !== 0 ? 'sr-only' : ''}`} for="code-output"
			>Your {language}</label
		>

		{#if codeOut !== 'false' && codeOut.length !== 0}
			<div class="field-control">
				<textarea
					class="textarea-code-output"
					name="code-output"
					id="code-output"
					placeholder="Code will come out here."
					value={codeOut}
				/>
			</div>
		{/if}
	</div>
</section>
<section>
	<h2>What is minification?</h2>
	<p>
		Formatted code is easier to read for us humans. Computers don't read code like we do. They don't
		need visual spacing, so that is what minification removes. Each space, tab, or carriage return
		is processed by the browser. Removing them makes our code smaller and more performant.
	</p>
	<h2>What is not minification</h2>
	<p>
		Minification is not compression. Compression rewrites a files binary code and encodes it using
		less bites. On the web we commonly interact with compression when we serve the browser
		compressed files using compression algorithms like gzip or brotli. Serving compressed files is
		faster because there is less bytes the browser needs to decode.
		<br />
		<br />
		Minification is not uglification. Uglification rewrites your variables and functions names to single
		letters. It does way more than this but this is the basic idea. Obfuscates your public code.
	</p>
</section>

<style lang="scss">
	.app {
		--primary-color: #303030;
		--secondary-color: #d0dde9;
		--tertiary-color: #edf0f8;
		--accent-color: #e3a6c2;
		border: 2px solid var(--primary-color);
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: minmax(204px, auto) 50px 200px 100px;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		margin-bottom: 50px;
	}

	.title {
		grid-area: 1 / 6 / 2 / 6;
		writing-mode: vertical-rl;
		text-orientation: mixed;
		padding: 10px;
		font-size: 2rem;
		border-left: 2px solid var(--primary-color);
		border-bottom: 2px solid var(--primary-color);
		margin: 0;
		justify-content: center;
		display: flex;
		text-transform: capitalize;
	}
	.copy {
		grid-area: 1 / 1 / 2 / 6;
		padding: 2rem;
		margin: 0;
		border-bottom: 2px solid var(--primary-color);
	}
	.code-controls {
		grid-area: 2 / 1 / 3 / 4;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2px solid var(--primary-color);
		position: relative;
		z-index: 1;
		padding: 0 12px;
		flex-direction: row-reverse;
		.field {
			display: inline-block;
			margin-bottom: 0;
		}
	}
	.button-group {
		display: flex;
		gap: 12px;
		height: 100%;
		button {
			background-color: #f8f9fa;
			border: 0;
			border-left: 2px solid currentColor;
			border-right: 2px solid currentColor;
			color: inherit;
			cursor: pointer;
			font-size: 14px;
			padding-top: 2px;
			text-transform: capitalize;
			margin: 0;
		}
	}
	.code-data {
		grid-area: 2 / 7 / 4 / 4;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: center;
		border-left: 2px solid var(--primary-color);
		padding-top: 12px;
		background-color: #f8f9fa;
		h3 {
			font-weight: 600;
			margin-top: 0;
			margin-bottom: 23px;
		}
		.savings {
			font-size: 6rem;
			font-weight: 600;
			line-height: 1;
		}
		.code-sizes {
			border-top: 2px solid black;
			display: flex;
			justify-content: space-around;
			padding: 9px 0 5px 0;
		}
	}
	#code-input {
		padding: 1.2rem;
		resize: none;
		display: block;
		width: 100%;
		min-height: 200px;
	}

	.label-code-auto-run {
		color: black;
		text-transform: capitalize;
	}
	.code-input-container {
		grid-area: 2 / 1 / 4 / 4;
		display: flex;
		flex-flow: column-reverse;
	}
	.field-control {
		display: flex;
		height: 100%;
		width: 100%;
	}
	.error-message {
		height: 100%;
		display: flex;
		align-items: center;
		padding: 1rem;
		width: 100%;
		background-color: pink;
	}

	label,
	textarea {
		transition: all 0.2s;
		touch-action: manipulation;
		padding-left: 0.5rem;
		color: inherit;
	}

	textarea:placeholder-shown + label {
		cursor: text;
		max-width: 66.66%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		transform-origin: left bottom;
		transform: translate(0, 3.125rem) scale(1.5);
	}

	::-webkit-input-placeholder {
		opacity: 0;
		transition: inherit;
	}

	textarea:focus::-webkit-input-placeholder {
		opacity: 1;
	}

	textarea:not(:placeholder-shown) + label,
	textarea:focus + label {
		transform: translate(0, 0) scale(1);
		opacity: 0;
		cursor: pointer;
	}

	.textarea-code-input {
		background-color: white;
		position: relative;
		border: 0;
		&.invalid {
			color: red;
		}
	}
	.code-output-container {
		grid-area: 4 / 1 / 5 / 7;
		border-top: 2px solid var(--primary-color);
		display: flex;
	}
	.label-code-output {
		color: black;
		width: 100%;
		padding-left: 0;
		justify-content: center;
		align-items: center;
		display: flex;
		text-transform: capitalize;
	}
	.button-copy {
		border: 0;
		border-right: 2px solid var(--primary-color);
		color: var(--primary-color);
		background-color: #f8f9fa;
		cursor: pointer;
		display: inline-block;
		height: 100%;
		padding: 0 13px;
		margin: 0;
	}
	.textarea-code-output {
		border: 0;
		height: 100%;
		background-color: white;
		display: inline-block;
		width: 100%;
		resize: none;
		padding: 1.2rem;
		color: var(--primary-color);
	}
	@media (max-width: 768px) {
		.code-controls {
			grid-area: 2/1/3/7;
		}
		.code-data {
			grid-area: 3/7/4/4;
			h3 {
				margin-bottom: 12px;
			}
			.savings {
				font-size: 4rem;
			}
			.code-sizes {
				display: flex;
				flex-direction: column;
				.code-size-label {
					text-align: left;
					padding-left: 8px;
					&:last-child span {
						margin-left: 10px;
					}
				}
			}
		}
	}
</style>
