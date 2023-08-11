import { Button } from "@/comps/Button"
import { MotionElement } from "@/comps/MotionElement"
import { PATHS } from "@/constants"
import { slideUp, variantPresets, viewport } from "@/lib/framer-motion/variants"

import FaHome from "~icons/fa/home"

export default function NotFound() {
	return (
		<div className='min-h-screen py-20 flex-center'>
			<MotionElement
				{...variantPresets}
				{...slideUp}
				viewport={viewport}
				className='mb-8 h-max flex-col gap-4 text-center flex-center'>
				<h3 className='text-[120px] font-extrabold leading-[24rem] text-gray-200 md:text-[22rem]'>404</h3>
				<p className='text-2xl font-bold text-black md:text-3xl'>You have found a secret place.</p>
				<p className='mx-auto max-w-lg text-gray-500'>
					Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to
					another URL.
				</p>

				<Button
					as='Link'
					variant='primary'
					href={PATHS.HOME}
					rightIcon={<FaHome />}
					className='transition-custom rounded-md bg-gradient-to-r from-primary to-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-custom hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'>
					Go back home
				</Button>
			</MotionElement>
		</div>
	)
}
