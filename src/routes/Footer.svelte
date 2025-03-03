<script lang="ts">
    import fb from '$lib/icons/facebook.svg';
    import location from '$lib/icons/location.svg';
    import logo from '$lib/icons/temp_logo.svg';
    import mail from '$lib/icons/mail.svg';
    import phone from '$lib/icons/phone.svg';
</script>

<footer class="justify-items-center items-center mt-auto w-auto h-auto text-center bg-[#0A1128]">
    <div class="flex flex-row justify-between items-center p-4 w-9/12">
        <a class="flex w-auto" href="/">
            <div class="w-10 h-10">
                <img src={logo} alt="RA Nolido Logo" class="w-full h-full" />
            </div>
        </a>

        <div class="flex flex-row gap-4 items-center">
            <a
                class="w-10 h-10"
                href="https://maps.app.goo.gl/yJZHuNyxvLRwqU6h6"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={location} alt="Location" class="w-full h-full" />
            </a>
            <a
                class="flex flex-col items-start"
                href="https://maps.app.goo.gl/yJZHuNyxvLRwqU6h6"
                target="_blank"
                rel="noopener noreferrer"
            >
                <p>Unit B, Rama building, 165 Roosevelt Avenue,</p>
                <p>Quezon City, Philippines</p>
            </a>
        </div>

        <div class="flex flex-row gap-4">
            <a
                class="w-10 h-10"
                href="https://www.facebook.com/share/12DfKeGAPrw/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={fb} alt="Location" class="w-full h-full" />
            </a>
            <a class="w-10 h-10" href="mailto:ranolidoconstruction@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={mail} alt="Location" class="w-full h-full" />
            </a>
            <div class="w-10 h-10">
                <img src={phone} alt="Location" class="w-full h-full" />
            </div>
        </div>
    </div>
</footer>

<style>
    p {
        color: #fefcfb;
    }
</style>
