<script lang="ts">
    let { heading, subheading, button_content } = $props();
</script>

<div class="flex h-auto flex-col items-center justify-between lg:h-[34rem] lg:flex-row bg-[url(./src/lib/img/hero-home/hero-bg.png)] bg-no-repeat bg-contain bg-[auto_700px]">
    <div class="mx-5 mb-12 mt-24 flex flex-col items-center gap-8 text-center lg:ml-20 lg:mr-0 lg:items-start lg:text-left xl:ml-40">
        <div class="flex flex-col text-ra-white">
            <h2 class="text-4xl font-bold leading-tight">
                {heading}
            </h2>
            <h1 class="text-5xl font-bold text-royal-blue">
                {subheading}
            </h1>
        </div>
        <button class="bg-dark-blue hover:bg-royal-blue text-white font-bold py-2 px-4 rounded">
            {button_content}
        </button>
    </div>
</div>