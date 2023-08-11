"use client"

import Link from "next/link"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { v4 as newId } from "uuid"

import { Accordion } from "@/comps/Accordion"
import { Button } from "@/comps/Button"
import { SideBar } from "@/comps/SideBar"

import type { NavbarProps } from "../Navbar"

import { NavItem } from "./NavItem"

// Mobile Menu (Burger button + Sidebar) - ONLY VISIBLE ON MOBILE
export function MobileView({ mainMenu, cta }: NavbarProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<>
			<button
				type='button'
				onClick={() => setMobileMenuOpen(true)}
				className='relative -m-2.5 h-[38px] w-[38px] rounded-md ring-0 flex-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary md:hidden'>
				<span className='sr-only'>{mobileMenuOpen ? "Open menu" : "Close menu"}</span>
				<div className='flex h-[18px] w-[20px] origin-center transform flex-col justify-between transition-all duration-300'>
					<div
						aria-hidden='true'
						className={twMerge(topBottomBars, mobileMenuOpen && "rotate-[42deg] scale-x-[1.2]")}
					/>
					<div
						aria-hidden='true'
						className={twMerge(
							"ml-auto h-[2px] w-1/2 origin-right transform rounded-md bg-black transition-all duration-300",
							mobileMenuOpen && "scale-x-0 opacity-0"
						)}
					/>
					<div
						aria-hidden='true'
						className={twMerge(topBottomBars, mobileMenuOpen && mobileMenuOpen && "-rotate-[42deg] scale-x-[1.2]")}
					/>
				</div>
			</button>

			<SideBar open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className='md:hidden'>
				<div className='mt-6 flow-root'>
					<div className='-my-6 divide-y divide-gray-500/10'>
						<div className='space-y-2 py-6'>
							{mainMenu?.map(({ label, href, nested }, idx) => {
								if (Array.isArray(nested))
									return (
										<Accordion
											id={label + "-" + idx}
											key={label + "-" + idx}
											className='-mx-3'
											label={label}
											targetProps={{ className: linkTargetClassName }}
											panelProps={{ className: "mt-0 pl-0" }}>
											{nested.map((item) => (
												<NavItem key={newId()} {...item} />
											))}
										</Accordion>
									)

								return (
									<Link
										href={href as string}
										key={label + "-" + idx}
										className={twMerge(
											"transition-custom m-0 -mx-3 block rounded-lg text-base font-semibold hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary",
											linkTargetClassName
										)}>
										{label}
									</Link>
								)
							})}
						</div>
						<div className='py-6'>
							<Button as='MotionLink' href={cta?.href} className='rounded-md'>
								{cta?.label}
							</Button>
						</div>
					</div>
				</div>
			</SideBar>
		</>
	)
}

const linkTargetClassName = "text-gray-700 hover:text-primary leading-7 p-3.5"

const topBottomBars = "h-[2px] w-full origin-left transform rounded-md bg-black transition-transform duration-300"
