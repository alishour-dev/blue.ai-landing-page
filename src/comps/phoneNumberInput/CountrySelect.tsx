import { Fragment } from "react"
import { CountryIso2, defaultCountries, FlagEmoji, parseCountry } from "react-international-phone"
import { twMerge } from "tailwind-merge"

import { Listbox } from "@/lib/headlessui/Listbox"
import { Transition } from "@/lib/headlessui/Transition"

import IonIosArrowDown from "~icons/ion/ios-arrow-down"

interface CountrySelectProps {
	country: CountryIso2
	onChange: (v: CountryIso2) => void
}

export function CountrySelect({ country, onChange }: CountrySelectProps) {
	return (
		<Listbox value={country || ""} onChange={onChange}>
			<div className='left-[1px] w-max'>
				<Listbox.Button
					id='country-button'
					className={({ open }: { open: boolean }) =>
						twMerge(
							"transition-custom flex h-full w-max cursor-pointer items-center justify-between gap-2 rounded-md rounded-r-none border-0 px-2 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400",
							open && "ring-2 ring-primary [&>svg]:rotate-180"
						)
					}>
					<FlagEmoji iso2={country} className='w-h-6 h-6' />
					<IonIosArrowDown className='transition-custom shrink-0 text-xs text-black will-change-transform' />
				</Listbox.Button>
				<Transition
					as={Fragment}
					enter='transition duration-200 ease-out origin-top'
					enterFrom='transform scale-y-0 opacity-0'
					enterTo='transform scale-y-100 opacity-100'
					leave='transition duration-200 ease-out origin-top'
					leaveFrom='transform scale-y-100 opacity-100'
					leaveTo='transform scale-y-0 opacity-0'>
					<Listbox.Options className='absolute z-40 -ml-[1px] mt-[6px] max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none'>
						{defaultCountries.map((c) => {
							const country = parseCountry(c)

							return (
								<Listbox.Option
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
								</Listbox.Option>
							)
						})}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	)
}
