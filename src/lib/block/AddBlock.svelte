<script>
	export let addBlock = () => {};
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
