<script>
    import { base } from '$app/paths';
</script>

<div>
    <div class="mb-4 max-w-max">
        <h2 class="text-ra-blue text-5xl font-bold mb-2"> Let's talk! </h2>
        <p> Tell us about your project, ask us about our services or equipment. We are here to help! </p>
    </div>

    <div>
        <form method="POST" class="mb-2">
            <label> Name: 
                <input type="text"/>
            </label>
            <br/>
            <label> Email:
                <input type="email"/>
            </label>
            <br/>
            <label> Mobile Number:
                <input type="number"/>
            </label>
            <br/>
            <label> Your message:
                <textarea rows="4"> </textarea>
            </label>
        </form>

        <a href="{base}/contact-us">
            <button class="optional-btn border-2 border-ra-black px-4 py-1">
                <p> Submit </p>
            </button>
        </a>
    </div>
</div>

<style>
    label {
        padding-right: 20px;
    }

	input, textarea {
        background-color: #ebebfc;
        width: 100%;
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