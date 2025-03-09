<script>
    const { cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9 } = $props();
</script>

<div class="flex justify-items-center items-center mt-10 align-middle">
    <h1 class="mx-auto text-[45px]">Categories</h1>
</div>

<div class="flex flex-row gap-10 justify-center justify-items-center items-center my-10">
    <div class="icon">
        <a href="/projects/bldgs">
            <img src={cat1} alt="1" />
        </a>
    </div>
    <div class="icon">
        <a href="/projects/inst">
            <img src={cat2} alt="2" />
        </a>
    </div>
    <div class="icon">
        <a href="/projects/hotels">
            <img src={cat3} alt="3" />
        </a>
    </div>
</div>
<div class="flex flex-row gap-10 justify-center justify-items-center items-center my-10">
    <div class="icon">
        <a href="/projects/offices">
            <img src={cat4} alt="4" />
        </a>
    </div>
    <div class="icon">
        <a href="/projects/property">
            <img src={cat5} alt="5" />
        </a>
    </div>
    <div class="icon">
        <a href="/projects/residential">
            <img src={cat6} alt="6" />
        </a>
    </div>
</div>
<div class="flex flex-row gap-10 justify-center justify-items-center items-center my-10">
    <div class="icon">
        <a href="/projects/resto">
            <img src={cat7} alt="7" />
        </a>
    </div>
    <div class="icon">
        <a href="/projects/infra">
            <img src={cat8} alt="8" />
        </a>
    </div>
    <div class="icon">
        <a href="/projects/religious">
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
