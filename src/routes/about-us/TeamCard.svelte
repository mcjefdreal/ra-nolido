<script lang="ts">
    const { src, alt, name = "UY SI BRAD", position = "IDOL" } = $props();
</script>

<div class="flex flex-col w-1/2"
>
    <div class="items-center overflow-hidden aspect-square rounded-full shadow-lg mb-3">
        <img
            {src}
            {alt}
            loading="lazy"
            class="w-full"
        />
    </div>
    <h1 class="font-semibold font-jakarta">{name}</h1>
    <h1 class="font-jakarta">{position}</h1>
</div>
