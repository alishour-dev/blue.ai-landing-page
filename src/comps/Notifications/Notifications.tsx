import { m, AnimatePresence, LazyMotion, type Transition, type Variants } from "framer-motion"

import { useNotifications } from "@/context/notifications"

import { Notification } from "./Notification"

const loadFeatures = () => import("@/lib/framer-motion/features").then((res) => res.domMax)

export function Notifications() {
	const { notifications, dismissNotification } = useNotifications()

	return (
		<LazyMotion features={loadFeatures} strict>
			{/* The first `AnimatePresence` Component is used to animate adding/removing the whole element that contains all notifications  */}
			<AnimatePresence>
				{!!notifications?.length && (
					<m.div
						key='notifications'
						transition={transition}
						{...variants}
						aria-live='assertive'
						className='pointer-events-none fixed right-0 top-0 z-50 flex w-full max-w-sm flex-col items-end space-y-2 p-2 sm:space-y-3 sm:p-3'>
						{/* The Second `AnimatePresence` is used to aniamte adding/removing each single Notification */}
						<AnimatePresence>
							{notifications.map((notification) => (
								<Notification
									key={notification.id}
									layout
									transition={transition}
									{...variants}
									notification={notification}
									onDismiss={dismissNotification}
									timeout={5000}
								/>
							))}
						</AnimatePresence>
					</m.div>
				)}
			</AnimatePresence>
		</LazyMotion>
	)
}

const transition: Transition = { type: "spring", duration: 0.6, bounce: 0.28 }
const variants: Variants = {
	initial: { opacity: 0, scale: 0.3 },
	animate: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0.3, transition: { duration: 0.3 } },
}
