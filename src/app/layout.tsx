import type { Metadata } from "next"
import { Lato } from "next/font/google"

import "./globals.css"
import { AppLayout } from "@/layouts"

const lato = Lato({
	weight: ["900", "700", "400", "300"],
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: {
		default: "Blue.Ai",
		template: `%s | Blue.Ai`,
	},
	description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={lato.className}>
				<AppLayout>{children}</AppLayout>
			</body>
		</html>
	)
}
