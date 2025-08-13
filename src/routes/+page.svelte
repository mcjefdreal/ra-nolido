<script>
    import Carousel from './Carousel.svelte';
    import Hero from './Hero.svelte';
    import HighlightText from './Highlight_Text.svelte';
    import Three_Columns from '$lib/components/Three_Columns.svelte';
    import construction from '$lib/people/team/s3_square.jpg';
    import management from '$lib/people/team/s6_square.jpg';
    import design from '$lib/img/stock-imgs/design_square.png';
</script>

<div class="mb-[5%]">
    <Hero heading={'SA R.A. NOLIDO'} subheading={'SOLIDO'} button_content={'Get in Touch'}></Hero>
</div>

<div class="my-16" id="three_columns">
    <Three_Columns
        subheading_1={'Construction'}
        subheading_2={'Project Management'}
        subheading_3="Design"
        body_1={'We offer high-end, environmentally-friendly, and sustainable commercial construction management, general contracting, and consulting services.'}
        body_2={'We provide professional services that use specialized project management techniques to oversee the planning, design, and construction of a project.'}
        body_3={'We specialize in combining thoughtful design, matchless quality of construction, and a respectful observance of individual family resources.'}
        img_1={construction}
        img_2={management}
        img_3={design}
        alt_1={'Lorem ipsum'}
        alt_2={'Lorem ipsum'}
        alt_3={'Lorem ipsum'}
    ></Three_Columns>
</div>

<div class="my-16 overflow-hidden">
    <Carousel
        heading={'Featured Projects'}
        imgs={['1.png', '2.png', '3.png', '5.png', '6.png', '7.png', '8.png', '9.png']}
    ></Carousel>
</div>
