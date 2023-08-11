import { Fragment } from "react"
import { twMerge } from "tailwind-merge"

import { Dialog, type DialogPanelProps, type DialogProps } from "@/lib/headlessui/Dialog"
import { TransitionRoot, TransitionChild } from "@/lib/headlessui/Transition"

interface SideBarProps extends Omit<DialogProps<React.ElementType>, "open" | "unmount"> {
	open: boolean
	panelProps?: DialogPanelProps<React.ElementType>
	direction?: "left" | "right"
}

export function SideBar({ open, children, panelProps, direction = "right", ...props }: SideBarProps) {
	return (
		<TransitionRoot show={open} as={Fragment}>
			<Dialog as='aside' {...props}>
				{/* The backdrop, rendered as a fixed sibling to the panel container */}
				<TransitionChild
					enter='transition-all ease-in-out duration-500'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='transition-all ease-in-out duration-500'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
					aria-hidden='true'
					as='div'
					// top-[60px] -z-[-1] h-[calc(100vh-60px)]
					className='fixed inset-0 bg-black/30'
				/>

				<TransitionChild
					as={Fragment}
					enter='transition-all ease-in-out duration-500'
					enterFrom={twMerge("opacity-0", direction === "left" ? "-translate-x-full" : "translate-x-full")}
					enterTo='opacity-100 translate-x-0'
					leave='transition-all ease-in-out duration-500'
					leaveFrom='opacity-100 translate-x-0'
					leaveTo={twMerge("opacity-0", direction === "left" ? "-translate-x-full" : "translate-x-full")}>
					<Dialog.Panel
						{...panelProps}
						className={twMerge(
							`fixed inset-y-0 ${direction}-0 top-[60px] z-10 h-[calc(100vh-60px)] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`,
							panelProps?.className
						)}>
						{children}
					</Dialog.Panel>
				</TransitionChild>
			</Dialog>
		</TransitionRoot>
	)
}
