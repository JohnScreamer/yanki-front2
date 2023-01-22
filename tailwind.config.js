/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: ["class"],
    theme: {
        extend: {
            colors: {
                accent: {
                    light: "#E0BEA2",
                    dark: "rgba(206,130,199, 1)",
                },
                accent75: {
                    light: "rgba(224, 190, 162, 0.75)",
                    dark: "rgba(206,130,199, 1)",
                },
                accent70: {
                    dark: "rgba(206,130,199, 0.70)",
                },
                accentActive: {
                    light: "#CCA88A",
                    dark: "#8D5BE9",
                },

                prime: {
                    light: "#252525",
                    dark: "",
                },
                prime50: {
                    light: "rgba(37, 37, 37, 0.5)",
                    dark: "",
                },
                prime15: {
                    light: "rgba(37, 37, 37, 0.15)",
                },
                base: {
                    light: "#E5E5E5",
                    dark: "#252525",
                },
                accent2: {
                    light: "#777777",
                },
                base2: {
                    light: "#0C0C0C",
                },
                main: {
                    light: "#FFFFFF",
                    dark: "rgba(31,41,91, 1)",
                },
                main2: {
                    light: "",
                    dark: "#2F3763",
                },
                text: {
                    dark: "#819DAD",
                    light: "#FFFFFF",
                },
                originText: {
                    light: "#FFFFFF",
                    dark: "#252525",
                },
                homeText: {},
            },
            textColor: {
                accent: {
                    light: "#E0BEA2",
                    dark: "#252525",
                },
            },

            maxWidth: {
                container: "1170px",
            },
            backgroundColor: {
                accent: {
                    light: "#E0BEA2",
                    dark: "rgba(206,130,199, 1)",
                },
                accent75: {
                    light: "rgba(224, 190, 162, 0.75)",
                    dark: "rgba(206,130,199, 1)",
                },
                accent70: {
                    dark: "rgba(206,130,199, 0.70)",
                },
                accentActive: {
                    light: "#CCA88A",
                    dark: "#8D5BE9",
                },

                prime: {
                    light: "#252525",
                    dark: "",
                },
                prime50: {
                    light: "rgba(37, 37, 37, 0.5)",
                    dark: "",
                },
                prime15: {
                    light: "rgba(37, 37, 37, 0.15)",
                },
                base: {
                    light: "#E5E5E5",
                    dark: "#252525",
                },
                accent2: {
                    light: "#777777",
                },
                base2: {
                    light: "#0C0C0C",
                },
                main: {
                    light: "#FFFFFF",
                    dark: "rgba(31,41,91, 1)",
                },
                main2: {
                    light: "",
                    dark: "#2F3763",
                },
                text: {
                    dark: "#819DAD",
                    light: "#FFFFFF",
                },
                originText: {
                    light: "#FFFFFF",
                    dark: "#252525",
                },
            },
            animation: {
                slide: "slide 0.4s linear ",
                swingBottom:
                    "swingBottom 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
            },
            keyframes: {
                slide: {
                    "0%": { transform: "translateX(-300px)" },
                    "100%": { transform: "translateX(0)" },
                },
                swingBottom: {
                    "0%": {
                        transform: "rotateX(-100deg)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "rotateX(0deg)",
                        opacity: "1",
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
