import type { ImageProps } from "next/image"

import { MotionImage } from "@/comps"
import { scaleUp } from "@/lib/framer-motion/variants"

export type ImageSectionData = ImageProps

export const ImageSection = ({ src, alt, width, height, blurDataURL }: ImageSectionData) => (
	<div className='flex-col gap-5 flex-center'>
		<MotionImage
			src={src}
			alt={alt}
			width={width}
			height={height}
			placeholder='blur'
			blurDataURL={blurDataURL}
			{...scaleUp}
			style={{ maxWidth: "100%", objectFit: "cover", height: "auto", aspectRatio: Number(width) / Number(height) }}
		/>
	</div>
)
