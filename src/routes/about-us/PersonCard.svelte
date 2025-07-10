<script lang="ts">
    import src1 from '$lib/people/team/engr-nolido.jpg';
    import src2 from '$lib/people/team/dr-nolido.png';
</script>

<div class="flex w-2/5 flex-row items-center text-center">
    <div class="relative flex w-3/5 flex-col place-items-center">
        <div class="z-10 aspect-square w-full overflow-hidden rounded-full">
            <img src={src1} alt="Ramon Alberto B. Nolido" loading="lazy" class="z-10" />
        </div>
        <div class="flex w-full flex-row text-center text-sm">
            <div class="flex w-full flex-col text-center">
                <h1 class="font-jakarta font-semibold">Ramon Alberto B. Nolido</h1>
                <h1 class="font-jakarta">President</h1>
            </div>
        </div>

        <div class="absolute left-4/5 top-0 flex w-full flex-col place-items-center">
            <div class="z-0 aspect-square w-full justify-center overflow-hidden">
                <img
                    src={src2}
                    alt="Rizal Alberto C. Nolido"
                    loading="lazy"
                    class="z-0 mx-auto h-full rounded-xl opacity-60"
                />
                <!--IMG had class h-full rounded-xl opacity-60 shadow-xl -->
            </div>
            <div class="flex w-full flex-row text-center text-sm">
                <div class="flex w-full flex-col text-center">
                    <h1 class="font-jakarta font-semibold">Rizal Alberto C. Nolido</h1>
                    <h1 class="font-jakarta">Founder</h1>
                </div>
            </div>
        </div>
    </div>
</div>
