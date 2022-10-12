<script>
	import Menu from './Menu.svelte';

	let showMenu = false;
</script>

<div
	id="navbar"
	class="fixed top-0 flex w-full h-[5rem]
		bg-c-mint z-10"
>
	<h1
		class="my-auto ml-[1rem] pr-[1rem] text-c-black
			font-bold text-2xl shrink-0"
	>
		PRED - 2022
	</h1>
	<button
		class="w-[3rem] h-[3rem] ml-auto my-auto mr-[1rem] 
	 		rounded-full shrink-0
			{showMenu ? 'bg-green-300' : 'bg-red-300'}"
		on:click={() => {
			showMenu = !showMenu;
		}}
	/>
</div>

<Menu bind:showMenu />
