<script>
    import About from './About.svelte';
    import History from './History.svelte';
    import MissionVision from './MissionVision.svelte';
    import Team from './Team.svelte';
</script>

<!--about us-->
<!--
    Stuff to include in this page
    <li>history</li>
    <li>mission/vision/objectives</li>
    <li>organizational chart</li>
-->
<article>
    <About
        heading={"About R.A. Nolido"}
        body_1={"Lorem ipsum"}
        body_2={"Lorem ipsum"}
        body_3={"Lorem ipsum"}
    />
    <MissionVision />
    <Team />
    <History />
</article>

