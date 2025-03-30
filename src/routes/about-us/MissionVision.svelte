<script>
    import missionSrc from '$lib/icons/mission.png';
    import visionSrc from '$lib/icons/vision.png';
</script>

<div class="flex flex-col items-center text-center">
    <h1 class="mb-10 text-center text-5xl font-semibold text-ra-black">Our Mission and Vision</h1>

    <div class="flex w-5/6 flex-row justify-center gap-16 md:w-3/4">
        <div class="w-1/2 flex-col text-center">
            <div class="">
                <img src={missionSrc} alt="Mission icon" class="m-auto w-1/2" />
            </div>
            <h1 class="mb-2 text-4xl font-medium">Mission</h1>
            <p class="m-auto w-3/4">
                To build, service, and maintain private and public infrastructure and facilities through honorable
                means.
            </p>
        </div>
        <div class="w-1/2 flex-col items-center text-center">
            <div>
                <img src={visionSrc} alt="Vision icon" class="m-auto w-1/2" />
            </div>
            <h1 class="mb-2 text-4xl font-medium">Vision</h1>
            <p class="w-5/8 m-auto">
                To contribute to the development of well-built structures so as to contribute to our client’s and
                country’s gains and in so doing, generate employment, improve economic performance and uplift the
                standards of everyday living.
            </p>
        </div>
    </div>
</div>
