"use client"

import Link from "next/link"
import { useMemo } from "react"
import { twMerge } from "tailwind-merge"

import { Menu } from "@/lib/headlessui/Menu"
import type { NestedLink } from "@/types"

import { navIcons } from "./icons"

export function NavItem({ href, label, icon, subLabel }: NestedLink) {
	const Icon = useMemo(() => navIcons[icon as keyof typeof navIcons], [icon])

	return (
		<Menu.Item key={label}>
			{({ active }) => (
				<Link
					href={href}
					replace
					className={twMerge(
						"group flex h-20 w-full max-w-[300px] gap-x-3 overflow-hidden rounded-xl p-2 text-sm transition-all duration-500 hover:translate-x-1 hover:bg-[rgb(226,247,255)]",
						active && "translate-x-1 bg-[rgb(226,247,255)]"
					)}>
					{/* Icon  */}
					<div className='h-11 w-11 self-center rounded-lg bg-[rgb(226,247,255)] flex-center'>
						<Icon className='h-6 w-6 text-primary' aria-hidden='true' />
					</div>

					{/* Label  */}
					<div className='flex flex-1 flex-col justify-center gap-1'>
						<h4 className='transition-custom block text-[15px] font-black leading-[18px] text-gray-400 group-hover:text-gray-500'>
							{label}
						</h4>
						{!!subLabel && (
							<p className='transition-custom leading-4 text-gray-500 group-hover:text-gray-600'>{subLabel}</p>
						)}
					</div>
				</Link>
			)}
		</Menu.Item>
	)
}
