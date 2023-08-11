"use client"

import dynamic from "next/dynamic"
import { createContext, useCallback, useContext, useState } from "react"
import { v4 as newId } from "uuid"

const Notifications = dynamic(() => import("@/comps/Notifications").then((mod) => mod.Notifications))

export type NotificationType = {
	id: string
	type: "info" | "warning" | "success" | "error"
	title: string
	message?: string
}
export type NotificationWithoutIdType = Omit<NotificationType, "id">

type NotificationsContextTypes = {
	notifications: NotificationType[]
	addNotification: (notification: NotificationWithoutIdType) => void
	dismissNotification: (id: string) => void
}

const NotificationsProvider = createContext<NotificationsContextTypes>({
	notifications: [],
	addNotification: () => {},
	dismissNotification: () => {},
})

export function NotificationsContext({ children }: { children: React.ReactNode }) {
	const [notifications, setNotifications] = useState<NotificationType[] | []>([])

	const addNotification = useCallback((notification: NotificationWithoutIdType) => {
		setNotifications((prev) => [...prev, { ...notification, id: newId() }])
	}, [])

	const dismissNotification = useCallback((id: string) => {
		setNotifications((prev) => prev.filter((old) => old.id !== id))
	}, [])

	return (
		<NotificationsProvider.Provider value={{ notifications, addNotification, dismissNotification }}>
			<Notifications />
			{children}
		</NotificationsProvider.Provider>
	)
}

export const useNotifications = (): NotificationsContextTypes => useContext(NotificationsProvider)
