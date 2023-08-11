import { type MotionProps, m } from "framer-motion"
import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

import { Menu, type MenuProps } from "@/lib/headlessui/Menu"
import { Transition } from "@/lib/headlessui/Transition"

import IonIosArrowDown from "~icons/ion/ios-arrow-down"

type DropdownProps = {
	target: string
	children: React.ReactNode
	hideArrow?: boolean
} & Partial<Record<"targetClassName" | "panelClassName", string>> &
	MenuProps<React.ElementType> &
	MotionProps

// eslint-disable-next-line react/display-name
export const Dropdown = forwardRef<HTMLElement, DropdownProps>(
	({ target, targetClassName, panelClassName, hideArrow, children, ...props }, ref) => {
		return (
			<Menu {...props} ref={ref} as={m.div} className={twMerge("relative", props?.className)}>
				{({ open }) => (
					<>
						<Menu.Button
							id='dropdown-target'
							className={twMerge("group inline-flex w-full items-center gap-x-[5px] text-sm", targetClassName)}
							data-dropdown-target={target?.toLowerCase()}>
							{target}
							{!hideArrow && (
								<IonIosArrowDown
									className={twMerge("h-3 w-3 flex-none transition-transform duration-500", open && "rotate-180")}
									aria-hidden='true'
								/>
							)}
						</Menu.Button>

						<Transition
							unmount
							enterFrom='opacity-0 scale-y-0'
							enterTo='opacity-100 scale-y-1'
							leaveFrom='opacity-100 scale-y-1'
							leaveTo='opacity-0 scale-y-0'
							className='origin-top transition-all duration-300 ease-in-out'>
							<Menu.Items
								className={twMerge(
									"absolute -left-8 top-full z-50 mt-2 w-max overflow-hidden rounded-2xl bg-white p-3 shadow-[0_2px_8px_rgba(0,0,0,0.2)] focus:outline-none",
									panelClassName
								)}>
								{children}
							</Menu.Items>
						</Transition>
					</>
				)}
			</Menu>
		)
	}
)
