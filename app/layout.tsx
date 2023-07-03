import { Overpass } from 'next/font/google';
import './globals.css';

const overpass = Overpass({ subsets: ['latin'] })

const title = 'MTD.org | Under Maintenance';
const description = 'MTD.org is currently under maintenance. Please check back later and refer to the Maps and Schedules Book for more information.';

export const metadata = {
	title,
	description,
	themeColor: '#002f87',
	openGraph: {
		title,
		description
	}
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
