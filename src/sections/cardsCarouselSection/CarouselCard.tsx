import type { Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { Button, MotionElement } from "@/comps"
import { ease, slideUp } from "@/lib/framer-motion/variants"
import type { ImgPropsWithoutDimensions } from "@/types"

import IonIosArrowForward from "~icons/ion/ios-arrow-forward"

export interface CarouselCardData extends Record<"label" | "content", string> {
	imgProps: ImgPropsWithoutDimensions
	cta: { label?: string; href: string }
}

export const CarouselCard = ({ cta, content, imgProps, label }: CarouselCardData) => (
	<MotionElement
		{...slideUp}
		key={label}
		className='mx-auto flex h-full w-full max-w-[400px] flex-col self-center overflow-hidden rounded-2xl shadow-[0_0_12px_rgba(0,0,0,0.12)] lg:max-w-[466px]'>
		<Link href={cta?.href}>
			<Image
				loading='lazy'
				placeholder='blur'
				src={imgProps.src}
				alt={imgProps.alt}
				blurDataURL={imgProps.blurDataURL}
				width={466}
				height={210}
				className='aspect-[466/210] object-cover'
				quality={100}
			/>
		</Link>
		<div className='relative z-[1] -mt-[10px] flex flex-1 flex-col justify-between gap-4 rounded-xl bg-white p-3 lg:gap-6 lg:p-4'>
			<p className='label-underline text-lg font-bold text-primary before:-bottom-1 lg:text-xl lg:before:-bottom-2'>
				{label}
			</p>

			<p className='line-clamp-4 text-base text-gray-400 lg:text-lg'>{content}</p>

			<Button
				as='MotionLink'
				variant='none'
				size='compact'
				href={cta?.href}
				initial='initial'
				whileHover='animate'
				exit='initial'
				className='w-max overflow-visible text-base font-medium text-secondary lg:text-lg'
				rightIcon={
					<MotionElement className='ml-[2px] flex h-full items-end' variants={iconVariants}>
						{[...new Array(3)]?.map((_, idx) => (
							<IonIosArrowForward key={idx} className='-mr-[10px] h-5 w-5 text-inherit lg:h-[22px]  lg:w-[22px]' />
						))}
					</MotionElement>
				}>
				{cta?.label || "Read More"}
			</Button>
		</div>
	</MotionElement>
)

const iconVariants: Variants = {
	initial: { color: "#0000003b", x: 0 },
	animate: { color: "#BE5CA2", x: 12, transition: { ease, duration: 0.7 } },
}
