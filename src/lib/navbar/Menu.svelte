<script>
	import Content from './Content.svelte';
	import { menu } from '$lib/data/menu';
	export let showMenu = false;
</script>

<div
	id="menu"
	class="fixed flex flex-col top-[5rem] w-full h-[calc(100vh-5rem)] 
		bg-c-light-purple transitionMenu z-20
		{showMenu ? 'showMenu' : 'defaultPositionXMenu'}"
>
	{#each menu as m}
		<Content name={m.name} redirect={m.redirect} bind:showMenu />
	{/each}
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
