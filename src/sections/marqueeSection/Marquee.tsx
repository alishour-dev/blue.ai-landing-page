import { twMerge } from "tailwind-merge"
import { v4 as newId } from "uuid"

import { MotionElement, type MotionElementProps } from "@/comps"

interface MarqueeProps extends MotionElementProps<"div"> {
	animationDirection?: "left" | "right"
	children: React.ReactNode
}

export const Marquee = ({ animationDirection = "right", children, ...props }: MarqueeProps) => (
	<MotionElement
		{...props}
		className={twMerge("mx-auto max-w-[1000px] overflow-x-hidden whitespace-nowrap", props?.className)}
		style={{ WebkitMaskBoxImage }}>
		<div className='relative'>
			{Array.from({ length: 2 }, (_, idx) => (
				<div
					key={newId()}
					className={twMerge(
						"flex w-max overflow-hidden will-change-transform prevent-selection",
						idx === 0 && animationDirection === "left" && "animate-to-left-marquee-1",
						idx === 0 && animationDirection === "right" && "animate-to-right-marquee-1",
						idx === 1 && animationDirection === "left" && "animate-to-left-marquee-2",
						idx === 1 && animationDirection === "right" && "animate-to-right-marquee-2",
						idx === 1 && "absolute top-0"
					)}>
					{children}
				</div>
			))}
		</div>
	</MotionElement>
)

const WebkitMaskBoxImage =
	"linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))"
