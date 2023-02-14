/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {},
        extend: {
            height: {
                'nav': "80vh"
            },
            minHeight: {
                'menu': '30rem',
            },
            maxHeight: {
                'menu': '30rem',
            },
            width: {
                '15': "15rem"
            },
            minWidth: {
                'menu': '30rem',
            },
            margin: {
                '1/2': "50%"
            },
            backgroundColor: {
                'sapd': "#0B1D28",
                'lspd': "#0f2940",
                'creme': "#F1E9DE"
            },
            textColor: {
                'creme': "#F1E9DE"
            }
        },
    },
    plugins: [],
};
