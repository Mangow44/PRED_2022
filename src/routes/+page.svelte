<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { auth, db } from '$lib/firebase/config';
	import { onAuthStateChanged } from 'firebase/auth';
	import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
	import Block from '$lib/block/Block.svelte';
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
		blocks = [];
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

	function removeBlock(block) {
		blocks.splice(blocks.indexOf(block), 1);
		blocks = [...blocks];
		deleteDoc(doc(db, 'blocks', block.id));
	}

	function swapBlocks(index1, index2) {
		blocks[index1 - 1].index = index2;
		blocks[index2 - 1].index = index1;

		blocks.sort((a, b) => {
			return a.index - b.index;
		});

		updateDoc(doc(db, 'blocks', blocks[index1 - 1].id), {
			index: blocks[index1 - 1].index
		}).then(() => {
			updateDoc(doc(db, 'blocks', blocks[index2 - 1].id), {
				index: blocks[index2 - 1].index
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
			<Block
				title={block.title}
				content={block.content}
				id={block.id}
				index={block.index}
				removeBlock={() => removeBlock(block)}
				swapBlocks={(index1, index2) => swapBlocks(index1, index2)}
			/>
		{/each}

		<AddBlock bind:blocks />
	</div>
{/if}
