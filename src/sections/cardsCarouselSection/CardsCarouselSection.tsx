"use client"

import useEmblaCarousel from "embla-carousel-react"

import { CarouselButtons } from "./CarouselButtons"
import { CarouselCard, type CarouselCardData } from "./CarouselCard"

export interface CardsCarouselSectionData {
	cards: CarouselCardData[]
}

export function CardsCarouselSection({ cards }: CardsCarouselSectionData) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ containScroll: "trimSnaps", align: "start" })

	return (
		// prettier-ignore
		<div className='relative w-full [--slide-height:max-content] [--slide-size:100%] [--slide-spacing:12px] md:[--slide-size:max-content] md:[--slide-spacing:32px]'>
			<div ref={emblaRef}>
				<div className='ml-[calc(var(--slide-spacing)*-1)] flex touch-pan-y backface-hidden'>
					{cards.map((card, idx) => (
						<div
							className='relative min-w-0 flex-[0_0_var(--slide-size)] pl-[var(--slide-spacing)]'
							key={card?.label + "-" + idx}>
							<CarouselCard {...card} />
						</div>
					))}
				</div>
			</div>

			<CarouselButtons emblaApi={emblaApi} />
		</div>
	)
}
