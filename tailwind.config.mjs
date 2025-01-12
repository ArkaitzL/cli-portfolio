/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  background: {
			interiror: '#1c1917',
			exterior: '#404040',
			barra: '#d6d3d1',
		  },
		  borde: '#888888',
		  text: {
			primary: '#e7e5e4',
			secondary: '#d6d3d1',
			destacado: '#fb923c', // Color para textos destacados
			destacado2: '#fdba74', // Segundo color destacado
			enlace: '#6ee7b7', // Nuevo color para los enlaces
		  },
		},
	  },
	},
	plugins: [],
};