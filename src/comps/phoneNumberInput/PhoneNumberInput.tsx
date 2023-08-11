"use client"

import "react-international-phone/style.css"

import { defaultCountries, usePhoneInput } from "react-international-phone"

import { TextInput, TextInputProps } from "../TextInput"

import { CountrySelect } from "./CountrySelect"

interface PhoneNumberInputProps extends Omit<TextInputProps, "value" | "onChange" | "label" | "placeholder"> {
	value?: string
	onChange: (v: string) => void
}

export function PhoneNumberInput({ value, onChange, ...restProps }: PhoneNumberInputProps) {
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
