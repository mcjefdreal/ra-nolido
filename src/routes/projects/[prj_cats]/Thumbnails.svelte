<script>
    const { data } = $props();
    const page = data.categ.page_title;
    let images = $state();

    switch (page) {
        case 'bldgs':
            images = import.meta.glob('$lib/img/prj-imgs/bldgs/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
                eager: true,
            });
            break;
        case 'hotels':
            images = import.meta.glob('$lib/img/prj-imgs/hotels/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
                eager: true,
            });
            break;
        case 'industrial':
            images = import.meta.glob('$lib/img/prj-imgs/industrial/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
                eager: true,
            });
            break;
        case 'inst':
            images = import.meta.glob('$lib/img/prj-imgs/inst/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
                eager: true,
            });
            break;
        case 'offices':
            images = import.meta.glob('$lib/img/prj-imgs/offices/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
                eager: true,
            });
            break;
        case 'property':
            images = import.meta.glob('$lib/img/prj-imgs/property/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
                eager: true,
            });
            break;
        case 'residential':
            images = import.meta.glob('$lib/img/prj-imgs/residential/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
                eager: true,
            });
            break;
        case 'resto':
            images = import.meta.glob('$lib/img/prj-imgs/resto/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
                eager: true,
            });
            break;
        default:
            images = import.meta.glob('$lib/img/prj-imgs/religious/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
                eager: true,
            });
    }
</script>

{#each Object.entries(images) as [_path, module]}
    <img src={module.default} alt="thumbnail" class="thumbnail h-[500px] w-[500px]" />
{/each}

<style>
    .thumbnail {
        cursor: pointer;
    }
</style>
