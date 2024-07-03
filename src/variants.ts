export const fadeIn = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: { duration: 1 },
	},
};

export const parentFadeIn = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
			when: "beforeChildren",
			staggerChildren: 0.2,
		},
	},
};

export const leftFadeIn = {
	initial: {
		x: -20,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: { type: "spring" },
	},
};

export const hoverScaleUp = {
	hover: {
		scale: 1.1,
	},
};
