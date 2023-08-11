import { useMemo } from "react"
import { twMerge } from "tailwind-merge"

import { MarkdownWrapper } from "@/layouts/MarkdownWrapper"
import { slideLeftUp, slideRightUp } from "@/lib/framer-motion/variants"

import { FlexCard, type FlexCardProps } from "./FlexCard"
import { MotionElement } from "./MotionElement"

export interface MdCardProps extends FlexCardProps {
	content: string
	textSectionClassName?: string
	id?: string
}

export function MdFlexCard({ content, textSectionClassName, imgProps, flexDirection, id }: MdCardProps) {
	const textAnimationVariant = useMemo(
		() => (flexDirection === "flex-row-reverse" ? slideLeftUp : slideRightUp),
		[flexDirection]
	)

	return (
		<FlexCard imgProps={imgProps} flexDirection={flexDirection} id={id} className='!overflow-visible'>
			<div className={twMerge("max-w-max", textSectionClassName)}>
				<MarkdownWrapper
					components={{
						ol: ({ children, depth, start }) => (
							<ol
								className='m-0 block list-inside !list-[decimal] p-0 pl-2 text-left -indent-4 md:pl-4 md:-indent-6 [&>li>p]:inline [&>li>p]:font-normal [&>li>p]:text-[#96999c] [&>li]:text-primary [&_+_p]:mb-[14px] [&_+_p]:mt-1 [&_+_p]:pl-2 md:[&_+_p]:mb-[17px] md:[&_+_p]:mt-0 md:[&_+_p]:pl-4'
								{...{ start, depth }}>
								{children}
							</ol>
						),
						ul: ({ children }) => (
							<MotionElement
								as='ul'
								className='m-0 block list-inside !list-[disc] p-0 pl-[26px] text-left -indent-[26px] [&>li::marker]:!mr-1 [&>li::marker]:text-[32px] [&>li::marker]:text-secondary-900 [&>li>p]:-ml-5 [&>li>p]:inline [&>li>p]:font-normal [&>li>p]:text-inherit [&>li]:text-primary '
								{...textAnimationVariant}>
								{children}
							</MotionElement>
						),
						li: ({ children }) => (
							<MotionElement
								as='li'
								className='mb-2 text-lg font-bold leading-[22px] text-inherit lg:text-[25px] lg:leading-[35px]'
								{...textAnimationVariant}>
								{children}
							</MotionElement>
						),
						h2: ({ children }) => (
							<MotionElement
								as='h2'
								className='common-h2 m-0 mb-2 w-full max-w-full text-left lg:max-w-none'
								{...textAnimationVariant}>
								{children}
							</MotionElement>
						),
						h3: ({ children }) => (
							<MotionElement
								as='h3'
								className='common-h3 m-0 mb-3 max-w-full font-medium text-[#96999C] lg:max-w-none'
								{...textAnimationVariant}>
								{children}
							</MotionElement>
						),
						p: ({ children }) => (
							<MotionElement
								as='p'
								className='common-p my-2 w-full max-w-full text-left font-light md:my-[10px] lg:mb-[17px] lg:mt-0 lg:max-w-[650px]'
								{...textAnimationVariant}>
								{children}
							</MotionElement>
						),
					}}>
					{content}
				</MarkdownWrapper>
			</div>
		</FlexCard>
	)
}
