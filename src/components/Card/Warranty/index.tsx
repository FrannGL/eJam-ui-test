import Image from "next/image";
import styles from "./styles.module.scss";
import warranty_logo from "/public/assets/warranty.png";

const Warranty = () => {
	const leyend =
		"If you are not completely thrilled with your Clarifion - We have a 30 day satisfaction guarantee. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!";
	const leyend_remaining_01 = leyend.substring(0, 66);
	const leyend_focus_01 = leyend.substring(67, 98);
	const leyend_remaining_02 = leyend.substring(98);

	return (
		<div className={styles.container}>
			<Image src={warranty_logo} alt='warranty' className={styles.img} />
			<p className={styles.leyend}>
				{leyend_remaining_01} <span>{leyend_focus_01}</span>
				{leyend_remaining_02}
			</p>
		</div>
	);
};

export default Warranty;
