<script lang="ts">
    import team from '$lib/people/team/team.jpg';
    import s1 from '$lib/people/team/s1.jpg';
    import s3 from '$lib/people/team/s3.jpg';
    import s4 from '$lib/people/team/s4.jpg';
    import s5 from '$lib/people/team/s5.jpg';
    import s6 from '$lib/people/team/s6.jpg';
    import s7 from '$lib/people/team/s7.jpg';
    import s8 from '$lib/people/team/s8.jpg';
</script>

<div class="flex flex-col text-center">
    <h1 class="mb-8 text-5xl font-semibold text-ra-black">Our Team</h1>

    <div class="flex h-[500px] flex-row gap-5 overflow-auto px-5 py-10">
        <img src={s5} class="transition hover:scale-110" alt="RANCC Team 5" />
        <img src={s6} class="transition hover:scale-110" alt="RANCC Team 6" />
        <img src={s8} class="transition hover:scale-110" alt="RANCC Team 8" />
        <img src={s3} class="transition hover:scale-110" alt="RANCC Team 3" />
        <img src={s4} class="transition hover:scale-110" alt="RANCC Team 4" />
        <img src={s7} class="transition hover:scale-110" alt="RANCC Team 7" />
        <img src={s1} class="transition hover:scale-110" alt="RANCC Team 1" />
        <img src={team} class="transition hover:scale-110" alt="RANCC Team" />
    </div>
</div>
