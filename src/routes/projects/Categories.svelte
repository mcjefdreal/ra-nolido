<script>
    import { base } from '$app/paths';
    const { cat, icon, link } = $props();

    let offset = cat.length;
</script>

<a href={base + link} class="relative">
    <img src={icon} alt={cat} class="h-[275px] w-[275px]" />
    <div class="parent-hover absolute top-0 h-[275px] w-[275px] flex">
        <div class="child-hover-bg h-full w-full bg-ra-white opacity-0"></div>
        <div class="child-hover-text absolute w-full opacity-0 {offset > 20 ? 'top-[40%]' : 'top-[44%]'}">
            <p class="actual-text w-full px-4 text-center text-xl font-semibold">
                {cat}
            </p>
        </div>
    </div>
</a>


<style>
    
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
