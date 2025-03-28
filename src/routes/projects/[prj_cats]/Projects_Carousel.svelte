<script lang="ts">
    // For popup
    let { showModal = $bindable(), imgs = $bindable(), proj = $bindable() } = $props();
    let dialog = $state();

    $effect(() => {
        if (showModal) dialog.showModal();
    });

    const size = imgs.length;

    const Proj_Title = proj.title;
    const Proj_Descrip = proj.descrip;
    const Proj_Owner = proj.owner;
    const Proj_Location = proj.loc;

    let left = $state(imgs[size - 1]);
    let active = $state(imgs[0]);
    let right = $state(imgs[1]);

    let index = 0;
    let prev_idx = 0;

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

        if (previous != null) previous.className = previous.className.toString().replace('royal-blue', 'ra-white');
        if (selected != null) selected.className = selected.className.toString().replace('ra-white', 'royal-blue');

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

    function move_key(event: KeyboardEvent) {
        if (event.code == 'ArrowLeft') move_left();
        else if (event.code == 'ArrowRight') move_right();
    }
</script>

<svelte:window onkeydown={(event) => {move_key(event)}} />

<dialog
    bind:this={dialog}
    onclose={() => (showModal = false)}
    onclick={e => {
        if (e.target === dialog) dialog.close();
    }}
    class="h-full w-5/6 pt-8 rounded-lg flex-1 flex-col"
>
    <!-- Main Carousel -->
    <div class="auto mb-6 flex h-[70%] items-center justify-center">
        <div class="w-1/4 flex-initial overflow-hidden h-14">
            <div class="relative text-right arrow_parent">
                <button
                    onclick={move_left}
                    class="mr-24 h-14 w-14 rounded-full bg-ra-black text-lg left_arrow"
                    aria-label="left"
                >
                <img src='../../../../src/lib/icons/left_arrow.svg' alt='left arrow' class='w-4 ml-[17px]'>
                </button>
            </div>
        </div>

        <div class="w-3/4 flex-initial justify-center">
            <div class="flex justify-center">
                <img src={active} alt="active" class="h-[475px]" />
            </div>
        </div>

        <div class="w-1/4 flex-initial overflow-hidden h-14">
            <div class="relative arrow_parent">
                <button
                    onclick={move_right}
                    class="ml-24 h-14 w-14 rounded-full bg-ra-black text-lg flex-initial content-center right_arrow"
                    aria-label="right"
                >
                    <img src='../../../../src/lib/icons/right_arrow.svg' alt='right arrow' class='w-6 ml-[18px]'>
                </button>
            </div>
        </div>
    </div>

    <!-- Indicators -->
    <div class="auto mb-4 flex h-[2.5%] items-center justify-center">
        {#each imgs, i}
            <button
                type="button"
                class="mx-2 h-[12px] w-[12px] rounded-full bg-{i === 0 ? 'royal-blue' : 'ra-white'}
                   hover:h-6 hover:w-6 hover:bg-blue-400"
                id="button {i}"
                aria-label="indicator {i}"
                onclick={() => move_to(i)}
            ></button>
        {/each}
    </div>

    <!-- Info Box -->
    <div class="auto flex justify-center h-[19%]">
        <div class="w-5/6 rounded-xl bg-ra-white px-5 py-4 opacity-[.90]">
            <h3 class="mb-1 text-xl font-semibold">{Proj_Title}</h3>
            <div class="mx-4 flex">
                <div class="w-[60%] flex-initial">
                    <div class="flex w-full text-sm font-medium">
                        <div class='w-1/6 mr-1'>
                            <b>Location:</b>
                        </div> 
                        <div class='w-5/6 pr-2'>
                            {Proj_Location}
                        </div>
                    </div>
                    <div class="flex w-full text-sm font-medium">
                        <div class='w-1/6 mr-1'>
                            <b>Owner:</b>
                        </div> 
                        <div class='w-5/6'>
                            {Proj_Owner}
                        </div>
                    </div>
                </div>

                <div class="ml-4 w-[55%] flex-initial">
                    <div class="flex w-full text-sm font-medium flex-col flex-1  ">
                        <div class='w-full'>
                            <b>Description:</b>
                        </div> 
                        <div class='w-full pr-2'>
                            {Proj_Descrip}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <button autofocus onclick={() => dialog.close()}>close modal</button> -->
</dialog>

<style>
    dialog {
        background: rgba(254, 252, 251, 0.1);
    }

    dialog::backdrop {
        background: rgba(10, 17, 40, 0.6);
    }

    .arrow_parent:hover > .left_arrow {
        margin-right: 40%;
        background-color: rgb(1, 2, 242); 
        transition-duration: 150ms; 
    }

    .arrow_parent:hover > .right_arrow {
        margin-left: 40%;
        background-color: rgb(1, 2, 242); 
        transition-duration: 150ms; 
    }
</style>
