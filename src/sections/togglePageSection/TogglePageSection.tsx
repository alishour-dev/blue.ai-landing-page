import { slideLeftUp, slideRightUp } from "@/lib/framer-motion/variants"

import { ToggleButton, type ToggleButtonData } from "./ToggleButton"

import IonIosArrowBack from "~icons/ion/ios-arrow-back"
import IonIosArrowForward from "~icons/ion/ios-arrow-forward"

export type TogglePageSectionData = Record<"previousPage" | "nextPage", ToggleButtonData>

export function TogglePageSection({ previousPage, nextPage }: TogglePageSectionData) {
	return (
		<>
			<ToggleButton {...previousPage} variant={slideRightUp} Icon={IonIosArrowBack} />
			<ToggleButton {...nextPage} direction='flex-row-reverse' variant={slideLeftUp} Icon={IonIosArrowForward} />
		</>
	)
}
