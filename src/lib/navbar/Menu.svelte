<script>
	import Content from './Content.svelte';
	export let showMenu = false;
</script>

<div
	id="menu"
	class="fixed flex flex-col top-[5rem] w-full h-[calc(100vh-5rem)] 
		bg-c-l-green transitionMenu z-20
		{showMenu ? 'showMenu' : 'defaultPositionXMenu'}"
>
	<Content name={'Memos'} redirect={'/'} bind:showMenu />
	<Content name={'Liens externes'} redirect={'/liens_externes'} bind:showMenu />
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
