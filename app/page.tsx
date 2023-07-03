import Footer from '@components/footer';
import Header from '@components/header';
import Link from 'next/link';

export const runtime = 'edge'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<h1>MTD.org is Under Maintenance</h1>
				<p>
					Apologies for the inconvenience, but MTD.org is undergoing critical maintenance and is currently unavailable.
					Real-time departure information is not available during this update.
					Please check <Link href="https://www.google.com/maps/dir/data=!3m1!4b1!4m5!4m4!1m1!4e1!1m0!3e3?entry=ttu" prefetch={true}>Google Maps</Link> or the <Link href="https://transitapp.com/">Transit App</Link> for <em>scheduled</em> information.
				</p>
				<p>
					We&apos;ll be back with you soon. 
					Follow us on social media for the latest updates.
				</p>
			</main>
			<Footer />
		</>
	)
}
