import styles from "./index.module.css";

export const LoadingPage = () => {
	return (
		<main className={styles.root}>
			<p className={styles["loading-message"]}>ちょっと待ってね</p>
			<img
				className={styles["cats-image"]}
				alt="丸ねこタワー"
				src="cats/catsTower-circle.png"
				height={216}
				width={148}
			/>
		</main>
	);
};