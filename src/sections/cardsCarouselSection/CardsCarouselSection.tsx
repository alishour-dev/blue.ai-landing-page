"use client"

import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react"
import { v4 as newId } from "uuid"

import { usePrevNextButtons } from "@/lib/embla/usePrevNextButtons"

import { CarouselCard, type CarouselCardData } from "./CarouselCard"

import IonIosArrowBack from "~icons/ion/ios-arrow-back"
import IonIosArrowForward from "~icons/ion/ios-arrow-forward"

export interface CardsCarouselSectionData {
	cards: CarouselCardData[]
}

export const CardsCarouselSection = ({ cards }: CardsCarouselSectionData) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ containScroll: "trimSnaps", align: "start" })

	return (
		<div className='relative w-full [--slide-height:max-content] [--slide-size:100%] [--slide-spacing:12px] md:[--slide-size:max-content] md:[--slide-spacing:32px]'>
			<div ref={emblaRef}>
				<div className='ml-[calc(var(--slide-spacing)*-1)] flex touch-pan-y backface-hidden'>
					{cards.map((card, idx) => (
						<div
							className='relative min-w-0 flex-[0_0_var(--slide-size)] border-2 border-red-500 pl-[var(--slide-spacing)]'
							key={newId() + "-" + idx}>
							<CarouselCard {...card} />
						</div>
					))}
				</div>
			</div>

			<CardsCarouselButtons emblaApi={emblaApi} />
		</div>
	)
}

const CardsCarouselButtons = ({ emblaApi }: { emblaApi?: EmblaCarouselType }) => {
	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

	return (
		<div className='absolute -bottom-20 flex w-full items-center justify-between'>
			<button
				className='transition-custom z-[1] h-max w-max cursor-pointer rounded-full bg-[#f0f0f8] p-1.5 text-primary ring-0 ring-primary-200 flex-center hover:text-primary-700 hover:ring-4 disabled:pointer-events-none disabled:opacity-40'
				type='button'
				onClick={onPrevButtonClick}
				disabled={prevBtnDisabled}>
				<IonIosArrowBack className='h-9 w-9' />
			</button>

			<button
				className='transition-custom z-[1] h-max w-max cursor-pointer rounded-full bg-[#f0f0f8] p-1.5 text-primary ring-0 ring-primary-200 flex-center hover:text-primary-700 hover:ring-4 disabled:pointer-events-none disabled:opacity-40'
				type='button'
				onClick={onNextButtonClick}
				disabled={nextBtnDisabled}>
				<IonIosArrowForward className='h-9 w-9' />
			</button>
		</div>
	)
}
