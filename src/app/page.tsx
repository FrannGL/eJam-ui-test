"use client";
import styles from "./page.module.scss";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Title from "@/components/Title";
import Wizard from "@/components/Wizard";
import Card from "@/components/Card";
import { data } from "@/data/data";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className={styles.main}>
			<Topbar />
			<div className={styles.inner_container}>
				<Navbar />
				<Title title='wait ! your orden in progress.' subtitle='lorem ipsum dolor sit amet, consectetur adipiscing' />
				<Wizard />
				<Card data={data} />
			</div>
			<Footer />
		</main>
	);
}
