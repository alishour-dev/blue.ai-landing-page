import Image from "next/image"
import { twMerge } from "tailwind-merge"

import { MotionElement } from "@/comps/MotionElement"
import { slideLeftUp } from "@/lib/framer-motion/variants"
import type { ImgPropsWithoutDimensions } from "@/types"

export interface BlogCardData extends Record<"imgProps" | "logoProps", Omit<ImgPropsWithoutDimensions, "alt">> {
	customer: string
	details: Record<string, string>
}

export function BlogCard({ customer, details, imgProps, logoProps }: BlogCardData) {
	return (
		<MotionElement
			{...slideLeftUp}
			className='my-auto h-max w-full max-w-[350px] flex-[0.8] self-center rounded-3xl p-[14px] shadow-custom md:my-2 md:max-w-[720px] md:self-auto lg:p-4'>
			{/* upper section of card  */}
			<div className='flex h-max w-full flex-col gap-4 lg:flex-row'>
				<Image
					width={240}
					height={150}
					src={imgProps.src}
					alt={`image corrusponding to ${customer} services`}
					loading='lazy'
					placeholder='blur'
					blurDataURL={imgProps.blurDataURL}
					className='aspect-[240/150] max-h-[150px] w-full max-w-none rounded-[14px] object-cover lg:w-[240px] lg:max-w-[50%]'
					quality={100}
				/>
				<div className='flex flex-col gap-[14px] px-2 lg:px-0'>
					<div className='relative z-50 h-[77px] w-full'>
						<Image
							loading='lazy'
							placeholder='blur'
							src={logoProps.src}
							alt={`image corrusponding to ${customer} services`}
							blurDataURL={logoProps.blurDataURL}
							fill
							quality={100}
							sizes='(max-width: 440px) 80vw, (max-width: 768px) 372px, (max-width: 991px) 35vw, 253px'
							className='mx-auto max-w-[255px] object-contain'
						/>
					</div>
					<p className={textClassName}>
						<span className='font-light text-[#96999C]'>CUSTOMER: </span>
						<span className='font-bold text-primary'>{customer}</span>
					</p>
				</div>
			</div>

			{/* bottom section of card  */}
			<div className='mt-4 flex h-max w-full flex-col flex-wrap justify-between lg:flex-row '>
				{Object?.entries(details)?.map((entry, idx) => (
					<div
						key={idx}
						className={twMerge(
							"my-4 flex w-full min-w-[190px] max-w-full flex-1 flex-col gap-0.5 px-2 lg:gap-2 lg:px-5",
							// If item is not last one in array, do not show arrow on the right
							idx < Object?.entries(details).length - 1 &&
								"relative before:absolute before:right-0 before:top-1/2 before:hidden before:h-[70%] before:w-[1px] before:-translate-y-1/2 before:bg-[#d9d9da] before:content-[''] 2xl:before:block"
						)}>
						<h2 className={twMerge("w-max font-light text-[#96999C]", textClassName)}>{entry[0]?.toUpperCase()}:</h2>
						<p className={twMerge("font-bold text-[#39393C]", textClassName)}>{entry[1]}</p>
					</div>
				))}
			</div>
		</MotionElement>
	)
}
const textClassName = "text-base leading-[18px] lg:text-[17px] lg:leading-5 2xl:text-lg 2xl:leading-[22px]"
