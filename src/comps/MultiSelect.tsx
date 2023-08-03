"use client"

import { Transition } from "@headlessui/react"
import dynamic from "next/dynamic"
import { Fragment } from "react"
import { twMerge } from "tailwind-merge"
import { v4 as newId } from "uuid"

import HeroiconsCheck from "~icons/heroicons/check"
import IonIosArrowDown from "~icons/ion/ios-arrow-down"

// Dynamically Importing these componenets because Nextjs is complaining about difference between client and server ids on them
const Listbox = dynamic(() => import("@headlessui/react").then((mod) => mod.Listbox), {
	ssr: false,
})
const ListboxLabel = dynamic(() => import("@headlessui/react").then((mod) => mod.Listbox).then((sub) => sub.Label), {
	ssr: false,
})
const ListboxButton = dynamic(() => import("@headlessui/react").then((mod) => mod.Listbox).then((sub) => sub.Button), {
	ssr: false,
})
const ListboxOptions = dynamic(
	() => import("@headlessui/react").then((mod) => mod.Listbox).then((sub) => sub.Options),
	{ ssr: false }
)
const ListboxOption = dynamic(() => import("@headlessui/react").then((mod) => mod.Listbox).then((sub) => sub.Option), {
	ssr: false,
})

interface MultiSelectProps {
	value: string[] | []
	onChange: (values: string[] | []) => void
	label: string
	placeholder?: string
	options: string[]
}

export const MultiSelect = ({
	options,
	value,
	onChange,
	label,
	placeholder = "Select an option",
}: MultiSelectProps) => (
	<Listbox value={value} onChange={onChange} multiple>
		<div className='relative w-full lg:min-w-[310px]'>
			<ListboxLabel className='mb-1 block w-max text-sm font-semibold text-gray-800 prevent-selection'>
				{label}
			</ListboxLabel>
			<ListboxButton
				id={label}
				className={({ open }: { open: boolean }) =>
					twMerge(
						"transition-custom flex w-full cursor-pointer items-center justify-between gap-4 rounded-md border-0 p-3 text-sm text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:p-4 sm:text-base",
						open && "ring-2 ring-inset ring-primary [&>svg]:rotate-180",
						!!value?.length && "text-primary-900"
					)
				}>
				<p className='overflow-hidden truncate'>
					{value?.length ? <>{value?.length} Products selected</> : placeholder}
				</p>
				<IonIosArrowDown className='transition-custom shrink-0 text-gray-900 will-change-transform' />
			</ListboxButton>

			<Transition
				as={Fragment}
				enter='transition duration-200 ease-out origin-top'
				enterFrom='transform scale-y-0 opacity-0'
				enterTo='transform scale-y-100 opacity-100'
				leave='transition duration-200 ease-out origin-top'
				leaveFrom='transform scale-y-100 opacity-100'
				leaveTo='transform scale-y-0 opacity-0'>
				<ListboxOptions className='absolute z-40 mt-[6px] max-h-60 w-full overflow-auto rounded-md bg-white text-sm shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none'>
					{options.map((option) => (
						<ListboxOption
							key={newId()}
							id={newId()}
							value={option}
							className={({ active, selected }: Record<"active" | "selected", boolean>) =>
								twMerge(
									"transition-custom relative flex cursor-pointer select-none items-center justify-between p-3",
									(active || selected) && "bg-primary-50 bg-opacity-50"
								)
							}>
							{({ selected }) => (
								<>
									<span className={`transition-custom block truncate ${selected ? "font-semibold" : "font-normal"}`}>
										{option}
									</span>
									{selected ? <HeroiconsCheck className='h-5 w-5 text-primary-800' aria-hidden='true' /> : null}
								</>
							)}
						</ListboxOption>
					))}
				</ListboxOptions>
			</Transition>
		</div>
	</Listbox>
)
