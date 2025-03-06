<script lang="ts">
    const { cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9 } = $props();
</script>

<div class="mt-10 flex items-center justify-items-center align-middle">
    <h1 class="mx-auto text-[45px]">Categories</h1>
</div>

<div class="my-10 flex flex-row items-center justify-center justify-items-center gap-10">
    <div class="icon">
        <a href="/projects/prj_cats/bldgs">
            <img src={cat1} alt="1" />
        </a>
    </div>
    <div class="icon">
        <a href="/projects/prj_cats/inst">
            <img src={cat2} alt="2" />
        </a>
    </div>
    <div class="icon">
        <a href="/projects/prj_cats/hotels">
            <img src={cat3} alt="3" />
        </a>
    </div>
</div>
<div class="my-10 flex flex-row items-center justify-center justify-items-center gap-10">
    <div class="icon">
        <a href="/projects/prj_cats/offices">
            <img src={cat4} alt="4" />
        </a>
    </div>
    <div class="icon">
        <a href="/projects/prj_cats/property">
            <img src={cat5} alt="5" />
        </a>
    </div>
    <div class="icon">
        <a href="/projects/prj_cats/residential">
            <img src={cat6} alt="6" />
        </a>
    </div>
</div>
<div class="my-10 flex flex-row items-center justify-center justify-items-center gap-10">
    <div class="icon">
        <a href="/projects/prj_cats/resto">
            <img src={cat7} alt="7" />
        </a>
    </div>
    <div class="icon">
        <a href="/projects/prj_cats/infra">
            <img src={cat8} alt="8" />
        </a>
    </div>
    <div class="icon">
        <a href="/projects/prj_cats/religious">
            <img src={cat9} alt="9" />
        </a>
    </div>
</div>

<style>
    .icon {
        width: 15%;
    }

    h1 {
        color: theme('colors.ra-black');
        font-family: theme('fontFamily.jakarta');
        font-weight: bold;
    }
</style>
