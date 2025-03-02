<script>
    import './app.css';
    const { children } = $props();
    import NavBar from './NavBar.svelte';
</script>

<header class="sticky inset-x-0 top-0 z-50">
    <NavBar />
</header>

{@render children()}
