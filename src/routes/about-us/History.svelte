<script lang="ts">
    import About from "./About.svelte";
    import src from '$lib/icons/temp_logo.svg';

    const par1 = "The company was established by Engr. Rizal Alberto Nolido on May 1969 in Manila as R.A. NOLIDO & COMPANY, INC. primarily to complement the nationwide demand for housing construction and subdivision development. It then ventured into warehouse and superstructure building and engineering works, reaching its heights during the construction peak of the seventies into the eighties."
    const par2 = "In 1991, it was re-incorporated and renamed R.A. NOLIDO CONSTRUCTION CORPORATION (RANCC), with Engr. Ramon Alberto Nolido as President. In 1993, RANCC opened its branch in Cebu City to contribute to the construction requirements of Southern Philippines. Through time, the company has increased its Management and Engineering Staff and has been conducting technical support and skills training seminars on a regular basis."
    const par3 = "With the advent of information technology, came the computerization of various departments and systems. The company also operates its own workshop and storehouse on a leased property iin Pugadlawin, Quezon City. At present, the company is ready more than ever to face the challenges of a demanding industry."
</script>

<div class="flex flex-row justify-evenly mr-10">
    <About 
        heading={"Our History"}
        body_1={par1}
        body_2={par2}
        body_3={par3}
    />
    <div class="flex flex-row items-center w-3/8">
        <img {src} alt={"History picture"} class="items-center overflow-hidden shadow-md w-full mb-3" />
    </div>
</div>