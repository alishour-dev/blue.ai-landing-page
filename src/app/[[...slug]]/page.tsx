import type { Metadata } from "next"

import { BottomRightIcon } from "@/comps/BottomRightIcon"
import { PATHS } from "@/constants"
import { Section, type SectionType, type SectionProps } from "@/layouts/section"
import { allPagesData } from "@/public/data"

type Params = { slug?: string[] }

export const dynamicParams = false

function getPageData(params: Params) {
	// if no params.slug was given, then its rendering home page with path '/'
	const slug = !params?.slug ? ["/"] : `/${params.slug.join("/")}`

	return allPagesData[slug as keyof typeof allPagesData] || {}
}

export function generateStaticParams() {
	// getting all available paths from server
	const allPaths = Object.values(PATHS)

	return allPaths?.map((slug) => ({ slug: slug.split("/")?.filter(Boolean) }))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
	const { metaData } = getPageData(params)

	return metaData
}

export default function Page({ params }: { params: Params }) {
	const { sections } = getPageData(params)

	return (
		<div className='relative mt-[60px]'>
			{sections?.map((section: SectionProps[SectionType], idx: number) => <Section key={idx} {...section} />)}

			<BottomRightIcon />
		</div>
	)
}
