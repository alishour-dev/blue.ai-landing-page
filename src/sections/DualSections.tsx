import { twMerge } from "tailwind-merge"

import { FlexCard } from "@/comps/FlexCard"
import { type MdCardProps } from "@/comps/MdFlexCard"
import { MotionElement } from "@/comps/MotionElement"
import { ShortInfoCard, type ShortInfoCardData } from "@/comps/ShortInfoCard"
import { MarkdownWrapper } from "@/layouts/MarkdownWrapper"
import { SECTION_TYPE, type ComponentClassNames } from "@/layouts/section"
import { slideLeftUp } from "@/lib/framer-motion/variants"

export interface DualSectionsData {
	sections: [
		{
			type: typeof SECTION_TYPE.FLEX_SECTION
			header?: { content: string; className?: string }
			body: { classNames?: ComponentClassNames } & (MdCardProps | { cards: MdCardProps[] })
		},
		{
			type: typeof SECTION_TYPE.INFO_CARDS_SECTION
			header?: { content: string; className?: string }
			body: { cards: ShortInfoCardData[]; classNames?: ComponentClassNames }
		},
	]
}

export function DualSections({ sections }: DualSectionsData) {
	return (
		<>
			{sections?.map((section, idx) => {
				if (section?.type === SECTION_TYPE.FLEX_SECTION) {
					if ("cards" in section.body) return

					return (
						<div className={twMerge("w-full", section?.body?.classNames?.sectionClassName)} key={section?.type + idx}>
							<FlexCard
								flexDirection='flex-row-reverse'
								imgProps={section.body.imgProps}
								className='max-w-[1920px] p-4'>
								<MotionElement {...slideLeftUp} className='bg-white p-4'>
									<MarkdownWrapper
										components={{
											h2: ({ children }) => <h2 className='common-h2 mb-1'>{children}</h2>,
											p: ({ children }) => <p className='common-p mt-3 sm:mt-4'>{children}</p>,
										}}>
										{section.body.content}
									</MarkdownWrapper>
								</MotionElement>
							</FlexCard>
						</div>
					)
				}

				if (section?.type === SECTION_TYPE.INFO_CARDS_SECTION) {
					return (
						<div key={section?.type + idx} className='inner-wrapper grid w-full grid-cols-1 gap-3 md:grid-cols-3'>
							{section.body.cards?.map((card) => (
								<ShortInfoCard key={card?.label} {...card} className={section?.body?.classNames?.cardClassName} />
							))}
						</div>
					)
				}

				return
			})}
		</>
	)
}
