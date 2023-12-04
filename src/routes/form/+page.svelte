<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
</script>

<form
	method="POST"
	action="?/submit"
	use:enhance
	class="max-w-lg mx-auto p-4 shadow rounded-lg bg-white"
>
	<div class="mb-4">
		<label for="firstName" class="block text-gray-700 text-sm font-bold mb-2"> First Name: </label>
		<input
			type="text"
			id="firstName"
			name="firstName"
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-400 focus:shadow-outline"
		/>
	</div>

	<div class="mb-6">
		<label for="lastName" class="block text-gray-700 text-sm font-bold mb-2"> Last Name: </label>
		<input
			type="text"
			id="lastName"
			name="lastName"
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-400 focus:shadow-outline"
		/>
	</div>

	<div class="flex justify-center">
		<button
			type="submit"
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-blue-400 focus:shadow-outline"
			>Submit</button
		>
	</div>
</form>

{#if $page.form}
	<div class="mt-8 max-w-lg mx-auto p-4 shadow rounded-lg bg-white" aria-live="polite">
		<h2 class="text-xl font-bold mb-4">Submitted Data:</h2>
		<p class="text-gray-700"><strong>First Name:</strong> {$page.form.data.firstName}</p>
		<p class="text-gray-700"><strong>Last Name:</strong> {$page.form.data.lastName}</p>
	</div>
{:else}
	<p class="mt-8 max-w-lg mx-auto p-4 shadow rounded-lg bg-white text-gray-700">
		No data submitted yet.
	</p>
{/if}
