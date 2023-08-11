"use client"

import { AnimatePresence, AnimationProps } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useWindowSize } from "usehooks-ts"

import { useWindowScroll } from "@/hooks/useWindowScroll"

import { Button } from "./Button"
import { MotionElement } from "./MotionElement"

import IonIosArrowUp from "~icons/ion/ios-arrow-up"

export function BottomRightIcon() {
	const { height: viewportHeight, width } = useWindowSize()

	const [scroll, scrollToTop] = useWindowScroll()
	const [isScrollable, setIsScrollable] = useState(false)

	const pathname = usePathname()

	useEffect(() => {
		if (typeof window !== "undefined" && window.document && window.document.documentElement) {
			// Checks if initial content displayed is scrollable
			const isWindowInitiallyScrollable =
				document.documentElement.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)

			if (isWindowInitiallyScrollable) {
				const windowInnerHeight = document.documentElement.scrollHeight
				const footerHeight = document.getElementById("app-footer")?.clientHeight || 0

				// Calculates difference between all window's height (including scrollable content) and viewport,
				// while disregarding Footer's height, If its more than quarter of the viewport's height
				setIsScrollable(windowInnerHeight - viewportHeight - footerHeight > viewportHeight / 4)
			} else {
				setIsScrollable(false)
			}
		}
	}, [viewportHeight, width, pathname])

	return (
		<AnimatePresence mode='wait'>
			{isScrollable ? (
				scroll >= viewportHeight / 4 ? (
					<Button
						key='button'
						title='Scroll to Top'
						as='MotionButton'
						onClick={() => scrollToTop()}
						size='compact'
						className='fixed bottom-2 right-2 z-50 h-max min-h-0 rounded-md p-2 shadow-md'
						rightIcon={<IonIosArrowUp className='ml-0' />}
						{...animationProps}
						animate={{ opacity: 0.6 }}
						whileHover={{ opacity: 1 }}
					/>
				) : (
					<MotionElement
						{...animationProps}
						as='svg'
						viewBox='0 0 247 390'
						xmlns='http://www.w3.org/2000/svg'
						width={28}
						className='fixed bottom-0 right-2 z-50 h-11 w-6 sm:h-14'>
						<path
							d='M123.359,79.775l0,2.843'
							strokeLinecap='round'
							className='animate-scroll rounded-full fill-none stroke-secondary-800 stroke-[40px]'
						/>
						<path
							d='M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z'
							className='fill-none stroke-secondary-800 stroke-[24px]'
						/>
					</MotionElement>
				)
			) : null}
		</AnimatePresence>
	)
}

const animationProps: AnimationProps = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.35 },
}
