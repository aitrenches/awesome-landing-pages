/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"./**/*.{html, jsx, js}",
		"./src/realestate/**/*.{html,jsx, js}",
		"./src/realestate/**/*.js",
		"./src/realestate/**/*.html",
	
		// "*.{html,jsx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#BE3345"
			}
		},
	},
	plugins: [],
}

