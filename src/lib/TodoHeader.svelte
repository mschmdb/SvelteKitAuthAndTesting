<script lang="ts">
	import { page } from "$app/stores"; 
	console.log($page)
</script>
<!-- Page Heading -->
<header class="max-w-3xl">
	<p class="mb-2 text-sm font-semibold text-blue-600">Path: {$page.url.pathname} </p>
	<h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
		Todos
	</h1>
</header>
<!-- End Page Heading -->