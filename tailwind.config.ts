import type { Config } from 'tailwindcss'

export default {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/page/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/layouts/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/entities/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/shared/ui/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				drukWideCyr: ['DrukWideCyr', 'sans-serif'],
			},
			boxShadow: {
				y4_blur5_alpha6_blackBase: '0 4px 5px 0 rgba(0,0,0,6%)',
			},
		},
		screens: {},
	},
	plugins: [],
} satisfies Config
