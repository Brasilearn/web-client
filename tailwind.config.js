const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				hero: 'url("/images/hero-home.webp")',
			},
			container: {
				center: true,
				padding: '1.5rem',
				screens: {
					sm: '600px',
					md: '728px',
					lg: '1024px',
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
};
