<script lang="ts">
    import { base } from '$app/paths';
    import fb from '$lib/icons/facebook.svg';
    import location from '$lib/icons/location.svg';
    import logo from '$lib/icons/logo-white-text.svg';
    import mail from '$lib/icons/mail.svg';
    import phone from '$lib/icons/phone.svg';
</script>

<footer class="mt-auto h-auto w-auto items-center justify-items-center bg-ra-black text-center">
    <div class="flex w-9/12 flex-row items-center justify-between p-4">
        <a class="flex w-auto" href={base}>
            <div class="h-24">
                <img src={logo} alt="RA Nolido Logo" class="h-full w-full" />
            </div>
        </a>

        <div class="flex flex-row items-center gap-4">
            <a
                class="h-10 w-10"
                href="https://maps.app.goo.gl/yJZHuNyxvLRwqU6h6"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={location} alt="Location" class="h-full w-full" />
            </a>
            <a
                class="flex flex-col items-start"
                href="https://maps.app.goo.gl/yJZHuNyxvLRwqU6h6"
                target="_blank"
                rel="noopener noreferrer"
            >
                <p>Unit B, Rama Building, 165 Roosevelt Avenue,</p>
                <p>Quezon City, Philippines</p>
            </a>
        </div>

        <div class="flex flex-row gap-4">
            <a
                class="w-15 h-15"
                href="https://www.facebook.com/share/12DfKeGAPrw/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={fb} alt="Location" class="h-full w-full" />
            </a>
            <a class="w-15 h-15" href="mailto:ranolidoconstruction@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={mail} alt="Location" class="h-full w-full" />
            </a>
            <a class="w-15 h-15" href="{base}/contact-us/">
                <img src={phone} alt="Location" class="h-full w-full" />
            </a>
        </div>
    </div>
</footer>

<style>
    p {
        color: theme('colors.ra-white');
        font-family: theme('fontFamily.jakarta');
    }
</style>
