<script>
	import '../app.css';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const frameworks = [
		{
			value: 'sveltekit',
			label: 'SvelteKit'
		},
		{
			value: 'next',
			label: 'Next.js'
		},
		{
			value: 'astro',
			label: 'Astro'
		},
		{
			value: 'nuxt',
			label: 'Nuxt.js'
		}
	];
</script>

<div class="mt-4 max-w-3xl space-y-6">
    <div class="grid grid-cols-2 gap-60">
        <Card.Root class="w-[350px]">
            <Card.Header>
                <Card.Title>fast</Card.Title>
                <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Description>
            </Card.Header>
            <Card.Content>
                Powered by Svelte and Vite, speed is baked into every crevice: fast setup, fast dev, fast builds, fast page loads, fast navigation. Did we mention it's fast?
            </Card.Content>
            <Card.Footer class="flex justify-between">
                <a href="https://kit.svelte.dev/docs/introduction" class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">svelte.de</a>
            </Card.Footer>
        </Card.Root>

        <Card.Root class="w-[350px]">
            <Card.Header>
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Description>
            </Card.Header>
            <Card.Content>
                <form>
                    <div class="grid w-full items-center gap-4">
                        <div class="flex flex-col space-y-1.5">
                            <Label for="name">Name</Label>
                            <Input id="name" placeholder="Name of your project" />
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <Label for="framework">Framework</Label>
                            <Select.Root>
                                <Select.Trigger id="framework">
                                    <Select.Value placeholder="Select" />
                                </Select.Trigger>
                                <Select.Content>
                                    {#each frameworks as framework}
                                        <Select.Item value={framework.value} label={framework.label}
                                            >{framework.label}</Select.Item
                                        >
                                    {/each}
                                </Select.Content>
                            </Select.Root>
                        </div>
                    </div>
                </form>
            </Card.Content>
            <Card.Footer class="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Create</Button>
            </Card.Footer>
        </Card.Root>
        
    </div>
</div>

