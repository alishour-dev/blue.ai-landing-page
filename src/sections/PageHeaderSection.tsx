import { Breadcrumb, type BreadcrumbPages, MotionElement, MotionImage, TypingTitle } from "@/comps"
import { MarkdownWrapper } from "@/layouts"
import { fade, slideUp } from "@/lib/framer-motion/variants"
import headerBg from "@/public/images/headerBg.png"

export interface PageHeaderSectionData {
	content: string
	breadcrumbPages?: BreadcrumbPages
}

export const PageHeaderSection = ({ content, breadcrumbPages }: PageHeaderSectionData) => {
	return (
		<>
			<MotionImage
				fill
				src={headerBg?.src}
				alt='Background for page header'
				placeholder='blur'
				blurDataURL={headerBg.blurDataURL}
				{...fade}
				sizes='100vw'
			/>

			{!!breadcrumbPages?.length && (
				<Breadcrumb className='absolute left-4 top-5 hidden text-xl sm:flex md:text-[22px]' pages={breadcrumbPages} />
			)}

			<MarkdownWrapper
				components={{
					h1: ({ children }) => (
						<TypingTitle className='relative z-[1] mb-2 text-center !text-3xl !text-white sm:!text-4xl md:!text-5xl'>
							{children as string}
						</TypingTitle>
					),
					h2: ({ children }) => (
						<MotionElement
							as='h2'
							className='relative z-[1] m-0 mx-auto w-full max-w-[90%] px-5 text-center text-xl font-light text-white sm:max-w-none md:text-2xl'
							{...slideUp}>
							{children}
						</MotionElement>
					),
					p: ({ children }) => (
						<MotionElement
							as='p'
							className='common-p relative z-[1] m-0 mt-3 text-center !text-white sm:mt-4 md:mt-2'
							{...slideUp}>
							{children}
						</MotionElement>
					),
					strong: ({ children }) => <strong {...{ children }} className='m-0 block' />,
				}}>
				{content}
			</MarkdownWrapper>
		</>
	)
}
