/** @import { Config } from '@sveltejs/kit*/

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {Config} */
export default {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/construction-site' : '',
        }
    },
};
