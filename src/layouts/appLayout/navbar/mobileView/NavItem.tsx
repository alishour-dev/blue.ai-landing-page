import { Disclosure } from "@headlessui/react"
import Link from "next/link"

import type { NestedLink } from "@/types"

import { navIcons } from "../icons"

export const NavItem = ({ label, href, icon }: NestedLink) => {
	const Icon = navIcons[icon as keyof typeof navIcons]

	return (
		<Disclosure.Button
			as={Link}
			href={href}
			className='transition-custom group ml-3 flex w-max items-center gap-4 rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-400 hover:bg-gray-100 hover:bg-opacity-30 hover:text-primary'>
			<Icon className='transition-custom h-6 w-6 text-gray-400 group-hover:text-primary' aria-hidden='true' />
			{label}
		</Disclosure.Button>
	)
}
