<script>
    import Thumbnails from './Thumbnails.svelte';
    const { data } = $props();
    const page = data.categ.page_title;
</script>

<div class='w-full h-10 p-12'>
    <h1 class='w-full mb-8 text-5xl font-semibold text-ra-black text-center'>{data.categ.cat}</h1>
</div>
<!-- <h2>{page}</h2> -->
<div class="place-items-center">
    <div class="my-[75px] mx-[100px] grid grid-cols-3 place-items-center items-stretch gap-5">
        <Thumbnails {data}></Thumbnails>
    </div>
</div>
