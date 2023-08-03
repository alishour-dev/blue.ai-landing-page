"use client"

import { Disclosure, type DisclosureProps, type DisclosurePanelProps, DisclosureButtonProps } from "@headlessui/react"
import { AnimatePresence, type MotionProps, m } from "framer-motion"
import { twMerge } from "tailwind-merge"

import { useHeight } from "@/hooks"

import IonIosArrowDown from "~icons/ion/ios-arrow-down"

type AccordionProps = {
	id?: string | number
	hideArrow?: boolean
	label: string | React.ReactNode
	targetProps?: DisclosureButtonProps<React.ElementType> & { ref?: React.RefObject<HTMLButtonElement> }
	panelProps?: Omit<DisclosurePanelProps<React.ElementType>, "unmount">
} & DisclosureProps<React.ElementType> &
	MotionProps

export const Accordion = ({ id, label, targetProps, panelProps, hideArrow, children, ...props }: AccordionProps) => (
	<Disclosure
		as={m.div}
		{...props}
		className={twMerge(
			"transition-custom rounded-md hover:bg-[rgba(255,255,255,0.125)] hover:brightness-[0.85] hover:filter",
			props?.className
		)}>
		{({ open }) => (
			<>
				<Disclosure.Button
					{...targetProps}
					data-id={id}
					data-open={open}
					className={twMerge(
						"flex w-full justify-between gap-2 rounded-lg p-4 text-left text-base font-semibold leading-7 text-primary transition-[color] duration-300 ease-in-out hover:text-primary-700 md:gap-3 md:text-lg lg:text-xl",
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

const AccordionChild = ({
	open,
	children,
	...panelProps
}: { open: boolean } & Omit<DisclosurePanelProps<React.ElementType>, "unmount">) => {
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
