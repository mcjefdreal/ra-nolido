<script lang="ts">
    import logo from '$lib/icons/temp_logo.svg';
</script>

<div class="flex items-center justify-center bg-[#0A1128] p-4 md:space-x-60">
    <a class="flex items-center px-2" href="/">
        <div class="mx-1 h-6 w-6">
            <img src={logo} alt="RA Nolido Logo" class="h-full w-full" />
        </div>
    </a>

    <nav class="lg:block">
        <ul class="flex gap-0">
            <li>
                <a class="p-4 hover:bg-[#606060]" href="/"> Home </a>
            </li>
            <li>
                <a class="p-4 hover:bg-[#606060]" href="/about-us/"> About Us </a>
            </li>
            <li>
                <a class="p-4 hover:bg-[#606060]" href="/projects/"> Projects </a>
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
    }
</style>
