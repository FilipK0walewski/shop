<script>
    export let data;
</script>

<div style="background-color: grey;">
    <h1 style="color: red;">test</h1>
    <slot />
</div>

<aside>
    <h2>other products</h2>
    <ul>
        {#each data.data as name}
            <li>{name}</li>
        {/each}
    </ul>
</aside>
