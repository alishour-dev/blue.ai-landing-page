import { twMerge } from "tailwind-merge"
import { v4 as newId } from "uuid"

import type { ComponentClassNames } from "@/layouts/section"

import { FeatureCard, type FeatureCardData } from "./FeatureCard"

export interface FeaturesCardsSectionData {
	cards: FeatureCardData[]
	classNames?: ComponentClassNames
}

export function FeaturesCardsSection({ cards, classNames }: FeaturesCardsSectionData) {
	return (
		<div className={twMerge("grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3", classNames?.gridClassName)}>
			{cards?.map((card) => <FeatureCard key={newId()} {...card} className={classNames?.cardClassName} />)}
		</div>
	)
}
