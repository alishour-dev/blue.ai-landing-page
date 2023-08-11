import { MotionElement } from "@/comps/MotionElement"
import { TypingTitle } from "@/comps/TypingTitle"
import { MarkdownWrapper } from "@/layouts/MarkdownWrapper"
import { slideRightBtm } from "@/lib/framer-motion/variants"

import { BlogCard, type BlogCardData } from "./BlogCard"

export interface BlogSectionData {
	content: string
	blogCard?: BlogCardData
}

export function BlogSection({ content, blogCard }: BlogSectionData) {
	return (
		<>
			{!!blogCard?.customer?.length && <BlogCard {...blogCard} />}
			<MarkdownWrapper
				className='flex-1 [&>pre]:block [&>pre]:h-max [&>pre]:whitespace-pre-wrap'
				components={{
					h1: ({ children }) => (
						<TypingTitle className='mb-[11px] max-w-full !text-[26px] font-bold !leading-[30px] md:!text-[30px] md:!leading-[36px]'>
							{children as string}
						</TypingTitle>
					),
					p: ({ children }) => (
						<MotionElement
							as='p'
							{...slideRightBtm}
							className='mb-3 inline-block text-[17px] leading-[20px] text-[#96999C] lg:text-[18px] lg:leading-[22px]'>
							{children}
						</MotionElement>
					),
					strong: ({ children }) => (
						<strong className='text-[17px] font-bold leading-[20px] text-primary lg:text-[18px] lg:leading-[22px]'>
							{children}
						</strong>
					),
					ol: ({ children, depth, start }) => (
						<MotionElement
							as='ol'
							className='m-0 mt-3 block list-inside !list-[decimal] p-0 text-left [&>li]:text-[17px] [&>li]:font-bold [&>li]:text-primary'
							{...{ depth, start }}
							{...slideRightBtm}>
							{children}
						</MotionElement>
					),
					ul: ({ children }) => (
						<MotionElement
							as='ul'
							className='m-0 block !list-[disc] pl-8 text-left text-lg text-primary [&>li::marker]:-mt-4 [&>li::marker]:text-[30px] [&>li::marker]:text-secondary [&>span]:m-0 [&>span]:!inline [&>span]:[font-size:inherit] [&>span]:[line-height:inherit] [&_p]:!block'
							{...slideRightBtm}>
							{children}
						</MotionElement>
					),
				}}>
				{content}
			</MarkdownWrapper>
		</>
	)
}
