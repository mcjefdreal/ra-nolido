<script>
    import Thumbnails from './Thumbnails.svelte';
    const { data } = $props();
    // const page = data.categ.page_title;
</script>

<div class="h-10 w-full p-12">
    <h1 class="mb-8 w-full text-center text-5xl font-semibold text-ra-black">{data.categ.cat}</h1>
</div>
<div class="place-items-center">
    <div class="my-[75px] grid grid-cols-3 place-items-center items-stretch gap-5">
        <Thumbnails {data}></Thumbnails>
    </div>
</div>
