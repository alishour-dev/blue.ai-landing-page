"use client"

import { LazyMotion } from "framer-motion"
import dynamic from "next/dynamic"

import { NotificationsContext } from "@/context/notifications"
import { globalData } from "@/public/data"

import { Navbar } from "./navbar"

const { headerData, footerData } = globalData

const Footer = dynamic(() => import("./footer").then((mod) => mod.Footer))

const loadFeatures = () => import("@/lib/framer-motion/features").then((res) => res.domAnimation)

export const AppLayout = ({ children }: { children: React.ReactNode }) => (
	<LazyMotion features={loadFeatures} strict>
		<Navbar {...headerData} />
		<NotificationsContext>{children}</NotificationsContext>
		<Footer {...footerData} />
	</LazyMotion>
)
