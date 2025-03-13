import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderImage: {
				'gradient-to-r': 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)'
			},
			animation: {
				typewriter: 'typewriter 3s steps(1000) 2s forwards'
			},
			keyframes: {
				typewriter: {
					'0%': {
						width: '0'
					},
					'100%': {
						width: '100%'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [
		function ({ addComponents }: { addComponents: Function }) {
			addComponents({
				'.border-gradient': {
					border: '5px solid',
					borderImageSlice: '1',
					borderImageSource: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
				},
			});
		},
		require("tailwindcss-animate")
	],
	images: {
		unoptimized: true, // Forces the image to load as a normal <img> tag
	},
} satisfies Config;
