<script lang="ts">
    import downArrow from '$lib/icons/down_arrow.svg';

    const { heading, subheading, button_content } = $props();

    function handleAnchorClick(event) {
        event.preventDefault();
        const link = event.currentTarget;
        const anchorId = new URL(link.href).hash.replace('#', '');
        const anchor = document.getElementById(anchorId);
        window.scrollTo({
            top: anchor.offsetTop - 50,
            behavior: 'smooth',
        });
    }
</script>

<div>
    <div
        class="flex h-[100vh] w-full flex-col items-center justify-between bg-[url(./src/lib/img/hero-home/hero-bg.png)] bg-no-repeat lg:flex-row"
    >
        <div
            class="mx-5 flex flex-col items-center gap-8 text-center lg:ml-20 lg:mr-0 lg:items-start lg:text-left xl:ml-40"
        >
            <div class="flex flex-col text-ra-white">
                <h2 class="text-4xl font-bold leading-tight">
                    {heading}
                </h2>
                <h1 class="text-5xl font-bold text-royal-blue">
                    {subheading}
                </h1>
            </div>
            <a href="/contact-us">
                <button class="optional-btn rounded bg-dark-blue px-4 py-2 font-bold text-white">
                    {button_content}
                </button>
            </a>
        </div>
    </div>
    <a href="#who_we_are" onclick={handleAnchorClick}>
        <div class="heroscroll content bottom-[10px] h-[30px] w-full">
            <img class="content bottom-0 max-h-[100%] w-auto" src={downArrow} alt="down button" />
        </div>
    </a>
</div>

<style>
    .heroscroll {
        opacity: 40%;
        transition: height 0.5s ease;
    }
    .heroscroll:hover {
        height: 40px;
        cursor: pointer;
    }

    .content {
        position: absolute;
        left: 0;
        right: 0;
        margin-inline: auto;
    }
    .optional-btn {
        background: linear-gradient(to left, #0102f2 50%, #fefcfb 50%) right;
        background-size: 200% 100%;
        transition: all 0.5s ease;
    }

    .optional-btn:hover {
        background-position: left;
        color: #0a1128;
    }
</style>
