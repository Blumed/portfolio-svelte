<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
</script>

<div class="container">
	<h1>{$page.status} error 😭 can't find <strong>{browser && window.location.pathname}</strong></h1>
</div>
