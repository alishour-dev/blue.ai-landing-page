"use client"

import { MotionProps, m } from "framer-motion"
import { forwardRef, useMemo } from "react"

export type MotionElementProps<T extends keyof JSX.IntrinsicElements> = {
	as?: T
} & MotionProps &
	(T extends "svg" ? React.SVGProps<SVGSVGElement> : React.HTMLAttributes<JSX.IntrinsicElements[T]>)

// eslint-disable-next-line react/display-name
export const MotionElement = forwardRef(
	<T extends keyof JSX.IntrinsicElements>(
		{ as = "div" as T, ...props }: MotionElementProps<T>,
		ref: React.Ref<React.ElementType>
	) => {
		const Element = useMemo<React.ElementType>(() => m(as), [as])

		return <Element {...props} ref={ref} />
	}
)
