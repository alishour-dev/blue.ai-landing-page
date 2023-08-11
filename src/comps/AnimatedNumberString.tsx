"use client"

import { animate, m, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"
import { v4 as newId } from "uuid"

import { fade } from "@/lib/framer-motion/variants"

export function AnimatedNumberString({ value, duration }: { value: string; duration?: number }) {
	const groups = value.split(/(\d+)/)
	// split the string into an array of groups of consecutive numbers and non-numbers
	return (
		<div className='text-[27px] leading-8 tracking-wider text-primary-300 lg:text-[30px] lg:leading-[40px] xl:text-3xl xl:leading-[40px] 2xl:text-4xl 2xl:leading-[55px]'>
			{/* render each group as either a string or a CustomCount component */}
			{groups.map((group) => {
				// group is a number
				if (/^\d+$/.test(group)) {
					return (
						<CustomCount key={newId()} duration={duration}>
							{group}
						</CustomCount>
					)
				} else {
					// group is not a number
					return (
						<m.span inherit {...fade} key={newId()}>
							{group}
						</m.span>
					)
				}
			})}
		</div>
	)
}

function CustomCount({ children, duration = 3 }: { children: string; duration?: number }) {
	const count = useMotionValue(0)
	const rounded = useTransform(count, Math.round)

	useEffect(() => {
		const animation = animate(count, Number(children), { duration })

		return animation.stop

		// eslint-disable-next-line
	}, [children, duration])

	return <m.span inherit>{rounded}</m.span>
}
