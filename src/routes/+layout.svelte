<script>
    import './app.css';
    const { children } = $props();
</script>

<nav>
    <a href="/">home</a>
    <a href="/about-us">about us</a>
    <a href="/projects">projects</a>
    <a href="/contact-us">contact us</a>
</nav>

{@render children()}

<style>
    nav {
        background-color: #0a112a;
        color: #fefcfb;
        margin: 0;
        padding: 1em;
        text-align: right;
    }
    nav a {
        height: 100%;
        padding: 1em;
    }
    nav a:hover {
        background-color: #606060;
    }
</style>
