import { twMerge } from "tailwind-merge"
import { v4 as newId } from "uuid"

import type { ComponentClassNames } from "@/layouts"

import { FeatureCard, type FeatureCardData } from "./FeatureCard"

export interface FeaturesCardsSectionData {
	cards: FeatureCardData[]
	classNames?: ComponentClassNames
}

export const FeaturesCardsSection = ({ cards, classNames }: FeaturesCardsSectionData) => (
	<div className={twMerge("grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3", classNames?.gridClassName)}>
		{cards?.map((card) => <FeatureCard key={newId()} {...card} className={classNames?.cardClassName} />)}
	</div>
)
