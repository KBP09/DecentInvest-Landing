import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderImage: {
        'gradient-to-r': 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.border-gradient': {
          border: '5px solid',
          borderImageSlice: '1',
          borderImageSource: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
        },
      });
    },
  ],
} satisfies Config;

