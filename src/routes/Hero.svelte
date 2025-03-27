<script lang="ts">
    let { heading, subheading, button_content } = $props();
</script>

<div
    class="flex h-[100vh] w-full flex-col items-center justify-between bg-[url(./src/lib/img/hero-home/hero-bg.png)] bg-no-repeat lg:flex-row"
>
    <div
        class="mx-5 flex flex-col items-center gap-8 text-center lg:ml-20 lg:mr-0 lg:items-start lg:text-left xl:ml-40"
    >
        <div class="flex flex-col text-ra-white">
            <h2 class="text-4xl font-bold leading-tight">
                {heading}
            </h2>
            <h1 class="text-5xl font-bold text-royal-blue">
                {subheading}
            </h1>
        </div>
        <a href="/contact-us">
            <button class="optional-btn rounded bg-dark-blue px-4 py-2 font-bold text-white">
                {button_content}
            </button>
        </a>
    </div>
</div>

<style>
    .optional-btn {
        background: linear-gradient(to left, #0102f2 50%, #fefcfb 50%) right;
        background-size: 200% 100%;
        transition: all 0.5s ease;
    }

    .optional-btn:hover {
        background-position: left;
        color: #0a1128;
    }
</style>
