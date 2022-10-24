<script>
	let liens_externes = [
		{ name: 'PubChem', link: 'https://pubchem.ncbi.nlm.nih.gov/' },
		{ name: 'The Good Scents Compagny', link: 'http://thegoodscentscompany.com/' },
		{
			name: 'Google Drive',
			link: 'https://drive.google.com/drive/folders/197tlsPGq4uMf8xvHYPIJyFf3AB1w02d_'
		}
	];
</script>

<div class="flex w-full h-auto mt-[5rem] py-[1rem] overflow-auto">
	{#each liens_externes as lien}
		<button
			class="w-auto h-[4rem] m-[1rem] px-[1rem]
			hover:scale-105 transition-all bg-c-gray"
			on:click={() => {
				window.open(lien.link, '_blank');
			}}
		>
			{lien.name}
		</button>
	{/each}
</div>
