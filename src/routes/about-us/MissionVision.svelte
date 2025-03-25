<script>
    import missionSrc from "$lib/icons/mission.png";
    import visionSrc from "$lib/icons/vision.png";
</script>

<div class="flex flex-col items-center text-center">
    <h1 class="mb-10 text-center font-semibold text-5xl text-ra-black">Our Mission and Vision</h1>

    <div class="flex flex-row justify-center gap-16 w-5/6 md:w-3/4">
        <div class="flex-col text-center w-1/2">
            <div class="">
                <img src={missionSrc} alt="Mission icon" class="w-1/2 m-auto"/>
            </div>
            <h1 class="mb-2 font-medium text-4xl">Mission</h1>
            <p class="w-3/4 m-auto">
                To build, service, and maintain private and public infrastructure and facilities through honorable means.
            </p>
        </div>
        <div class="flex-col text-center w-1/2 items-center">
            <div>
                <img src={visionSrc} alt="Vision icon" class="w-1/2 m-auto"/>
            </div>
            <h1 class="mb-2 font-medium text-4xl">Vision</h1>
            <p class="w-5/8 m-auto">
                To contribute to the development of well-built structures so as to contribute to our client’s and country’s gains and in so doing, generate employment, improve economic performance and uplift the standards of everyday living.
            </p>
        </div>
    </div>
</div>