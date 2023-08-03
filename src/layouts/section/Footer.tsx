import { twMerge } from "tailwind-merge"

import { MotionElement } from "@/comps"
import { slideUp } from "@/lib/framer-motion/variants"

import { MarkdownWrapper } from "../MarkdownWrapper"

import type { SectionHeaderFooterType } from "./Section"

export const Footer = ({ content, className }: SectionHeaderFooterType) => (
	<MarkdownWrapper
		allowedElements={["p"]}
		components={{
			p: ({ children }) => (
				<MotionElement
					as='footer'
					className={twMerge(
						"inner-wrapper mx-auto block w-full max-w-full text-center text-lg  text-primary sm:max-w-3xl",
						className
					)}
					{...slideUp}>
					{children}
				</MotionElement>
			),
			strong: ({ children, ...props }) => (
				<strong {...props} className='inline-block w-full'>
					{children}
				</strong>
			),
		}}>
		{content}
	</MarkdownWrapper>
)
