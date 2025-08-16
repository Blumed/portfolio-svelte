<script lang="ts">
	import { slide } from "svelte/transition";
	import { browser } from "$app/environment";
	import Prism from "$lib/components/code-snippet/prisma-js.svelte";

	// Application Settings
	let auto = true;
	export let language: string;
	export let processType: string;
	let codeIn = "";
	let codeOut = "";
	let isValid = true;
	let errorMessage = "";
	let codeInSize = 0;
	let codeOutSize = 0;
	let codeSavings = 0;
	let toggleCodeOutput = false;
	let sizeName = "bytes";
	let codeOutOneLine = false;
	let dialog: any;

	function defaultValues() {
		isValid = true;
		errorMessage = "";
		codeInSize = 0;
		codeOutSize = 0;
		codeSavings = 0;
		codeOut = "";
		codeIn = "";
		codeOutOneLine = false;
	}

	function server(processType: string) {
		if (language === "json" && processType === "minify")
			return minifyJson();
		if (language === "json" && processType === "beautify")
			return beautifyJson();
	}

	function validateJson(jsonString: string) {
		try {
			const json = JSON.parse(jsonString);
			if (json && typeof json === "object") {
				isValid = true;
				errorMessage = "";
				return json;
			}
		} catch (e: any) {
			errorMessage = e.message;
		}
		isValid = false;
		return isValid;
	}

	function minifyJson() {
		let jsonObject;
		jsonObject = validateJson(codeIn);
		codeOut = JSON.stringify(jsonObject, null, 0);
		codeInSize = new TextEncoder().encode(codeIn).length;
		codeOutSize = new TextEncoder().encode(codeOut).length;
		codeSavings = codeInSize - codeOutSize;
		codeOutOneLine = true;
		toggleCodeOutput = true;
	}

	function beautifyJson() {
		let jsonObject;
		jsonObject = validateJson(codeIn);
		codeOut = JSON.stringify(jsonObject, null, 2);
		codeInSize = new TextEncoder().encode(codeIn).length;
		codeOutSize = new TextEncoder().encode(codeOut).length;
		codeOutOneLine = false;
		toggleCodeOutput = true;
		if (codeOutSize > codeInSize) {
			codeSavings = codeOutSize - codeInSize;
		} else {
			codeSavings = codeInSize - codeOutSize;
		}
	}

	function processBytes(bytes: number) {
		bytes = Number(bytes);
		let kilobytes;
		if (bytes > 1000) {
			kilobytes = bytes / 1024;
			sizeName = "kilobytes";
			return `${(Math.round(kilobytes * 10) / 10).toFixed(1)}`;
		}
		sizeName = "bytes";
		return `${bytes}`;
	}

	function toggleDialog(state: boolean) {
		if (browser) {
			dialog = document.getElementById("code-output-fullscreen");
			state === true ? dialog.showModal() : dialog?.close();
		}
	}

	function storeAutoRun() {
		auto = !auto;
		localStorage.setItem("autoProcess", auto.toString());
	}

	function manualMinify() {
		if (codeIn.length > 0) server("minify");
	}
	function manualBeautify() {
		if (codeIn.length > 0) server("beautify");
	}

	if (browser) {
		localStorage.autoProcess === "false" ? (auto = false) : (auto = true);
	}

	// Allow code to process when auto is checked
	$: if (auto && codeIn.length > 0) {
		server(processType);
	} else if (auto && codeIn.length === 0) {
		defaultValues();
	}
</script>

