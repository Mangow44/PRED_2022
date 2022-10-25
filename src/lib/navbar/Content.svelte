<script>
	import { goto } from '$app/navigation';

	export let name = '';
	export let redirect = '';
	export let showMenu = false;
</script>

<button
	class="w-[90%] h-[4rem] mx-auto mt-[1rem]
	text-2xl font-bold rounded-xl shadow-lg bg-white text-c-dark
	transition-all hover:scale-105"
	on:click={() => {
		showMenu = false;
		goto(redirect);
	}}
>
	{name}
</button>
