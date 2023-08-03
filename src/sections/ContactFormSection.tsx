"use client"

import { useCallback, useMemo, useState } from "react"

import { Button, TextInput, PhoneNumberInput, MultiSelect, TextArea, MotionElement } from "@/comps"
import { useNotifications, type NotificationWithoutIdType } from "@/context/notifications"
import { scaleUp } from "@/lib/framer-motion/variants"

import IonIosSend from "~icons/ion/ios-send"

export const ContactFormSection = () => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState<contactDataType>(initialData)

	const { addNotification } = useNotifications()

	// Boolean that returns false if the data needed to be submitted is Invalid
	// (No name, email, phone number, company name, or message field was/were passed, as well as checking validity of phone number)
	const isInvalid = useMemo(
		() => !data?.name || !data?.email || !data?.phoneNumber || !data?.companyName || !data?.message,
		// || (!!data?.phoneNumber?.length && !isPossiblePhoneNumber(data?.phoneNumber))
		[data]
	)

	const updateValue = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }))
	}, [])

	const handleSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault()

			if (isInvalid) return

			setLoading(true)

			fetch("/api/contact-us", {
				method: "POST",
				headers: { Accept: "application/json, text/plain, */*", "Content-Type": "application/json" },
				body: JSON.stringify(data),
			})
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
		},
		[data, isInvalid, addNotification]
	)

	return (
		<MotionElement
			as='form'
			className='mx-auto flex max-w-max flex-col gap-4 rounded-xl bg-white p-3 shadow-[0_0_12px_0_rgba(0,0,0,0.12)] sm:p-[18px]'
			onSubmit={handleSubmit}
			{...scaleUp}>
			<div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
				<TextInput
					name='name'
					label='Full name'
					placeholder='Enter name'
					required
					value={data?.name}
					onChange={updateValue}
					spellCheck={false}
				/>
				<TextInput
					name='email'
					type='email'
					label='Email Address'
					placeholder='Enter email'
					required
					value={data?.email}
					onChange={updateValue}
					spellCheck={false}
				/>
				<PhoneNumberInput
					value={data?.phoneNumber}
					onChange={(phoneNumber: string) => setData((prev) => ({ ...prev, phoneNumber }))}
				/>
				<TextInput
					name='companyName'
					label='Company Name'
					placeholder='Company Name'
					required
					value={data?.companyName}
					onChange={updateValue}
				/>
				<TextInput name='role' label='Role' placeholder='Enter your role' value={data?.role} onChange={updateValue} />
				<MultiSelect
					value={data?.interestedIn}
					onChange={(interestedIn) => setData((prev) => ({ ...prev, interestedIn }))}
					label='Interested In'
					options={interestedInOptions}
					placeholder='Select product(s) of your interest'
				/>
			</div>

			<TextArea
				name='message'
				label='Your message'
				placeholder='Please include all relevant information'
				value={data?.message}
				onChange={updateValue}
				required
			/>

			<Button
				as='button'
				type='submit'
				className='group min-h-[42px] w-full cursor-pointer self-end rounded-md px-3 text-xl text-white flex-center sm:w-max'
				disabled={isInvalid}
				loading={loading}>
				<div className='transition-custom mr-1 h-max w-max group-hover:translate-x-6 group-hover:rotate-[35deg]'>
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

export const interestedInOptions = [
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
