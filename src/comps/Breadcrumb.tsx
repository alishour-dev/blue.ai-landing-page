"use client"

import { useRouter } from "next/navigation"
import { Fragment, forwardRef } from "react"
import { twMerge } from "tailwind-merge"
import { v4 as newId } from "uuid"

import { slideRightBtm } from "@/lib/framer-motion/variants"

import { MotionElement, MotionElementProps } from "./MotionElement"

import IonIosArrowBack from "~icons/ion/ios-arrow-back"

export type BreadcrumbPages = { label: string; href?: string }[]

// eslint-disable-next-line react/display-name
export const Breadcrumb = forwardRef<HTMLDivElement, { pages: BreadcrumbPages } & MotionElementProps<"div">>(
	({ pages, ...props }, ref) => {
		const router = useRouter()

		return (
			<MotionElement
				key={newId()}
				{...slideRightBtm}
				ref={ref as any}
				{...props}
				className={twMerge("flex items-center", props?.className)}>
				<IonIosArrowBack className='mr-[3px] h-[18px] w-[18px] text-white' />
				{pages?.map(({ label, href }, idx) => (
					<Fragment key={newId()}>
						{idx !== 0 && <span className='mx-2 text-2xl text-white'>/</span>}

						{!href ? (
							<p className='pointer-events-none text-2xl font-bold text-white'>{label}</p>
						) : (
							<button
								// If Passed href equals -1, Then user wants breadcrumb behavior to go back on click
								onClick={() => (href === "-1" ? router.back() : router.push(href))}
								className='transition-custom !bg-none p-0 text-2xl text-white filter will-change-transform hover:scale-[0.99] hover:brightness-95'>
								{label}
							</button>
						)}
					</Fragment>
				))}
			</MotionElement>
		)
	}
)
