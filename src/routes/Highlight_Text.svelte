<script lang='ts'>
    let { heading, body_1, body_2, body_3, button_content } = $props();
</script>
<div class="mx-10 h-full flex">
<div class="bg-blue-500 w-2 flex-none inline-block mr-8">
</div>

<div class="my-10 w-5/6 inline-block flex-initial">
    <h1 class="text-5xl text-blue-500 font-semibold mb-8">{heading}</h1> 
    
    <p class="mb-8">
        {body_1}
    </p>

    <p class="mb-8">
        {body_2}
    </p>

    <p class="mb-8">
        {body_3}
    </p>

    <button class="px-4 py-2 border-2 border-black">
        {button_content}
    </button>
</div>
</div>