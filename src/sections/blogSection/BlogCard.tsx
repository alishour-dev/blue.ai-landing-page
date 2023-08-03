import Image from "next/image"
import { twMerge } from "tailwind-merge"

import { MotionElement } from "@/comps"
import { slideLeftUp, slideRightBtm } from "@/lib/framer-motion/variants"
import type { ImgPropsWithoutDimensions } from "@/types"

export interface BlogCardData extends Record<"imgProps" | "logoProps", Omit<ImgPropsWithoutDimensions, "alt">> {
	customer: string
	details: Record<string, string>
}

export const BlogCard = ({ customer, details, imgProps, logoProps }: BlogCardData) => (
	<MotionElement
		{...slideLeftUp}
		viewport={{ once: true }}
		className='my-auto h-max min-w-[275px] max-w-[400px] flex-[0.8] self-center rounded-3xl p-3 shadow-lg sm:my-2 sm:max-w-[720px] md:p-4 lg:p-7'>
		{/* upper section of card  */}
		<div className='flex h-max w-full flex-col gap-4 md:flex-row'>
			<Image
				width={240}
				height={150}
				src={imgProps.src}
				alt={`image corrusponding to ${customer} services`}
				loading='lazy'
				placeholder='blur'
				blurDataURL={imgProps.blurDataURL}
				className='max-w-unset w-full rounded-xl object-cover md:max-w-[50%]'
				quality={100}
			/>
			<div className='flex-col gap-3 flex-center'>
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
					/>
				</div>
				<MotionElement as='p' {...slideRightBtm} className='text-base text-[#96999C] md:text-lg'>
					<span className='font-light text-inherit'>CUSTOMER: </span>
					<span className='font-bold text-primary'>{customer}</span>
				</MotionElement>
			</div>
		</div>

		{/* bottom section of card  */}
		<div className='h-max w-full flex-col flex-wrap justify-between md:flex-row '>
			{Object?.entries(details)?.map((entry, idx) => (
				<div
					key={idx}
					className={twMerge(
						"flex h-full w-full min-w-[190px] max-w-full flex-col px-5 pt-6 text-base md:text-lg",
						idx < Object?.entries(details).length - 1 &&
							"relative hidden before:absolute before:right-0 before:top-1/2 before:h-[70%] before:w-[1px] before:-translate-y-1/2 before:bg-[#d9d9da] before:content-[''] 2xl:block"
					)}>
					<MotionElement
						as='h1'
						{...slideRightBtm}
						className='w-max pb-2 font-light'
						style={{ fontSize: "inherit", lineHeight: "inherit" }}>
						{entry[0]?.toUpperCase()}:
					</MotionElement>
					<MotionElement
						as='p'
						{...slideRightBtm}
						className="font-bold text-['#39393C']"
						style={{ fontSize: "inherit", lineHeight: "inherit" }}>
						{entry[1]}
					</MotionElement>
				</div>
			))}
		</div>
	</MotionElement>
)
