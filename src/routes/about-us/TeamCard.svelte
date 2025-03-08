<script lang="ts">
    import type { HTMLImgAttributes } from 'svelte/elements';

    interface Props {
        src: HTMLImgAttributes['src'];
        alt: HTMLImgAttributes['alt'];
    }

    const { src, alt }: Props = $props();
</script>

<!-- TODO: Prefer using `hover:` modifiers in native CSS. -->
<div
    class="flex flex-col text-center items-center"
>
    <img
        {src}
        {alt}
        height="300px"
        loading="lazy"
        class="items-center overflow-hidden aspect-square rounded-full shadow-md h-full mb-3 lg:w-3/4"
    />

    <h1 class="font-semibold font-jakarta">UY SI BRAD</h1>
    <h1 class="font-jakarta">Idol Pala 'to</h1>
</div>
