<script>
    import ProjectsCarousel from './Projects_Carousel.svelte';
    import { onMount } from 'svelte';
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
        case 'infra':
            images = import.meta.glob('$lib/img/prj-imgs/infra/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
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
    // let curr_prj_name = $state(data.categ.projs[0].prj_name);
    let curr_prj_deets = $state(data.categ.projs[0].prj_deets);
    function showCarousel(idx) {
        curr_prj_imgs = data.categ.projs[idx].prj_pics;
        // curr_prj_name = data.categ.projs[idx].prj_name;
        curr_prj_deets = data.categ.projs[idx].prj_deets;
        showModal = true;
    }

    // svelte-ignore state_referenced_locally
    const offsets = $state(Array(Object.entries(images).length));

    onMount(() => {
        for (let a = 0; a < Object.entries(images).length; a++) {
            const HoverText = document.getElementById(a.toString());
            if (!(HoverText === null)) {
                offsets[a] = HoverText.offsetHeight;
            }
        }
    });
</script>

{#each Object.entries(images) as [_path, module], i}
    <button class="relative" onclick={() => showCarousel(i)}>
        <img src={module.default} alt="thumbnail" class="thumbnail h-[400px] w-[400px]" />

        <div class="parent-hover absolute top-0 h-[400px] w-[400px]">
            <div class="child-hover-bg z-10 h-full w-full bg-ra-white opacity-0"></div>

            <div
                class="z-5 child-hover-text absolute w-full opacity-0
                       {offsets[i] > 64 ? 'top-[40%]' : ''} {offsets[i] === 64 ? 'top-[42%]' : ''}
                       {offsets[i] < 64 ? 'top-[46%]' : ''}"
                id={i.toString()}
            >
                <p class="actual-text w-full px-4 text-center text-2xl font-semibold">
                    {data.categ.projs[i].prj_deets.title}
                </p>
            </div>
        </div>
    </button>
{/each}

{#key showModal}
    <ProjectsCarousel bind:showModal imgs={curr_prj_imgs} proj={curr_prj_deets}></ProjectsCarousel>
{/key}

<style>
    .thumbnail {
        cursor: pointer;
    }

    .parent-hover:hover > .child-hover-bg {
        opacity: 64%;
        transition-duration: 200ms;
    }

    .parent-hover:hover > .child-hover-text {
        opacity: 100%;
        transition-duration: 200ms;
    }

    p {
        text-decoration: underline 0.06em rgba(0, 0, 0, 0);
    }

    .parent-hover:hover > .child-hover-text > .actual-text {
        text-decoration-color: rgba(0, 0, 0, 1);
        transition: text-decoration-color 500ms;
        text-underline-offset: 5px;
    }
</style>
