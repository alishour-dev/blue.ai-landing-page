"use client"

import { LazyMotion } from "framer-motion"
import dynamic from "next/dynamic"

import { NotificationsContext } from "@/context/notifications"
import type { GlobalDataProps } from "@/public/data"

import { Navbar } from "./navbar"

const Footer = dynamic(() => import("./footer").then((mod) => mod.Footer))

const loadFeatures = () => import("@/lib/framer-motion/features").then((res) => res.domAnimation)

interface AppLayoutData extends Pick<GlobalDataProps, "headerData" | "footerData"> {
	children: React.ReactNode
}

export function AppLayout({ children, headerData, footerData }: AppLayoutData) {
	return (
		<LazyMotion features={loadFeatures} strict>
			<Navbar {...headerData} />
			<NotificationsContext>{children}</NotificationsContext>
			<Footer {...footerData} />
		</LazyMotion>
	)
}
