import type { ImageProps } from "next/image"

import { MotionImage } from "@/comps/MotionImage"
import { scaleUp } from "@/lib/framer-motion/variants"

export type ImageSectionData = ImageProps

export function ImageSection({ src, alt, width, height, blurDataURL }: ImageSectionData) {
	return (
		<div className='flex-col gap-5 flex-center'>
			<MotionImage
				src={src}
				alt={alt}
				width={width}
				height={height}
				placeholder='blur'
				blurDataURL={blurDataURL}
				{...scaleUp}
				className='h-auto max-w-full object-cover'
				style={{ aspectRatio: Number(width) / Number(height) }}
			/>
		</div>
	)
}
