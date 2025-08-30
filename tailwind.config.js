/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(255, 184, 1)',
                secondary: 'rgba(8, 1, 20, 1)',
                black: 'rgb(0, 0, 0)',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            animation: {
                'fly-drone': 'flyDrone 7s ease-in-out infinite',
            },
            keyframes: {
                flyDrone: {
                    '0%': {
                        transform: 'translateY(0px) translateX(0px) rotate(0deg) scale(1)',
                    },
                    '25%': {
                        transform: 'translateY(-10px) translateX(-3px) rotate(-0.5deg) scale(1.01)',
                    },
                    '50%': {
                        transform: 'translateY(6px) translateX(3px) rotate(0.5deg) scale(1.005)',
                    },
                    '75%': {
                        transform: 'translateY(-8px) translateX(-2px) rotate(-0.3deg) scale(1.01)',
                    },
                    '100%': {
                        transform: 'translateY(0px) translateX(0px) rotate(0deg) scale(1)',
                    },
                },
            },
        },
    },
    plugins: [],
}
