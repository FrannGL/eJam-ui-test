import styles from "./styles.module.scss";

interface TitleProps {
	title: string;
}

const Title = ({ title }: TitleProps) => {
	const title_focus_01 = title.substring(0, 13);
	const title_remaining_01 = title.substring(14, 58);
	const title_focus_02 = title.substring(59, 68);
	const title_remaining_02 = title.substring(68, title.length);

	return (
		<h3 className={styles.title}>
			<span className={styles.focus}>{title_focus_01}</span> {title_remaining_01} {"  "}
			<span className={styles.focus}>{title_focus_02}</span> {title_remaining_02}
		</h3>
	);
};

export default Title;
