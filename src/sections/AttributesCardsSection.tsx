import { v4 as newId } from "uuid"

import { MotionElement, MotionImage } from "@/comps"
import { scaleUp, slideRightBtm } from "@/lib/framer-motion/variants"
import type { ImgPropsWithoutDimensions } from "@/types"

import HeroiconsCheck from "~icons/heroicons/check"

export interface AttributesCardsSectionData {
	cards: {
		label: string
		attributes: string[]
		imgProps: ImgPropsWithoutDimensions
	}[]
}

export const AttributesCardsSection = ({ cards }: AttributesCardsSectionData) => (
	<div className='mx-auto grid w-max max-w-[1000px] grid-cols-1 gap-2 sm:max-w-[1570px] sm:grid-cols-2 sm:gap-3 md:max-w-full md:grid-cols-3 md:gap-4'>
		{cards?.map(({ attributes, imgProps, label }) => (
			<MotionElement
				key={newId()}
				{...slideRightBtm}
				className={`pointer-events-none mx-auto flex h-[320px] w-full max-w-[482px] bg-white bg-cover bg-[50%_50%] bg-no-repeat px-4 pb-4 pt-[140px] prevent-selection sm:h-[395px] sm:px-[30px] sm:pb-2 sm:pt-[170px]`}>
				{/* small icon image  */}
				<MotionImage
					{...scaleUp}
					width={48}
					height={48}
					src={imgProps.src}
					alt={imgProps.alt}
					placeholder='blur'
					blurDataURL={imgProps.blurDataURL}
					className='relative z-[1]'
				/>

				{/* bottom section  */}
				<div className='felx-col relative z-[1] flex gap-3'>
					<h3 className='mx-unset pl-3 text-2xl font-normal tracking-wider text-primary sm:pl-4 sm:text-3xl '>
						{label}
					</h3>
					{attributes?.map((item) => (
						<div key={item} className='flex items-center gap-2 text-base sm:gap-3 sm:text-xl'>
							<span className='flex'>
								<HeroiconsCheck className='text-base text-[#9eebaf] sm:text-xl' />
							</span>
							<p className='text-base text-[#6D6D6D] sm:text-xl'>{item}</p>
						</div>
					))}
				</div>
			</MotionElement>
		))}
	</div>
)
