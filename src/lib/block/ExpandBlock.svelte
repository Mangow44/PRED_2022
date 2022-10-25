<script>
	export let expanded = false;
	export let saveBlock = () => {};
</script>

<button
	class="w-[2rem] h-[2rem] my-auto mr-[1rem] 
	rounded-full shrink-0
	{expanded ? 'bg-c-red' : 'bg-c-purple'}"
	on:click|self={() => {
		if (expanded) saveBlock();
		expanded = !expanded;
	}}
/>
