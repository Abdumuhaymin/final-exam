import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1400px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
      },
    },
    extend: {
      fontSize: {
        font12: [
          "12px",
          {
            lineHeight: "14px",
            fontWeight: "500",
          },
        ],
        font24: [
          "24px",
          {
            lineHeight: "29px",
            fontWeight: "800",
          },
        ],
        font18: [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: "800",
          },
        ],
        font22: [
          "22px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        font242: [
          "24px",
          {
            lineHeight: "36px",
            fontWeight: "400",
          },
        ],
        font14: [
          "14px",
          {
            lineHeight: "14px",
            fontWeight: "400",
          },
        ],
        font142: [
          "14px",
          {
            lineHeight: "14px",
            fontWeight: "800",
          },
        ],
        font143: [
          "14px",
          {
            lineHeight: "18px",
            fontWeight: "700",
          },
        ],
        font19: [
          "19px",
          {
            lineHeight: "36px",
            fontWeight: "600",
          },
        ],
        font16: [
          "16px",
          {
            lineHeight: "23px",
            fontWeight: "600",
          },
        ],
        font15: [
          "15px",
          {
            lineHeight: "14px",
            fontWeight: "500",
          },
        ],
        font13: [
          "13px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        bg: "hsl(210, 29%, 97%)",
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
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
