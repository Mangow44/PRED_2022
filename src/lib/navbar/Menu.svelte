<script>
	import { goto } from '$app/navigation';

	export let showMenu = false;
</script>

<div
	id="menu"
	class="fixed flex flex-col top-[5rem] w-full h-[calc(100vh-5rem)] 
		bg-c-l-green transitionMenu z-20
		{showMenu ? 'showMenu' : 'defaultPositionXMenu'}"
>
	<button
		class="w-[90%] h-[4rem] mx-auto mt-[1rem]
			text-2xl font-bold rounded-xl shadow-lg bg-white
			transition-all hover:scale-105"
		on:click={() => {
			goto('/liens_externes');
		}}
	>
		Liens externes
	</button>
</div>

<style>
	.transitionMenu {
		transition: all 0.5s ease;
	}

	.defaultPositionXMenu {
		transform: translateX(100%);
	}

	.showMenu {
		transform: translateX(0%);
	}
</style>
