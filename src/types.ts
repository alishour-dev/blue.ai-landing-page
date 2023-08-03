import type { ImageProps } from "next/image"

export declare type IconType = (props: React.SVGAttributes<SVGElement>) => JSX.Element

export type Size = "compact" | "sm" | "md" | "lg" | "xl"

export declare type LinkType = Record<"label" | "href", string>

export declare interface NestedLink extends LinkType {
	subLabel?: string
	icon: string
}

export declare type colorType = React.CSSProperties["color"]

export declare type ImgPropsWithoutDimensions = Omit<ImageProps, "width" | "height">

export declare type FlexDirection = "flex-row" | "flex-row-reverse"
