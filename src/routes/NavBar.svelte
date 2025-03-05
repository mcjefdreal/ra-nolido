<script lang="ts">
    import logo from '$lib/icons/logo-white-text.svg';
    import { onMount } from 'svelte';

    let lastScrollPosition = 0;
    let showNav = true;
</script>

<svelte:window
    on:scroll={() => {
        var currentScrollposition = window.pageYOffset || document.documentElement.scrollTop; //Get current scroll position
        if (currentScrollposition > lastScrollPosition) {
            showNav = false;
        } else {
            showNav = true;
        }
        lastScrollPosition = currentScrollposition;
    }}
/>
<div
    class="navbar flex items-center justify-center gap-x-64 bg-[#0A1128] p-4 md:space-x-60 {showNav ? 'show' : 'hide'} "
>
    <a class="flex items-center px-2" href="/">
        <div class="h-24">
            <img src={logo} alt="RA Nolido Logo" class="h-full w-full" />
        </div>
    </a>

    <nav class="lg:block">
        <ul class="flex gap-8">
            <li>
                <a class="p-4 hover:bg-[#606060]" href="/"> Home </a>
            </li>
            <li>
                <a class="p-4 hover:bg-[#606060]" href="/projects/"> Projects </a>
            </li>
            <li>
                <a class="p-4 hover:bg-[#606060]" href="/about-us/"> About Us </a>
            </li>
            <li>
                <a class="p-4 hover:bg-[#606060]" href="/contact-us/"> Contact Us </a>
            </li>
        </ul>
    </nav>
</div>

<style>
    a {
        color: #fefcfb;
        font-size: 19px;
    }

    .navbar {
        transition: transform 150ms linear;
    }

    .show {
        transform: translateY(0%);
    }

    .hide {
        transform: translateY(-100%);
    }
</style>
