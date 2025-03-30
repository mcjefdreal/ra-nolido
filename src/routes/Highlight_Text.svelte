<script lang="ts">
    const { heading, body_1, body_2, body_3, button_content = '' } = $props();
</script>

<div class="mx-10 flex h-full">
    <div class="mr-8 inline-block w-2 flex-none bg-royal-blue"></div>

    <div class="my-10 inline-block w-5/6 flex-initial">
        <h1 class="mb-8 text-5xl font-semibold text-ra-black">{heading}</h1>

        <p class="mb-8">
            {body_1}
        </p>

        <p class="mb-8">
            {body_2}
        </p>

        <p class={button_content !== '' ? 'mb-8' : ''}>
            {body_3}
        </p>

        {#if button_content !== ''}
            <a href="{base}/about-us">
                <button class="optional-btn border-2 border-ra-black px-4 py-2">
                    {button_content}
                </button>
            </a>
        {/if}
    </div>
</div>

<style>
    .optional-btn {
        background: linear-gradient(to left, #fefcfb 50%, #0102f2 50%) right;
        background-size: 200% 100%;
        transition: all 0.5s ease;
    }

    .optional-btn:hover {
        background-position: left;
        color: #fefcfb;
        border-color: #0102f2;
    }
</style>
