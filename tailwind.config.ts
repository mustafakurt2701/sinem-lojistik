import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(213 22% 86%)",
        input: "hsl(213 22% 86%)",
        ring: "hsl(25 95% 55%)",
        background: "hsl(210 33% 98%)",
        foreground: "hsl(215 28% 17%)",
        primary: {
          DEFAULT: "hsl(214 64% 19%)",
          foreground: "hsl(0 0% 100%)"
        },
        secondary: {
          DEFAULT: "hsl(208 31% 93%)",
          foreground: "hsl(215 28% 17%)"
        },
        accent: {
          DEFAULT: "hsl(25 95% 55%)",
          foreground: "hsl(0 0% 100%)"
        },
        muted: {
          DEFAULT: "hsl(210 18% 95%)",
          foreground: "hsl(215 15% 42%)"
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(215 28% 17%)"
        }
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem"
      },
      boxShadow: {
        soft: "0 20px 50px -24px rgba(15, 23, 42, 0.28)"
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
