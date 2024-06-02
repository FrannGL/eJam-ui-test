import Image from "next/image";
import styles from "./styles.module.scss";
import avatar_img from "/public/assets/avatar.png";
import star_icon from "/public/icons/star.svg";
import checked_icon from "/public/icons/checked_variant_3.svg";
import { Testimonial } from "@/data/data";

interface TestimonyProps {
	testimonials: Testimonial[];
	qualification: number;
}

const Testimony = ({ testimonials, qualification }: TestimonyProps) => {
	const stars = Array.from({ length: qualification }, (_, index) => (
		<Image key={index} src={star_icon} alt='star' width={20} height={20} className={styles.star} />
	));

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Image src={avatar_img} className={styles.avatar} alt='avatar' width={150} height={150} />
				<div className={styles.wrapper}>
					<span className={styles.qualification_container}>{stars}</span>
					<div className={styles.row}>
						<p className={styles.name}>Ken T.</p>
						{testimonials[0].verified && (
							<span className={styles.verified}>
								<Image src={checked_icon} className={styles.icon} alt='checked' width={20} height={20} />
								verified customer
							</span>
						)}
					</div>
				</div>
			</div>
			<p className={styles.testimonial}>{testimonials[0].testimony}</p>
		</div>
	);
};

export default Testimony;
