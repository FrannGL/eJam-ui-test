import Image from "next/image";
import styles from "./styles.module.scss";
import point_icon from "/public/icons/point.svg";
import star_icon from "/public/icons/star.svg";

interface DescriptionProps {
	image: string;
	subtitle: string;
	price: number;
	offer: number;
	qualification: number;
	stock: number;
	description: string;
}

const Description = ({ image, subtitle, price, offer, qualification, stock, description }: DescriptionProps) => {
	const stars = Array.from({ length: qualification }, (_, index) => (
		<Image key={index} src={star_icon} alt='star' width={20} height={20} className={styles.star} />
	));

	return (
		<>
			<div className={styles.main_content}>
				<Image src={image} className={styles.image} alt='image' width={100} height={100} />
				<div className={styles.description_container}>
					<div className={styles.titles}>
						<p className={styles.subtitle}>{subtitle}</p>
						<p className={styles.price}>
							<span>${offer}</span>${price}
						</p>
					</div>
					<div className={styles.qualification_container}>{stars}</div>
					<div className={styles.stock_container}>
						<Image src={point_icon} className={styles.icon} alt='point_icon' />
						<p className={styles.stock}>
							<span>
								{stock}
								{"  "}
							</span>
							left in Stock
						</p>
					</div>
					<div className={styles.description_small}>{description}</div>
				</div>
			</div>
			<p className={styles.description}>{description}</p>
		</>
	);
};

export default Description;
