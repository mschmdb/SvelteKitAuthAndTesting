<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<main id="content" role="main">
		<div
			class="max-w-[85rem] mx-auto min-h-screen bg-white border-x-gray-200 py-10 px-4 sm:px-6 lg:px-8 xl:border-x dark:bg-gray-800 dark:border-x-gray-700"
		>
			
			<slot />
		</div>
	</main>
</div>
