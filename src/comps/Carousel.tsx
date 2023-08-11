import Image from "next/image"
import React, { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

import { ImgPropsWithoutDimensions } from "@/types"

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	slides: ImgPropsWithoutDimensions[]
	children?: React.ReactNode
	imgProps: Record<"width" | "height", number> & { className?: string }
}

// eslint-disable-next-line react/display-name
export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(({ slides, imgProps, children, ...props }, ref) => {
	return (
		<div {...props} className={twMerge("overflow-hidden", props?.className)} ref={ref}>
			<div className='ml-[calc(var(--slide-spacing)*-1)] flex touch-pan-y backface-hidden'>
				{slides.map(({ src, alt, blurDataURL }, idx) => (
					<div className='relative min-w-0 flex-[0_0_var(--slide-size)] pl-[var(--slide-spacing)]' key={idx}>
						<Image
							width={imgProps.width}
							height={imgProps.height}
							src={src}
							alt={alt || "Slide representation"}
							loading='lazy'
							placeholder='blur'
							blurDataURL={blurDataURL}
							style={{ aspectRatio: imgProps.width / imgProps.height }}
							className={twMerge(
								"mx-auto block h-auto max-w-full object-cover md:h-[var(--slide-height)]",
								imgProps?.className
							)}
							quality={100}
						/>
					</div>
				))}
			</div>
			{children}
		</div>
	)
})
