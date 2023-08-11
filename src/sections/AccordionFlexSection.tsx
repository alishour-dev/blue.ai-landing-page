"use client"

import type { ImageProps } from "next/image"
import { createRef, useCallback, useMemo } from "react"
import { v4 as newId } from "uuid"

import { Accordion } from "@/comps/Accordion"
import { FlexCard } from "@/comps/FlexCard"
import { slideLeftUp, slideRightUp } from "@/lib/framer-motion/variants"
import type { FlexDirection } from "@/types"

export interface AccordionFlexSectionData {
	content: Record<"label" | "content", string>[]
	imgProps: ImageProps
	flexDirection?: FlexDirection
}

export function AccordionFlexSection({ content, flexDirection = "flex-row", imgProps }: AccordionFlexSectionData) {
	const refs = useMemo(() => {
		return (
			content.map(() => {
				return createRef<HTMLButtonElement>()
			}) ?? []
		)
	}, [content])

	const handleAccordionTarget = useCallback(
		(id: string | number) => {
			// Get Current Button
			const selfRef = refs.find((ref) => Number(ref.current?.getAttribute("data-id")) === Number(id))
			const isSelfOpen = selfRef?.current?.getAttribute("data-open") === "true"

			// Close self if its already opened
			if (isSelfOpen) {
				selfRef.current?.click()
			}

			// Get all other buttons (that aren't clicked)
			const otherRefs = refs.filter((ref) => ref.current?.getAttribute("data-id") !== id)

			otherRefs.forEach((ref) => {
				const isOpen = ref.current?.getAttribute("data-open") === "true"

				// If any button is opened, close it
				if (isOpen) {
					ref.current?.click()
				}
			})
		},
		[refs]
	)

	const accordionAnimationVariant = useMemo(
		() => (flexDirection === "flex-row-reverse" ? slideLeftUp : slideRightUp),
		[flexDirection]
	)

	return (
		<FlexCard imgProps={imgProps} flexDirection={flexDirection}>
			<div className='flex w-full max-w-full flex-col xs:max-w-[80%] md:max-w-[60%] lg:max-w-[45%]'>
				{content?.map(({ content, label }, idx) => (
					<Accordion
						defaultOpen={idx === 0}
						{...accordionAnimationVariant}
						id={idx}
						key={newId()}
						label={label}
						targetProps={{ ref: refs[idx], onClick: () => handleAccordionTarget(idx), className: targetClassName }}>
						{content}
					</Accordion>
				))}
			</div>
		</FlexCard>
	)
}
const targetClassName =
	"pl-10 relative before:absolute before:content-[''] before:w-3 before:h-3 before:bg-secondary before:top-[24px] before:left-4 z-10 before:rounded-full"
