<script lang="ts">
    import TeamCard from "./TeamCard.svelte";
    import src from '$lib/icons/temp_logo.svg';
</script>

<div class="flex-row">
    <h1 class="text-center font-semibold text-5xl text-ra-black">Our Team</h1>

    <div class="grid grid-cols-2 gap-8 items-center">
        <TeamCard {src} alt={"Person 1"}/>
        <TeamCard {src} alt={"Person 2"}/>
    </div>
</div>