"use client"

import { type MotionProps, m } from "framer-motion"
import Link, { type LinkProps } from "next/link"

export type MotionLinkProps = MotionProps & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const MotionLink = m(Link)