<section class="app">
	<h1 class="title">{processType} {language}</h1>
	<p class="copy">
		100% client side json minification. Goal was to create this common web
		tool for myself so I know for a fact none my code is stored and
		harvested for sensitive data. I don't have a server to even process your
		code, so your code is safe. Check the network if you want to see for
		yourself.
	</p>
	<div class="dashboard">
		<div class="code-controls">
			<div class="field">
				<label class="label-code-auto-run" for="code-auto-run"
					>Auto {processType}</label
				>
				<input
					class="input-code-auto-run"
					type="checkbox"
					id="code-auto-run"
					bind:checked={auto}
					on:click={storeAutoRun}
				/>
			</div>
		</div>
		<div class="code-controls-more">
			<div class="button-group">
				<button
					type="button"
					class="button-action"
					on:click={manualMinify}><span>minify</span></button
				>
				<button
					type="button"
					class="button-action"
					on:click={manualBeautify}><span>beautify</span></button
				>
				<button
					type="button"
					class="button-reset"
					on:click={defaultValues}><span>reset</span></button
				>
			</div>
		</div>

		<div class="code-data">
			<h3>Code Savings</h3>
			<span class="savings">{processBytes(codeSavings)}</span>
			{sizeName}
			<div class="code-sizes">
				<span class="code-size-label"
					>Before: <span>{processBytes(codeInSize)}</span></span
				>
				<span class="code-size-label"
					>After: <span>{processBytes(codeOutSize)}</span></span
				>
			</div>
		</div>
	</div>

	<div class="code-input-container">
		<textarea
			class="textarea-code-input"
			class:invalid={!isValid}
			name="code-input"
			id="code-input"
			placeholder="Right Here"
			bind:value={codeIn}
		></textarea>
		<label class="label-code-input" for="code-input">Paste Code Here</label>
	</div>
	{#if codeOut !== "false" && codeOut.length !== 0 && errorMessage == ""}
		<button
			type="button"
			class="button-toggle-output"
			class:is-toggled={!toggleCodeOutput}
			aria-label="Copy Code"
			on:click={() => (toggleCodeOutput = !toggleCodeOutput)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-chevron-up"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M6 15l6 -6l6 6" />
			</svg>
		</button>
	{/if}
	{#if codeOut !== "false" && codeOut.length !== 0 && errorMessage == "" && toggleCodeOutput}
		<div
			class="code-output-container"
			class:is-minified={codeOutOneLine}
			in:slide
			out:slide
		>
			<label
				class="label-code-output"
				class:sr-only={codeOut.length !== 0}
				for="code-output">Your {language}</label
			>

			<div class="field-control">
				{#key codeOut}
					<Prism
						language="json"
						code={codeOut}
						class="textarea-code-output"
						id="code-output"
					/>
				{/key}
			</div>
			<div class="code-output-controls">
				<button
					type="button"
					class="button-copy"
					on:click={() => navigator.clipboard.writeText(codeOut)}
					>Copy</button
				>
				<button
					type="button"
					class="button-fullscreen"
					aria-label="Copy Code"
					on:click={() => toggleDialog(true)}
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-arrows-maximize"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M16 4l4 0l0 4" />
						<path d="M14 10l6 -6" />
						<path d="M8 20l-4 0l0 -4" />
						<path d="M4 20l6 -6" />
						<path d="M16 20l4 0l0 -4" />
						<path d="M14 14l6 6" />
						<path d="M8 4l-4 0l0 4" />
						<path d="M4 4l6 6" />
					</svg></button
				>
			</div>
		</div>
	{/if}
	{#if errorMessage !== ""}
		<div class="error-message" in:slide out:slide>
			<span>{errorMessage}</span>
		</div>
	{/if}
</section>

<dialog id="code-output-fullscreen">
	<button type="button" on:click={() => toggleDialog(false)}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-x"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M18 6l-12 12" />
			<path d="M6 6l12 12" />
		</svg><span class="sr-only">Close</span></button
	>
	{#key codeOut}
		<Prism
			language="json"
			code={codeOut}
			class="textarea-code-output"
			id="code-output"
		/>
	{/key}
</dialog>

<style lang="scss">
	.app {
		border: 2px solid var(--primary-color);
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: minmax(234px, auto) 250px 200px auto;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		margin-bottom: 50px;
		overflow: hidden;
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
		background-color: var(--pure-white);
	}
	.dashboard {
		grid-area: 2 / 1 / 3 / 7;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 50px 200px 250px;
	}
	.code-controls {
		grid-area: 1 / 1 / 3 / 3;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2px solid var(--primary-color);
		position: relative;
		z-index: 1;
		padding-right: 12px;
		flex-direction: row-reverse;
		background-color: var(--pure-white);
		.field {
			display: inline-block;
			margin-bottom: 0;
		}
	}
	.button-group {
		display: grid;
		grid-auto-flow: row;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
		button {
			background-color: var(--subtle-grey);
			border: 0;
			border-bottom: 2px solid currentColor;
			color: inherit;
			cursor: pointer;
			font-size: 14px;
			padding: 12px 12px 8px 12px;
			text-transform: capitalize;
			margin: 0;
			&:first-child {
				border-right: 2px solid var(--primary-color);
			}
			&:last-child {
				border-left: 2px solid var(--primary-color);
			}
		}
	}
	.button-reset {
		color: var(--pure-black);
	}
	.code-data {
		grid-area: 3 / 6 / 1 / 3;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: center;
		border-left: 2px solid var(--primary-color);
		border-bottom: 2px solid var(--primary-color);
		padding-top: 12px;
		background-color: var(--subtle-grey);
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
			border-top: 2px solid var(--primary-color);
			display: flex;
			justify-content: space-around;
			padding: 9px 0 5px 0;
		}
	}
	.code-controls-more {
		grid-area: 2 / 3 / 3 / 1;
		border-bottom: 2px solid var(--primary-color);
	}
	#code-input {
		padding: 1.2rem;
		resize: none;
		display: block;
		width: 100%;
		min-height: 200px;
		margin: 0;
	}

	.label-code-auto-run {
		color: var(--pure-black);
		text-transform: capitalize;
	}
	.code-input-container {
		grid-area: 3 / 1 / 4 / 7;
		display: flex;
		flex-flow: column-reverse;
	}
	.field-control {
		display: flex;
		height: 100%;
		width: calc(100% - 65px);
	}
	.error-message {
		grid-area: 4 / 1 / 5 / 7;
		height: 100%;
		display: flex;
		align-items: center;
		padding: 1rem;
		width: 100%;
		color: var(--pure-white);
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
		text-overflow: ellipsis;
		transform-origin: left bottom;
		transform: translate(0, 2.525rem) scale(1);
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
	}

	.textarea-code-input {
		background-color: var(--pure-white);
		position: relative;
		border: 0;
		&.invalid {
			color: red;
		}
	}
	.code-output-container {
		grid-area: 3 / 1 / 4 / 7;
		background-color: var(--pure-white);
		position: relative;
		z-index: 1;
		display: flex;
		&.is-minified {
			:global(.textarea-code-output) {
				overflow-x: hidden;
				overflow-y: scroll;
				resize: none;
				padding-top: 22px;
				padding-bottom: 0;
				min-height: 100%;
			}
		}
	}
	.label-code-output {
		color: var(--pure-black);
		width: 100%;
		padding-left: 0;
		justify-content: center;
		align-items: center;
		display: flex;
		text-transform: capitalize;
	}
	.button-copy,
	.button-fullscreen,
	.button-toggle-output {
		border: 0;
		color: var(--primary-color);
		background-color: var(--subtle-grey);
		cursor: pointer;
		display: inline-block;
		height: 100%;
		max-height: 67px;
		padding: 0 13px;
		margin: 0;
		border-bottom: 2px solid var(--primary-color);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.button-copy {
		border-left: 2px solid var(--primary-color);
	}
	.button-fullscreen {
		border-left: 2px solid var(--primary-color);
		border-bottom: 0;
	}
	.button-toggle-output {
		grid-area: 3/6/3/7;
		z-index: 2;
		position: relative;
		border-left: 2px solid var(--primary-color);
		width: 65px;
		display: flex;
		align-items: center;
		justify-content: center;
		&.is-toggled .icon-chevron-up {
			transform: none;
			transition: all 0.3s all;
		}
	}
	.icon-chevron-up {
		transform: scaleY(-1);
		transform-style: preserve-3d;
		transition: all 0.3s ease;
	}

	.code-output-controls {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	dialog {
		max-width: 860px;
		background-color: black;
		border-color: white;
		border-width: 2px;
		padding: 50px;
		position: relative;
		width: 100%;
		height: fit-content;
		padding: 50px 0 0;
		button {
			position: absolute;
			top: 0;
			z-index: 1;
			right: 0;
			border: 0;
			border-left: 2px solid white;
			color: white;
			background: transparent;
			border-bottom: 2px solid white;
			height: 50px;
			width: 50px;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	button {
		transition: var(--global-transition);
		&:hover {
			background-color: var(--pure-white);
			color: var(--pure-black);
		}
	}
	@media (max-width: 768px) {
		.dashboard {
			grid-area: 2/1/3/7;
		}
		.code-controls {
			grid-area: 1/1/3/6;
		}
		.button-group {
			flex-direction: column;
			height: 100%;
			justify-content: flex-start;
			display: flex;
			button {
				&:first-child {
					border-right: 0;
				}
				&:last-child {
					border-left: 0;
				}
			}
		}
		.code-data {
			grid-area: 2/6/3/3;
			h3 {
				margin-bottom: 12px;
			}
			.savings {
				font-size: 4rem;
			}
			.code-sizes {
				display: flex;
				flex-direction: column;
			}
			.code-size-label {
				text-align: left;
				padding-left: 8px;
				&:last-child span {
					margin-left: 10px;
				}
			}
		}
	}
</style>
