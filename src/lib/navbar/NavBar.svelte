<script>
	import { goto } from '$app/navigation';
	import Menu from './Menu.svelte';

	let showMenu = false;
</script>

<div
	id="navbar"
	class="fixed top-0 flex w-full h-[5rem]
		bg-c-brown z-10"
>
	<h1
		class="my-auto ml-[1rem] pr-[1rem] text-white
			font-bold text-2xl shrink-0 cursor-pointer"
		on:click={() => {
			goto('/');
		}}
	>
		PRED - 2022
	</h1>
	<button
		class="w-[2rem] h-[2rem] ml-auto my-auto mr-[1rem] 
	 		rounded-full shrink-0
			{showMenu ? 'bg-green-300' : 'bg-c-gray'}"
		on:click={() => {
			showMenu = !showMenu;
		}}
	/>
</div>

<Menu bind:showMenu />
