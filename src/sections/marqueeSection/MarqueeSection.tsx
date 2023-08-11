import Image from "next/image"
import { v4 as newId } from "uuid"

import { slideLeftUp, slideRightUp } from "@/lib/framer-motion/variants"
import type { ImgPropsWithoutDimensions } from "@/types"

import { Marquee } from "./Marquee"

export type MarqueeSectionData = Record<"width" | "height", number> &
	Record<"topImages" | "bottomImages", ImgPropsWithoutDimensions[]>

export function MarqueeSection({ topImages, bottomImages, width, height }: MarqueeSectionData) {
	return (
		<>
			<Marquee {...slideRightUp}>
				{topImages?.map((img) => (
					<Image
						key={newId()}
						src={img.src}
						alt={img.alt}
						loading='lazy'
						placeholder='blur'
						blurDataURL={img.blurDataURL}
						width={width}
						height={height}
						sizes='100px'
						className='mr-8 h-[50px] w-[75px] object-contain prevent-selection sm:mr-11 sm:h-[100px] sm:w-[150px]'
						quality={100}
					/>
				))}
			</Marquee>
			<Marquee className='mt-10 sm:mt-[70px]' animationDirection='left' {...slideLeftUp}>
				{bottomImages?.map((img) => (
					<Image
						key={newId()}
						src={img.src}
						alt={img.alt}
						loading='lazy'
						placeholder='blur'
						blurDataURL={img.blurDataURL}
						width={width}
						height={height}
						sizes='100px'
						className='mr-8 h-[50px] w-[75px] object-contain prevent-selection sm:mr-11 sm:h-[100px] sm:w-[150px]'
						quality={100}
					/>
				))}
			</Marquee>
		</>
	)
}
