"use client"

import { m, type MotionProps } from "framer-motion"
import Image, { type ImageProps } from "next/image"
import { forwardRef } from "react"
import { v4 as newId } from "uuid"

export type MotionImageProps = ImageProps & MotionProps

export const MotionImage = m(
	// eslint-disable-next-line react/display-name
	forwardRef<HTMLImageElement, MotionImageProps>((props, ref) => {
		return (
			<Image
				key={newId()}
				ref={ref}
				loading={!props?.priority ? "lazy" : "eager"}
				{...props}
				alt={props?.alt || "My custom nextjs image"}
				quality={100}
			/>
		)
	})
)
