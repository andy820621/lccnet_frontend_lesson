module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		fontFamily: {
			sans: ["Poppins", "sans-serif", "Noto Sans TC"],
			serif: ["Merriweather", "hanamin", "serif"],
		},
		extend: {
			colors: {
				primary: "#306478",
				danger: "#9A1212",
				success: "#197649",
			},
		},
	},
	plugins: [],
};
