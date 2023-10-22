<script>
	export let data;
</script>

<p>products list</p>

{#each data.products as {name, slug}}
	<li><a href="/products/{slug}">{name}</a></li>
{/each}