import { m, type MotionProps } from "framer-motion"
import { useEffect } from "react"

import type { NotificationType } from "@/context/notifications"
import { IconType } from "@/types"

import HeroiconsCheckCircle from "~icons/heroicons/check-circle"
import HeroiconsExclamationCircle from "~icons/heroicons/exclamation-circle"
import HeroiconsInformationCircle from "~icons/heroicons/information-circle"
import HeroiconsXCircle from "~icons/heroicons/x-circle"
import HeroiconsXMark20Solid from "~icons/heroicons/x-mark-20-solid"

type TextColors = "text-blue-500" | "text-green-500" | "text-yellow-500" | "text-red-500"
type BgColors = "bg-blue-500" | "bg-green-500" | "bg-yellow-500" | "bg-red-500"

const icons: Record<NotificationType["type"], { text: TextColors; Icon: IconType; bg: BgColors }> = {
	error: { text: "text-red-500", Icon: HeroiconsXCircle, bg: "bg-red-500" },
	info: { text: "text-blue-500", Icon: HeroiconsInformationCircle, bg: "bg-blue-500" },
	success: { text: "text-green-500", Icon: HeroiconsCheckCircle, bg: "bg-green-500" },
	warning: { text: "text-yellow-500", Icon: HeroiconsExclamationCircle, bg: "bg-yellow-500" },
}

type NotificationProps = {
	notification: NotificationType
	onDismiss: (id: string) => void
	timeout?: number
} & React.HTMLAttributes<HTMLDivElement> &
	MotionProps

// eslint-disable-next-line react/display-name
export function Notification({
	notification: { id, type, title, message },
	onDismiss,
	timeout = 3000,
	...props
}: NotificationProps) {
	const Icon = icons[type].Icon

	useEffect(() => {
		// Timer to automatically remove a notification after a `timeout` period of time
		const timerToRemove = setTimeout(() => onDismiss(id), timeout)
		return () => clearTimeout(timerToRemove)
	}, [timeout, id, onDismiss])

	return (
		<m.div
			className='pointer-events-auto relative max-h-96 w-full max-w-sm overflow-hidden rounded-lg bg-white p-1.5 shadow-lg ring-1 ring-black ring-opacity-5 will-change-transform sm:p-3'
			role='alert'
			aria-label={title}
			{...props}>
			{/* Notification Content  */}
			<div className='flex items-start'>
				<Icon className={`h-7 w-7 shrink-0 ${icons[type].text}`} aria-hidden='true' />

				<div className='ml-2 w-0 flex-1 sm:ml-3'>
					<p className={`text-xs font-semibold leading-4 ${icons[type].text} sm:text-sm`}>{title}</p>
					<p className='mt-1 line-clamp-6 text-xs text-gray-500 sm:mt-1.5 sm:text-sm sm:leading-[18px]'>{message}</p>
				</div>
				<button
					className='transition-custom ml-3 shrink-0 rounded-md bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:ml-4'
					onClick={() => onDismiss(id)}>
					<span className='sr-only'>Close</span>
					<HeroiconsXMark20Solid className='h-5 w-5' aria-hidden='true' />
				</button>
			</div>

			{/* Progress Bar  */}
			<div className='mt-3 h-1 w-full'>
				<div className={`relative h-full w-full rounded-2xl ${icons[type].bg} bg-opacity-20`}>
					<m.div
						className={`absolute left-0 top-0 h-full w-0 rounded-2xl ${icons[type].bg}`}
						animate={{ width: "100%", transition: { duration: timeout / 1000 } }}
					/>
				</div>
			</div>
		</m.div>
	)
}
