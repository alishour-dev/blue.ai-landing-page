import type { ImageProps } from "next/image"
import { twMerge } from "tailwind-merge"
import { v4 as newId } from "uuid"

import { basicStagger, slideLeftUp, slideRightUp, transition } from "@/lib/framer-motion/variants"
import type { FlexDirection } from "@/types"

import { MotionElement } from "./MotionElement"
import { MotionImage } from "./MotionImage"

export interface FlexCardProps extends React.HTMLAttributes<HTMLDivElement> {
	flexDirection?: FlexDirection
	imgProps: ImageProps
}

export function FlexCard({ flexDirection = "flex-row", imgProps, children, ...props }: FlexCardProps) {
	return (
		<MotionElement
			key={newId()}
			{...basicStagger({ staggerChildren: 0.1 })}
			className={twMerge(
				`mx-auto flex w-full flex-col-reverse items-center justify-between gap-10 overflow-hidden md:gap-8 [&>div:first-of-type]:flex-1`,
				flexDirection === "flex-row" && "md:flex-row",
				flexDirection === "flex-row-reverse" && "md:flex-row-reverse",
				props?.className
			)}>
			{children}
			<div className='relative max-w-[80%] flex-1 flex-center xs:max-w-[70%] lg:max-w-[50%]'>
				<MotionImage
					width={imgProps.width}
					height={imgProps.height}
					src={imgProps.src}
					alt={imgProps.alt}
					placeholder='blur'
					blurDataURL={imgProps.blurDataURL}
					className='h-auto max-w-full self-end object-contain prevent-selection'
					style={{ aspectRatio: Number(imgProps.width) / Number(imgProps.height) }}
					variants={flexDirection === "flex-row-reverse" ? slideRightUp.variants : slideLeftUp.variants}
					transition={transition}
					quality={100}
					sizes={`(max-width: 500px) 90vw, (max-width: 768px) 80vw, ${imgProps?.width}`}
				/>
			</div>
		</MotionElement>
	)
}
