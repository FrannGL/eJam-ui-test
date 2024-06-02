import styles from "./styles.module.scss";
import checked_icon from "/public/icons/checked_variant_1.svg";
import truck_icon from "/public/icons/truck.svg";
import heart_icon from "/public/icons/heart.svg";
import checked_variant_icon from "/public/icons/checked_variant_2.svg";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

interface ContentProps {
	icon: string;
	id: number;
	text: string;
}

const bar_content: ContentProps[] = [
	{
		icon: checked_icon,
		id: 1,
		text: "30-day satisfaction guarantee",
	},
	{
		icon: truck_icon,
		id: 2,
		text: "free delivery on orders over $40.00",
	},
	{
		icon: heart_icon,
		id: 3,
		text: "50.000+ happy customers",
	},
	{
		icon: checked_variant_icon,
		id: 4,
		text: "100% money back guarantee",
	},
];

const Topbar = () => {
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

	if (!isWideScreen)
		return (
			<div className={styles.container}>
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					navigation={true}
					modules={[Autoplay, Navigation]}
					className='mySwiper'
				>
					{bar_content.map((item: ContentProps) => (
						<SwiperSlide key={item.id}>
							<div className={styles.bar}>
								<Image src={item.icon} className={styles.icon} alt='icon' />
								<p className={styles.text}>{item.text}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		);

	return (
		<div className={styles.container}>
			<div className={styles.inner_container}>
				<ul className={styles.list_container}>
					{bar_content.map((item: ContentProps) => (
						<li key={item.id} className={styles.bar}>
							<Image src={item.icon} className={styles.icon} alt='icon' />
							<p className={styles.text}>{item.text}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Topbar;
