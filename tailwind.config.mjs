/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  background: {
			interiror: '#1c1917',
			exterior: '#0d0d0d',
		  },
		  text: {
			primary: '#e7e5e4',
			secondary: '#d6d3d1',
			destacado: '#fb923c',
		  },
		  accent: {
			primary: '#fb923c',
			secondary: '#fdba74',
		  },
		},
	  },
	},
	plugins: [],
};