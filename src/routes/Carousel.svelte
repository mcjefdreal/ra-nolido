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
    let { heading, prefix, imgs } = $props();
    let size = imgs.length;

    let left = $state(prefix + imgs[size - 1]);
    let active = $state(prefix + imgs[0]);
    let right = $state(prefix + imgs[1]);

    let index = 0;
    let prev_idx = 0;

    // Initializes highlighted indicator

    // For switching carousel images
    function onclick() {
        let clicked = event?.target as HTMLBodyElement;

        // Identifies if left or right preview was clicked
        if ((event?.target as HTMLBodyElement).id == 'left') {
            //window.alert(left);
            index--;
            // Resets counter
            if (index < 0) index = size - 1;
        } else if ((event?.target as HTMLBodyElement).id == 'right') {
            //window.alert(right);
            index++;
            // Resets counter
            if (index == size) index = 0;
        }

        // Identifies which indicator was clicked
        else {
            index = parseInt(clicked.id.at(-1));
        }

        // Set main img
        active = prefix + imgs[index];

        // Sets left & right img (accounts for loop around)
        if (index - 1 < 0) left = prefix + imgs[size - 1];
        else left = prefix + imgs[index - 1];

        if (index + 1 == size) right = prefix + imgs[0];
        else right = prefix + imgs[index + 1];

        // Updates indicator
        let cur_id = 'button ' + index.toString();
        let prev_id = 'button ' + prev_idx.toString();

        let selected = document.getElementById(cur_id);
        let previous = document.getElementById(prev_id);

        selected.className = selected?.className.toString().replace('black', 'blue-500');
        previous.className = previous?.className.toString().replace('blue-500', 'black');

        // Updates previous index
        prev_idx = index;
    }
</script>

<h1 class="auto mb-8 flex justify-center text-5xl font-semibold">{heading}</h1>

<!-- Main Carousel -->
<div class="auto mb-10 flex h-1/2 justify-center">
    <div class="w-1/4 flex-initial">
        <div class="relative">
            <img src={left} alt="left" id="left" class="absolute right-1/2 h-96" {onclick} />
        </div>
    </div>

    <div class="mx-48 w-1/2 flex-initial justify-center">
        <div class="flex justify-center">
            <img src={active} alt="active" class="h-96" />
        </div>
    </div>

    <div class="w-1/4 flex-initial">
        <div class="relative">
            <img src={right} alt="right" id="right" class="absolute left-1/2 h-96" {onclick} />
        </div>
    </div>
</div>

<!-- Indicators -->
<div class="auto flex justify-center">
    {#each imgs as img, i}
        <!-- Note: idk how else to initialize the first indicator as blue HUHU pero if may mahanap kau na mas efficient/elegant, feel free to change :pray:-->
        {#if i == 0}
            <button
                type="button"
                class="bg-blue-500 mx-2 h-4 w-4 rounded-full"
                id="button {i}"
                aria-label="indicator {i}"
                {onclick}
            ></button>
        {:else}
            <button
                type="button"
                class="bg-black mx-2 h-4 w-4 rounded-full"
                id="button {i}"
                aria-label="indicator {i}"
                {onclick}
            ></button>
        {/if}
    {/each}
</div>
