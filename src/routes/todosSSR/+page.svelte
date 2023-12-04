<script lang="ts">
	import TodoHeader from '$lib/TodoHeader.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
  console.log(data)
</script>

<TodoHeader />

<div class="grid lg:grid-cols-3 gap-4">
	{#each data.posts as post}
		<div class="rounded-sm bg-slate-50 p-5">
			<a class="text-blue-400 text-xl font-bold" href="/todosSSR/{post.id}">{post.title}</a>
			<p class="text-md text-slate-500">completed: {post.completed}</p>
		</div>
	{/each}
</div>
