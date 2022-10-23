<script>
	export let expanded = false;
	export let deleteBlock = () => {};

	let showValidation = false;
	let validationPosition = {};
</script>

<button
	class="w-[2rem] h-[2rem] my-auto ml-[1rem]
    shrink-0 rounded-full bg-red-300"
	on:click|self={(e) => {
		showValidation = true;
		validationPosition.x = e.offsetX + 10;
		validationPosition.y = e.offsetY + 5;
	}}
>
	-
</button>

{#if showValidation}
	<div
		style="top: {validationPosition.y}px; left: {validationPosition.x}px"
		class="absolute flex w-[6rem] h-[3rem] rounded-full bg-slate-500"
		on:mouseleave={() => {
			showValidation = false;
		}}
	>
		<button
			class="m-auto w-[2rem] h-[2rem] rounded-full bg-red-400"
			on:click={() => {
				showValidation = false;
			}}
		/>
		<button
			class="m-auto w-[2rem] h-[2rem] rounded-full bg-green-400"
			on:click={() => {
				showValidation = false;
				expanded = false;
				deleteBlock();
			}}
		/>
	</div>
{/if}
