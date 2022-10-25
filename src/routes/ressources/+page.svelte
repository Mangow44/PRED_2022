<script>
	import { ressources } from '$lib/data/ressources';
</script>

<div class="flex flex-wrap w-full h-auto mt-[5rem] py-[1rem] overflow-auto">
	{#each ressources as res}
		<button
			class="w-auto h-[4rem] m-[1rem] px-[1rem]
			hover:scale-105 transition-all shadow-lg"
			style="background-color: {res.color};"
			on:click={() => {
				window.open(res.link, '_blank');
			}}
		>
			{res.name}
		</button>
	{/each}
</div>
