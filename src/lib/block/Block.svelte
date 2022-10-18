<script>
	import { db } from '$lib/firebase/config';
	import { doc, updateDoc } from 'firebase/firestore';

	export let title = '';
	export let content = '';
	export let id = '';
	export let color = 'green';

	$: expanded = false;

	function saveBlock() {
		console.log('save');
		updateDoc(doc(db, 'blocks', id), {
			title: title,
			content: content
		});
	}
</script>

<div
	class="m-auto flex flex-col 

		{expanded
		? 'fixed w-full h-full top-[5rem] z-10'
		: 'w-[14rem] h-[20rem] hover:scale-105 transition-transform'}"
	style="background-color: {color};"
>
	<h2 class="flex w-full h-[3rem] bg-red-300 shrink-0">
		<input
			disabled={!expanded}
			type="text"
			class="mx-auto px-[0.5rem] 
				text-center
				whitespace-nowrap overflow-hidden text-ellipsis 
				bg-red-300 
				{expanded ? 'w-[50%] h-full' : 'w-full h-full disabled'}"
			bind:value={title}
		/>
		<button
			class="w-[2rem] h-[2rem] my-auto mr-[1rem] 
				rounded-full shrink-0
				{expanded ? 'bg-c-green' : 'bg-blue-300'}"
			on:click|self={() => {
				if (expanded) saveBlock();
				expanded = !expanded;
			}}
		/>
	</h2>
	<textarea
		disabled={!expanded}
		class="w-full h-full p-[0.5rem]
			overflow-auto resize-none"
		style="background-color: {color};"
		bind:value={content}
	/>
</div>
