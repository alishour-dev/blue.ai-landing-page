"use client"

import useEmblaCarousel from "embla-carousel-react"
import { m, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"
import type { ImageProps } from "next/image"
import { twMerge } from "tailwind-merge"

import { Carousel } from "@/comps/Carousel"
import { UnderlinedBtn } from "@/comps/UnderlinedBtn"
import { useDotButton } from "@/lib/embla/useDotButton"
import { fade, slideUp, variantPresets } from "@/lib/framer-motion/variants"

const MotionCarousel = m(Carousel)
const MarkdownWrapper = dynamic(() => import("@/layouts/MarkdownWrapper").then((m) => m.MarkdownWrapper))

export interface SlidesCarouselData {
	slides: {
		content: string
		imgProps: ImageProps
	}[]
}

export function SlidesCarouselSection({ slides }: SlidesCarouselData) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ containScroll: "trimSnaps", loop: true, align: "center" })
	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

	return (
		<>
			<MotionCarousel
				slides={slides?.map(({ imgProps }) => imgProps)}
				ref={emblaRef}
				// eslint-disable-next-line prettier/prettier
				className='relative p-1 pt-1.5 [--slide-height:290px] [--slide-size:100%] [--slide-spacing:12px] md:[--slide-size:55%] md:[--slide-spacing:40px]'
				imgProps={{ width: 826, height: 290, className: "rounded-[28px] shadow-custom" }}
				{...slideUp}>
				<div className='mb-6 mt-4 gap-2 flex-center sm:mb-8 sm:mt-6'>
					{scrollSnaps.map((_, index) => (
						<button
							key={index}
							type='button'
							onClick={() => onDotButtonClick(index)}
							className={twMerge(
								"m-0 flex h-3 w-3 cursor-pointer touch-manipulation appearance-none items-center border-0 bg-transparent p-0 no-underline transition-[width] duration-500 ease-in-out after:h-3 after:w-full after:rounded-full after:bg-primary-50 after:content-['']",
								index === selectedIndex && "w-9 after:bg-primary"
							)}
						/>
					))}
				</div>
			</MotionCarousel>

			<AnimatePresence mode='popLayout'>
				{selectedIndex !== null && !!slides[selectedIndex].content?.length && (
					<m.div
						key={slides[selectedIndex].content}
						{...variantPresets}
						{...fade}
						className='mx-auto flex min-h-[351px] w-full max-w-[1250px] flex-col items-center gap-2 px-1 text-justify sm:min-h-[323px] sm:gap-[10px] sm:px-[30px] md:min-h-[228px] md:px-10'>
						<MarkdownWrapper
							allowedElements={["h1", "p", "a"]}
							components={{
								h1: ({ children }) => (
									<h1 className='sm:mr-none mr-auto w-full text-left text-lg font-black leading-6 text-[#96999C] md:text-center md:text-2xl '>
										{children}
									</h1>
								),
								p: ({ children }) => (
									<p className='m-0 text-base leading-[22px] text-[#96999C] md:text-[18px]'>{children}</p>
								),
								a: ({ children, href }) => (
									<UnderlinedBtn hideArrow className='inline-flex py-0 font-bold text-primary' href={href as string}>
										{children}
									</UnderlinedBtn>
								),
							}}>
							{slides[selectedIndex].content}
						</MarkdownWrapper>
					</m.div>
				)}
			</AnimatePresence>
		</>
	)
}
