<script lang="ts">
    // For popup
    let { showModal = $bindable(), prefix, imgs, proj } = $props();
    let dialog = $state();

    $effect(() => {
        if (showModal) dialog.showModal();
    });

    const size = imgs.length;

    const Proj_Title = proj.title;
    const Proj_Descrip = proj.descrip;
    const Proj_Owner = proj.owner;
    const Proj_Location = proj.loc;

    let left = $state(prefix + imgs[size - 1]);
    let active = $state(prefix + imgs[0]);
    let right = $state(prefix + imgs[1]);

    let index = 0;
    let prev_idx = 0;

    // For switching carousel images
    function updateCarousel() {
        // Set main img
        active = prefix + imgs[index];

        // Sets left & right img (accounts for loop around)
        if (index - 1 < 0) left = prefix + imgs[size - 1];
        else left = prefix + imgs[index - 1];

        if (index + 1 === size) right = prefix + imgs[0];
        else right = prefix + imgs[index + 1];

        // Updates indicator
        const cur_id = `button ${index.toString()}`;
        const prev_id = `button ${prev_idx.toString()}`;

        const selected = document.getElementById(cur_id);
        const previous = document.getElementById(prev_id);

        if (selected != null) selected.className = selected.className.toString().replace('ra-black', 'royal-blue');
        if (previous != null) previous.className = previous.className.toString().replace('royal-blue', 'ra-black');

        // Updates previous index
        prev_idx = index;
    }

    // Carousel Controls
    function move_left() {
        index--;
        // Resets counter
        if (index < 0) index = size - 1;
        updateCarousel();
    }

    function move_right() {
        index++;
        // Resets counter
        if (index == size) index = 0;
        updateCarousel();
    }

    function move_to(idx: number) {
        index = idx;
        updateCarousel();
    }
</script>

<dialog
    bind:this={dialog}
    onclose={() => (showModal = false)}
    onclick={e => {
        if (e.target === dialog) dialog.close();
    }}
    class="h-full w-5/6 bg-transparent"
>
    <!-- Main Carousel -->
    <div class="auto mb-8 flex h-[60%] items-center justify-center">
        <div class="w-1/4 flex-initial overflow-hidden">
            <div class="relative text-right">
                <button
                    onclick={move_left}
                    class="mr-36 h-10 w-10 rounded-full bg-ra-black text-lg
                                               hover:h-12 hover:w-12 hover:bg-royal-blue hover:duration-150"
                    aria-label="left"
                >
                </button>
            </div>
        </div>

        <div class="w-3/4 flex-initial justify-center">
            <div class="flex justify-center">
                <img src={active} alt="active" class="h-120" />
            </div>
        </div>

        <div class="w-1/4 flex-initial overflow-hidden">
            <div class="relative">
                <button
                    onclick={move_right}
                    class="ml-36 h-10 w-10 rounded-full bg-ra-black text-lg
                                               hover:h-12 hover:w-12 hover:bg-royal-blue hover:duration-150"
                    aria-label="right"
                >
                </button>
            </div>
        </div>
    </div>

    <!-- Indicators -->
    <div class="auto mb-8 flex h-[2.5%] items-center justify-center">
        {#each imgs, i}
            <button
                type="button"
                class="mx-2 h-4 w-4 rounded-full bg-{i === 0 ? 'royal-blue' : 'ra-black'}
                   hover:h-6 hover:w-6 hover:opacity-75"
                id="button {i}"
                aria-label="indicator {i}"
                onclick={() => move_to(i)}
            ></button>
        {/each}
    </div>

    <!-- Info Box -->
    <div class="auto flex justify-center">
        <div class="w-5/6 rounded-xl bg-ra-white px-12 py-8 opacity-[.90]">
            <h3 class="mb-8 text-5xl font-semibold">{Proj_Title}</h3>
            <div class="mx-10 flex">
                <div class="w-1/2 flex-initial">
                    <div class="mb-6 w-full text-xl font-bold">{Proj_Descrip}</div>
                    <div class="w-full text-xl"><b>Owner: </b> {Proj_Owner}</div>
                </div>

                <div class="w-1/2 flex-initial">
                    <div class="mb-6 w-full text-xl font-bold">Location:</div>
                    <div class="w-full text-xl">{Proj_Location}</div>
                </div>
            </div>
        </div>
    </div>
    <!-- <button autofocus onclick={() => dialog.close()}>close modal</button> -->
</dialog>
