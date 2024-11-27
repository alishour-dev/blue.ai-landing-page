"use client"

import type { Variants } from "framer-motion"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { v4 as newId } from "uuid"

import { Button } from "@/comps/Button"
import { Dropdown } from "@/comps/Dropdown"
import { MotionElement } from "@/comps/MotionElement"
import { MotionLink } from "@/comps/MotionLink"
import { PATHS } from "@/constants"
import { slideRightBtm, transition, variantPresets, viewport } from "@/lib/framer-motion/variants"
import type { ImgPropsWithoutDimensions, LinkType, NestedLink } from "@/types"

import { MobileView } from "./mobileView"
import { NavItem } from "./NavItem"

export declare interface NavbarProps {
	mainMenu: { label: string; href?: string; nested?: NestedLink[] }[]
	cta: LinkType
	logo: Omit<ImgPropsWithoutDimensions, "alt">
}

export function Navbar(props: NavbarProps) {
	const { mainMenu, cta, logo } = props
	const pathname = usePathname()

	return (
		<MotionElement
			as='header'
			{...variantPresets}
			animate='animate'
			variants={customStagger}
			viewport={viewport}
			className='glass fixed left-0 right-0 top-0 h-[60px] px-4'>
			<nav aria-label='Global' className='mx-auto flex h-full max-w-7xl items-center justify-between'>
				{/* Logo Section  */}
				<MotionLink
					href={PATHS.HOME}
					{...slideRightBtm}
					className='rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary'>
					<span className='sr-only'>Blue.Ai</span>
					<Image
						width={26}
						height={44}
						priority
						quality={100}
						src={logo.src}
						alt='Blue.Ai Logo'
						className='aspect-[26/44] h-auto prevent-selection'
					/>
				</MotionLink>

				{/* Middle/Links Section */}
				<div className='hidden h-full pl-[10px] md:flex md:flex-1'>
					{mainMenu?.map(({ label, href, nested }, idx) => (
						<div key={label + "-" + idx}>
							{!href && !!nested?.length ? (
								<Dropdown
									target={label}
									className='h-full'
									targetClassName={labelClassName}
									panelClassName='gap-5 flex flex-col'
									{...slideRightBtm}>
									<div className='relative flex flex-col gap-1 rounded-md pb-3 before:absolute before:bottom-0 before:left-1/2 before:h-[1px] before:w-3/4 before:-translate-x-1/2 before:bg-gray-200 before:content-[""]'>
										<h1 className='text-lg font-extrabold text-secondary'>{label}</h1>
										<p className='text-sm text-gray-500'>
											The first platform purpose-built for unified customer experience management
										</p>
									</div>

									<div
										className={twMerge(
											`grid gap-2 xs:grid-cols-1 sm:grid-cols-2`,
											nested?.length < 6 ? "grid-cols-2" : "lg:grid-cols-3 xl:grid-cols-4"
										)}>
										{nested.map((item) => (
											<NavItem key={newId()} {...item} />
										))}
									</div>
								</Dropdown>
							) : (
								<MotionLink
									{...slideRightBtm}
									href={href!}
									className={twMerge("inline-flex items-center", labelClassName)}>
									{label}
								</MotionLink>
							)}
						</div>
					))}
				</div>

				{/* CTA  */}
				<Button
					as='MotionLink'
					passHref
					className='!hidden h-9 rounded-[4px] px-3 text-xs font-bold md:!flex lg:px-4 lg:text-sm'
					size='compact'
					href={cta?.href}
					disabled={pathname === cta?.href}>
					{cta?.label}
				</Button>

				{/* Elements only visible on Mobile View  */}
				<MobileView {...props} />
			</nav>
		</MotionElement>
	)
}

const customStagger: Variants = {
	initial: { opacity: 0, y: -50 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { delayChildren: 0, staggerChildren: 0.1, ...transition },
	},
}

const labelClassName =
	"animated-underline transition-colors duration-300 after:!bg-primary text-gray-700 hover:text-primary font-semibold px-[10px] text-xs lg:px-4 lg:text-sm h-full rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary"
