import styles from "./styles.module.scss";

interface TitleProps {
	title: string;
	subtitle: string;
}

const Title = ({ title, subtitle }: TitleProps) => {
	return (
		<div className={styles.container}>
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
		</div>
	);
};

export default Title;
