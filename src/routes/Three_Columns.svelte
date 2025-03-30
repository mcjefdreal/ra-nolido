<script lang="ts">
    import { base } from '$app/paths';
    const {
        heading,
        subheading_1,
        subheading_2,
        subheading_3,
        body_1,
        body_2,
        body_3,
        img_1,
        img_2,
        img_3,
        alt_1,
        alt_2,
        alt_3,
    } = $props();
</script>

<h1 class="auto mb-8 flex justify-center text-5xl font-semibold">{heading}</h1>

<div class="auto mx-16 flex justify-center gap-x-24">
    <div class="inline-block w-1/4 flex-initial">
        <div class="relative">
            <img src={img_1} alt={alt_1} class="mb-4" />
            <a href="{base}/projects">
                <button
                    class="absolute bottom-3 right-3 border-[2px] border-ra-black bg-white px-2 py-1
                           duration-[200ms] hover:border-royal-blue hover:bg-royal-blue hover:font-semibold hover:text-white"
                >
                    See More</button
                >
            </a>
        </div>

        <h2 class="mb-4 text-3xl font-medium">{subheading_1}</h2>
        <p class="mb-8">
            {body_1}
        </p>
    </div>

    <div class="inline-block w-1/4 flex-initial">
        <div class="relative">
            <img src={img_2} alt={alt_2} class="mb-4" />
            <a href="{base}/projects">
                <button
                    class="absolute bottom-3 right-3 border-[2px] border-ra-black bg-white px-2 py-1
                           duration-[200ms] hover:border-royal-blue hover:bg-royal-blue hover:font-semibold hover:text-white"
                >
                    See More</button
                ></a
            >
        </div>

        <h2 class="mb-4 text-3xl font-medium">{subheading_2}</h2>
        <p class="mb-8">
            {body_2}
        </p>
    </div>

    <div class="inline-block w-1/4 flex-initial">
        <div class="relative">
            <img src={img_3} alt={alt_3} class="mb-4" />
            <a href="{base}/projects">
                <button
                    class="absolute bottom-3 right-3 border-[2px] border-ra-black bg-white px-2 py-1
                           duration-[200ms] hover:border-royal-blue hover:bg-royal-blue hover:font-semibold hover:text-white"
                >
                    See More</button
                >
            </a>
        </div>

        <h2 class="mb-4 text-3xl font-medium">{subheading_3}</h2>
        <p class="mb-8">
            {body_3}
        </p>
    </div>
</div>
