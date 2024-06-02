import Image from "next/image";
import styles from "./styles.module.scss";
import checked_icon from "/public/icons/checked_variant_4.svg";

interface CharacteristicsProps {
	list: string[];
}

const Characteristics = ({ list }: CharacteristicsProps) => {
	const listItems = [
		{
			item_remaining: list[0].substring(0, 27),
			item_focus: list[0].substring(28),
		},
		{
			item_remaining: list[1].substring(0, 12),
			item_focus: list[1].substring(13),
		},
		{
			item_focus: list[2].substring(0, 23),
			item_remaining: list[2].substring(23),
		},
	];

	return (
		<ul className={styles.list_container}>
			{listItems.map((feature, index) => (
				<li key={index} className={styles.feature}>
					<Image src={checked_icon} className={styles.icon} alt='icon' width={20} height={20} />
					<p>
						{feature.item_remaining} {"  "}
						<span>{feature.item_focus}</span>
					</p>
				</li>
			))}
		</ul>
	);
};

export default Characteristics;
