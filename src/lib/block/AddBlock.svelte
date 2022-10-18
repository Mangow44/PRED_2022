<script>
	import { db } from '$lib/firebase/config';
	import { addDoc, collection } from 'firebase/firestore';

	export let blocks = [];

	function addBlock() {
		let block = { title: '', content: '', index: blocks.length + 1 };
		addDoc(collection(db, 'blocks'), block).then((doc) => {
			block.id = doc.id;
			blocks = [...blocks, block];
		});
	}
</script>

<button
	class="fixed bottom-1 right-1 w-[3rem] h-[3rem] 
		hover:scale-105 rounded-full bg-c-green"
	on:click={() => {
		addBlock();
	}}
>
	+
</button>
