/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}