import type { AnimationProps, VariantLabels, Transition } from "framer-motion"

export const ease = [0.6, 0.01, 0.01, 0.95]

export const variantPresets: Record<string, VariantLabels> = {
	initial: "initial",
	whileInView: "animate",
	exit: "exit",
}

export const transition: Transition = { ease, duration: 1 }

export const basicStagger = (t?: Transition): AnimationProps => ({
	...variantPresets,
	variants: {
		animate: { transition: { staggerChildren: 0.015, delay: 0.01, ...transition, ...t } },
	},
})
export const slideBtm = (t?: Transition): AnimationProps => ({
	variants: {
		initial: { opacity: 0, y: -13 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -13 },
	},
	transition: { ...transition, ...t },
})
export const slideLeftUp: AnimationProps = {
	variants: {
		initial: { opacity: 0, x: 13, y: 13 },
		animate: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 13, y: 13 },
	},
	transition,
}
export const slideRightUp: AnimationProps = {
	variants: {
		initial: { opacity: 0, x: -13, y: 13 },
		animate: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: -13, y: 13 },
	},
	transition,
}
export const slideRightBtm: AnimationProps = {
	variants: {
		initial: { opacity: 0, x: -13, y: -13 },
		animate: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: -13, y: -13 },
	},
	transition,
}
export const slideUp: AnimationProps = {
	variants: { initial: { opacity: 0, y: 13 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 13 } },
	transition,
}
export const scaleUp: AnimationProps = {
	variants: { initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0 } },
	transition,
}
export const fade: AnimationProps = {
	variants: { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
	transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
}
