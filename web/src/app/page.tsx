import styles from "./page.module.css";

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
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<h1>Sun Prairie West HS Swim & Dive</h1>
					<h2>Inspiring Lifelong Aquatic Athletes</h2>
				</div>
			</main>
			<footer>
				<div></div>
			</footer>
		</>
	);
}
