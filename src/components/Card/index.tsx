import Image from "next/image";
import styles from "./styles.module.scss";
import { DataProps } from "@/data/data";
import arrow_right_icon from "/public/icons/arrow_right.svg";
import PaymentMethods from "./PaymentsMethods";
import Warranty from "./Warranty";
import Testimony from "./Testimony";
import Title from "./Title";
import Description from "./Description";
import Characteristics from "./Characteristics";
import Offer from "./Offer";
import Button from "./Button";

interface CardDataProps {
	data: DataProps;
}

const Card = ({ data }: CardDataProps) => {
	return (
		<section className={styles.card}>
			<div className={styles.column_one}>
				<Title title={data.title} />
				<Description
					image={data.image_02}
					subtitle={data.subtitle}
					price={data.price}
					offer={data.offer}
					qualification={data.qualification}
					stock={data.stock}
					description={data.description}
				/>
				<Characteristics list={data.list} />
				<Offer offer={data.paragraph} />
				<Button type='confirm' icon={arrow_right_icon} text={data.button_confirm} />
				<PaymentMethods />
				<Button text={data.button_decline} />
				<div className={styles.main_image_container}>
					<Image src={data.image_01} className={styles.main_image} alt='image' width={300} height={300} />
				</div>
				<Warranty />
			</div>
			<div className={styles.column_two}>
				<Image src={data.image_01} className={styles.image} alt='image' width={600} height={600} />
				<Testimony qualification={data.qualification} testimonials={data.testimonials} />
			</div>
		</section>
	);
};

export default Card;
