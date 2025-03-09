<script>
    let { data } = $props();
    let page = data.categ.page_title;
    let images = $state();

    switch (data.categ.page_title) {
        case 'bldgs':
            images = import.meta.glob('$lib/img/prj-imgs/bldgs/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
                eager: true,
            });
            break;
        default:
            images = import.meta.glob('$lib/img/prj-imgs/religious/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
                eager: true,
            });
    }
</script>

<h1>{data.categ.cat}</h1>
<h2>{page}</h2>

{#each Object.entries(images) as [_path, module]}
    <img src={module.default} alt="test" class="w-1/2" />
{/each}
