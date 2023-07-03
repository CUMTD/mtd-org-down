import Footer from '@components/footer';
import Header from '@components/header';
import styles from './page.module.css';

export const runtime = 'edge'

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<h1>Hello World</h1>
			</main>
			<Footer />
		</>
	)
}
