<script>
    import ProjectsCarousel from './Projects_Carousel.svelte';
    const { data } = $props();
    const page = data.categ.page_title;
    const projs = data.categ.projs;
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

    let curr_prj_imgs = $state(data.categ.projs[0].prj_pics);
    let curr_prj_name = $state(data.categ.projs[0].prj_name);
    let curr_prj_deets = $state(data.categ.projs[0].prj_deets);
    function showCarousel(idx) {
        curr_prj_imgs = data.categ.projs[idx].prj_pics;
        curr_prj_name = data.categ.projs[idx].prj_name;
        curr_prj_deets = data.categ.projs[idx].prj_deets;
        showModal = true;
    }
    $inspect(curr_prj_name);

    let test = 'facebook';
</script>

{#each Object.entries(images) as [_path, module], i}
    <button onclick={() => showCarousel(i)}>
        <img src={module.default} alt="thumbnail" class="thumbnail h-[500px] w-[500px]" />
    </button>
{/each}

{#key showModal}
    <ProjectsCarousel
        bind:showModal
        imgs={curr_prj_imgs}
        proj={curr_prj_deets}
    ></ProjectsCarousel>
{/key}

<style>
    .thumbnail {
        cursor: pointer;
    }
</style>
