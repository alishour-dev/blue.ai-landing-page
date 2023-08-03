import Image from "next/image"
import { twMerge } from "tailwind-merge"

import { MotionElement } from "@/comps"
import { slideUp } from "@/lib/framer-motion/variants"
import type { ImgPropsWithoutDimensions } from "@/types"

export interface FeatureCardData {
	label: string
	content: string
	imgProps: ImgPropsWithoutDimensions
	className?: string
}

export const FeatureCard = ({ label, content, imgProps, className }: FeatureCardData) => (
	<MotionElement
		{...slideUp}
		className={twMerge(
			"mx-auto flex h-full max-h-[500px] min-h-[286px] w-full max-w-[400px] self-center rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 sm:min-h-max sm:max-w-[556px]",
			className
		)}>
		<div className='pl-2 pt-2 xl:pl-4 xl:pt-3'>
			<Image
				width={65}
				height={65}
				src={imgProps.src}
				alt={imgProps.alt}
				loading='lazy'
				placeholder='blur'
				blurDataURL={imgProps.blurDataURL}
				quality={100}
			/>
		</div>
		<div className='flex flex-1 flex-col gap-6 p-4 xl:gap-8 xl:p-6'>
			<h3 className='label-underline max-w-[313px] text-xl font-bold text-primary'>{label}</h3>

			<p className='flex-1 text-base text-black lg:text-lg xl:text-xl'>{content}</p>
		</div>
	</MotionElement>
)
