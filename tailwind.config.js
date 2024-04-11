/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                folder: "url('https://images.ctfassets.net/rz1oowkt5gyp/5Oc1c9iIDmXtUFHs0uWuLQ/cef21b3212ac080d9d0adad649dc31e9/icon-content-folder_2x.png')",
                volum: "url('https://images.ctfassets.net/rz1oowkt5gyp/5j0J5BEzFktzLYnsszcJWc/be9270f9ea1e9bb3c69a799e54ef9fea/icon-object-megaphone_2x.png')",
            },
            colors: {
                blue: 'rgb(0, 101, 255)',
                'blue-1': 'rgb(38, 132, 255)',
                purple: '#7e5bef',
                pink: '#ff49db',
                orange: 'rgb(255, 116, 82)',
                green: '#13ce66',
                yellow: '#ffc82c',
                'gray-dark': '#273444',
                gray: '#848ea0',
                'gray-light': '#d3dce6',
                'white-1': 'rgb(222, 235, 255)',
                'blue-2': 'rgb(0, 82, 204)',
                'blue-3': 'rgb(7, 71, 166)',
                'blue-4': '#00a7e0',
            },
            boxShadow: {
                '3xl': 'rgba(9, 30, 66, 0.15) 0px 0.5rem 1rem ',
                xl: 'rgba(9, 30, 66, 0.15) 0px 0.5rem 1rem 0px',
            },
            maxWidth: {
                '7xl': '1140px',
                '3xl': '540px',
                '5xl': '720px',
            },
            screens: {
                md: { max: '700px' },
                lg: { min: '700px', max: '990px' },
            },
        },
    },
    plugins: [],
};
