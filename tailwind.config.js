/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './@/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      fontFamily: {
        'mono': ['IBM Plex Mono', 'monospace'],
        'pop': 'Poppins',
      },
      fontSize: {
        'xs': '12px',  
        'sm': '14px',  
        'base': '16px',
        'lg': '18px',  
        'xl': '20px',  
        '2xl': '24px', 
        '3xl': '30px', 
        '4xl': '36px', 
        '5xl': '48px', 
        '6xl': '64px', 
        '7xl': '80px', 
      },
    },
    extend:
     {
      screens: {
        lg: {
          max: "1200px",
        },
        md: {
          max: "960px",
        },
        sm: {
          max: "520px",
        },
      },
      colors: {
        "black": "#000000",
        "white": "#ffffff",
        "dark" : "#101625",
        "100": "#1A1A1A",
        "200": "#333333",
        "300": "#404040",
        "400": "#666666",
        "500": "#808080",
        "600": "#999999",
        "700": "#B3B3B3",
        "800": "#CCCCCC",
        "900": "#E6E6E6",
        "1000": "#F0F0F0",
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
        'spin-slow': 'spin 3s linear infinite',
      },
      transitionProperty: {
        "height" : "height",
        "margin" : "margin",
        "spacing" : "spacing"
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography'),],
}