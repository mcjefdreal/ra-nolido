<script>
    import { base } from '$app/paths';
    const { cat, icon, link } = $props();
</script>

<a href={base + link}>
    <img src={icon} alt={cat} class="h-[250px] w-[250px]" />
</a>
