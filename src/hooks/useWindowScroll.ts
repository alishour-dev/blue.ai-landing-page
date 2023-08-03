"use client"

import { useState } from "react"
import { useEventListener, useIsomorphicLayoutEffect } from "usehooks-ts"

export function useWindowScroll(): [number, () => void] {
	const [scrollPosition, setScrollPosition] = useState(0)

	// const scrollTo = () => setScrollPosition(window.pageYOffset)
	const updateScroll = () => setScrollPosition(window.scrollY || document.documentElement.scrollTop)

	useEventListener("scroll", updateScroll)

	// Set scroll position at the first client-side load
	useIsomorphicLayoutEffect(() => {
		updateScroll()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

	return [scrollPosition, scrollToTop]
}
