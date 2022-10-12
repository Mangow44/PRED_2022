<script>
	export let showMenu = false;
</script>

<div
	id="menu"
	class="fixed top-[5rem] w-full h-[calc(100vh-5rem)] 
		bg-c-l-green transitionMenu
		{showMenu ? 'showMenu' : 'defaultPositionXMenu'}"
>
	TODO
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
