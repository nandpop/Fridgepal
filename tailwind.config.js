// Tailwind CSS config (merge as needed)
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "carbon-darkest": "var(--carbon-darkest)",
        "carbon-neutral300": "var(--carbon-neutral300)",
        graysblack: "var(--graysblack)",
        lighttexttextprimary: "var(--lighttexttextprimary)",
        "m3sysdark-high-contraston-secondary-fixed-variant":
          "var(--m3sysdark-high-contraston-secondary-fixed-variant)",
        "m3sysdarkon-primary-fixed": "var(--m3sysdarkon-primary-fixed)",
        "m3syslighton-primary": "var(--m3syslighton-primary)",
        "m3syslighton-surface": "var(--m3syslighton-surface)",
        "m3syslighton-surface-variant": "var(--m3syslighton-surface-variant)",
        "m3syslightoutline-variant": "var(--m3syslightoutline-variant)",
        "systemorange-light": "var(--systemorange-light)",
        "vibrant-labelsvibrant-secondary":
          "var(--vibrant-labelsvibrant-secondary)",
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
  plugins: [],
};
