import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "/public/assets/logo_clarifion.svg";
import logo_mcAfee from "/public/assets/McAfee_Secure.png";
import logo_norton from "/public/assets/norton_antivirus.png";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<header className={styles.header}>
				<Link href={"/"} className={styles.link}>
					<Image src={logo} className={styles.main_logo} width={200} height={80} alt='logo' />
				</Link>
				<div className={styles.partners}>
					<Image src={logo_mcAfee} className={styles.logo} width={200} height={80} alt='logo_mcAfee' />
					<Image src={logo_norton} className={styles.logo} width={200} height={80} alt='logo_norton' />
				</div>
			</header>
		</nav>
	);
};

export default Navbar;
