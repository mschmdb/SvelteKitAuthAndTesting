<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';

	export let data;
    console.log(data)
</script>

<div class="grow flex flex-col items-center justify-center gap-y-4">
	<h4 class="text-xl font-bold">hello: {data.userName}</h4>

	<div class="flex flex-row items-center gap-x-3">
		
		
        <form action="/auth/logout" method="POST">
            <Button href="/auth/logout">logout</Button>
        </form>
        
	</div>
</div>