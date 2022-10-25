<script>
	export let addBlock = () => {};
</script>

<button
	class="fixed bottom-1 right-1 w-[3rem] h-[3rem] pb-1

		hover:scale-105 rounded-full font-bold text-2xl bg-c-green"
	on:click={() => {
		addBlock();
	}}
>
	+
</button>
