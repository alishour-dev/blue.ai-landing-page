import { AnimatePresence, type MotionProps, m } from "framer-motion"
import { twMerge } from "tailwind-merge"

import { useHeight } from "@/hooks/useHeight"
import {
	Disclosure,
	type DisclosureProps,
	type DisclosurePanelProps,
	type DisclosureButtonProps,
} from "@/lib/headlessui/Disclosure"

import IonIosArrowDown from "~icons/ion/ios-arrow-down"

type AccordionProps = {
	id?: string | number
	hideArrow?: boolean
	label: string | React.ReactNode
	targetProps?: DisclosureButtonProps<React.ElementType> & { ref?: React.RefObject<HTMLButtonElement> }
	panelProps?: Omit<DisclosurePanelProps<React.ElementType>, "unmount">
} & DisclosureProps<React.ElementType> &
	MotionProps

export function Accordion({ id, label, targetProps, panelProps, hideArrow, children, ...props }: AccordionProps) {
	return (
		<Disclosure
			as={m.div}
			{...props}
			className={twMerge(
				"transition-custom relative z-0 rounded-md hover:bg-[rgba(255,255,255,0.125)] hover:brightness-[0.85] hover:filter",
				props?.className
			)}>
			{({ open }) => (
				<>
					<Disclosure.Button
						{...targetProps}
						id={id}
						data-id={id}
						data-open={open}
						className={twMerge(
							"flex w-full justify-between gap-2 rounded-lg p-4 text-left text-base font-semibold text-primary transition-[color] duration-300 ease-in-out hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary md:gap-3 md:text-lg lg:text-xl",
							targetProps?.className
						)}>
						{label}
						{!hideArrow && (
							<IonIosArrowDown
								className={twMerge(
									"h-5 w-5 flex-none transition-transform duration-300 ease-in-out",
									open && "rotate-180"
								)}
								aria-hidden='true'
							/>
						)}
					</Disclosure.Button>

					<AccordionChild open={open} {...panelProps}>
						{children}
					</AccordionChild>
				</>
			)}
		</Disclosure>
	)
}
function AccordionChild({
	open,
	children,
	...panelProps
}: { open: boolean } & Omit<DisclosurePanelProps<React.ElementType>, "unmount">) {
	const [panelRef, height] = useHeight({ on: open })

	return (
		<AnimatePresence mode='wait'>
			{open && (
				<m.div
					key='animated-accordion-panel'
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height }}
					exit={{ opacity: 0, height: 0 }}
					className='overflow-hidden'>
					<Disclosure.Panel
						id='disclosure-panel'
						as='div'
						static
						ref={panelRef as any}
						{...panelProps}
						className={twMerge(
							`-mt-1 space-y-2 px-10 pb-3 text-base leading-[18px] text-[#96999C]`,
							panelProps?.className
						)}>
						{children}
					</Disclosure.Panel>
				</m.div>
			)}
		</AnimatePresence>
	)
}
