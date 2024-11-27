import dynamic from "next/dynamic"
import { useMemo } from "react"
import { twMerge } from "tailwind-merge"
import { v4 as newId } from "uuid"

import { MotionElement } from "@/comps/MotionElement"
import { basicStagger } from "@/lib/framer-motion/variants"
import { AccordionFlexSection, type AccordionFlexSectionData } from "@/sections/AccordionFlexSection"
import { AttributesCardsSection, type AttributesCardsSectionData } from "@/sections/attributesCardsSection"
import { BlogSection, type BlogSectionData } from "@/sections/blogSection"
import { CardsCarouselSection, type CardsCarouselSectionData } from "@/sections/cardsCarouselSection"
import { ContactFormSection } from "@/sections/ContactFormSection"
import { DualSections, type DualSectionsData } from "@/sections/DualSections"
import { FeaturesCardsSection, type FeaturesCardsSectionData } from "@/sections/featuresCardsSection"
import { FlexSection, type FlexSectionData } from "@/sections/FlexSection"
import { HeroSection, type HeroSectionData } from "@/sections/HeroSection"
import { ImageSection, type ImageSectionData } from "@/sections/ImageSection"
import { InfoCardsSection, type InfoCardsSectionData } from "@/sections/InfoCardsSection"
import { MapSection, type MapSectionData } from "@/sections/MapSection"
import { MarqueeSection, type MarqueeSectionData } from "@/sections/marqueeSection"
import { PageHeaderSection, type PageHeaderSectionData } from "@/sections/PageHeaderSection"
import { type SlidesCarouselData, SlidesCarouselSection } from "@/sections/SlidesCarouselSection"
import { StatsSection, type StatsSectionData } from "@/sections/StatsSection"
import { TogglePageSection, type TogglePageSectionData } from "@/sections/togglePageSection"

const Header = dynamic(() => import("./Header").then((mod) => mod.Header))
const Footer = dynamic(() => import("./Footer").then((mod) => mod.Footer))

// Defining the shape of the body prop for each type
interface ComponentProps {
	[SECTION_TYPE.ACCORDION_FLEX_SECTION]: AccordionFlexSectionData
	[SECTION_TYPE.ATTRIBUTES_CARDS_SECTION]: AttributesCardsSectionData
	[SECTION_TYPE.BLOG_SECTION]: BlogSectionData
	[SECTION_TYPE.CARDS_CAROUSEL_SECTION]: CardsCarouselSectionData
	[SECTION_TYPE.CONTACT_FORM_SECTION]: any
	[SECTION_TYPE.DUAL_SECTIONS]: DualSectionsData
	[SECTION_TYPE.FEATURES_CARDS_SECTION]: FeaturesCardsSectionData
	[SECTION_TYPE.FLEX_SECTION]: FlexSectionData
	[SECTION_TYPE.HERO_SECTION]: HeroSectionData
	[SECTION_TYPE.IMAGE_SECTION]: ImageSectionData
	[SECTION_TYPE.SLIDES_CAROUSEL_SECTION]: SlidesCarouselData
	[SECTION_TYPE.INFO_CARDS_SECTION]: InfoCardsSectionData
	[SECTION_TYPE.MARQUEE_SECTION]: MarqueeSectionData
	[SECTION_TYPE.MAP_SECTION]: MapSectionData
	[SECTION_TYPE.PAGE_HEADER_SECTION]: PageHeaderSectionData
	[SECTION_TYPE.STATS_SECTION]: StatsSectionData
	[SECTION_TYPE.TEXT_SECTION]: any
	[SECTION_TYPE.TOGGLE_PAGE_SECTION]: TogglePageSectionData
}

export const SECTION_TYPE = {
	ACCORDION_FLEX_SECTION: "ACCORDION_FLEX_SECTION",
	ATTRIBUTES_CARDS_SECTION: "ATTRIBUTES_CARDS_SECTION",
	BLOG_SECTION: "BLOG_SECTION",
	CARDS_CAROUSEL_SECTION: "CARDS_CAROUSEL_SECTION",
	CONTACT_FORM_SECTION: "CONTACT_FORM_SECTION",
	DUAL_SECTIONS: "DUAL_SECTIONS",
	FEATURES_CARDS_SECTION: "FEATURES_CARDS_SECTION",
	FLEX_SECTION: "FLEX_SECTION",
	HERO_SECTION: "HERO_SECTION",
	SLIDES_CAROUSEL_SECTION: "SLIDES_CAROUSEL_SECTION",
	IMAGE_SECTION: "IMAGE_SECTION",
	INFO_CARDS_SECTION: "INFO_CARDS_SECTION",
	MAP_SECTION: "MAP_SECTION",
	MARQUEE_SECTION: "MARQUEE_SECTION",
	PAGE_HEADER_SECTION: "PAGE_HEADER_SECTION",
	STATS_SECTION: "STATS_SECTION",
	TEXT_SECTION: "TEXT_SECTION",
	TOGGLE_PAGE_SECTION: "TOGGLE_PAGE_SECTION",
} as const

