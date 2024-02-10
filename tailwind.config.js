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
				brown: "rgb(114,49,49)",
				veryLightcream: "#e7d5a3",
				overBgOpacity: "rgba(195, 163, 106, 0.9)",
				orangeLike: "#f3903e",
				goldencream: "#c99853",
				iconsColor: "#b2714b",
				gold: "goldenrod",
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
