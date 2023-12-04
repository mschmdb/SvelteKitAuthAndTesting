<script lang="ts">
    import { page } from '$app/stores';
</script>


<svelte:head>
    <title>{$page.data.post.title}</title>
    <meta name="description" content="{$page.data.post.body}" />
</svelte:head>
<section class="container mx-auto px-4 py-14">
	<div class="m-auto w-1/2">
		<h3 class="text-blue-400 text-4xl font-bold">{$page.data.post.title}</h3>
		<p class="text-md text-slate-500 my-4">{$page.data.post.body}</p>
	</div>
</section>