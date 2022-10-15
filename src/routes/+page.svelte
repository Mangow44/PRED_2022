<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { auth } from '$lib/firebase/config';
	import { onAuthStateChanged } from 'firebase/auth';
	import Block from '$lib/block/Block.svelte';

	let loading = true;

	onMount(() => {
		onAuthStateChanged(auth, (user) => {
			if (!user) {
				goto('/connexion');
				return;
			}
			loading = false;
		});
	});
</script>

{#if !loading}
	<div
		id="main"
		class="grid overflow-auto
			grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
			gap-4 mt-[5rem] py-[1rem]"
	>
		<Block title={'1'} content={'ok 1'} />
		<Block title={'2'} content={'bof 2'} />
		<Block title={'jaune'} content={'ok'} />
		<Block title={'popoi'} content={'pois'} />
	</div>
{/if}