export type SectionType = keyof typeof SECTION_TYPE

// Components to be rendered based on passed TYPE
const sections: Record<SectionType, React.ElementType<any> | undefined> = {
	[SECTION_TYPE.ACCORDION_FLEX_SECTION]: AccordionFlexSection,
	[SECTION_TYPE.ATTRIBUTES_CARDS_SECTION]: AttributesCardsSection,
	[SECTION_TYPE.BLOG_SECTION]: BlogSection,
	[SECTION_TYPE.CARDS_CAROUSEL_SECTION]: CardsCarouselSection,
	[SECTION_TYPE.CONTACT_FORM_SECTION]: ContactFormSection,
	[SECTION_TYPE.DUAL_SECTIONS]: DualSections,
	[SECTION_TYPE.FEATURES_CARDS_SECTION]: FeaturesCardsSection,
	[SECTION_TYPE.FLEX_SECTION]: FlexSection,
	[SECTION_TYPE.HERO_SECTION]: HeroSection,
	[SECTION_TYPE.SLIDES_CAROUSEL_SECTION]: SlidesCarouselSection,
	[SECTION_TYPE.INFO_CARDS_SECTION]: InfoCardsSection,
	[SECTION_TYPE.IMAGE_SECTION]: ImageSection,
	[SECTION_TYPE.MARQUEE_SECTION]: MarqueeSection,
	[SECTION_TYPE.PAGE_HEADER_SECTION]: PageHeaderSection,
	[SECTION_TYPE.STATS_SECTION]: StatsSection,
	[SECTION_TYPE.MAP_SECTION]: MapSection,
	[SECTION_TYPE.TEXT_SECTION]: undefined,
	[SECTION_TYPE.TOGGLE_PAGE_SECTION]: TogglePageSection,
}

export type SectionHeaderFooterType = { content: string; className?: string }

export type ComponentClassNames = Partial<
	Record<"sectionClassName" | "innerClassName" | "cardClassName" | "gridClassName", string>
>

export type SectionProps = {
	[T in SectionType]: {
		type: T
		header?: SectionHeaderFooterType
		footer?: SectionHeaderFooterType
		body: ComponentProps[T] & { classNames?: ComponentClassNames }
	}
}

export function Section({ type, header, body, footer }: SectionProps[SectionType]) {
	const Component = useMemo<React.ElementType | undefined>(() => sections[type], [type])

	return (
		<section
			id={type === "MAP_SECTION" ? "where-we-are" : undefined}
			className={twMerge(
				"relative flex flex-col gap-[50px] py-[50px] sm:gap-[60px] sm:py-[60px] md:gap-[70px] md:py-[70px]",
				body?.classNames?.sectionClassName,
				type === "PAGE_HEADER_SECTION" && "h-max min-h-[371px] !py-0",
				type === "MAP_SECTION" && "gap-[50px] md:gap-[70px] lg:gap-8",
				(type === "HERO_SECTION" || type === "CARDS_CAROUSEL_SECTION") && "baseHeight:min-h-[calc(100vh-60px)]"
			)}>
			{!!header?.content.length && <Header {...header} />}

			{!!Component && (
				<MotionElement
					key={newId()}
					{...basicStagger({ staggerChildren: 0.1 })}
					className={twMerge(
						"inner-wrapper mx-auto w-full max-w-[1920px] flex-1",
						body?.classNames?.innerClassName,
						type === "HERO_SECTION" && "mx-auto max-w-[1450px] pb-20 flex-center",
						type === "FLEX_SECTION" && "cards" in body && "flex-col gap-14 flex-center md:gap-6 lg:gap-16",
						type === "DUAL_SECTIONS" && "w-full flex-col gap-14 !px-0 flex-center",
						type === "STATS_SECTION" && "flex-col gap-12 flex-center md:flex-row md:justify-between md:gap-6",
						type === "BLOG_SECTION" && "flex flex-col flex-wrap items-start justify-center gap-10 sm:flex-row-reverse",
						type === "SLIDES_CAROUSEL_SECTION" && "px-4 sm:!px-0",
						type === "CARDS_CAROUSEL_SECTION" && "overflow-hidden pb-24 pt-2",
						type === "PAGE_HEADER_SECTION" && "flex-col px-4 py-2 flex-center",
						type === "TOGGLE_PAGE_SECTION" && "mx-auto flex !max-w-[800px] justify-between gap-6",
						type === "MAP_SECTION" &&
							"flex w-full flex-col items-center justify-evenly gap-[52px] px-2 sm:px-0 md:flex-row md:gap-6"
					)}>
					<Component key={newId()} {...body} />
				</MotionElement>
			)}

			{!!footer?.content?.length && <Footer {...footer} />}
		</section>
	)
}
