import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
     /* colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        'background-light': 'rgb(var(--background-light) / <alpha-value>)',
        'background-lighter': 'rgb(var(--background-lighter) / <alpha-value>)',
        'background-lightest':
          'rgb(var(--background-lightest) / <alpha-value>)',
        'background-primary': 'rgb(var(--background-primary) / <alpha-value>)',
        'background-primary-light':
          'rgb(var(--background-primary-light) / <alpha-value>)',
        'background-warning': 'rgb(var(--background-warning) / <alpha-value>)',
        'background-info': 'rgb(var(--background-info) / <alpha-value>)',
        'background-accent': 'rgb(var(--background-accent) / <alpha-value>)',
        'background-red': 'rgb(var(--background-red) / <alpha-value>)',

        text: 'rgb(var(--text) / <alpha-value>)',
        'text-muted': 'rgb(var(--text-muted) / <alpha-value>)',
        'text-on-primary': 'rgb(var(--text-on-primary) / <alpha-value>)',
        'text-muted-on-primary':
          'rgb(var(--text-muted-on-primary) / <alpha-value>)',
        'text-primary': 'rgb(var(--text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
        'text-secondary-light':
          'rgb(var(--text-secondary-light) / <alpha-value>)',
        'text-dark': 'rgb(var(--text-dark) / <alpha-value>)',
        'text-warning': 'rgb(var(--text-warning) / <alpha-value>)',
        'text-red': 'rgb(var(--text-red) / <alpha-value>)',

        'border-gray': 'rgb(var(--border-gray) / <alpha-value>)',
      },*/
     colors: {
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
      fontFamily: {
        sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
     /* keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        slideIn: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideIn :  'slideIn 0.3s ease forwards',
      }, */

      keyframes: {
        'accordion-down': {
          from: { height: "0" },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: "0" },
        },

        // my animations

        scaleSlow: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        shakeAndMove: {
          '0%': {
            transform: 'translateX(0) translateY(0) rotate(0deg)',
          },
          '25%': {
            transform: 'translateX(50px) translateY(20px) rotate(5deg)',
          },
          '50%': {
            transform: 'translateX(0) translateY(0) rotate(-5deg)',
          },
          '75%': {
            transform: 'translateX(-50px) translateY(-20px) rotate(5deg)',
          },
          '100%': {
            transform: 'translateX(0) translateY(0) rotate(0deg)',
          },
        },

        slideAndFade: {
          from: {
            transform: 'translateY(20px)',
            opacity: '0.6',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        fromDownFade: {
          from: {
            transform: 'translateY(30px)',
            opacity: '0.7',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },

        cardAnimation: {
          '0%': {
            transform: 'translateY(0%)',
            zIndex: '10',
          },
          '40%': {
            transform: 'translateY(-40%)',
            zIndex: '10',
          },
          '50%': {
            transform: 'translateY(-40%)',
            zIndex: '20',
          },
          '100%': {
            transform: 'translateY(0%)',
            zIndex: '20',
          },
        },
        xcardAnimation: {
          '0%': {
            transform: 'translateY(0%)',
            zIndex: '10',
          },
          '40%': {
            transform: 'translateX(-50%)',
            zIndex: '10',
          },
          '50%': {
            transform: 'translateX(-50%)',
            zIndex: '20',
          },
          '100%': {
            transform: 'translateX(0%)',
            zIndex: '20',
          },
        },
        cardsContainerAnimation: {
          '0%': {
            transform: 'translateY(0%)',
            //zIndex: '10',
          },
          '40%': {
            transform: 'translateY(-10%)',
            //zIndex: '10',
          },
          '50%': {
            transform: 'translateY(-10%)',
            zIndex: '0',
          },
          '100%': {
            transform: 'translateY(0%)',
            //zIndex: '20',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        scaleSlow: 'scaleSlow 2.1s ease-in-out',
        shakeAndMove: 'shakeAndMove 4.2s ease-in-out',
        slideAndFade: 'slideAndFade 2s ease-in-out',
        fromDownFade: 'fromDownFade 1s ease-inout',
        cardAnimation: 'cardAnimation 5s ease-in-out',
        xcardAnimation: 'xcardAnimation 10s ease-in-out',
        cardsContainerAnimation: 'cardsContainerAnimation 3s ease-in-out',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ],
} satisfies Config

export default config