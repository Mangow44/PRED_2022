<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { auth, db } from '$lib/firebase/config';
	import { onAuthStateChanged } from 'firebase/auth';
	import Block from '$lib/block/Block.svelte';
	import { collection, getDocs } from 'firebase/firestore';
	import AddBlock from '$lib/block/AddBlock.svelte';

	let loading = true;
	$: blocks = [];

	onMount(() => {
		onAuthStateChanged(auth, (user) => {
			if (!user) {
				goto('/connexion');
				return;
			}
			loading = false;
		});
	});

	function getBlocks() {
		getDocs(collection(db, 'blocks')).then((data) => {
			data.docs.forEach((doc) => {
				let block = doc.data();
				block.id = doc.id;
				blocks = [...blocks, block];
			});

			blocks.sort((a, b) => {
				return a.index - b.index;
			});
		});
	}

	getBlocks();
</script>

{#if !loading}
	<div
		id="main"
		class="grid overflow-auto
			grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
			gap-4 mt-[5rem] py-[1rem]"
	>
		<!-- TODO LOADER -->
		{#each blocks as block}
			<Block title={block.title} content={block.content} id={block.id} />
		{/each}

		<AddBlock bind:blocks />
	</div>
{/if}
