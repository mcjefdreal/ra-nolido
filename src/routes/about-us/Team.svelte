<script lang="ts">
    import TeamCard from "./TeamCard.svelte";
    import src from '$lib/people/team/engr-nolido.jpg';
    const director = {
        src: src,
        alt: "Image",
        name: "Ramon Alberto B. Nolido",
        position: "Managing Director"
    };
</script>

<div class="flex flex-col items-center text-center">
    <h1 class="mb-8 font-semibold text-5xl text-ra-black">Our Team</h1>

    <div class="flex flex-row justify-center w-5/6 md:w-3/4 lg:w-1/2 gap-16">
        <TeamCard { ...director } />
        <!--TODO: Add more team cards for more personnel later on-->
    </div>
</div>