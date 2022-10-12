<script>
	import Block from '$lib/block/Block.svelte';
</script>

<!-- Lier ça à firebase avec une authentification ! -->
<div
	id="main"
	class="grid 
		grid-cols-1 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
		gap-4 mt-[5rem] py-[1rem]"
>
	<Block title={'1'} content={'ok 1'} />
	<Block title={'2'} content={'bof 2'} />
	<Block title={'jaune'} content={'ok'} />
	<Block title={'popoi'} content={'pois'} />
</div>
