import { MotionElement } from "@/comps/MotionElement"
import { MotionImage } from "@/comps/MotionImage"
import { scaleUp, slideRightBtm } from "@/lib/framer-motion/variants"
import type { ImgPropsWithoutDimensions } from "@/types"

import HeroiconsCheck from "~icons/heroicons/check"

export interface AttributesCardData {
	label: string
	attributes: string[]
	imgProps: ImgPropsWithoutDimensions
}

export function AttributesCard({ attributes, imgProps, label }: AttributesCardData) {
	return (
		<MotionElement
			{...slideRightBtm}
			style={{ background: cardBackground }}
			className={`pointer-events-none mx-auto flex h-[260px] w-full max-w-[482px] !bg-cover px-6 pb-2 pt-[120px] prevent-selection md:h-[395px] md:px-[30px] md:pb-2 md:pt-[170px]`}>
			{/* small icon image  */}
			<MotionImage
				{...scaleUp}
				width={48}
				height={48}
				src={imgProps.src}
				alt={imgProps.alt}
				placeholder='blur'
				blurDataURL={imgProps.blurDataURL}
				className='relative z-[1] h-max w-8 md:w-[48px]'
			/>
			{/* right text section  */}
			<div className='relative z-[1] flex flex-col items-start justify-start gap-2 md:gap-[14px]'>
				<h3 className='pl-[10px] text-xl font-normal tracking-wider text-primary md:pl-[18px] md:text-[31px] md:leading-10'>
					{label}
				</h3>
				{attributes?.map((item) => (
					<div key={item} className='flex items-center gap-2 md:gap-[14px]'>
						<HeroiconsCheck className='text-sm text-[#9eebaf] md:text-[19px] md:leading-[24px]' />
						<p className='truncate text-sm text-[#6D6D6D] md:text-[19px] md:leading-[24px]'>{item}</p>
					</div>
				))}
			</div>
		</MotionElement>
	)
}

const cardBackground: React.CSSProperties["background"] = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 518 424.977"><defs><filter id="a" width="518" height="421.76" x="0" y="3.217" filterUnits="userSpaceOnUse"><feOffset/><feGaussianBlur result="blur" stdDeviation="6"/><feFlood flood-opacity=".122"/><feComposite in2="blur" operator="in"/><feComposite in="SourceGraphic"/></filter><filter id="b" width="247.939" height="130.099" x="135" y="0" filterUnits="userSpaceOnUse"><feOffset dy="3"/><feGaussianBlur result="blur-2" stdDeviation="5"/><feFlood flood-opacity=".161"/><feComposite in2="blur-2" operator="in"/><feComposite in="SourceGraphic"/></filter></defs><g data-name="Group 39"><path fill="%236abdea" d="M126 31.243h265.966c-3.426 71.347-61.655 128.131-132.983 128.131S129.426 102.59 126 31.243Z" data-name="Intersection 1"/><g filter="url(%23a)"><path fill="%23fff" d="M485 406.98H33a15 15 0 0 1-15-15V36.22a15 15 0 0 1 15-15h97.737c.405 3.8.983 7.592 1.717 11.271A129.317 129.317 0 0 0 258.907 136.27 128.608 128.608 0 0 0 387.073 21.22H485a15 15 0 0 1 15 15v355.76a15 15 0 0 1-15 15Z" data-name="Subtraction 1"/></g><g filter="url(%23b)"><path fill="%23fff" d="M150 12h217.939c-3.631 55.877-51.031 100.1-108.968 100.1S153.632 67.877 150 12Z" data-name="Intersection 2"/></g></g></svg>') no-repeat 50% 50%`
