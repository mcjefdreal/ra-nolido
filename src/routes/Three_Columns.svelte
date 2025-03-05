<script lang='ts'>
    let { heading, subheading_1, subheading_2, subheading_3, 
        body_1, body_2, body_3,
        img_1, img_2, img_3,
        alt_1, alt_2, alt_3 } = $props();
</script>

<h1 class="text-5xl font-semibold mb-8 flex auto justify-center">{heading}</h1> 

<div class="mx-16 gap-x-24 flex auto justify-center">
    <div class="w-1/4 inline-block flex-initial">
        <div class="relative">
            <img src={img_1} alt={alt_1} class="mb-4">
            <button class="px-2 py-1 border-2 border-black absolute bottom-3 right-3">See More</button>
        </div>

        <h2 class="text-3xl font-medium mb-4">{subheading_1}</h2>
        <p class="mb-8">
            {body_1}
        </p>
    </div>
    
    <div class="w-1/4 inline-block flex-initial">
        <div class="relative">
            <img src={img_2} alt={alt_2} class="mb-4">
            <button class="px-2 py-1 border-2 border-black absolute bottom-3 right-3">See More</button>
        </div>

        <h2 class="text-3xl font-medium mb-4">{subheading_2}</h2>
        <p class="mb-8">
            {body_2}
        </p>
    </div>
    
    <div class="w-1/4 inline-block flex-initial">
        <div class="relative">
            <img src={img_3} alt={alt_3} class="mb-4">
            <button class="px-2 py-1 border-2 border-black absolute bottom-3 right-3">See More</button>
        </div>

        <h2 class="text-3xl font-medium mb-4">{subheading_3}</h2>
        <p class="mb-8">
            {body_3}
        </p>
    </div>
</div>