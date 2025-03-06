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
<div class="navbar flex h-24 items-stretch justify-center bg-ra-black lg:space-x-60 {showNav ? 'show' : 'hide'} ">
    <a class="flex w-0 sm:w-1/4 md:w-auto" href="/">
        <div class="flex items-stretch">
            <img src={logo} alt="RA Nolido Logo" class="h-full w-full" />
        </div>
    </a>

    <nav class="flex text-[15px] sm:text-[12px] md:text-[15px] xl:text-[19px]">
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

    span {
        position: relative;
        text-decoration: none;
    }

    span::before {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        bottom: -1px;
        left: 0;
        background-color: white;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    span:hover::before {
        transform: scaleX(1);
    }

    .active {
        border-bottom: 1px solid theme('colors.ra-white');
        padding-top: 1px;
    }
</style>
