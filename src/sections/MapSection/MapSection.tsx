"use client"

import Link from "next/link"
import { useState } from "react"

import { MotionElement } from "@/comps"
import { slideLeftUp } from "@/lib/framer-motion/variants"

import { Map, type Country, type LocationProps } from "./Map"

import IonIosLocation from "~icons/ion/ios-location"

export interface MapSectionData {
	locations: LocationProps[]
}

export const MapSection = ({ locations }: MapSectionData) => {
	// When user hovers on location (title), location on map automatically scales up
	const [hoveredPin, setHoveredPin] = useState<Country | null>(null)

	return (
		<>
			<Map
				hoveredPin={hoveredPin}
				setHoveredPin={setHoveredPin}
				className='h-auto w-full !overflow-visible sm:w-auto'
				pinClassName='transition-custom origin-[50%_50%] will-change-transform relative hover:scale-105 hover:-translate-y-[11px]'
				locations={locations}
			/>

			{/* Location Titles Section  */}
			<div className='grid h-max grid-cols-1 gap-x-2 gap-y-8 xs:grid-cols-2'>
				{locations?.map(({ address, countryTitle, href, value }, i) => (
					<MotionElement className='flex max-w-full flex-col gap-1 xs:max-w-[320px]' key={i} {...slideLeftUp}>
						<Link
							href={href}
							passHref
							className='transition-custom flex gap-1 text-primary no-underline will-change-transform hover:-translate-y-[2px] hover:scale-105 hover:text-secondary-700 sm:gap-2'
							onMouseEnter={() => setHoveredPin(value)}
							onMouseLeave={() => setHoveredPin(null)}
							data-active={hoveredPin === value}>
							<IonIosLocation className='text-2xl text-secondary-800' />
							<h2 color='inherit' className='text-xl font-black sm:text-2xl'>
								{countryTitle}
							</h2>
						</Link>
						<p className='pl-[26px] text-sm text-[#707377] sm:pl-[30px] sm:text-base '>{address}</p>
					</MotionElement>
				))}
			</div>
		</>
	)
}
