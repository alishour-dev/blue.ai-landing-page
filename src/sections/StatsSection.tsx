import { v4 as newId } from "uuid"

import { AnimatedNumberString } from "@/comps/AnimatedNumberString"
import { MotionElement } from "@/comps/MotionElement"
import { fade } from "@/lib/framer-motion/variants"

export interface StatsSectionData {
	cards: Record<"stat" | "text", string>[]
}

export function StatsSection({ cards }: StatsSectionData) {
	return (
		<>
			{!!cards?.length &&
				cards?.map(({ stat, text }) => (
					<div key={newId()} className='flex w-max max-w-full flex-col items-center'>
						<AnimatedNumberString value={stat} />
						<MotionElement
							as='p'
							{...fade}
							className='mt-2 px-2 text-center text-lg font-bold leading-[22px] tracking-widest text-primary lg:text-xl lg:leading-[26px] xl:mt-3 xl:text-2xl xl:leading-9'>
							{text}
						</MotionElement>
					</div>
				))}
		</>
	)
}
