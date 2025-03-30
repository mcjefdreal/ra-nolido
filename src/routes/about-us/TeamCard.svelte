<script lang="ts">
    const { src, alt, name = 'UY SI BRAD', position = 'IDOL' } = $props();
</script>

<div class="flex w-1/2 flex-col">
    <div class="mb-3 aspect-square items-center overflow-hidden rounded-full shadow-lg">
        <img {src} {alt} loading="lazy" class="w-full" />
    </div>
    <h1 class="font-jakarta font-semibold">{name}</h1>
    <h1 class="font-jakarta">{position}</h1>
</div>
