"use client"

import "react-international-phone/style.css"

import { Transition } from "@headlessui/react"
import dynamic from "next/dynamic"
import { Fragment } from "react"
import { CountryIso2, defaultCountries, FlagEmoji, parseCountry, usePhoneInput } from "react-international-phone"
import { twMerge } from "tailwind-merge"

import { TextInput, TextInputProps } from "./TextInput"

import IonIosArrowDown from "~icons/ion/ios-arrow-down"

// Dynamically Importing these componenets because Nextjs is complaining about difference between client and server ids on them
const Listbox = dynamic(() => import("@headlessui/react").then((mod) => mod.Listbox), {
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

interface PhoneNumberInputProps extends Omit<TextInputProps, "value" | "onChange" | "label" | "placeholder"> {
	value?: string
	onChange: (v: string) => void
}

export const PhoneNumberInput = ({ value, onChange, ...restProps }: PhoneNumberInputProps) => {
	const { phone, handlePhoneValueChange, inputRef, country, setCountry } = usePhoneInput({
		defaultCountry: "us",
		value,
		countries: defaultCountries,
		onChange: (data) => onChange(data.phone),
	})

	return (
		<TextInput
			{...restProps}
			className='relative [&>div>input]:rounded-l-none [&>div]:flex [&>div]:flex-row-reverse'
			label='Phone number'
			placeholder='Phone number'
			value={phone}
			onChange={handlePhoneValueChange}
			type='tel'
			inputRef={inputRef}>
			<CountrySelect country={country} onChange={setCountry} />
		</TextInput>
	)
}

interface CountrySelectProps {
	country: CountryIso2
	onChange: (v: CountryIso2) => void
}

function CountrySelect({ country, onChange }: CountrySelectProps) {
	return (
		<Listbox value={country || ""} onChange={onChange}>
			<div className='left-[1px] w-max'>
				<ListboxButton
					className={({ open }: { open: boolean }) =>
						twMerge(
							"transition-custom flex h-full w-max cursor-pointer items-center justify-between gap-2 rounded-md rounded-r-none border-0 px-2 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400",
							open && "ring-2 ring-primary [&>svg]:rotate-180"
						)
					}>
					<FlagEmoji iso2={country} className='w-h-6 h-6' />
					<IonIosArrowDown className='transition-custom shrink-0 text-xs text-black will-change-transform' />
				</ListboxButton>
				<Transition
					as={Fragment}
					enter='transition duration-200 ease-out origin-top'
					enterFrom='transform scale-y-0 opacity-0'
					enterTo='transform scale-y-100 opacity-100'
					leave='transition duration-200 ease-out origin-top'
					leaveFrom='transform scale-y-100 opacity-100'
					leaveTo='transform scale-y-0 opacity-0'>
					<ListboxOptions className='absolute z-40 -ml-[1px] mt-[6px] max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none'>
						{defaultCountries.map((c) => {
							const country = parseCountry(c)

							return (
								<ListboxOption
									key={country.iso2}
									value={country.iso2}
									className={({ active, selected }: Record<"active" | "selected", boolean>) =>
										twMerge(
											"transition-custom relative flex cursor-pointer select-none items-center gap-2 p-3",
											selected && "font-bold",
											(active || selected) && "bg-primary-50 bg-opacity-50"
										)
									}>
									<FlagEmoji iso2={country.iso2} className='h-5 w-5' />
									<span className='transition-custom block truncate'>{country.name}</span>
									<span className='text-sm text-gray-400'>+{country.dialCode}</span>
								</ListboxOption>
							)
						})}
					</ListboxOptions>
				</Transition>
			</div>
		</Listbox>
	)
}
