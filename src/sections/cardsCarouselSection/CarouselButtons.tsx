import type { EmblaCarouselType } from "embla-carousel-react"

import { MotionElement } from "@/comps/MotionElement"
import { usePrevNextButtons } from "@/lib/embla/usePrevNextButtons"
import { slideUp } from "@/lib/framer-motion/variants"

import IonIosArrowBack from "~icons/ion/ios-arrow-back"
import IonIosArrowForward from "~icons/ion/ios-arrow-forward"

export function CarouselButtons({ emblaApi }: { emblaApi?: EmblaCarouselType }) {
	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

	return (
		<MotionElement {...slideUp} className='absolute -bottom-20 flex w-full items-center justify-between'>
			<button
				className='transition-custom z-[1] h-max w-max cursor-pointer rounded-full bg-[#f0f0f8] p-1.5 text-primary ring-0 ring-primary-200 flex-center hover:text-primary-700 hover:ring-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-40'
				type='button'
				onClick={onPrevButtonClick}
				disabled={prevBtnDisabled}>
				<IonIosArrowBack className='h-9 w-9' />
			</button>

			<button
				className='transition-custom z-[1] h-max w-max cursor-pointer rounded-full bg-[#f0f0f8] p-1.5 text-primary ring-0 ring-primary-200 flex-center hover:text-primary-700 hover:ring-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-40'
				type='button'
				onClick={onNextButtonClick}
				disabled={nextBtnDisabled}>
				<IonIosArrowForward className='h-9 w-9' />
			</button>
		</MotionElement>
	)
}
