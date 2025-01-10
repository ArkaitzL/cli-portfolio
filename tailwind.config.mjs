/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  background: '#1c1917',
		  text: {
			primary: '#e7e5e4',
			secondary: '#d6d3d1',
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
  