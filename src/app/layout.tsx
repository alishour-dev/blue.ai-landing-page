import type { Metadata } from "next"
import { Lato } from "next/font/google"

import { AppLayout } from "@/layouts/appLayout"
import "./globals.css"
import { globalData } from "@/public/data"

const lato = Lato({
	weight: ["900", "700", "400", "300"],
	subsets: ["latin"],
})

// Can use the generateMetadata() unction instead to dynamically fetch Default MetaData
export const metadata: Metadata = globalData.defaultMetaData

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={lato.className} suppressHydrationWarning>
				<AppLayout headerData={globalData?.headerData} footerData={globalData?.footerData}>
					{children}
				</AppLayout>
			</body>
		</html>
	)
}
