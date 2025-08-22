<script lang="ts">
	interface Props {
		title?: string;
		pageCanonicalUrl?: string;
		pageMetaDescription?: string;
		seo?: {
			title: string;
			description: string;
			canonical: string;
		};
	}

	const baseUrl = 'https://cullanluther.com';
	const ogImage = 'https://cullanluther.com/default-og-image.webp';
	const twitterImage = 'https://cullanluther.com/default-twitter-image.webp';

	const {
		title = '',
		pageCanonicalUrl = '',
		pageMetaDescription = '',
		seo = {
			title: 'Cullan Luther · Web Developer',
			description: 'Welcome to my little home on the internet. Come on in! I am a frontend web developer from Minneapolis, Minnesota. Take a look around and make yourself comfortable.',
			canonical: baseUrl
		}
	}: Props = $props();

	const pageTitle = $derived(title !== '' ? `Cullan Luther · ${title}` : seo.title);
	const canonicalUrl = $derived(`${baseUrl}${pageCanonicalUrl}` || seo.canonical);
	const metaDescription = $derived(pageMetaDescription !== '' ? pageMetaDescription : seo.description);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metaDescription} />
	<!-- Open Graph -->
	<meta content="Cullan Luther" property="og:site_name" />
	<meta content="Minneapolis · Web Developer" property="og:title" />
	<meta content="website" property="og:type" />
	<meta content={seo.description} property="og:description" />
	<meta content={baseUrl} property="og:url" />
	<meta content={ogImage} property="og:image" />
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@CullanLuther" />
	<meta content="Minneapolis · Web Developer" property="twitter:title" />
	<meta content={seo.description} property="twitter:description" />
	<meta name="twitter:creator" content="@CullanLuther" />
	<meta content={twitterImage} property="twitter:image" />
	<meta name="color-scheme" content="dark light" />
	<link rel="canonical" href={canonicalUrl} />
</svelte:head>
