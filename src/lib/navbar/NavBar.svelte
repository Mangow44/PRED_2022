<script>
	import Menu from './Menu.svelte';

	let showMenu = false;
</script>

<div
	id="navbar"
	class="fixed top-0 flex w-full h-[5rem]
		bg-c-dark-purple z-10"
>
	<h1
		class="my-auto ml-[1rem] pr-[1rem] text-white
			font-bold text-2xl shrink-0"
	>
		PRED - 2022
	</h1>
	<button
		class="w-[2rem] h-[2rem] ml-auto my-auto mr-[1rem] 
	 		rounded-full shrink-0
			{showMenu ? 'bg-c-red' : 'bg-c-purple'}"
		on:click={() => {
			showMenu = !showMenu;
		}}
	/>
</div>

<Menu bind:showMenu />
