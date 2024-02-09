/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				profilePicBgImg: "url('././components/images/background.jpg')",
				overallBgImg: "url('././components/images/backoo.jpeg')",
			},
			colors: {
				overBgOpacity: "rgba(114,49,49,0.8)",
				brown: "rgb(114,49,49)",
				veryLightcream: "#c3a36a",
				overBgOpacity2: "rgba(195, 163, 106, 0.7)",
			},
			height: {
				"3/3": "90vh",
			},
			fontFamily: {
				Poppins: "Poppins",
			},
		},
	},
	plugins: [],
};
