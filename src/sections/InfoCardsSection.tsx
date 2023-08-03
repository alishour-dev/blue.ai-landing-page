import { MotionElement, ShortInfoCard, type ShortInfoCardData } from "@/comps"
import type { ComponentClassNames } from "@/layouts"

export interface InfoCardsSectionData {
	cards: ShortInfoCardData[]
	classNames?: ComponentClassNames
}

export const InfoCardsSection = ({ cards, classNames }: InfoCardsSectionData) => (
	<MotionElement className='flex w-full flex-col flex-nowrap justify-between gap-8 md:flex-row md:gap-0 [&>div]:flex-1'>
		{cards?.map((card) => <ShortInfoCard key={card?.label} {...card} className={classNames?.cardClassName} />)}
	</MotionElement>
)
