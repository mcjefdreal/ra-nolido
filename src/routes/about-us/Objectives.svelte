<script>
    import { objectives } from './objectives';
</script>

<div class="ml-8 flex flex-row justify-evenly">
    <div class="mx-10 flex h-full overflow-hidden">
        <div class="mr-8 inline-block w-2 flex-none bg-royal-blue"></div>

        <div class="my-2 inline-block flex-initial">
            <h1 class="mb-4 text-5xl font-semibold text-ra-black">Objectives</h1>

            <div class="grid w-full grid-cols-2 items-start">
                {#each objectives as obj}
                    <p class="mx-auto w-5/6 pt-6">
                        {obj}
                    </p>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    p {
        position: relative;
        text-decoration: none;
    }

    p::before {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        bottom: -1px;
        left: 0;
        background-color: theme('colors.ra-black');
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    p:hover::before {
        transform: scaleX(1);
    }
</style>
