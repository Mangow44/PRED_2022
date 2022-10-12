/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'c-mint': '#30838C',
				'c-d-green': '#255941',
				'c-green': '#2D734B',
				'c-l-green': '#3FA663',
				'c-black': '#262626'
			}
		}
	},
	plugins: []
};
