"use client"

import { m } from "framer-motion"
import { Fragment, useMemo } from "react"
import { twMerge } from "tailwind-merge"
import { v4 as newId } from "uuid"

import { basicStagger, slideUp } from "@/lib/framer-motion/variants"

interface TypingTitleProps<T> extends React.HTMLAttributes<T> {
	children: string | string[]
	as?: T
}

// eslint-disable-next-line react/display-name
export function TypingTitle<T extends keyof JSX.IntrinsicElements>({
	children,
	as = "h1" as T,
	...props
}: TypingTitleProps<T>) {
	const Element = useMemo<React.ElementType>(() => m(as), [as])

	return (
		<Element
			{...basicStagger({ staggerChildren: 0.02 })}
			{...props}
			className={twMerge(
				"w-full max-w-max text-left text-[35px] font-bold leading-[35px] text-secondary-900",
				props?.className
			)}>
			{typeof children === "string"
				? children.split("").map((char) => (
						<m.span key={newId()} {...slideUp} className='text-inherit'>
							{char}
						</m.span>
					))
				: children
						?.filter((item) => typeof item === "string")
						?.map((line) => (
							<Fragment key={newId()}>
								{line?.split("").map((w) => (
									<m.span key={newId()} className='text-inherit' {...slideUp}>
										{w}
									</m.span>
								))}
								<br />
							</Fragment>
						))}
		</Element>
	)
}
