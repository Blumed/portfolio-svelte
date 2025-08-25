<script>
	import Button from "$lib/components/Button.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import { Tab, TabList, TabPanel, Tabs } from "$lib/components/tabable";
	import { workingYears } from "$lib/constants";
	import IconChevron from "$lib/assets/svgeez/icon-chevron.svelte";

	const chevronStyle = `
	position: absolute;
    right: 16px;
    width: 2rem;
    top: 10px;
	`;
</script>

<Seo
	title="Freelancing and Consultation"
	pageCanonicalUrl="/freelancing-and-consultation"
/>

<h1>Freelancing and Consultation</h1>
<section class="clean-background">
	<h2><strong>A little about myself</strong></h2>
	<p>
		I have been a developer for {workingYears} years. Most of my career I have
		been focused on large and small marketing sites. I really enjoy solving the
		types of problems that arise from creating performant informative websites
		and applications. Spent 6 years working at various agencies where time and
		performance matter. For the last 7 years I have been working at start up
		working and maintaining a large web app.
	</p>
</section>

<section class="decorative-background">
	<h2>Overview of projects and technologies</h2>
	<p>
		Over the years I have worked on a wide breath of projects and
		technologies. I have created full Javascript banner ads to ecommerce
		sites.
	</p>
	<Tabs>
		<TabList>
			<Tab>Project Types</Tab>
			<Tab>Technologies</Tab>
		</TabList>
		<TabPanel>
			<ul>
				<li>Site Audit ( Performance, SEO, Security)</li>
				<li>SEO Strategy</li>
				<li>Site Migration</li>
				<li>Single Page Site or Applications</li>
				<li>UX/Ui Updates</li>
				<li>Responsive Design</li>
				<li>Micro Automations ( Bookmarklets, Browser Extensions )</li>
				<li>SSL Certificate Management</li>
				<li>DNS</li>
				<li>macOS Applications</li>
			</ul>
		</TabPanel>
		<TabPanel>
			<ul class="list-large">
				<li>React</li>
				<li>Redux</li>
				<li>Angular</li>
				<li>jQuery</li>
				<li>Typescript</li>
				<li>React Testing Library</li>
				<li>Gatsby</li>
				<li>GraphQL</li>
				<li>Svelte</li>
				<li>Nextjs</li>
				<li>PHP</li>
				<li>Wordpress</li>
				<li>Scss</li>
				<li>Webpack</li>
				<li>Unix</li>
				<li>AWS</li>
				<li>Shopify</li>
				<li>Square Space</li>
				<li>Green Sock</li>
				<li>Web Components</li>
				<li>D3</li>
				<li>Gatsbyjs</li>
				<li>Knockoutjs</li>
				<li>Backbonejs</li>
				<li>Python</li>
				<li>Jekyll</li>
				<li>Hugo</li>
				<li>Golang</li>
				<li>Canvas</li>
				<li>Charts &amp; Graph frameworks</li>
			</ul>
		</TabPanel>
	</Tabs>
</section>

<section class="decorative-background">
	<h2>Links to recent public projects</h2>
	<p>
		I work at a startup as a Senior Full Stack Engineer during the day. Love
		to code in my off hours as well. Here are few sample projects I have
		created and continue to maintain.
	</p>
	<div class="buttons">
		<Button href="/work" buttonText="View Work" />
		<Button href="/tools" buttonText="View Tools" />
	</div>
</section>

<section class="section-form decorative-background">
	<h2>Let's build something together</h2>
	<form action="https://formspree.io/f/xyzdggnn" method="POST">
		<fieldset>
			<legend class="sr-only">Tell me a little about the project</legend>
			<div class="field-group">
				<select name="project-type" id="project" required>
					<option value="" disabled selected
						>What type of project?</option
					>
					<option value="web-app">Web App</option>
					<option value="marketing-site">Marketing Site</option>
					<option value="site-app-audit">Site or App Audit</option>
					<option value="bookmarklet"
						>Micro Automation: Bookmarklet</option
					>
					<option value="browser-extension"
						>Micro Automation: Browser Extension</option
					>
					<option value="design">Site Redesign</option>
					<option value="site-migration">Site Migration</option>
					<option value="general-updates">General Updates</option>
					<option value="other">Other</option>
				</select>
				<label for="project" class="sr-only"
					>What kind of project do you need completed?</label
				>
				<IconChevron style={chevronStyle} />
			</div>
			<p class="checkboxes-label mb-none">Which services do you need?</p>
			<div class="checkbox-group">
				<input
					type="checkbox"
					name="service-type"
					id="check-1"
					value="development"
					defaultChecked
				/>
				<label for="check-1">Development</label>
			</div>
			<div class="checkbox-group">
				<input
					type="checkbox"
					name="service-type"
					id="check-2"
					value="design"
				/>
				<label for="check-2">Design</label>
			</div>
			<div class="checkbox-group">
				<input
					type="checkbox"
					name="service-type"
					id="check-3"
					value="seo"
				/>
				<label for="check-3">SEO</label>
			</div>
			<div class="checkbox-group">
				<input
					type="checkbox"
					name="service-type"
					id="check-4"
					value="other"
				/>
				<label for="check-4">Other</label>
			</div>
			<div class="field-group">
				<select name="budget" id="budget" placeholder="bob" required>
					<option value="" disabled selected
						>What is your budget?</option
					>
					<option value="-2.5k">Less than $2,500</option>
					<option value="2.5k-10k">$2,500 - $10,000</option>
					<option value="10k-50k">$10,000 - $50,000</option>
					<option value="50k+">More than $50,000</option>
					<option value="no-sure">Not Sure Yet</option>
				</select>
				<label for="budget" class="sr-only"
					>What is the budget you working with?</label
				>
				<IconChevron style={chevronStyle} />
			</div>
			<div class="field-group mb-none">
				<select name="timeline" id="timeline" required>
					<option value="" disabled selected
						>Completion timeline?</option
					>
					<option value="-1month">Less than 1 Month</option>
					<option value="1-2months">1-2 Months</option>
					<option value="2-3months">2-3 Months</option>
					<option value="3-6months">3-6 Months</option>
					<option value="6months+">More than 6 Months</option>
					<option value="no-sure">Not Sure Yet</option>
				</select>
				<label for="timeline" class="sr-only"
					>When does your project need to be completed?</label
				>
				<IconChevron style={chevronStyle} />
			</div>
		</fieldset>
		<fieldset>
			<legend class="sr-only"> Tell me about yourself</legend>
			<div class="field-group">
				<input
					type="text"
					name="fullname"
					id="name"
					placeholder="Bob Dole"
					autocomplete="name"
					minlength="3"
					pattern="^[a-zA-Z]+(?: [a-zA-Z]+)+$"
					required
				/>
				<label for="name">Full Name</label>
			</div>
			<div class="field-group">
				<input
					type="email"
					name="email"
					id="email"
					placeholder="bob.dole@hotmail.com"
					autocomplete="email"
					minlength="5"
					required
				/>
				<label for="email">Email</label>
			</div>
			<div class="field-group">
				<input
					type="text"
					name="website"
					id="website"
					placeholder="https://helpfultoknow.com"
				/>
				<label for="website">Website <small>(optional)</small></label>
			</div>
			<div class="field-group">
				<textarea
					name="message"
					id="message"
					placeholder="Enter Your Haiku's Here"
					pattern="/^\S.*(?:\r?\n\S.*)*$/u"
					required
				></textarea>
				<label for="message">Message</label>
			</div>
		</fieldset>
		<input
			type="hidden"
			name="_subject"
			value="New Freelance Submission!"
		/>
		<input type="text" name="_gotcha" style="display:none" />
		<!-- your other form fields go here -->
		<Button type="submit" buttonText="Submit" />
	</form>
