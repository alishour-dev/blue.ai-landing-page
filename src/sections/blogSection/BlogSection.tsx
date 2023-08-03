import { MotionElement, TypingTitle } from "@/comps"
import { MarkdownWrapper } from "@/layouts"
import { slideRightBtm } from "@/lib/framer-motion/variants"

import { BlogCard, type BlogCardData } from "./BlogCard"

export interface BlogSectionData {
	content: string
	blogCard?: BlogCardData
}

export const BlogSection = ({ content, blogCard }: BlogSectionData) => (
	<>
		{!!blogCard?.customer?.length && <BlogCard {...blogCard} />}
		<MarkdownWrapper
			className='flex-1 [&>pre]:block [&>pre]:h-max [&>pre]:whitespace-nowrap'
			components={{
				h1: ({ children }) => (
					<TypingTitle className='mb-3 max-w-full !text-2xl font-bold sm:!text-3xl md:!text-[35px]'>
						{children as string}
					</TypingTitle>
				),
				p: ({ children }) => (
					<MotionElement as='p' {...slideRightBtm} className='mb-3 inline-block text-base text-[#96999C] md:text-lg '>
						{children}
					</MotionElement>
				),
				strong: ({ children }) => <strong className='font-bold text-primary'>{children}</strong>,
				ol: ({ children, depth, start }) => (
					<MotionElement
						as='ol'
						className='m-0 mt-3 block list-inside p-0 text-left [&>li]:text-base [&>li]:font-bold [&>li]:text-primary'
						{...{ depth, start }}
						{...slideRightBtm}>
						{children}
					</MotionElement>
				),
				ul: ({ children }) => (
					<MotionElement
						as='ul'
						className='m-0 block text-left text-lg text-primary [&>li::marker]:text-3xl [&>li::marker]:text-secondary-600 [&>span]:m-0 [&>span]:!inline'
						{...slideRightBtm}>
						{children}
					</MotionElement>
				),
			}}>
			{content}
		</MarkdownWrapper>
	</>
)
