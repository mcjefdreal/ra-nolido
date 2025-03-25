<script>
    import facebook from "$lib/icons/facebook.svg";
    import phone from "$lib/icons/phone.svg";
    import mail from "$lib/icons/mail.svg";
    import src from "$lib/icons/temp_logo.svg";
</script>
<div class="flex flex-col items-center">
    <div class="text-center">
        <h1 class="mb-8 text-5xl font-semibold text-ra-black">Get In Touch</h1>
    </div>

    <div class="flex flex-row justify-center gap-8">
        <div class="flex flex-col justify-evenly">
            <div class="flex flex-row items-center text-center">
                <div>
                    <a href="https://www.facebook.com/ranolidoconstruction">
                        <img src={facebook} alt="FB Page" />
                    </a>
                </div>
                <h2 class="text-2xl">
                    <a href="https://www.facebook.com/ranolidoconstruction" class="hover:underline shadow-md">Visit our Facebook page</a>
                </h2>
            </div>
            <div class="flex flex-row items-center text-center">
                <a href="mailto:ranolidoconstruction@gmail.com">
                    <img src={mail} alt="Email" />
                </a>
                <h2 class="text-2xl">
                    <a href="mailto:ranolidoconstruction@gmail.com" class="hover:underline shadow-md">Send us an email</a>
                </h2>
            </div>
            <div class="flex flex-row items-center text-center">
                <img src={phone} alt="Phone" />
                <div>
                    <h2 class="text-2xl text-left shadow-md">Give us a phone call</h2>
                    <h3 class="text-2xl text-left shadow-md">Tel. No. 8352-6419</h3>
                </div>                
            </div>
        </div>
        <div class="flex flex-row items-center w-1/2 md:w-1/3 lg:w-1/4">
            <img {src} alt={"History picture"} class="items-center overflow-hidden shadow-md mb-3" />
        </div>
    </div>
</div>
