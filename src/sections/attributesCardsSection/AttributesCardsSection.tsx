import { AttributesCard, type AttributesCardData } from "./AttributesCard"

export interface AttributesCardsSectionData {
	cards: AttributesCardData[]
}

export function AttributesCardsSection({ cards }: AttributesCardsSectionData) {
	return (
		<div className='mx-auto grid w-max max-w-[1050px] grid-cols-1 gap-2 lg:max-w-[1570px] lg:grid-cols-2 lg:gap-3 2xl:max-w-full 2xl:gap-4 2xl:lg:grid-cols-3'>
			{cards?.map((card) => <AttributesCard key={card?.label} {...card} />)}
		</div>
	)
}
