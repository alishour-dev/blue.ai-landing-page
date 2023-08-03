import { twMerge } from "tailwind-merge"

import type { FlexDirection } from "@/types"

import { MotionLink, type MotionLinkProps } from "./MotionLink"

import HeroiconsArrowLongLeft from "~icons/heroicons/arrow-long-left"
import HeroiconsArrowLongRight from "~icons/heroicons/arrow-long-right"

interface UnderlinedBtnProps extends MotionLinkProps {
	hideArrow?: boolean
	direction?: FlexDirection
}

export const UnderlinedBtn = ({
	children,
	direction = "flex-row",
	hideArrow = false,
	...props
}: UnderlinedBtnProps) => (
	<MotionLink
		{...props}
		className={twMerge(
			`group flex items-center gap-3 text-sm tracking-wider ${direction} select-none py-3 pl-3 pr-1 text-black`,
			props?.className
		)}>
		<span
			className={twMerge(
				"animated-underline pb-1 uppercase tracking-[inherit] text-current",
				direction === "flex-row" &&
					"after:origin-bottom-right hover:after:origin-bottom-left group-hover:after:origin-bottom-left",
				direction === "flex-row-reverse" &&
					"after:origin-bottom-left hover:after:origin-bottom-right group-hover:after:origin-bottom-right"
			)}>
			{children}
		</span>

		{/* Arrow  */}
		{!hideArrow &&
			(direction === "flex-row" ? (
				<HeroiconsArrowLongRight className={twMerge(svgClassName, "-translate-x-2")} />
			) : (
				<HeroiconsArrowLongLeft className={twMerge(svgClassName, "translate-x-2")} />
			))}
	</MotionLink>
)

const svgClassName =
	"w-6 h-6 text-current transition-all duration-500 will-change-transform group-hover:translate-x-0 group-active:scale-90"
