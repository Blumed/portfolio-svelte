<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
</script>

<h1>{$page.status} error 😭 can't find <strong>{browser && window.location.pathname}</strong></h1>
