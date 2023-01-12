<script>
	export let url;
	const fetchMarkup = async () => {
		var myHeaders = new Headers();
		myHeaders.append(
			'User-Agent',
			'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
		);

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};
		console.log('hit');
		const response = await fetch(url, requestOptions);
		return await response.json();
	};
</script>

<input type="text" bind:value={url} />
<button type="button" on:click={fetchMarkup}>Get Markup</button>
{#await fetchMarkup}
	<p>...waiting</p>
{:then data}
	{data.message}
	<textarea name="" id="" cols="30" rows="10">{data}</textarea>
{:catch error}
	<p>An error occurred!</p>
{/await}
