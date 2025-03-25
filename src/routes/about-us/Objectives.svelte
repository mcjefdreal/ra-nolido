<script>
    import { objectives } from "./objectives";
</script>

<div class="flex flex-col items-center text-center">
    <h1 class="mb-10 text-center font-semibold text-5xl text-ra-black">Objectives</h1>

    <div class="items-start grid grid-cols-2 w-full">
        {#each objectives as obj}
        <p class="w-5/6 pt-6 mx-auto">
            {obj}
        </p>
        {/each}
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