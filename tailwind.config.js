/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                cblue: {
                    50: "#e5f2ff",
                    100: "#cfe6ff",
                    200: "#a9cfff",
                    300: "#75acff",
                    400: "#3f78ff",
                    500: "#1444ff",
                    600: "#002cff",
                    700: "#002dff",
                    800: "#0028e3",
                    900: "#00169d", // The OG
                    950: "#000b66",
                    975: "#000214",
                },
                corange: {
                    50: "#fff7ed",
                    100: "#ffecd5",
                    200: "#fdd6ab",
                    300: "#fcb875",
                    400: "#fa8f3d",
                    500: "#f87c2b", // The OG
                    600: "#e8560e",
                    700: "#c13f0d",
                    800: "#993213",
                    900: "#7b2b13",
                    950: "#431307",
                },
            },
        },
    },
    plugins: [],
};
