import styles from "./page.module.css";
import Image from "next/image";
import spw_logo from "../../public/images/spw-logo.png";

export default function Home() {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<a href="https://sites.google.com/view/sunprairiewestgirlsswim/home">Girls Team</a>
						</li>

						<li>
							<a href="https://sites.google.com/view/sunprairiewestboysswimteam/home">Boys Team</a>
						</li>
					</ul>
				</nav>
			</header>
			<main className={styles.main}>
				<div className={styles.headings}>
					<div className={styles.text_container}>
						<h1>
							Sun Prairie West HS <br className={styles.mobile_break}></br>Swim & Dive
						</h1>
						<h2>Inspiring Lifelong Aquatic Athletes</h2>
					</div>
					<div className={styles.logo_container}>
						<Image className={styles.spw_logo} src={spw_logo} alt="Sun Prairie West Logo" />
					</div>
				</div>
			</main>
			<footer>
				<div className={styles.girls_team_div_img}></div>
				<div className={styles.boys_team_div_img}></div>
			</footer>
		</>
	);
}
