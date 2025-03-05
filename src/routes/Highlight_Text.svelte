<script lang="ts">
    let { heading, body_1, body_2, body_3, button_content } = $props();
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

        <p class="mb-8">
            {body_3}
        </p>

        <button class="border-2 border-ra-black px-4 py-2">
            {button_content}
        </button>
    </div>
</div>
