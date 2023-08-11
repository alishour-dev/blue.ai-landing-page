import { twMerge } from "tailwind-merge"

import { scaleUp, slideRightUp } from "@/lib/framer-motion/variants"
import type { ImgPropsWithoutDimensions } from "@/types"

import { MotionElement } from "./MotionElement"
import { MotionImage } from "./MotionImage"

export interface ShortInfoCardData {
	label: string
	content?: string
	imgProps: ImgPropsWithoutDimensions
}

export function ShortInfoCard({ label, content, imgProps, className }: ShortInfoCardData & { className?: string }) {
	return (
		<div
			className={twMerge(
				"mx-auto flex h-max w-full max-w-[80%] flex-col items-center p-2 md:max-w-[513px]",
				className
			)}>
			<MotionImage
				width={106}
				height={106}
				src={imgProps.src}
				alt={imgProps.alt}
				placeholder='blur'
				blurDataURL={imgProps.blurDataURL}
				style={{ height: "30%" }}
				{...scaleUp}
				sizes='106px'
			/>
			<MotionElement
				as='h1'
				className='mb-2 mt-5 text-center text-[18px] font-bold leading-[20px] text-[#96999C] lg:text-[20px] lg:leading-[24px]'
				{...slideRightUp}>
				{label}
			</MotionElement>
			{!!content?.length && (
				<MotionElement
					as='p'
					className='text-center text-[15px] font-light leading-[17px] text-[#96999C] lg:text-[16px] lg:leading-[18px]'
					{...slideRightUp}>
					{content}
				</MotionElement>
			)}
		</div>
	)
}
