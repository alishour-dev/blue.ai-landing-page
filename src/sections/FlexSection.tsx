import { v4 as newId } from "uuid"

import { MdFlexCard, type MdCardProps } from "@/comps"

export type FlexSectionData = MdCardProps | { cards: MdCardProps[] }

export const FlexSection = (props: FlexSectionData) => (
	<>
		{"cards" in props ? (
			props.cards.map((props, idx) => <MdFlexCard key={newId() + "-" + idx} {...props} />)
		) : (
			<MdFlexCard {...props} key={newId()} />
		)}
	</>
)
