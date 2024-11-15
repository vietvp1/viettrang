import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orangevt: "var(--orange)",
      },
    },
    fontFamily: {
      'dancing': ['Dancing Script', 'cursive'],
      'itim': ['Itim', 'cursive'],
      'niramit': ['Niramit', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'quicksand': ['Quicksand', 'sans-serif'],
      'philosopher': ['Philosopher', 'sans-serif'],
      'exo': ['Exo', 'sans-serif'],
      'sriracha': ['Sriracha', 'cursive'],
      'baloo': ['Baloo Bhaina 2', 'cursive'],
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
} satisfies Config;
