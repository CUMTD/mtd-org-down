import { Overpass } from 'next/font/google'
import './globals.css'

const overpass = Overpass({ subsets: ['latin'] })

export const metadata = {
	title: 'MTD | Under Maintenance',
	description: 'MTD.org is currently under maintenance. Please check back later and refer to the Maps and Schedules Book for more information.'
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={overpass.className}>{children}</body>
		</html>
	)
}
