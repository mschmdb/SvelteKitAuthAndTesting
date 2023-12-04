<script lang="ts">
    import { page } from '$app/stores';
    $: console.log($page)
</script>

<form method="POST" class="max-w-lg mx-auto p-8 border border-gray-300 rounded-lg shadow-lg">
    <hgroup class="mb-6">
        <h2 class="text-2xl font-bold mb-2">Register</h2>
        <h3 class="text-lg text-gray-600">To post articles, you'll need an account.</h3>
    </hgroup>

    <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" required class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full" />
    </div>

    <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <input type="text" id="username" name="username" required class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full" />
    </div>

    <div class="mb-6">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" name="password" required class="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full" />
    </div>

    <button type="submit" class="w-full text-black border-black border-2 font-bold py-2 px-4 rounded">Register</button>
</form>
<p class="text-center mt-4">Already have an account? <a href="/auth/login" class="text-blue-600 hover:text-blue-800">Login</a></p>