</section>

<style>
	.buttons {
		display: grid;
		gap: 20px;
		grid-template-columns: auto auto;
		justify-content: flex-start;
		align-items: flex-end;
	}

	.list-large {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0 20px;
	}

	.mb-none {
		margin-bottom: 0;
	}

	.section-form {
		& h2 {
			margin-bottom: 25px;
		}
		& small {
			font-size: 0.75rem;
			text-transform: none;
		}
	}
	.checkboxes-label {
		margin-top: 35px;
	}
	form {
		position: relative;
	}
	fieldset {
		padding: 0;
		border: 0;
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
	form textarea {
		border: 0;
		border-left: 2px solid currentColor;
		outline: none;
		border-bottom: 2px solid currentColor;
	}
	form textarea {
		height: 30vh;
		width: 100%;
		resize: none;
	}
	input:user-invalid,
	select:user-invalid,
	textarea:user-invalid {
		border-color: crimson;
	}
	.field-group {
		display: flex;
		flex-flow: column-reverse;
		margin-bottom: 1rem;
		&:has(select) {
			position: relative;
		}
		&:has(select):not(:first-of-type) {
			margin-top: 2rem;
		}
	}
	.checkbox-group {
		display: flex;
		align-items: center;
	}
	label,
	input,
	textarea {
		transition: all 0.2s;
		touch-action: manipulation;
		padding-left: 0.5rem;
	}

	input,
	textarea {
		font-size: 1.5rem;
		border: 0;
		border-bottom: 4px solid #ccc;
		font-family: inherit;
		appearance: none;
		border-radius: 0;
		padding: 0;
		cursor: text;
		background-color: transparent;
		color: inherit;
		padding-left: 1.8rem;
	}

	input:focus {
		outline: 0;
		border-bottom: 4px solid var(--primary-color);
	}
	textarea:focus {
		outline: 0;
		border-bottom: 4px solid var(--primary-color);
		border-left: 4px solid var(--primary-color);
	}

	label {
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	input:placeholder-shown + label,
	textarea:placeholder-shown + label {
		cursor: text;
		max-width: 66.66%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		transform-origin: left bottom;
		transform: translate(0, 2.125rem) scale(1.5);
		pointer-events: none;
	}
	::-webkit-input-placeholder {
		opacity: 0;
		transition: inherit;
	}
	input:focus::-webkit-input-placeholder,
	textarea:focus::-webkit-input-placeholder {
		opacity: 1;
	}
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
	select {
		font-size: 1.25rem;
		color: inherit;
		background-color: var(--subtle-grey);
		box-shadow: 6px 6px 0 0 var(--primary-color);
		width: 100%;
		border-radius: 0.25rem;
		border: 2px solid var(--primary-color);
		padding: 12px 0.5rem;
		text-transform: uppercase;
		appearance: none;
		cursor: pointer;
		/* background-image: url("$lib/assets/svgeez/icon-chevron.svg");
		background-repeat: no-repeat;
		background-position: right 10px center;
		background-size: 2rem; */
		padding-right: 30px;
	}
	[type="checkbox"] {
		border: 2px solid var(--pure-black);
		width: 2rem;
		height: 2rem;
		padding: 0;
		border-radius: 0.25rem;
		background-color: var(--subtle-grey);
		cursor: pointer;
		&:checked {
			background-color: var(--pure-black);
		}
	}
	@media (max-width: 30rem) {
		form input:not(:last-child, [type="checkbox"]),
		textarea.-m-break {
			width: 100%;
		}
	}

	@media (max-width: 38rem) {
		.list-large {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
