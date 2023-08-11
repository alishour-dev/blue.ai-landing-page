"use client"

import Link from "next/link"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

import { MotionElement } from "@/comps/MotionElement"
import { slideLeftUp } from "@/lib/framer-motion/variants"

import { Map, type Country, type LocationProps } from "./Map"

import IonIosLocation from "~icons/ion/ios-location"

export interface MapSectionData {
	locations: LocationProps[]
}

export function MapSection({ locations }: MapSectionData) {
	// When user hovers on location (title), location on map automatically scales up
	const [hoveredPin, setHoveredPin] = useState<Country | null>(null)

	return (
		<>
			<Map hoveredPin={hoveredPin} setHoveredPin={setHoveredPin} locations={locations} />

			{/* Location Titles Section  */}
			<div className='grid h-max grid-cols-1 gap-5 px-2 xs:grid-cols-2 xs:gap-6 md:p-0 lg:gap-y-8'>
				{locations?.map(({ address, countryTitle, href, value }, i) => (
					<MotionElement
						className='flex max-w-full flex-col gap-0.5 xs:max-w-[320px] xs:gap-1'
						key={i}
						{...slideLeftUp}>
						<Link
							href={href}
							passHref
							className={twMerge(
								"transition-custom flex gap-1 text-primary no-underline will-change-transform [transform:translateY(-2px)_scale(1.05)] hover:text-secondary-700 md:gap-2",
								hoveredPin === value && "text-secondary-700 [transform:translateY(-2px)_scale(1.05)]"
							)}
							onMouseEnter={() => setHoveredPin(value)}
							onMouseLeave={() => setHoveredPin(null)}>
							<IonIosLocation className='h-5 w-5 shrink-0 text-secondary-800 lg:h-6 lg:w-6' />
							<h2 color='inherit' className='text-lg font-black leading-6 lg:text-[24px] lg:leading-[26px]'>
								{countryTitle}
							</h2>
						</Link>
						<p className='pl-4 text-sm text-[#707377] lg:pl-[30px] lg:text-base lg:leading-[22px]'>{address}</p>
					</MotionElement>
				))}
			</div>
		</>
	)
}
