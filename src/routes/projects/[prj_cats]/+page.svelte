<script>
    import Thumbnails from './Thumbnails.svelte';
    import ProjectsCarousel from '../Projects_Carousel.svelte';
    const { data } = $props();
    const page = data.categ.page_title;

    let showModal = $state(false);
</script>

<h1>{data.categ.cat}</h1>
<h2>{page}</h2>
<div class="place-items-center">
    <button onclick={() => {showModal = true}}>
    <div class="m-[100px] grid grid-cols-3 place-items-center items-stretch gap-5">
        <Thumbnails {data}></Thumbnails>
    </div>
    </button>
</div>

<ProjectsCarousel bind:showModal prefix={'$lib/img/prj-imgs/bldgs/mvmc'} 
imgs={['IMG_1346,JPG', 'IMG_1357.JPG', 'IMG_1358.JPG', 'IMG_1359.JPG', 'IMG_1362.JPG', 'IMG_1388.JPG', 'IMG_1463.JPG']}
proj={{
    title: 'MVMC',
    descrip: 'Dorm Building?',
    owner: 'I dunno', 
    loc: 'Somewhere out there :sparkles:',
}}>
</ProjectsCarousel>


