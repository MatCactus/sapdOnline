/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {},
        extend: {
            height: {
                'nav': "80vh",
                'slide-show': "30vh",
                '0.75': "3px"
            },
            minHeight: {
                'menu': '10rem',
            },
            maxHeight: {
                'menu': '10rem',
            },
            width: {
                '15': "15rem"
            },
            minWidth: {
                'menu': '10rem',
            },
            maxWidth: {
                'menu' : '80%',
                'users' : '86%',
            },
            margin: {
                '1/2': "50%"
            },
            backgroundColor: {
                'sapd': "#0B1D28",
                'lspd': "#0f2940",
                'creme': "#F1E9DE",
                'bcso': "#617650"
            },
            textColor: {
                'creme': "#F1E9DE",
                'sapd': "#0B1D28",
                'lspd': "#0f2940",
                'bcso': "#617650"
            },
            borderColor: {
                'sapd': "#0B1D28",
                'lspd': "#0f2940",
                'bcso': "#617650"
            },
        },
    },
    plugins: [],
};
