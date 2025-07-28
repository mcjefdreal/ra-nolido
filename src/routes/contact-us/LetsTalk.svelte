<script>
    import { base } from '$app/paths';

    let mailToLink = $state('');

    let custName = $state(''),
        custEmail = $state(''),
        custNumber = $state(''),
        custMessage = $state('');
    const lineBreak = '%0D%0A',
        space = '%20';

    function onclick() {
        let opening, closing;
        let to = 'ranolidoconstruction@gmail.com',
            cc = 'nolidocorpgroup@gmail.com';
        opening = `Good${space}day!${lineBreak}${lineBreak}I${space}am${space}${custName}${lineBreak}.`;
        closing = `${lineBreak}Thank${space}you!${lineBreak}${lineBreak}Regards,${lineBreak}${custName}${lineBreak}${custNumber}`;
        mailToLink = `mailto:${to}?subject=[Website]%20RA%20Nolido%20Inquiry
                      &body=${opening}${lineBreak}${custMessage}${lineBreak}${closing}&cc=${cc}`;
    }
</script>

<div>
    <div class="mb-4 max-w-max">
        <h2 class="text-ra-blue mb-2 text-5xl font-bold">Let's Talk!</h2>
        <p>Tell us about your project, ask us about our services or equipment. We are here to help!</p>
    </div>

    <div>
        <form method="POST" class="mb-2">
            <label for="custName"> Name: </label>
            <input type="text" bind:value={custName} id="custName" />
            <br />
            <label for="custEmail"> Email: </label>
            <input type="email" bind:value={custEmail} id="custEmail" />
            <br />
            <label for="custNumber"> Mobile Number: </label>
            <input type="text" bind:value={custNumber} id="custNumber" />
            <br />
            <label for="custMessage"> Your Message: </label>
            <textarea rows="4" bind:value={custMessage} id="custMessage"> </textarea>
        </form>

        <!-- <a href="{base}/contact-us">
            <button class="optional-btn border-2 border-ra-black px-4 py-1">
                <p> Submit </p>
            </button>
        </a> -->

        <a href={mailToLink} id="mailTo" target="_blank" rel="noopener">
            <button class="optional-btn border-2 border-ra-black px-4 py-1" {onclick}>
                <p>Submit</p>
            </button>
        </a>
    </div>
</div>

<style>
    label {
        padding-right: 20px;
        margin-bottom: 10px;
        font-weight: bold;
    }

    input,
    textarea {
        background-color: #ebebfc;
        width: 100%;
        padding: 5px;
        margin-bottom: 15px;
        border-radius: 5px;
    }

    .optional-btn {
        background: linear-gradient(to left, #fefcfb 50%, #0102f2 50%) right;
        background-size: 200% 100%;
        transition: all 0.5s ease;
    }

    .optional-btn:hover {
        background-position: left;
        color: #fefcfb;
        border-color: #0102f2;
    }
</style>
