import colors from './tailwind/colors'
import animation from './tailwind/animation'
import variables from './tailwind/variables'

import type { Config } from 'tailwindcss'
import tailwindVariables from '@mertasan/tailwindcss-variables'
import tailwindAnimate from 'tailwindcss-animate'
import tailwindScrollbar from 'tailwind-scrollbar'

// Tailwind v4 no longer ships `tailwindcss/stubs/config.full`; these are the v3 default stacks it provided.
const sans = ['ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']

export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        variables,
        fontFamily: {
            kzen: ['Roboto Slab', ...sans],
            allura: ['Allura', ...sans],
            inter: ['Inter', ...sans],
            atkinson: ['Atkinson Regular', ...sans],
            montaga: ['Montaga', ...sans],
        },
        extend: {
            colors,
            animation: animation.animation,
            keyframes: animation.keyframes,
            screens: {
                xxs: '300px',
                xs: '429px',
                '2lg': '1200px',
                '3xl': '1920px',
            },
        },
    },
    plugins: [
        tailwindVariables,
        tailwindAnimate,
        tailwindScrollbar,
    ],
} satisfies Config
