<script>
    import ProjectsCarousel from '../Projects_Carousel.svelte';
    const { data } = $props();
    const page = data.categ.page_title;
    let images = $state();
    let showModal = $state(false);

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
    <button
        onclick={() => {
            showModal = true;
        }}
    >
        <img src={module.default} alt="thumbnail" class="thumbnail h-[500px] w-[500px]" />
    </button>
{/each}

<ProjectsCarousel
    bind:showModal
    prefix={'$lib/img/prj-imgs/bldgs/mvmc'}
    imgs={[
        'IMG_1346.JPG',
        'IMG_1357.JPG',
        'IMG_1358.JPG',
        'IMG_1359.JPG',
        'IMG_1362.JPG',
        'IMG_1388.JPG',
        'IMG_1463.JPG',
    ]}
    proj={{
        title: 'MVMC',
        descrip: 'Dorm Building?',
        owner: 'I dunno',
        loc: 'Somewhere out there :sparkles:',
    }}
></ProjectsCarousel>

<style>
    .thumbnail {
        cursor: pointer;
    }
</style>
