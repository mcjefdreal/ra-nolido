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
                'dark-blue': '#000192',
                'ra-white': '#FEFCFB',
                'ra-neutral': '#606060',
                'ra-black': '#0A1128',
            },
            animation: {
                slideright: 'slide-in-right 0.1s ease-in-out 0.1s infinite',
                slideleft: 'slide-in-left 0.1s ease-in-out 0.1s infinite',
            },
            keyframes: {
                "slide-in-right": {
                    "0%": {
                        visibility: "visible",
                        transform: "translate3d(100%, 0, 0)",
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                },
                "slide-in-left": {
                    "0%": {
                        visibility: "visible",
                        transform: "translate3d(-100%, 0, 0)",
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                },
            }
        },
    },
} satisfies Config;
