<script>
    import facebook from '$lib/icons/facebook.svg';
    import loc from '$lib/icons/location.svg';
    import mail from '$lib/icons/mail.svg';
    import phone from '$lib/icons/phone.svg';
    import src from '$lib/icons/temp_logo.svg';
</script>

<div class="flex flex-col items-center py-10">
    <div class="flex w-full flex-row justify-center gap-8">
        <div class="flex flex-col justify-evenly">
            <div class="flex flex-row items-center text-left">
                <div class="flex w-44 flex-row items-center text-left">
                    <div>
                        <a href="https://www.facebook.com/ranolidoconstruction">
                            <img src={loc} alt="Address" class="rounded-full bg-ra-black p-1" />
                        </a>
                    </div>
                    <h2 class="ml-3 text-2xl">Address</h2>
                </div>
                <div class="ml-5">
                    <h2 class=" text-left text-xl">165 Roosevelt Ave, Unit B Rama Building</h2>
                    <h2 class=" text-left text-xl">San Francisco del Monte, Quezon City</h2>
                    <h2 class=" text-left text-xl">1105 Metro Manila</h2>
                </div>
            </div>
            <div class="flex flex-row items-center text-left">
                <div class="flex w-44 flex-row items-center text-left">
                    <img src={phone} alt="Phone" />
                    <h2 class="ml-2 text-left text-2xl">Phone</h2>
                </div>
                <div class="ml-5">
                    <h2 class="text-left text-xl">+63 997 950 8720 (Viber Ready)</h2>
                    <h2 class="text-left text-xl">8352-6419 / 3414-1523</h2>
                </div>
            </div>
            <div class="flex flex-row items-center text-left">
                <div class="flex w-44 flex-row items-center text-left">
                    <img src={mail} alt="Email" />
                    <h2 class="ml-2 text-2xl">Email</h2>
                </div>
                <div class="ml-5">
                    <h2 class="text-left text-xl">
                        <a href="mailto:ranolidoconstruction@gmail.com" class="hover:underline"
                            >ranolidoconstruction@gmail.com</a
                        >
                    </h2>
                    <h2 class="text-left text-xl">
                        <a href="mailto:nolidocoprgroup@gmail.com" class="hover:underline">nolidocoprgroup@gmail.com</a>
                    </h2>
                </div>
            </div>
        </div>
        <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.263469297929!2d121.01374771153755!3d14.640979985791203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b70e0cf2d6f7%3A0x40b723b63501b50b!2sR.A.%20Nolido%20Construction%20Corporation!5e0!3m2!1sen!2sph!4v1753598633545!5m2!1sen!2sph"
            width="800"
            height="500"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
</div>
