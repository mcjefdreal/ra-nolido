<script lang="ts">
    let { heading, subheading, button_content } = $props();
</script>

<div
    class="flex h-auto flex-col items-center justify-between bg-[url(./src/lib/img/hero-home/hero-bg.png)] bg-[auto_700px] bg-no-repeat lg:h-[34rem] lg:flex-row"
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
        <button class="optional-btn rounded bg-dark-blue px-4 py-2 font-bold text-white">
            {button_content}
        </button>
    </div>
</div>

<style>
    .optional-btn {
        background: linear-gradient(to left, #0102f2 50%,  #fefcfb 50%) right;
        background-size: 200% 100%;
        transition: all 0.5s ease;
    }

    .optional-btn:hover {
        background-position: left;
        color: #0A1128;
    }
</style>