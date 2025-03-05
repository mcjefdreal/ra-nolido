<script lang="ts">
    import logo from '$lib/icons/logo-white-text.svg';
    import { page } from '$app/state';

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
    class="navbar flex h-24 items-stretch justify-center gap-x-64 bg-ra-black md:space-x-60 {showNav
        ? 'show'
        : 'hide'} "
>
    <a class="flex items-stretch" href="/">
        <div class="flex items-stretch">
            <img src={logo} alt="RA Nolido Logo" class="h-full w-full" />
        </div>
    </a>

    <nav class="flex items-stretch">
        <div class="flex gap-3">
            <a href="/" class="flex">
                <div class="navtabs flex items-center px-6">
                    <span class={page.url.pathname === '/' ? 'active' : ''}>Home</span>
                </div>
            </a>
            <a href="/projects/" class="flex">
                <div class="navtabs flex items-center px-6">
                    <span class={page.url.pathname === '/projects/' ? 'active' : ''}>Projects</span>
                </div>
            </a>
            <a href="/about-us/" class="flex">
                <div class="navtabs flex items-center px-6">
                    <span class={page.url.pathname === '/about-us/' ? 'active' : ''}>About Us</span>
                </div>
            </a>
            <a href="/contact-us/" class="flex">
                <div class="navtabs flex items-center px-6">
                    <span class={page.url.pathname === '/contact-us/' ? 'active' : ''}>Contact Us</span>
                </div>
            </a>
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

    .navtabs {
        margin-bottom: 0;
        padding-bottom: 0;
    }
    .navtabs:hover {
        background-color: theme('colors.dark-gray');
    }

    .active {
        border-bottom: 1px solid theme('colors.ra-white');
        padding-top: 3px;
        padding-bottom: 2px;
    }
</style>
