<script lang="ts">
    import src1 from '$lib/people/team/engr-nolido.jpg';
    import src2 from '$lib/people/team/dr-nolido.png';
</script>

<div class="flex w-2/5 flex-row items-center gap-8 text-center xl:items-end">
    <div class="relative mx-24 mt-10 flex w-full flex-col">
        <!-- for some reason this set of images is not -->
        <div class="relative place-items-center">
            <div class="relative z-10 aspect-square w-1/2 overflow-hidden rounded-full">
                <img src={src1} alt="Ramon Alberto B. Nolido" loading="lazy" class="relative z-10" />
            </div>
            <img
                src={src2}
                alt="Rizal Alberto C. Nolido"
                loading="lazy"
                class="absolute bottom-0 z-0 w-full rounded-xl opacity-40 shadow-xl"
            />
        </div>

        <div class="flex w-full flex-row text-center text-sm">
            <!-- <div class="flex w-full flex-col text-center">
                <h1 class="font-jakarta font-semibold">Rizal Alberto C. Nolido</h1>
                <h1 class="font-jakarta">Founder</h1>
            </div> -->

            <div class="flex w-full flex-col text-center">
                <h1 class="font-jakarta font-semibold">Ramon Alberto B. Nolido</h1>
                <h1 class="font-jakarta">President</h1>
            </div>
        </div>
    </div>
</div>
