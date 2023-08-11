import Link from "next/link"
import { memo } from "react"
import ReactMarkdown from "react-markdown"
import type { PluggableList, ReactMarkdownOptions } from "react-markdown/lib/react-markdown"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import remarkMdx from "remark-mdx"
import { twMerge } from "tailwind-merge"

// eslint-disable-next-line react/display-name
export const MarkdownWrapper = memo<ReactMarkdownOptions>((props) => {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm, remarkMdx, remarkBreaks] as PluggableList}
			{...props}
			components={{
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				a: ({ node, ...props }) => (
					<Link
						{...props}
						className={twMerge(
							props?.className,
							"rounded-sm text-primary no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
						)}
						href={props?.href as string}
					/>
				),
				...props?.components,
			}}
		/>
	)
})
