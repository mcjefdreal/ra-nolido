<script>
    import { base } from '$app/paths';
    const { cat, icon, link } = $props();
</script>

<a href={base + link}>
    <div class="flex h-[300px] w-[300px] flex-col items-center justify-items-center rounded-[25px] bg-ra-black pb-7">
        <div class="mb-auto flex-initial">
            <img src={icon} alt={cat} class="w-[200px]" />
        </div>
        <div class="mt-auto flex h-[64px] flex-initial items-center justify-items-center p-5">
            <h1 class="text-center text-2xl font-normal text-ra-white">{cat}</h1>
        </div>
    </div>
</a>
