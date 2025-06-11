<script lang="ts">
    import Categories from './Categories.svelte';
    const { data } = $props();
</script>

<div class="place-items-center">
    <div class=" m-[75px] grid grid-cols-5 place-items-center items-stretch gap-1">
        {#each data.summaries as cat}
            <Categories cat={cat.cat} icon={cat.icon} link={cat.link}></Categories>
        {/each}
    </div>
</div>
