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
				'c-black': '#262626',
				'c-gray': '#A5A4A6',
				'c-light-gray': '#D7D7D9',
				'c-brown': '#402525',
				'c-dark-blue': '#03318C',
				'c-blue': '#0F468C',
				'c-light-blue': '#7D8FA6',
				'c-dark-purple': '#9B95BF',
				'c-purple': '#B3BDF2',
				'c-light-purple': '#D5DCF2',
				'c-red': '#A65151',
				'c-dark': '#0D0D0D'
			}
		}
	},
	plugins: []
};
