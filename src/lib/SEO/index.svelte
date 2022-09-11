<script>


	export let title = '';
    export let pageCanonicalUrl = '';
    export let pageMetaDescription = '';

	export const baseUrl = 'https://cullanluther.com';
	export const ogImage = 'https://cullanluther.com/default-og-image.webp';
	export const twitterImage = 'https://cullanluther.com/default-twitter-image.webp';
	// export const relativeUrl = $page.path;

	export let seo = {
		title: 'Cullan Luther · Web Developer',
        description: ' Welcome to my little home on the internet. Come on in! I am a frontend web developer from Minneapolis, Minnesota. Take a look around and make yourself comfortable.',
		canonical: baseUrl
	};

	$: pageTitle = title !== '' ? `Cullan Luther · ${title}` : seo.title;
	$: canonicalUrl = `${baseUrl}${pageCanonicalUrl}` ?? seo.canonical;
	$: metaDescription = pageMetaDescription !== '' ? pageMetaDescription : seo.description;
</script>

<svelte:head>
	<title>{pageTitle}</title>
    <meta name="description" content={metaDescription} />
        <!-- Open Graph -->
	<meta content="Cullan Luther" property="og:site_name"/>
	<meta content="Minneaplis · Web Developer" property="og:title"/>
	<meta content="website" property="og:type"/>
	<meta content={seo.description} property="og:description"/>
	<meta content={baseUrl} property="og:url">
	<meta content={ogImage} property="og:image">
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@CullanLuther">
    <meta content="Minneaplis · Web Developer" property="twitter:title"/>
    <meta content={seo.description} property="twitter:description"/>
    <meta name="twitter:creator" content="@CullanLuther">
    <meta content={twitterImage} property="twitter:image">
	<link rel="canonical" href={canonicalUrl} />
</svelte:head>