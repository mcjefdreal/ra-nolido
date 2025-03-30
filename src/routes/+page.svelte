<script>
    import Carousel from './Carousel.svelte';
    import Hero from './Hero.svelte';
    import HighlightText from './Highlight_Text.svelte';
    import Three_Columns from './Three_Columns.svelte';
    import construction from '/src/lib/img/stock-imgs/construction.svg';
    import management from '/src/lib/img/stock-imgs/proj_management.svg';
    import design from '/src/lib/img/stock-imgs/design.svg';
</script>

<div class="mb-[5%]">
    <Hero heading={'SA R.A. NOLIDO'} subheading={'SOLIDO'} button_content={'Get in Touch'}></Hero>
</div>

<div class="ml-24" id="who_we_are">
    <HighlightText
        heading={'Who We Are'}
        body_1={'The company was established by Engr. Rizal Alberto Nolido on May 1969 in Manila as R.A. NOLIDO & COMPANY, INC. primarily to complement the nationwide demand for housing construction and subdivision development. It then ventured into warehouse and superstructure building and ngineering works, reaching its heights during the construction peak of the seventies into the eighties. '}
        body_2={'In 1991, it was re-incorporated and renamed R.A. NOLIDO CONSTRUCTION CORPORATION (RANCC), with Engr. Ramon Alberto Nolido as President. In 1993, RANCC opened its branch in Cebu City to contribute to the construction requirements of Southern Philippines. Through time, the company has increased its Management and Engineering Staff and has been conducting technical support and skills training seminars on a regular basis. With the advent of information technology, came the computerization of various departments and systems. '}
        body_3={'The company also operates its own workshop and storehouse on a leased property iin Pugadlawin, Quezon City. At present, the company is ready more than ever to face the challenges of a demanding industry.'}
        button_content={'Learn More About Us'}
    ></HighlightText>
</div>

<div class="my-16">
    <Three_Columns
        heading={'Why R.A. Nolido?'}
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
