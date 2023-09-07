"use client"

import { useState } from "react"

import { Button } from "@/comps/Button"
import { MotionElement } from "@/comps/MotionElement"
import { MultiSelect } from "@/comps/MultiSelect"
import { PhoneNumberInput } from "@/comps/phoneNumberInput"
import { TextArea } from "@/comps/TextArea"
import { TextInput } from "@/comps/TextInput"
import { useNotifications, type NotificationWithoutIdType } from "@/context/notifications"
import { scaleUp } from "@/lib/framer-motion/variants"

import IonIosSend from "~icons/ion/ios-send"

export function ContactFormSection() {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState<contactDataType>(initialData)
	const { name, email, phoneNumber, companyName, role, interestedIn, message } = data

	const { addNotification } = useNotifications()

	// Boolean that returns false if the data needed to be submitted is Invalid
	// (No name, email, phone number, company name, or message field was/were passed, as well as checking validity of phone number)
	const isInvalid =
		!name || !email || !phoneNumber?.length || phoneNumber?.replace(/[\s]+/g, "") === "+1" || !companyName || !message

	const updateValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		console.log("re-rendering!")

		if (isInvalid) return

		setLoading(true)

		fetch("/api/contact-us", { ...apiOptions, body: JSON.stringify(data) })
			.then((res) => res.json())
			.then(() => {
				setLoading(false)
				setData(initialData)
				addNotification(successNotification)
			})
			.catch((err) => {
				setLoading(false)
				console.log("Error:", err)
				addNotification(errorNotification(err?.response?.data))
			})
	}

	return (
		<MotionElement
			as='form'
			className='mx-auto flex max-w-[400px] flex-col gap-4 rounded-xl bg-white p-3 shadow-custom sm:max-w-max sm:p-[18px]'
			onSubmit={handleSubmit}
			{...scaleUp}>
			<div className='grid w-full grid-cols-1 gap-5 sm:grid-cols-2'>
				<TextInput
					name='name'
					label='Full name'
					placeholder='Enter name'
					required
					value={name}
					onChange={updateValue}
					spellCheck={false}
					className='w-full lg:min-w-[310px]'
				/>
				<TextInput
					name='email'
					type='email'
					label='Email Address'
					placeholder='Enter email'
					required
					value={email}
					onChange={updateValue}
					spellCheck={false}
					className='w-full lg:min-w-[310px]'
				/>
				<PhoneNumberInput
					name='phoneNumber'
					required
					value={phoneNumber}
					onChange={(phoneNumber: string) => setData((prev) => ({ ...prev, phoneNumber }))}
					className='w-full lg:min-w-[310px]'
				/>
				<TextInput
					name='companyName'
					label='Company Name'
					placeholder='Company Name'
					required
					value={companyName}
					onChange={updateValue}
					className='w-full lg:min-w-[310px]'
				/>
				<TextInput
					name='role'
					label='Role'
					placeholder='Enter your role'
					value={role}
					onChange={updateValue}
					className='w-full lg:min-w-[310px]'
				/>
				<MultiSelect
					value={interestedIn}
					onChange={(interestedIn) => setData((prev) => ({ ...prev, interestedIn }))}
					name='interestedIn'
					label='Interested In'
					options={interestedInOptions}
					placeholder='Select product(s) of your interest'
					className='w-full lg:min-w-[310px]'
				/>
			</div>

			<TextArea
				name='message'
				label='Your message'
				placeholder='Please include all relevant information'
				value={message}
				onChange={updateValue}
				required
			/>

			<Button
				as='button'
				type='submit'
				className='group min-h-[42px] w-full cursor-pointer self-end rounded-md px-3 text-xl text-white flex-center sm:w-max'
				disabled={isInvalid}
				loading={loading}>
				<div className='transition-custom mr-1 h-max w-max group-hover:translate-x-[26px] group-hover:rotate-[35deg]'>
					<IonIosSend className='transition-custom text-lg group-hover:animate-fly' />
				</div>
				<span className='transition-custom font-bold group-hover:translate-x-14'>Send</span>
			</Button>
		</MotionElement>
	)
}

export type contactDataType = {
	name: string
	email: string
	phoneNumber: string
	companyName: string
	role: string
	interestedIn: string[]
	message: string
}
const initialData: contactDataType = {
	name: "",
	email: "",
	phoneNumber: "",
	companyName: "",
	role: "",
	interestedIn: [],
	message: "",
}

const interestedInOptions = [
	"Unified Platform",
	"Campaign Management System",
	"Flow Builder",
	"Adaptive NLP",
	"API",
	"Ensight Engine",
	"Live Chat Widget",
	"CRM",
	"Payment Gateway",
	"Integrations",
	"Ticketing System",
	"Billing System",
]

const apiOptions: RequestInit = {
	method: "POST",
	headers: { Accept: "application/json, text/plain, */*", "Content-Type": "application/json" },
}

const successNotification: NotificationWithoutIdType = {
	title: "Successful Delivery",
	message: "Your Message has been sent successfully. We'll get back to you shortly! 😇",
	type: "success",
}
const errorNotification = (message?: string): NotificationWithoutIdType => ({
	title: "Error",
	message: message || "Oppss. An error has occurred. Please Try again Later. 😥",
	type: "error",
})
