"use client"

import { AnimatePresence, MotionProps, m } from "framer-motion"
import Link, { LinkProps } from "next/link"
import { useMemo } from "react"
import { twMerge } from "tailwind-merge"

import { fade, variantPresets } from "@/lib/framer-motion/variants"
import type { Size } from "@/types"

import type { MotionLinkProps } from "./MotionLink"

import SvgSpinners12DotsScaleRotate from "~icons/svg-spinners/12-dots-scale-rotate"

type ButtonType = "button" | "a" | "Link" | "MotionLink" | "MotionButton"

type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement>
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

type ElementProps<T extends ButtonType> = T extends "button"
	? BtnProps & { as?: "button" }
	: T extends "MotionButton"
	? BtnProps & MotionProps & { as?: "MotionButton" }
	: T extends "a"
	? AnchorProps & { as?: "a"; href: string }
	: T extends "Link"
	? LinkProps & AnchorProps & { as?: "Link" }
	: T extends "MotionLink"
	? MotionLinkProps & { as?: "MotionLink" }
	: never

export type ButtonProps<T extends ButtonType> = {
	size?: Size
	variant?: "primary" | "secondary" | "primary-outlined" | "black-outlined" | "error" | "none"
	loading?: boolean
	disabled?: boolean
} & ElementProps<T> &
	Partial<Record<"leftIcon" | "rightIcon", React.ReactNode>>

export function Button<T extends ButtonType>({
	as = "button",
	leftIcon,
	rightIcon,
	size = "md",
	variant = "primary",
	loading,
	disabled,
	children,
	...props
}: ButtonProps<T>) {
	const Element = useMemo<React.ElementType>(
		() =>
			as === "a"
				? "a"
				: as === "Link"
				? Link
				: as === "MotionLink"
				? m(Link)
				: as === "MotionButton"
				? m.button
				: "button",
		[as]
	)

	return (
		<Element
			{...props}
			data-size={size !== "compact" ? size : null}
			data-variant={variant !== "none" ? variant : null}
			disabled={disabled || loading}
			className={twMerge(
				`btn transition-custom gap-2 overflow-hidden will-change-[transform,brightness] prevent-selection flex-center hover:brightness-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[98%]`,
				props?.className,
				(disabled || loading) && "pointer-events-none relative",
				disabled && "!bg-opacity-60"
			)}>
			{leftIcon && leftIcon}
			{children}
			{rightIcon && rightIcon}

			{/* Loading Indicator */}
			<AnimatePresence mode='wait'>
				{loading && (
					<m.div
						{...variantPresets}
						{...fade}
						className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 flex-center ${
							variant === "primary" ? "bg-primary" : variant === "secondary" ? "bg-secondary" : "bg-gray-400"
						}`}>
						<SvgSpinners12DotsScaleRotate />
					</m.div>
				)}
			</AnimatePresence>
		</Element>
	)
}
