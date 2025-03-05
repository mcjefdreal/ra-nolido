import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    experimental: { optimizeUniversalDefaults: true },
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            inter: ['Inter', ...defaultTheme.fontFamily.sans],
            jakarta: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                'dark-gray': '#494949',
                'royal-blue': '#0102F2',
                'pastel-blue': '#4C4DE2',
                'light-blue': '#B5DCFF',
                'ra-white': '#FEFCFB',
                'ra-neutral': '#606060',
                'ra-black': '#0A1128'
            },
        }
    },
} satisfies Config;
