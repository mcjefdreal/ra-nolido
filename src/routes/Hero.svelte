<script lang="ts">
    let { heading, subheading, button_content } = $props();
</script>

<div
    class="flex h-auto flex-col items-center justify-between bg-[url(./src/lib/img/hero-home/hero-bg.png)] bg-[auto_700px] bg-contain bg-no-repeat lg:h-[34rem] lg:flex-row"
>
    <div
        class="mx-5 mb-12 mt-24 flex flex-col items-center gap-8 text-center lg:ml-20 lg:mr-0 lg:items-start lg:text-left xl:ml-40"
    >
        <div class="flex flex-col text-ra-white">
            <h2 class="text-4xl font-bold leading-tight">
                {heading}
            </h2>
            <h1 class="text-5xl font-bold text-royal-blue">
                {subheading}
            </h1>
        </div>
        <button class="rounded bg-dark-blue px-4 py-2 font-bold text-white hover:bg-royal-blue">
            {button_content}
        </button>
    </div>
</div>
