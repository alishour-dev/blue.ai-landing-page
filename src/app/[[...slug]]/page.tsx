import { BottomRightIcon } from "@/comps"
import { Section, SectionProps, type SectionType } from "@/layouts"
import { allPagesData } from "@/public/data"

type Params = { slug?: string[] }

export const dynamicParams = false

export function generateStaticParams() {
	// getting all available paths from server
	const allPaths = Object.keys(allPagesData)

	return allPaths?.map((slug) => ({ slug: slug.split("/")?.filter(Boolean) }))
}

function getPageData(params: Params) {
	// if no params.slug was given, then its rendering home page with path '/'
	const slug = !params?.slug ? ["/"] : `/${params.slug.join("/")}`

	return allPagesData[slug as keyof typeof allPagesData] || {}
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
