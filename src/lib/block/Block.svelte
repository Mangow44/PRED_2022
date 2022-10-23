<script>
	import { db } from '$lib/firebase/config';
	import { doc, updateDoc } from 'firebase/firestore';
	import DeleteBlock from './DeleteBlock.svelte';
	import ExpandBlock from './ExpandBlock.svelte';

	export let id = '';
	export let title = '';
	export let content = '';
	export let index = 0;
	export let deleteBlock = () => {};
	export let swapBlocks = () => {};

	$: expanded = false;
	let color = '#A5A4A6';

	function saveBlock() {
		updateDoc(doc(db, 'blocks', id), {
			title: title,
			content: content
		});
	}

	function drop(e) {
		e.preventDefault();
		const index2 = e.dataTransfer.getData('text/plain');
		swapBlocks(index, index2);
	}

	function dragStart(e) {
		e.dataTransfer.setData('text/plain', index);
	}
</script>

<div
	draggable={!expanded}
	class="m-auto flex flex-col
		shadow-lg
		{expanded
		? 'fixed w-full h-full top-[5rem] z-10'
		: 'w-[14rem] h-[20rem] hover:scale-105 transition-transform'}"
	style="background-color: {color};"
	ondragover="return false"
	on:drop={(e) => {
		drop(e);
	}}
	on:dragstart={(e) => {
		dragStart(e);
	}}
>
	<h2 class="relative flex w-full h-[3rem] bg-c-light-blue shrink-0">
		<DeleteBlock bind:expanded deleteBlock={() => deleteBlock()} />
		<input
			disabled={!expanded}
			type="text"
			class="mx-auto px-[0.5rem] 
				text-center
				whitespace-nowrap overflow-hidden text-ellipsis  
				outline-none bg-c-light-blue
				{expanded ? 'w-[50%] h-full' : 'w-full h-full disabled'}"
			bind:value={title}
		/>
		<ExpandBlock bind:expanded saveBlock={() => saveBlock()} />
	</h2>
	<textarea
		disabled={!expanded}
		class="w-full h-full p-[0.5rem]
			overflow-auto resize-none"
		style="background-color: {color};"
		bind:value={content}
	/>
</div>
