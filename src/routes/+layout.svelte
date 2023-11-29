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
			<!-- Page Heading -->
			<header class="max-w-3xl">
				<p class="mb-2 text-sm font-semibold text-blue-600">SvelteKit</p>
				<h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
                    Testing and Authentication
				</h1>
			</header>
			<!-- End Page Heading -->
			<slot />
		</div>
	</main>
</div>
