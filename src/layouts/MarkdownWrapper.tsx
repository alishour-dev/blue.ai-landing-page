import Link from "next/link"
import { memo } from "react"
import ReactMarkdown from "react-markdown"
import type { PluggableList, ReactMarkdownOptions } from "react-markdown/lib/react-markdown"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import remarkMdx from "remark-mdx"
import { twMerge } from "tailwind-merge"

// eslint-disable-next-line react/display-name
export const MarkdownWrapper = memo<ReactMarkdownOptions>((props) => (
	<ReactMarkdown
		remarkPlugins={[remarkGfm, remarkMdx, remarkBreaks] as PluggableList}
		{...props}
		components={{
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			a: ({ node, ...props }) => (
				<Link
					{...props}
					className={twMerge(props?.className, "text-primary no-underline")}
					href={props?.href as string}
				/>
			),
			...props?.components,
		}}
	/>
))
