import { v4 as newId } from "uuid"

import { MdFlexCard, type MdCardProps } from "@/comps/MdFlexCard"

export type FlexSectionData = MdCardProps | { cards: MdCardProps[] }

export function FlexSection(props: FlexSectionData) {
	return (
		<>
			{"cards" in props ? (
				props.cards.map((props, idx) => <MdFlexCard key={newId() + "-" + idx} {...props} />)
			) : (
				<MdFlexCard {...props} key={newId()} />
			)}
		</>
	)
}
