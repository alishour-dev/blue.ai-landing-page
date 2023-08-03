import { twMerge } from "tailwind-merge"

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
	inputRef?: React.Ref<HTMLInputElement>
}

export const TextInput = ({
	type = "text",
	className,
	label,
	name,
	inputRef,
	children,
	...inputProps
}: TextInputProps) => (
	<div className={twMerge(className, "w-full lg:min-w-[310px]")}>
		<label
			htmlFor={name}
			className={twMerge(
				"mb-1 block w-max text-sm font-semibold text-gray-900 prevent-selection",
				inputProps?.required &&
					"relative before:absolute before:-right-2 before:-top-1 before:text-base before:text-red-500 before:content-['*']"
			)}>
			{label}
		</label>
		<div>
			<input
				type={type}
				name={name}
				id={name}
				ref={inputRef}
				className='transition-custom block w-full rounded-md border-0 p-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 autofill:shadow-[0_0_0_30px_white_inset] focus:ring-2 focus:ring-inset focus:ring-primary sm:p-4 sm:text-base'
				{...inputProps}
			/>
			{children}
		</div>
	</div>
)
