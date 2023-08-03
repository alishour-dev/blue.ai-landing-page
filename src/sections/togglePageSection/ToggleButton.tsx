import type { AnimationProps } from "framer-motion"
import { twMerge } from "tailwind-merge"

import { MotionLink } from "@/comps"
import type { FlexDirection, IconType, LinkType } from "@/types"

export type ToggleButtonData = LinkType & { subLabel?: string }

export const ToggleButton = ({
	label,
	subLabel,
	href,
	Icon,
	variant,
	direction = "flex-row",
}: ToggleButtonData & { direction?: FlexDirection; variant: AnimationProps; Icon: IconType }) => (
	<MotionLink
		{...variant}
		className='group h-max w-max max-w-[40%] select-none no-underline sm:max-w-[50%]'
		href={href}>
		<p
			className={twMerge(
				"transition-custom mb-2 text-xs font-bold uppercase leading-[12px] text-primary-500 group-hover:text-primary-700 sm:mb-3 sm:text-sm sm:leading-[14px]",
				direction === "flex-row" && "pl-[30px] sm:pl-10"
			)}>
			{direction === "flex-row" ? "Previous" : "Next"}
		</p>
		<div className={`transition-custom flex ${direction} items-center justify-between group-hover:text-black`}>
			{/* Arrow Wrapper  */}
			<div
				className={twMerge(
					"flex w-[30px] items-center sm:w-10",
					direction === "flex-row" ? "justify-start" : "justify-end"
				)}>
				<Icon className='transition-custom h-[14px] w-[14px] shrink-0 text-gray-500 group-hover:text-black' />
			</div>

			{/* Titles Wrapper  */}
			<div className='flex-1'>
				{!!subLabel?.length && (
					<p className='transition-custom text-md text-base leading-[20px] text-gray-500 group-hover:text-black sm:text-[20px] sm:leading-[26px]'>
						{subLabel}
					</p>
				)}
				<p className='transition-custom text-base leading-[20px] text-gray-500 group-hover:text-black sm:text-[20px] sm:leading-[26px]'>
					{label}
				</p>
			</div>
		</div>
	</MotionLink>
)
