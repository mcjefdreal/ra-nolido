<script>
    import Thumbnails from './Thumbnails.svelte';
    const { data } = $props();
    const page = data.categ.page_title;
</script>

<h1>{data.categ.cat}</h1>
<h2>{page}</h2>
<div class="place-items-center">
    <div class="m-[100px] grid grid-cols-3 place-items-center items-stretch gap-5">
        <Thumbnails {data}></Thumbnails>
    </div>
</div>
