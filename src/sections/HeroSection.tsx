import type { ImageProps } from "next/image"
import Link from "next/link"

import { MotionElement } from "@/comps/MotionElement"
import { MotionImage } from "@/comps/MotionImage"
import { UnderlinedBtn } from "@/comps/UnderlinedBtn"
import { fade, slideLeftUp, slideRightBtm } from "@/lib/framer-motion/variants"
import type { LinkType } from "@/types"

export interface HeroSectionData {
	label: string[]
	content: string
	buttons: LinkType[]
	imgProps: ImageProps
}

export function HeroSection({ imgProps, content, buttons, label }: HeroSectionData) {
	return (
		<>
			{/* Inner Wrapper  */}
			<div className='relative z-[1] mx-auto block w-full max-w-[650px] gap-8 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-2'>
				<div
					// style={{ gridArea: "span 1 / span 2" }}
					className='col-span-2 mb-4 w-full text-4xl font-extrabold leading-10 xs:mb-[30px] xs:text-6xl xs:leading-[1] md:mb-0'>
					{label?.map((txt) => (
						<MotionElement
							as='span'
							key={txt}
							{...slideRightBtm}
							className='gradient-primary block animate-gradient-animation bg-gradient-to-r bg-[length:250%_auto] bg-clip-text !text-transparent'>
							{txt}
						</MotionElement>
					))}
				</div>

				<div className='mb-6 h-max max-w-[576px] self-center xs:mb-12 lg:mb-0'>
					<MotionElement as='p' {...slideRightBtm} className='text-base text-[#4b5563] xs:text-lg'>
						{content}
					</MotionElement>

					{/* Buttons Wrapper  */}
					<MotionElement className='mt-8 flex flex-col items-center gap-6 xs:flex-row' {...slideRightBtm}>
						<Link
							href={buttons[0]?.href}
							className='group relative inline-block w-full rounded-sm transition-transform duration-300 will-change-transform focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[14px] focus-visible:outline-primary active:scale-[99%] xs:w-max'>
							<span className='gradient-primary-light absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[4px] bg-gradient-to-r transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0' />

							<span className='relative inline-block w-full rounded-[4px] border-2 border-current px-8 py-3 text-center text-sm font-bold uppercase tracking-widest text-black will-change-transform xs:w-max'>
								{buttons[0]?.label}
							</span>
						</Link>

						<UnderlinedBtn key={buttons[1]?.label} href={buttons[1]?.href}>
							{buttons[1]?.label}
						</UnderlinedBtn>
					</MotionElement>
				</div>

				<MotionImage
					width={imgProps.width}
					height={imgProps.height}
					src={imgProps.src}
					alt={imgProps.alt}
					placeholder='blur'
					blurDataURL={imgProps.blurDataURL}
					className='h-auto w-full max-w-[513px] self-end justify-self-center object-cover drop-shadow-[0_0_3px_rgba(0,0,0,0.2)] filter'
					priority
					{...slideLeftUp}
					quality={100}
					sizes='(max-width: 768px) 472px, (max-width: 1200px) 544px, 753px'
				/>
			</div>

			<GridSvg />
			{/* Background Layer  */}
			<MotionElement
				{...fade}
				className='pointer-events-none absolute left-1/2 right-0 top-0 z-0 hidden h-full w-[50vw] overflow-hidden blur-3xl filter prevent-selection before:right-0 before:top-0 before:block before:h-full before:w-[50.0625rem] before:bg-gradient-to-tr before:from-[#ff80b5] before:to-[#9089fc] before:opacity-30 before:content-[""] before:[clip-path:polygon(63.1%_29.5%,100%_17.1%,_76.6%_3%,48.4%_0%,44.6%_4.7%,54.5%_25.3%,59.8%_49%,55.2%_57.8%,44.4%_57.2%,27.8%_47.9%,35.1%_81.5%,0%_97.7%,39.2%_100%,35.2%_81.4%,97.2%_52.8%,63.1%_29.5%)] sm:block'
				aria-hidden='true'
			/>
		</>
	)
}

function GridSvg() {
	return (
		<MotionElement
			as='svg'
			{...fade}
			className='mask absolute left-0 top-0 -z-10 h-full max-h-[calc(100vh-60px)] w-full stroke-gray-200 [-webkit-mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]'
			aria-hidden='true'>
			<defs>
				<pattern
					id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
					width='200'
					height='200'
					x='50%'
					y='-1'
					patternUnits='userSpaceOnUse'>
					<path d='M.5 200V.5H200' fill='none' />
				</pattern>
			</defs>
			<svg x='50%' y='-1' className='overflow-visible fill-[#f9fafb]'>
				<path
					d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
					strokeWidth='0'
				/>
			</svg>
			<rect width='100%' height='100%' strokeWidth='0' fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)' />
		</MotionElement>
	)
}
