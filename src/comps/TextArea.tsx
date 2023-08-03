import { twMerge } from "tailwind-merge"

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string
}

export const TextArea = ({ className, label, name, ...textAreaProps }: TextAreaProps) => (
	<div className={twMerge("col-span-full", className)}>
		<label
			htmlFor={name}
			className={twMerge(
				"mb-1 block w-max text-sm font-semibold text-gray-900 prevent-selection",
				textAreaProps?.required &&
					"relative before:absolute before:-right-2 before:-top-1 before:text-base before:text-red-500 before:content-['*']"
			)}>
			{label}
		</label>
		<textarea
			id={name}
			name={name}
			rows={4}
			className='transition-custom block w-full resize-none rounded-md border-0 p-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 autofill:shadow-[0_0_0_30px_white_inset] focus:ring-2 focus:ring-inset focus:ring-primary sm:p-4 sm:text-base'
			{...textAreaProps}
		/>
	</div>
)
