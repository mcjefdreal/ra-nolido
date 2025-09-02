<script lang="ts">
    import { base } from '$app/paths';
    import fb from '$lib/icons/facebook.svg';
    import location from '$lib/icons/location.svg';
    import logo from '$lib/icons/logo-white-text.svg';
    import mail from '$lib/icons/mail.svg';
    import phone from '$lib/icons/phone.svg';
</script>

<footer class="mt-auto h-auto w-auto items-center justify-items-center bg-royal-blue text-left">
    <div class="flex w-9/12 items-center justify-between p-4">
        <div class="flex flex-row items-center gap-4">
            <a
                class="h-10 w-10"
                href="https://maps.app.goo.gl/yJZHuNyxvLRwqU6h6"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={location} alt="Location" class="h-full w-full" />
            </a>
            <div class="flex flex-col items-center">
                <a
                    class="flex flex-col items-start"
                    href="https://maps.app.goo.gl/yJZHuNyxvLRwqU6h6"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p class="font-bold">R.A. NOLIDO CONSTRUCTION CORPORATION</p>
                    <p>Unit B, RAMA Building, 165 Roosevelt Avenue,</p>
                    <p>Quezon City, Philippines</p>
                </a>
                <div class="mt-1 flex w-full flex-row">
                    <a
                        class="w-15 h-15"
                        href="https://www.facebook.com/share/12DfKeGAPrw/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={fb} alt="Location" class="h-full w-3/4" />
                    </a>
                    <a
                        class="w-15 h-15"
                        href="mailto:ranolidoconstruction@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={mail} alt="Location" class="h-full w-3/4" />
                    </a>
                    <a class="w-15 h-15" href="{base}/contact-us/">
                        <img src={phone} alt="Location" class="h-full w-3/4" />
                    </a>
                </div>
            </div>
        </div>

        <div class="flex flex-row items-center gap-4">
            <a
                class="h-10 w-10"
                href="https://maps.app.goo.gl/yNFN5QeXyS3f8N5PA"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={location} alt="Location" class="h-full w-full" />
            </a>
            <div class="flex flex-col items-center">
                <a
                    class="flex flex-col items-start"
                    href="https://maps.app.goo.gl/yNFN5QeXyS3f8N5PA"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p class="font-bold">RANCC CAMERON</p>
                    <p>Unit 3608, 36th Floor Cameron Residences</p>
                    <p>Mapalad St., Quezon City, Philippines</p>
                </a>
                <div class="mt-1 flex w-full flex-row">
                    <a
                        class="w-15 h-15"
                        href="https://www.facebook.com/share/12DfKeGAPrw/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={fb} alt="Location" class="h-full w-3/4" />
                    </a>
                    <a
                        class="w-15 h-15"
                        href="mailto:ranolidoconstruction@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={mail} alt="Location" class="h-full w-3/4" />
                    </a>
                    <a class="w-15 h-15" href="{base}/contact-us/">
                        <img src={phone} alt="Location" class="h-full w-3/4" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>
    p {
        color: theme('colors.ra-white');
        font-family: theme('fontFamily.jakarta');
    }
</style>
