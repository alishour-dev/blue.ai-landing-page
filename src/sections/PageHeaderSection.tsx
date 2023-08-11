import { Breadcrumb, type BreadcrumbPages } from "@/comps/Breadcrumb"
import { MotionElement } from "@/comps/MotionElement"
import { MotionImage } from "@/comps/MotionImage"
import { TypingTitle } from "@/comps/TypingTitle"
import { MarkdownWrapper } from "@/layouts/MarkdownWrapper"
import { fade, slideUp } from "@/lib/framer-motion/variants"
import headerBg from "@/public/images/headerBg.png"

export interface PageHeaderSectionData {
	content: string
	breadcrumbPages?: BreadcrumbPages
}

export function PageHeaderSection({ content, breadcrumbPages }: PageHeaderSectionData) {
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
						<TypingTitle className='relative z-[1] mb-[10px] text-center !text-[32px] !leading-[42px] !text-white lg:!text-[50px] lg:!leading-[60px]'>
							{children as string}
						</TypingTitle>
					),
					h2: ({ children }) => (
						<MotionElement
							as='h2'
							className='relative z-[1] m-0 mx-auto w-full max-w-[90%] px-5 text-center text-[22px] font-light leading-[30px] text-white md:max-w-none lg:text-[28px] lg:leading-[34px]'
							{...slideUp}>
							{children}
						</MotionElement>
					),
					p: ({ children }) => (
						<MotionElement
							as='p'
							className='common-p relative z-[1] m-0 mt-3 text-center !text-white md:mt-4 lg:mt-2'
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
