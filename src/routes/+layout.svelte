<script>
    import './app.css';
    import Footer from './Footer.svelte';
    import NavBar from './NavBar.svelte';
    const { children } = $props();
</script>

<div class="flex flex-col min-h-screen justift-start">
    <header class="sticky inset-x-0 top-0 z-50">
        <NavBar />
    </header>

    <main>
        {@render children()}
    </main>

    <Footer />
</div>
