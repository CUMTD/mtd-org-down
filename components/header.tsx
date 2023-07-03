import Logo from '@components/logo';
import classes from './header.module.css';

export default function Header() {
	return <header className={classes.header}>
		<Logo />
	</header>
}
