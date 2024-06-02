import Image from "next/image";
import styles from "./styles.module.scss";

interface ButtonProps {
	text: string;
	icon?: string;
	type?: string;
}

const Button = ({ text, icon, type }: ButtonProps) => {
	return (
		<button className={type === "confirm" ? styles.btn_confirm : styles.btn_decline}>
			{text}
			{icon && <Image src={icon} alt='arrow_right' className={styles.icon} width={20} height={20} />}
		</button>
	);
};

export default Button;
