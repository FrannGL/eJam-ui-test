import styles from "./styles.module.scss";
import visa_img from "/public/assets/visa.png";
import pay_img from "/public/assets/pay.png";
import paypal_img from "/public/assets/paypal.png";
import mastercard_img from "/public/assets/mastercard.png";
import gpay_img from "/public/assets/gpay.png";
import apple_img from "/public/assets/apple.png";
import amex_img from "/public/assets/amex.png";
import padlock_icon from "/public/icons/padlock.svg";
import Image from "next/image";

const payments_methods = [
	{
		img: visa_img,
		name: "Visa",
	},
	{
		img: pay_img,
		name: "Pay",
	},
	{
		img: paypal_img,
		name: "Paypal",
	},
	{
		img: mastercard_img,
		name: "Mastercard",
	},
	{
		img: gpay_img,
		name: "Gpay",
	},
	{
		img: apple_img,
		name: "Apple",
	},
	{
		img: amex_img,
		name: "Amex",
	},
];

const PaymentMethods = () => {
	return (
		<div className={styles.container}>
			<p className={styles.text}>Free Shipping</p>
			<span>|</span>
			<div className={styles.security}>
				<Image src={padlock_icon} alt='padlock_icon' className={styles.icon} width={50} height={50} />
				<p className={styles.text}>Secure 256-bit SSL encryption.</p>
			</div>
			<span>|</span>
			<div className={styles.img_container}>
				{payments_methods.map((method, index) => (
					<Image key={index} src={method.img} alt={method.name} className={styles.img} width={50} height={50} />
				))}
			</div>
		</div>
	);
};

export default PaymentMethods;
