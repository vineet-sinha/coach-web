import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        acquaspring: {
          "50":  "#fcfdfb",
          "100": "#fbfdfa",
          "200": "#f9fdf8",
          "300": "#f5fdf4",
          "400": "#effbee",
          "500": "#e6f9e5",
          "600": "#939f92",
          "700": "#5e665e",
          "800": "#3c423c",
          "900": "#262a26",
          "950": "#1e221e",
        },
        lightblue: {
          "100": "#c8ecfa",
          "200": "#accbda",
        },
        whitesmoke: "#f0f0f0",
        mediumturquoise: {
          "100": "#6dc7bd",
          "200": "#68c4ba",
          "300": "rgba(128, 209, 198, 0.55)",
        },
        lightskyblue: "rgba(152, 212, 255, 0.7)",
        skyblue: {
          "100": "#7fbcd1",
          "200": "rgba(125, 185, 206, 0.15)",
          "300": "rgba(134, 196, 217, 0.36)",
        },
        white: "#fff",
        darkcyan: {
          "100": "#369187",
          "200": "rgba(54, 145, 135, 0.09)",
        },
        dimgray: "#596774",
        homepagegray: "rgba(0, 0, 0, 0.6)",
        cadetblue: {
          "100": "#4d8a9e",
          "200": "rgba(77, 138, 158, 0.09)",
        },
        darkslategray: {
          "100": "#42454a",
          "200": "#3b4651",
        },
        black: "#000",
      },
      fontFamily: {
        inter: "Inter",
        "bebas-neue": "'Bebas Neue'",
      },
      borderRadius: {
        "3xs-3": "9.3px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      xs: "0.75rem",
      lg: "1.125rem",
      "sm-9": "0.869rem",
      "lg-4": "1.15rem",
      "95xl-8": "7.175rem",
      "38xl": "3.563rem",
      "15xl": "2.125rem",
      inherit: "inherit",
    },
    screensXXX: {
      mq1450: {
        raw: "screen and (max-width: 1450px)",
      },
      lgXXX: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
