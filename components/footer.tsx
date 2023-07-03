import classes from './footer.module.css';
import SocialLink from './socialLink';

export default function Footer() {
	return (
		<footer className={classes.footer}>
			<ul className={classes.socialList}>
				<li>
					<SocialLink logoName="facebook" href="https://facebook.com/rideMTD" />
				</li>
				<li>
					<SocialLink logoName="instagram" href="https://www.instagram.com/ridemtd/" />
				</li>
				<li>
					<SocialLink logoName="twitter" href="https://twitter.com/rideMTD" />
				</li>
			</ul>
		</footer>
	);
}
