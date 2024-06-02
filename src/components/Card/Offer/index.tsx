import Image from "next/image";
import styles from "./styles.module.scss";
import percent_icon from "/public/icons/percent.svg";

interface OfferProps {
	offer: string;
}

const Offer = ({ offer }: OfferProps) => {
	const paragraph_remaining_01 = offer.substring(0, 4);
	const paragraph_focus_01 = offer.substring(5, 7);
	const paragraph_remaining_02 = offer.substring(7, 16);
	const paragraph_focus_02 = offer.substring(17, 36);
	const paragraph_remaining_03 = offer.substring(37, 45);
	const paragraph_focus_03 = offer.substring(46, offer.length);

	return (
		<div className={styles.offer_container}>
			<Image src={percent_icon} className={styles.icon} width={50} height={50} alt='percent_icon' />
			<p className={styles.text}>
				{paragraph_remaining_01} <span>{paragraph_focus_01}</span> {paragraph_remaining_02}{" "}
				<span>{paragraph_focus_02}</span>
				{"  "} {paragraph_remaining_03} {"  "} <span>{paragraph_focus_03}</span>
			</p>
		</div>
	);
};

export default Offer;
