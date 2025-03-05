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
    class="navbar flex items-center justify-center gap-x-64 bg-ra-black p-4 md:space-x-60 {showNav ? 'show' : 'hide'} "
>
    <a class="flex items-stretch" href="/">
        <div class="flex">
            <img src={logo} alt="RA Nolido Logo" class="h-full w-full" />
        </div>
    </a>

    <nav class="flex items-stretch">
        <div class="flex items-stretch justify-center justify-items-center gap-5 align-middle">
            <div class="navtabs flex items-center px-5">
                <a href="/"> Home </a>
            </div>
            <div class="navtabs flex items-center px-5">
                <a class="navtabs" href="/projects/"> Projects </a>
            </div>
            <div class="navtabs flex items-center px-5">
                <a class="navtabs" href="/about-us/"> About Us </a>
            </div>
            <div class="navtabs flex items-center px-5">
                <a class="navtabs" href="/contact-us/"> Contact Us </a>
            </div>
        </div>
    </nav>
</div>

<style>
    a {
        color: theme('colors.ra-white');
        font-family: theme('fontFamily.jakarta');
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

    .navtabs:hover {
        background-color: theme('colors.dark-gray');
    }
</style>
