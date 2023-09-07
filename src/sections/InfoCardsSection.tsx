import { ShortInfoCard, type ShortInfoCardData } from "@/comps/ShortInfoCard"
import type { ComponentClassNames } from "@/layouts/section"

export interface InfoCardsSectionData {
	cards: ShortInfoCardData[]
	classNames?: ComponentClassNames
}

export function InfoCardsSection({ cards, classNames }: InfoCardsSectionData) {
	return (
		<div className='flex w-full flex-col flex-nowrap justify-between gap-8 md:flex-row md:gap-0 [&>div]:flex-1'>
			{cards?.map((card) => <ShortInfoCard key={card?.label} {...card} className={classNames?.cardClassName} />)}
		</div>
	)
}
