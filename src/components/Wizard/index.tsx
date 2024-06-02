import Image from "next/image";
import styles from "./styles.module.scss";
import checked_filled_icon from "/public/icons/checked_filled.svg";
import { useEffect, useState } from "react";

interface WizardProps {
	id: number;
	icon?: string;
	text: string;
}

const wizard_content: WizardProps[] = [
	{ id: 1, icon: "checked_filled_icon", text: "step 1 : cart review" },
	{ id: 2, icon: "checked_filled_icon", text: "step 2 : checkout" },
	{ id: 3, text: "step 3 : special offer" },
	{ id: 4, text: "step 4 : confirmation" },
];

const trimText = (text: string) => {
	return text.length > 9 ? text.substring(9) : text;
};

const Wizard = () => {
	const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsWideScreen(window.innerWidth >= 1024);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => {
			window.removeEventListener("resize", checkScreenSize);
		};
	}, []);

	return (
		<div className={styles.wizard}>
			{wizard_content.map(step => (
				<div key={step.id} className={styles.step}>
					{step.icon ? (
						<Image src={checked_filled_icon} className={styles.icon} alt='checked filled icon' width={20} height={20} />
					) : (
						<div className={styles.circle}>{step.id}</div>
					)}
					<p className={styles.text}> {!isWideScreen ? trimText(step.text) : step.text} </p>
				</div>
			))}
		</div>
	);
};

export default Wizard;
