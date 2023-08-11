import { twMerge } from "tailwind-merge"
import { v4 as newId } from "uuid"

import { MotionElement } from "@/comps/MotionElement"
import { TypingTitle } from "@/comps/TypingTitle"
import { basicStagger, slideUp } from "@/lib/framer-motion/variants"

import { MarkdownWrapper } from "../MarkdownWrapper"

import type { SectionHeaderFooterType } from "./Section"

export function Header({ content, className }: SectionHeaderFooterType) {
	return (
		<MotionElement
			as='header'
			{...basicStagger()}
			key={newId()}
			className={twMerge(
				"inner-wrapper mx-auto flex !max-w-[95%] flex-col gap-4 text-center md:max-w-[80%] lg:gap-6",
				className
			)}>
			<MarkdownWrapper
				components={{
					h1: ({ children }) => (
						<TypingTitle className='mx-auto w-full text-center text-[22px] font-bold leading-[26px] md:text-[26px] md:leading-[30px] lg:text-[32px] lg:leading-[40px]'>
							{children as string}
						</TypingTitle>
					),
					h2: ({ children }) => (
						<MotionElement as='h2' className='common-h2 mx-auto w-full text-center' {...slideUp}>
							{children}
						</MotionElement>
					),
					h3: ({ children }) => (
						<MotionElement as='h3' className='common-h3 mx-auto text-center font-bold text-secondary-900' {...slideUp}>
							{children}
						</MotionElement>
					),
					p: ({ children }) => (
						<MotionElement as='p' className='common-p m-0 mx-auto' {...slideUp}>
							{children}
						</MotionElement>
					),
				}}>
				{content}
			</MarkdownWrapper>
		</MotionElement>
	)
}
