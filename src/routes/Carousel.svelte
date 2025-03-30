<!--
- Carousel Wrapper
    - Contains all items 
- Carousel Indicators (yung buttons)

Notes:
- Main Item (active; center; biggest)
- Previous & Next Items (left & right; black translucent overlay; slightly smaller; only half can be seen)
- Carousel Indicators sa baba
- No controls (just click on the next/previous items)
- Automatically umiikot every x seconds
- Loops infinitely 
-->

<script lang="ts">
    import { base } from '$app/paths';
    const { heading, imgs } = $props();
    const size = imgs.length;

    const images: any = import.meta.glob(['$lib/img/carousel-home/**.png'], {
        eager: true,
        query: '?url',
        import: 'default',
    });

    let left = $state(imgs[size - 1]);
    let active = $state(imgs[0]);
    let right = $state(imgs[1]);

    let index = 0;
    let prev_idx = 0;

    let anim = $state('none');
    let center_anim = $state('none');

    let left_abs = $state('left-1/2');
    let right_abs = $state('right-1/2');

    // For switching carousel images
    function updateCarousel() {
        // Set main img
        active = imgs[index];

        // Sets left & right img (accounts for loop around)
        if (index - 1 < 0) left = imgs[size - 1];
        else left = imgs[index - 1];

        if (index + 1 === size) right = imgs[0];
        else right = imgs[index + 1];

        // Updates indicator
        const cur_id = `button ${index.toString()}`;
        const prev_id = `button ${prev_idx.toString()}`;

        const selected = document.getElementById(cur_id);
        const previous = document.getElementById(prev_id);

        if (selected != null) selected.className = selected.className.toString().replace('ra-black', 'royal-blue');
        if (previous != null) previous.className = previous.className.toString().replace('royal-blue', 'ra-black');

        // Updates previous index
        prev_idx = index;
        anim = 'none';
        center_anim = 'none';
    }

    // Carousel Controls
    function move_left() {
        index--;
        anim = 'animate-slideleft';
        center_anim = 'animate-cen_slideleft';
        // Resets counter
        if (index < 0) index = size - 1;
        setTimeout(updateCarousel, 500);
    }

    function move_right() {
        index++;
        anim = 'animate-slideright';
        center_anim = 'animate-cen_slideright';
        // Resets counter
        if (index == size) index = 0;
        setTimeout(updateCarousel, 500);
    }

    function move_to(idx: number) {
        index = idx;
        updateCarousel();
    }

    //setInterval(updateCarousel, 1000);
</script>

<h1 class="auto mb-8 flex justify-center text-5xl font-semibold">{heading}</h1>

<!-- Main Carousel -->
<div class="auto mb-10 flex h-1/2 justify-center">
    <div class="z-40 w-1/2 flex-initial">
        <div class="relative {anim}">
            <button onclick={move_left}
                ><img
                    src={images['/src/lib/img/carousel-home/' + left]}
                    alt="left"
                    id="left"
                    class="{anim} expanding-btn absolute top-0 {right_abs} h-96 max-w-max"
                /></button
            >
        </div>
    </div>

    <div class="z-10 flex-initial justify-center {center_anim}">
        <div class="flex justify-center">
            <img src={images['/src/lib/img/carousel-home/' + active]} alt="active" class="h-96 max-w-max" />
        </div>
    </div>

    <div class="w-1/2 flex-initial {anim}">
        <div class="relative overflow-y-visible">
            <button onclick={move_right}
                ><img
                    src={images['/src/lib/img/carousel-home/' + right]}
                    alt="right"
                    id="right"
                    class="{anim} expanding-btn absolute top-0 max-w-max {left_abs} h-96"
                /></button
            >
        </div>
    </div>
</div>

<!-- Indicators -->
<div class="auto flex justify-center pb-1">
    {#each imgs, i}
        <button
            type="button"
            class="expanding-btn mx-2 h-4 w-4 rounded-full bg-{i === 0 ? 'royal-blue' : 'ra-black'}"
            id="button {i}"
            aria-label="indicator {i}"
            onclick={() => move_to(i)}
        ></button>
    {/each}
</div>

<style>
    .expanding-btn {
        transition: all 0.2s ease;
    }

    .expanding-btn:hover {
        transform: scale(1.2);
    }
</style>
