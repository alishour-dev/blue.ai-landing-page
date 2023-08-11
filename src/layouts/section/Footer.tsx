import { twMerge } from "tailwind-merge"

import { MotionElement } from "@/comps/MotionElement"
import { slideUp } from "@/lib/framer-motion/variants"

import { MarkdownWrapper } from "../MarkdownWrapper"

import type { SectionHeaderFooterType } from "./Section"

export function Footer({ content, className }: SectionHeaderFooterType) {
	return (
		<MarkdownWrapper
			allowedElements={["p", "strong"]}
			components={{
				p: ({ children }) => (
					<MotionElement
						as='footer'
						className={twMerge(
							"inner-wrapper mx-auto block w-full max-w-full text-left text-base text-primary md:max-w-[750px] md:text-center md:text-[18px] md:leading-[22px]",
							className
						)}
						{...slideUp}>
						{children}
					</MotionElement>
				),
				strong: ({ children, ...props }) => (
					<strong {...props} className='inline-block w-full text-base md:text-[18px] md:leading-[22px]'>
						{children}
					</strong>
				),
			}}>
			{content}
		</MarkdownWrapper>
	)
}
