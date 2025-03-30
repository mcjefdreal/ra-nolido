<script>
    import favicon from '$lib/icons/favicon.ico';
    import './app.css';
    import Footer from './Footer.svelte';
    import NavBar from './NavBar.svelte';
    const { children } = $props();
</script>

<div class="justift-start flex min-h-screen flex-col">
    <header class="sticky inset-x-0 top-0 z-50">
        <NavBar />
    </header>

    <main>
        {@render children()}
    </main>

    <Footer />
</div>

<svelte:head>
    <link rel="icon" type="ico" href={favicon} />
</svelte:head>
