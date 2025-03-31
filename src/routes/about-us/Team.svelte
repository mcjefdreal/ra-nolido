<script lang="ts">
    import TeamCard from './TeamCard.svelte';
    import src from '$lib/people/team/engr-nolido.jpg';
    const president = {
        src: src,
        alt: 'Image',
        name: 'Ramon Alberto B. Nolido',
        position: 'President',
    };
</script>

<div class="flex flex-col items-center text-center">
    <h1 class="mb-8 text-5xl font-semibold text-ra-black">Our Team</h1>

    <div class="flex w-5/6 flex-row justify-center gap-16 md:w-3/4 lg:w-1/2">
        <TeamCard {...president} />
        <!--TODO: Add more team cards for more personnel later on-->
    </div>
</div>
