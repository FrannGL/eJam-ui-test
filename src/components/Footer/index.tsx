import Link from "next/link";
import styles from "./styles.module.scss";
import padlock_icon from "/public/icons/padlock_white.svg";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.copyright}>
				<p>Copyright (C) 2023</p>
				<span>|</span>
				<Link href={"https://clarifionsupport@clarifion.com"} target='_blank'>
					clarifionsupport@clarifion.com
				</Link>
			</div>
			<div className={styles.security}>
				<Image src={padlock_icon} className={styles.icon} alt='padlock' width={20} height={20} />
				<p>Secure 256-bit SSL encryption.</p>
			</div>
		</footer>
	);
};

export default Footer;
