<script>
    import facebook from '$lib/icons/facebook.svg';
    import mail from '$lib/icons/mail.svg';
    import phone from '$lib/icons/phone.svg';
    import src from '$lib/icons/temp_logo.svg';
</script>

<div class="flex flex-col items-center py-10">
    <div class="flex flex-row justify-center gap-8">
        <div class="flex flex-col justify-evenly">
            <div class="flex flex-row items-center text-left">
                <a href="mailto:ranolidoconstruction@gmail.com">
                    <img src={mail} alt="Email" />
                </a>
                <h2 class="text-2xl">
                    <a href="mailto:ranolidoconstruction@gmail.com" class="hover:underline"
                        >Send us an email</a
                    >
                </h2>
            </div>
            <div class="flex flex-row items-center text-left">
                <img src={phone} alt="Phone" />
                <h2 class="text-left text-2xl">Tel. No. 8352-6419</h2>
            </div>
            <div class="flex flex-row items-center text-left">
                <div>
                    <a href="https://www.facebook.com/ranolidoconstruction">
                        <img src={facebook} alt="FB Page" />
                    </a>
                </div>
                <h2 class="text-2xl">
                    <a href="https://www.facebook.com/ranolidoconstruction" class="hover:underline"
                        >Visit our Facebook page</a
                    >
                </h2>
            </div>
        </div>
        <div class="flex w-1/2 flex-row items-center md:w-1/3 lg:w-1/4">
            <img {src} alt={'History picture'} class="mb-3 items-center overflow-hidden" />
        </div>
    </div>
</div>
