import Image from "next/image"
import { twMerge } from "tailwind-merge"

import { MotionElement } from "@/comps/MotionElement"
import { slideUp } from "@/lib/framer-motion/variants"
import type { ImgPropsWithoutDimensions } from "@/types"

export interface FeatureCardData {
	label: string
	content: string
	imgProps: ImgPropsWithoutDimensions
	className?: string
}

export function FeatureCard({ label, content, imgProps, className }: FeatureCardData) {
	return (
		<MotionElement
			{...slideUp}
			className={twMerge(
				"mx-auto flex h-full max-h-[500px] min-h-max w-full max-w-[400px] gap-3 self-center rounded-2xl bg-white p-4 shadow-custom md:max-w-[556px] 2xl:min-h-[286px] 2xl:gap-5 2xl:p-6",
				className
			)}>
			<Image
				width={65}
				height={65}
				src={imgProps.src}
				alt={imgProps.alt}
				loading='lazy'
				placeholder='blur'
				blurDataURL={imgProps.blurDataURL}
				quality={100}
				className='-ml-1 -mt-1 h-10 w-10 2xl:-ml-2 2xl:-mt-2 2xl:h-[65px] 2xl:w-[65px]'
			/>
			<div className='flex flex-1 flex-col items-start justify-start gap-6 xl:gap-8'>
				<h3 className='label-underline max-w-[313px] text-[17px] font-bold leading-[22px] text-primary lg:text-[18px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[31px]'>
					{label}
				</h3>

				<p className='flex-1 text-base leading-[20px] text-black xl:text-[17px] xl:leading-[24px] 2xl:text-[19px] 2xl:leading-[30px]'>
					{content}
				</p>
			</div>
		</MotionElement>
	)
}
